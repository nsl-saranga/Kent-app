import './SideBar.css'

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';

const SideBar=()=>{

    const [productTypes, setProductTypes] = useState(null);
   
    useEffect(() => {
      const loadProductTypeInfo = async () => {
        const response = await axios.get(`/api/getProductTypes`);
        setProductTypes(response.data);
      };
    
      loadProductTypeInfo();
    }, []);
    
    return (
        <div className="container-categories">
          <h3 className="topic">Categories</h3>
          <ul>
            {productTypes ? (
              productTypes.map((productType) => (
                <li key={productType.categoryName}>
              <Link key={productType.categoryName} to={`/${productType.categoryName}`}>
                {productType.categoryName}
              </Link>
            </li>
              ))
            ) : (
              <li>Loading product types...</li>
            )}
          </ul>
        </div>
      );
      
}

export default SideBar