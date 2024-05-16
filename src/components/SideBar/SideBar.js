import './SideBar.css'
import Products from '../../Data/data';
import { Link } from "react-router-dom";

const SideBar=()=>{
    return(
        <div className="container-categories">
            <h3 className="topic">Categories</h3>
            <ul>
                {Products.map(product=>(<li><Link key={product.type} to={`/${product.type}`}>{product.type}</Link></li>))}
            </ul>
        </div>
    )
}

export default SideBar