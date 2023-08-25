import React,{useState,useEffect} from 'react';//as this function works with JSK....

import 'bootstrap/dist/css/bootstrap.min.css';
import FrontPage from '../Pages/FrontPage/FrontPage';


/*const App=()=>
{
    const[productState,setProductState]=useState([])
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then((productsArray)=>
            {
                const newProductsState=productsArray.map((product)=> {return product.title})
                setProductState(newProductsState)
            })
            
    },[])
    return(
    <div>
        <CounterBtn incrementBy={5} backColor={"white"}/>
        <CounterBtn incrementBy={1} backColor={"black"}/>
        <SearchBar searchItems={productState}/>
        
        <Button>Hello World</Button>
    </div>
    ) 
}*/

const App=()=>
{
   return(
   <FrontPage/>
   )
}

export default App