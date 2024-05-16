import yoghurtImage from '../assets/yoghurt.jpg';
import drinkImage from '../assets/drink.jpg';
import curdImage from '../assets/curd.jpg';
import creamImage from '../assets/icecream.jpg';

const Products=[
    {
        type:"Yogurt",
        flavours:[],
        Volume:[],
        products:[
            {
                name:"Jelly yoghurt",
                price:"Rs.90",
                img:yoghurtImage,
                rating:0
            },
            {
                name:"Yoghurt",
                price:"Rs.85",
                img:yoghurtImage,
                rating:2
            }
        ]
    },
    {
        type:"Yogurt Drink",
        img: "../../assets/drink.jpg",
        flavours:["Vanilla", "Chocolate", "Strawberry"],
        Volume:["100 ml", "500 ml", "1 l"],
        products:[
            {
                name:"Vanilla 100 ml Yoghurt Drink",
                price:"Rs.150",
                img:drinkImage,
                rating:5
            },
            {
                name:"Vanilla 100 ml Strawberry Drink",
                price:"Rs.190",
                img:drinkImage,
                rating:4
            },
            {
                name:"Chocolate 100 ml Yoghurt Drink",
                price:"Rs.190",
                img:drinkImage,
                rating:2
            },
            {
                name:"Strawberry 1 l Yoghurt Drink",
                price:"Rs.150",
                img:drinkImage,
                rating:0
            },
        ]
    },
    {
        type:"Ice Cream",
        img: "../../assets/icecream.jpg",
        flavours:["Vanilla", "Chocolate", "Strawberry", "Mango"],
        Volume:["100 ml", "500 ml", "1 l", "5 l"],
        products:[
            {
                name:"Vanilla 100 ml Ice Cream",
                price:"Rs.150",
                img:creamImage,
                rating:0
            },
            {
                name:"Strawberry 100 ml Ice cream",
                price:"Rs.190",
                img:creamImage,
                rating:4
            },
            {
                name:"Chocolate 100 ml Ice Cream",
                price:"Rs.190",
                img:creamImage,
                rating:5
            },
            {
                name:"Strawberry 1 l Ice Cream",
                price:"Rs.150",
                img:creamImage,
                rating:4
            },
        ]
    },
    {
        type:"Curd",
        img: "../../assets/curd.jpg",
        flavours:[],
        Volume:["100 ml", "500 ml", "1 l", "5l"],
        products:[
            {
                name:"100 ml Curd",
                price:"Rs.150",
                img:curdImage,
                rating:3
            },
            {
                name:"500 ml Curd",
                price:"Rs.190",
                img:curdImage,
                rating:3
            },
            {
                name:"1 l Curd",
                price:"Rs.190",
                img:curdImage,
                rating:2
            },
        ]
    }
];

export default Products;
