import './Card.css'
import yoghurtImage from '../../assets/yoghurt.jpg'
const Card=()=>{
    return(
        <div class="card">
            <img src={yoghurtImage} alt="Denim Jeans"></img>
            <h3>Tailored Jeans</h3>
            <p class="price">$19.99</p>
            <p><button>Add to Cart</button></p>
        </div>  
    )
    
}

export default Card