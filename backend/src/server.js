import express from 'express'
import { db, connectToDb } from './data.js';

const app = express();
app.use(express.json());

app.get('/api/getProductTypes', async (req, res) => {
  try {
    if (!db) {
      throw new Error('Database connection not established');
    }
    const categories = await db.collection("Products").distinct("type");
    res.json(categories);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  } 
});

app.get('/api/getProducts/:productType', async (req, res) => {
  const { productType } = req.params;

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

connectToDb(()=>
  {
      app.listen(8000, () => {
      console.log("Server is listening on port 8000");
      });
  })
  
