import { useState } from 'react';
import {useLocation, useNavigate} from 'react-router-dom'; 
import NavBar from '../../Components/NavBar/NavBar';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import { FaShoppingCart, FaStar} from 'react-icons/fa';
import './ViewProductPage.css';
import Review from '../../Components/Review/Review';
import NumericUpDown from '../../Components/NumericUpDown/NumericUpDown';

const ViewProductsPage  = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { product } = location.state || {};
    const[showReviews, setShowReviws]=useState(false)
    const[viewReviewText, setviewReviewtext]=useState('Click here to view reviews')


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


    if (product) {
        const starRating = Math.round(product.rating);
        
        return (
        <>  
            <NavBar value=""/>
            <div className='page-content-view'>
                <div className='prduct-details-container'>
                    <div className='product-details-column product-column-1'>
                        <h3>{product.name}</h3>
                        <img src={product.img} alt={product.name}></img>
                        <div className='stars-collection'>
                                {[...Array(5)].map((star, index) => (
                                    <FaStar key={index} size={25} color={index < starRating ? '#ffc107' : '#e4e5e9'} />
                                ))}
                        </div>
                        <div className="view-reviws-div" onClick={toggleReviews}>{viewReviewText}</div>
                    </div>
                    <div className='product-details-column product-column-2'>
                        
                        <button className='card-btn'> <FaShoppingCart className='card-btn-icon' />
                            Add to Cart</button>
                        <br></br>
                        <NumericUpDown stock={product.stock}/>
                        <p>{product.description}</p>
                        <hr className="styled-hr" />
                        <h5>Price : {product.price}</h5>
                        <h5 style={{ color: product.price < 0 ? 'red' : 'green' }}>
                            {product.price < 0 ? "Out Of Stock" : "In Stock"}
                        </h5>
                    </div>
                </div>
               
                {showReviews && (
                        <div className='prduct-details-container all-reviews'>
                             {product.reviews.map((review, index) => (
                                <Review key={index} review={review} />
                                ))}
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
