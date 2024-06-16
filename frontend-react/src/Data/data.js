import yoghurtImage from '../assets/yoghurt.jpg';
import drinkImage from '../assets/drink.jpg';
import curdImage from '../assets/curd.jpg';
import creamImage from '../assets/icecream.jpg';

const Products=[
    {
        type:"Yogurt",
        products:[
            {
                name:"Jelly yoghurt",
                description:"snnn s sds sds eff  wsw qwq  zxxs xxx s as asa df d efr tt ge  d sc ",
                price:"Rs.90",
                img:"https://firebasestorage.googleapis.com/v0/b/kent-app-9a936.appspot.com/o/yoghurt.jpg?alt=media&token=32205b46-7c65-430f-afb3-6e044109fa6d",
                rating:0,
                reviews:["dsds","sdsds","sdsds"],
                stock:2
            },
            {
                name:"Yoghurt",
                description:"snnn s sds sds eff  wsw qwq  zxxs xxx s as asa df d efr tt ge  d sc ",
                price:"Rs.85",
                img:"https://firebasestorage.googleapis.com/v0/b/kent-app-9a936.appspot.com/o/yoghurt.jpg?alt=media&token=32205b46-7c65-430f-afb3-6e044109fa6d",
                rating:2,
                reviews:["dsds","sdsds","sdsds"],
                stock:2
            }
        ]
    },
    {
        type:"Yogurt Drink",
        products:[
            {
                name:"Vanilla 100 ml Yoghurt Drink",
                description:"snnn s sds sds eff  wsw qwq  zxxs xxx s as asa df d efr tt ge  d sc ",
                price:"Rs.150",
                img:"https://firebasestorage.googleapis.com/v0/b/kent-app-9a936.appspot.com/o/drink.jpg?alt=media&token=82a23137-cf63-468c-8dc9-2afb0ab6e1cf",
                rating:5,
                reviews:["dsdsdsdssds","sdsds","sdsds"],
                stock:2
            },
            {
                name:"Vanilla 100 ml Strawberry Drink",
                description:"snnn s sds sds eff  wsw qwq  zxxs xxx s as asa df d efr tt ge  d sc ",
                price:"Rs.190",
                img:"https://firebasestorage.googleapis.com/v0/b/kent-app-9a936.appspot.com/o/drink.jpg?alt=media&token=82a23137-cf63-468c-8dc9-2afb0ab6e1cf",
                rating:4,
                reviews:["dszzzzzzzzzzzzzzzds","sdsds","sdsds"],
                stock:2
            },
            {
                name:"Chocolate 100 ml Yoghurt Drink",
                description:"snnn s sds sds eff  wsw qwq  zxxs xxx s as asa df d efr tt ge  d sc ",
                price:"Rs.190",
                img:"https://firebasestorage.googleapis.com/v0/b/kent-app-9a936.appspot.com/o/drink.jpg?alt=media&token=82a23137-cf63-468c-8dc9-2afb0ab6e1cf",
                rating:2,
                reviews:["dsds","sdrrrrrrrrrsds","sdsds"],
                stock:2
            },
            {
                name:"Strawberry 1 l Yoghurt Drink",
                description:"snnn s sds sds eff  wsw qwq  zxxs xxx s as asa df d efr tt ge  d sc ",
                price:"Rs.150",
                img:"https://firebasestorage.googleapis.com/v0/b/kent-app-9a936.appspot.com/o/drink.jpg?alt=media&token=82a23137-cf63-468c-8dc9-2afb0ab6e1cf",
                rating:0,
                reviews:["dsds","sdsds","sdsdoos"],
                stock:2
            },
        ]
    },
    {
        type:"Ice Cream",
        products:[
            {
                name:"Vanilla 100 ml Ice Cream",
                description:"snnn s sds sds eff  wsw qwq  zxxs xxx s as asa df d efr tt ge  d sc ",
                price:"Rs.150",
                img:"https://firebasestorage.googleapis.com/v0/b/kent-app-9a936.appspot.com/o/icecream.jpg?alt=media&token=897cc5f7-e86d-476b-99b5-5dd4074510c0",
                rating:0,
                reviews:["duusds","sdsds","sdsds"],
                stock:2
            },
            {
                name:"Strawberry 100 ml Ice cream",
                description:"snnn s sds sds eff  wsw qwq  zxxs xxx s as asa df d efr tt ge  d sc ",
                price:"Rs.190",
                img:"https://firebasestorage.googleapis.com/v0/b/kent-app-9a936.appspot.com/o/icecream.jpg?alt=media&token=897cc5f7-e86d-476b-99b5-5dd4074510c0",
                rating:4,
                reviews:["dsiijkds","sdsds","sdsds"],
                stock:2
            },
            {
                name:"Chocolate 100 ml Ice Cream",
                description:"snnn s sds sds eff  wsw qwq  zxxs xxx s as asa df d efr tt ge  d sc ",
                price:"Rs.190",
                img:"https://firebasestorage.googleapis.com/v0/b/kent-app-9a936.appspot.com/o/icecream.jpg?alt=media&token=897cc5f7-e86d-476b-99b5-5dd4074510c0",
                rating:5,
                reviews:["dsoooods","sdsds","sdsds"],
                stock:2
            },
            {
                name:"Strawberry 1 l Ice Cream",
                description:"snnn s sds sds eff  wsw qwq  zxxs xxx s as asa df d efr tt ge  d sc ",
                price:"Rs.150",
                img:"https://firebasestorage.googleapis.com/v0/b/kent-app-9a936.appspot.com/o/icecream.jpg?alt=media&token=897cc5f7-e86d-476b-99b5-5dd4074510c0",
                rating:4,
                reviews:["dsnnds","sdsds","sdsds"],
                stock:2
            },
        ]
    },
    {
        type:"Curd",
        products:[
            {
                name:"100 ml Curd",
                description:"snnn s sds sds eff  wsw qwq  zxxs xxx s as asa df d efr tt ge  d sc ",
                price:"Rs.150",
                img:"https://firebasestorage.googleapis.com/v0/b/kent-app-9a936.appspot.com/o/curd.jpg?alt=media&token=af44e3a1-9d5d-4f50-90c2-9775ef1b087b",
                rating:3,
                reviews:["dsds","sdsds0oo","sdsds"],
                stock:2
            },
            {
                name:"500 ml Curd",
                description:"snnn s sds sds eff  wsw qwq  zxxs xxx s as asa df d efr tt ge  d sc ",
                price:"Rs.190",
                img:"https://firebasestorage.googleapis.com/v0/b/kent-app-9a936.appspot.com/o/curd.jpg?alt=media&token=af44e3a1-9d5d-4f50-90c2-9775ef1b087b",
                rating:3,
                reviews:["dsds","sdsds","sdsuuuds"],
                stock:2
            },
            {
                name:"1 l Curd",
                description:"snnn s sds sds eff  wsw qwq  zxxs xxx s as asa df d efr tt ge  d sc ",
                price:"Rs.190",
                img:"https://firebasestorage.googleapis.com/v0/b/kent-app-9a936.appspot.com/o/curd.jpg?alt=media&token=af44e3a1-9d5d-4f50-90c2-9775ef1b087b",
                rating:2,
                reviews:["dsds","sdsds","sdsdsooooo"],
                stock:2
            },
        ]
    }
];

export default Products;
