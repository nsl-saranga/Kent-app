import './Card.css';
import yoghurtImage from '../../assets/yoghurt.jpg';
import Products from '../../Data/data';

const Card = ({product}) => {
    // Filter products that contain the specified flavour
    // const filteredProducts = Products.filter(product =>
    //     product.products.some(productName => productName.includes(flavour))
    // );

    const handleClickEvent=()=>{
        let category = "unidentified";
        for (const cat of Products) {
            for (const pro of cat.products) {
              if (pro.name.toLowerCase() === product.name.toLowerCase()) {
                category=cat.type;
              }
            }
          }

        window.location.href = `/${category}/${product.name}`;
        };
          
    return (
        <div className="card-container">
           
                <div className="custom_card">
                <img src={product.img} alt={product.name}></img>
                    <h6>{product.name}</h6>
                    <p className="price">{product.price}</p>
                    <p><button onClick={handleClickEvent}>Add to Cart</button></p>
                </div>
        </div>
    );
}

export default Card;
