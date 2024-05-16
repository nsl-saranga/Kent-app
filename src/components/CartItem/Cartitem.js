import logoImage from '../../assets/yoghurt.jpg';
import NumericUpDown from '../NumericUpDown/NumericUpDown';
import './CartItem.css'

const CartItem=()=>{
    return(
       <div className='cart-item'>
         <div className='cart-item-image'>
            <img src={logoImage}></img>
            <h5>yoghutrt asj aa</h5>
         </div>
         <div className='cart-item-details'>
            <NumericUpDown/>
            <h6 className='card-item-total'>Total : Rs. 800</h6>
            <button type="button" class="btn btn-danger btn-remove-item">Remove Item</button>
         </div>

       </div>
    )
}

export default CartItem