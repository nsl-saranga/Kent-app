import { useState } from 'react';

import { useParams} from 'react-router-dom'; 
import Products from '../../Data/data';
import NavBar from '../../Components/NavBar/NavBar';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import { FaShoppingCart, FaStar} from 'react-icons/fa';
import './ViewProductPage.css';
import Review from '../../Components/Review/Review';
import NumericUpDown from '../../Components/NumericUpDown/NumericUpDown';


const ViewProductsPage  = () => {
    const[showReviews, setShowReviws]=useState(false)
    const[viewReviewText, setviewReviewtext]=useState('Click here to view reviews')

    const { product, category } = useParams();
    const selectedCategory = Products.find(cat => cat.type === category);

   
    const toggleReviews=()=>{
        if(showReviews)
            {
                setShowReviws(false)
                setviewReviewtext("Click here to show reviews")
            }
        else{
            setShowReviws(true)
            setviewReviewtext("Click here to hide reviews")

        }
           
    }

    let selectedProduct;
    if (selectedCategory) {
        selectedProduct = selectedCategory.products.find(prod => prod.name === product);
    }

    if (selectedProduct) {
        const starRating = Math.round(selectedProduct.rating);
        return (
        <>  
            <NavBar value=""/>
            <div className='page-content-view'>
                <div className='prduct-details-container'>
                    <div className='product-details-column product-column-1'>
                        <h3>{selectedProduct.name}</h3>
                        <img src={selectedProduct.img} alt={product.name}></img>
                        <div className='stars-collection'>
                                {[...Array(5)].map((star, index) => (
                                    <FaStar key={index} size={25} color={index < starRating ? '#ffc107' : '#e4e5e9'} />
                                ))}
                        </div>
                        <a href="#" className="view-reviws-div" onClick={toggleReviews}>{viewReviewText}</a>
                    </div>
                    <div className='product-details-column product-column-2'>
                        <button className='card-btn'> <FaShoppingCart className='card-btn-icon' />
                            Add to Cart</button>
                        <br></br>
                        <NumericUpDown/>
                        <p>Prices displayed are online prices. In-store prices might differ.Prices displayed are online prices. In-store prices might differPrices displayed are online prices. In-store prices might differPrices displayed are online prices. In-store prices might differ</p>
                        <hr className="styled-hr" />
                        <h5>Price : {selectedProduct.price}</h5>
                        <h5 className='stock-status'>In stock</h5>
                    </div>
                </div>
                {showReviews && (
                        <div className='prduct-details-container all-reviews'>
                            <Review/>
                            <Review/>
                            <Review/>
                            <Review/>
                            <Review/>
                            <Review/>
                            <Review/>
                            <Review/>
                        </div>
                    )}
            </div>
        </>
        );
    } 
    else  {
        return (
          <NotFoundPage/>
        );
  }
};

export default  ViewProductsPage ;
