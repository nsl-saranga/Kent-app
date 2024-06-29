import express from 'express'
import connectToDb from './config/data.js'
import User from './models/User.js'
import Category from './models/Category.js'
import Product from './models/Product.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors())

const SECRET_KEY = process.env.SECRET_KEY;

connectToDb()

app.post('/api/register', async (req, res) => {
  const {email,lastName,firstName,password,confirmPassword} = req.body;

  try {

    // Server-side validation: Check if passwords match
    if (password !== confirmPassword) {
      return res.status(400).json({ error: 'Passwords do not match' });
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ error: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ email,firstName, lastName, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/api/getProductTypes', async (req, res) => {
  try {
    const categories = await Category.find({}, "categoryName");
    res.json(categories);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  } 
});

// Login User
app.post('/api/login', async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ error: 'Invalid email' });
      }
  
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(400).json({ error: 'Invalid password' });
      }
  
      const token = jwt.sign({ id: user._id, role: user.role }, SECRET_KEY, { expiresIn: '1h' });
      res.json({ token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
app.get('/api/getProducts/:productType', async (req, res) => {
  const { productType } = req.params;

  try {
    // Step 1: Find the category ID based on the category name
    const category = await Category.findOne({ categoryName: productType });

    if (!category) {
      return res.status(404).json({ message: 'Product category not found' });
    }

    const categoryId = category._id;

    // Step 2: Query products based on the category ID
    const products = await Product.find({ category: categoryId });

    if (products.length === 0) {
      return res.status(404).json({ message: 'No products found for this category'+ String(categoryId) });
    }

    // Step 3: Send the products as a response
    res.json(products);

  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.get('/api/searchProducts', async (req, res) => {
  const { searchInput } = req.query;

  try {
    if (!db) {
      throw new Error('Database connection not established');
    }
    const searchProducts = await db.collection('Products').aggregate([
      { $unwind: "$products" },
      { 
        $match: { 
          $or: [
            { "products.name": { $regex: searchInput, $options: 'i' } },
            { "products.description": { $regex: searchInput, $options: 'i' } }
          ]
        }
      },
      { 
        $project: {
          _id: 0,
          name: "$products.name",
          description: "$products.description",
          price: "$products.price",
          img: "$products.img",
          rating: "$products.rating",
          reviews: "$products.reviews",
          stock: "$products.stock"
        } 
      }
    ]).toArray();

    res.json(searchProducts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  } 
});

app.get('/api/getProductType/:product', async (req, res) => {
  const { product } = req.params;

  try {
    
    // Find products by type (using projection for efficiency)
    const products = await db.collection('Products').find({ type: productType }).project({ _id: 0, products: 1 }).toArray(); // Exclude _id and only include products array

    if (products.length > 0) {
      res.json(products[0].products); // Extract the products array from the first document
    } else {
      res.status(404).json({ message: 'Product type not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  } 
});

app.listen(8000, () => {
  console.log('Server is listening on port 8000');
});
