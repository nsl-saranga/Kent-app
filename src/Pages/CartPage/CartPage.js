import { useState } from 'react';

import { useParams} from 'react-router-dom'; 
import Products from '../../Data/data';
import NavBar from '../../Components/NavBar/NavBar';
import './CartPage.css';
import CartItem from '../../Components/CartItem/Cartitem';



const CartPage  = () => {
    return(
        <>
        <NavBar value=""/>
            <div className='page-content-cart'>
                <div className='shopping-cart'>
                <CartItem/>
                <hr className="styled-hr" />
                <CartItem/>
                <hr className="styled-hr" />
                <CartItem/>
                <hr className="styled-hr" />
                <CartItem/>
                <hr className="styled-hr" />
                <div className='checkout-details'>
                    <h4>SubTotal : Rs. 450</h4>
                    <button type="button" class="btn btn-success">Checkout</button>
                </div>

                </div>
                
                
               
            </div>
        </>
    )
};

export default  CartPage ;
