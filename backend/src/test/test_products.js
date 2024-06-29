import mongoose from 'mongoose';
import connectToDb from './../config/data.js'


connectToDb()

const ProductSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
    stock: { type: Number, required: true },
    img: { type: String, required: true },
});

const Product = mongoose.model('Product', ProductSchema, 'products'); 


// Array of products to insert
const productsToInsert = [
    {
        name:"Jelly yoghurt",
        description:"snnn s sds sds eff  wsw qwq  zxxs xxx s as asa df d efr tt ge  d sc ",
        price:90.00,
        category: new mongoose.Types.ObjectId("66757f09dab0ef80f10ad270"),
        stock:2,
        img:"https://firebasestorage.googleapis.com/v0/b/kent-app-9a936.appspot.com/o/yoghurt.jpg?alt=media&token=32205b46-7c65-430f-afb3-6e044109fa6d",
    },
    {
        name:"Yoghurt",
        description:"snnn s sds sds eff  wsw qwq  zxxs xxx s as asa df d efr tt ge  d sc ",
        price:85.00,
        category: new mongoose.Types.ObjectId("66757f09dab0ef80f10ad270"),
        stock:2,
        img:"https://firebasestorage.googleapis.com/v0/b/kent-app-9a936.appspot.com/o/yoghurt.jpg?alt=media&token=32205b46-7c65-430f-afb3-6e044109fa6d",
    },

    {
        name:"Vanilla 100 ml Yoghurt Drink",
        description:"snnn s sds sds eff  wsw qwq  zxxs xxx s as asa df d efr tt ge  d sc ",
        price:150,
        category: new mongoose.Types.ObjectId("66757f09dab0ef80f10ad273"),
        stock:2,
        img:"https://firebasestorage.googleapis.com/v0/b/kent-app-9a936.appspot.com/o/drink.jpg?alt=media&token=82a23137-cf63-468c-8dc9-2afb0ab6e1cf",     
        
    },
    {
        name:"Vanilla 100 ml Strawberry Drink",
        description:"snnn s sds sds eff  wsw qwq  zxxs xxx s as asa df d efr tt ge  d sc ",
        price:190,
        category: new mongoose.Types.ObjectId("66757f09dab0ef80f10ad273"),
        stock:2,
        img:"https://firebasestorage.googleapis.com/v0/b/kent-app-9a936.appspot.com/o/drink.jpg?alt=media&token=82a23137-cf63-468c-8dc9-2afb0ab6e1cf",
    },
    {
        name:"Chocolate 100 ml Yoghurt Drink",
        description:"snnn s sds sds eff  wsw qwq  zxxs xxx s as asa df d efr tt ge  d sc ",
        price:190,
        img:"https://firebasestorage.googleapis.com/v0/b/kent-app-9a936.appspot.com/o/drink.jpg?alt=media&token=82a23137-cf63-468c-8dc9-2afb0ab6e1cf",
        category: new mongoose.Types.ObjectId("66757f09dab0ef80f10ad273"),
        stock:2
    },
    {
        name:"Strawberry 1 l Yoghurt Drink",
        description:"snnn s sds sds eff  wsw qwq  zxxs xxx s as asa df d efr tt ge  d sc ",
        price:150,
        category: new mongoose.Types.ObjectId("66757f09dab0ef80f10ad273"),
        img:"https://firebasestorage.googleapis.com/v0/b/kent-app-9a936.appspot.com/o/drink.jpg?alt=media&token=82a23137-cf63-468c-8dc9-2afb0ab6e1cf",
        stock:2
    },

    {
        name:"Vanilla 100 ml Ice Cream",
        description:"snnn s sds sds eff  wsw qwq  zxxs xxx s as asa df d efr tt ge  d sc ",
        price:150,
        category: new mongoose.Types.ObjectId("66757f09dab0ef80f10ad271"),
        img:"https://firebasestorage.googleapis.com/v0/b/kent-app-9a936.appspot.com/o/icecream.jpg?alt=media&token=897cc5f7-e86d-476b-99b5-5dd4074510c0",
        stock:2
    },
    {
        name:"Strawberry 100 ml Ice cream",
        description:"snnn s sds sds eff  wsw qwq  zxxs xxx s as asa df d efr tt ge  d sc ",
        price:190,
        category: new mongoose.Types.ObjectId("66757f09dab0ef80f10ad271"),
        img:"https://firebasestorage.googleapis.com/v0/b/kent-app-9a936.appspot.com/o/icecream.jpg?alt=media&token=897cc5f7-e86d-476b-99b5-5dd4074510c0",
       
        stock:2
    },
    {
        name:"Chocolate 100 ml Ice Cream",
        description:"snnn s sds sds eff  wsw qwq  zxxs xxx s as asa df d efr tt ge  d sc ",
        price:190,
        category: new mongoose.Types.ObjectId("66757f09dab0ef80f10ad271"),
        img:"https://firebasestorage.googleapis.com/v0/b/kent-app-9a936.appspot.com/o/icecream.jpg?alt=media&token=897cc5f7-e86d-476b-99b5-5dd4074510c0",
       
        stock:2
    },
    {
        name:"Strawberry 1 l Ice Cream",
        description:"snnn s sds sds eff  wsw qwq  zxxs xxx s as asa df d efr tt ge  d sc ",
        price:150,
        category: new mongoose.Types.ObjectId("66757f09dab0ef80f10ad271"),
        img:"https://firebasestorage.googleapis.com/v0/b/kent-app-9a936.appspot.com/o/icecream.jpg?alt=media&token=897cc5f7-e86d-476b-99b5-5dd4074510c0",
       
        stock:2
    },

    {
        name:"100 ml Curd",
        description:"snnn s sds sds eff  wsw qwq  zxxs xxx s as asa df d efr tt ge  d sc ",
        price:150,
        category:new mongoose.Types.ObjectId("66757f09dab0ef80f10ad272"),
        img:"https://firebasestorage.googleapis.com/v0/b/kent-app-9a936.appspot.com/o/curd.jpg?alt=media&token=af44e3a1-9d5d-4f50-90c2-9775ef1b087b",
       
        stock:2
    },
    {
        name:"500 ml Curd",
        description:"snnn s sds sds eff  wsw qwq  zxxs xxx s as asa df d efr tt ge  d sc ",
        price:190,
        category: new mongoose.Types.ObjectId("66757f09dab0ef80f10ad272"),
        img:"https://firebasestorage.googleapis.com/v0/b/kent-app-9a936.appspot.com/o/curd.jpg?alt=media&token=af44e3a1-9d5d-4f50-90c2-9775ef1b087b",
       
        stock:2
    },
    {
        name:"1 l Curd",
        description:"snnn s sds sds eff  wsw qwq  zxxs xxx s as asa df d efr tt ge  d sc ",
        price:190,
        category:new mongoose.Types.ObjectId("66757f09dab0ef80f10ad272"),
        img:"https://firebasestorage.googleapis.com/v0/b/kent-app-9a936.appspot.com/o/curd.jpg?alt=media&token=af44e3a1-9d5d-4f50-90c2-9775ef1b087b",
      
        stock:2
    },
  ];
  
  // Insert many products
  Product.insertMany(productsToInsert)
    .then(products => {
      console.log('Products inserted:', products);
    })
    .catch(error => {
      console.error('Error inserting products:', error);
    })
    .finally(() => {
      mongoose.disconnect(); // Close the connection after operations are done
    });
