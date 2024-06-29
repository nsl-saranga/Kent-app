import './Card.css';
import { useNavigate } from 'react-router-dom';

const Card = ({product}) => {
    // Filter products that contain the specified flavour
    // const filteredProducts = Products.filter(product =>
    //     product.products.some(productName => productName.includes(flavour))
    // );
    const navigate = useNavigate();

    const handleClick = () => {
      navigate(`/${product.name}/details`, { state: { product } });
    };
          
    return (
        <div className="card-container">
           
                <div className="custom_card">
                <img src={product.img} alt={product.name}></img>
                    <h6>{product.name}</h6>
                    <p className="price">{product.price}</p>
                    <p><button onClick={handleClick}>Add to Cart</button></p>
                </div>
        </div>
    );
}

export default Card;
