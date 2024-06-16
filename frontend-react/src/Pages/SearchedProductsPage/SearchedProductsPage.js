import React, { useState, useEffect } from 'react';
import SideBar from '../../Components/SideBar/SideBar';
import Card from '../../Components/Card/Card';
import './SearchedProductsPage.css';
import axios from 'axios';
import NavBar from '../../Components/NavBar/NavBar';
import { useLocation } from 'react-router-dom';

const SearchedProductsPage = () => {
  const location = useLocation();
  const urlParams = new URLSearchParams(location.search);
  const searchInput = urlParams.get('q');
  const [searchedItems, setSearchedItems] = useState([]);

  useEffect(() => {
    const loadSearchProduct = async () => {
      try {
        const response = await axios.get('/api/searchProducts', { params: { searchInput } });
        setSearchedItems(response.data);
      } catch (error) {
        console.error('Error fetching searched products:', error);
      }
    };

    if (searchInput) {
      loadSearchProduct();
    }
  }, [searchInput]); 

  return (
    <>
      <NavBar value={searchInput} />
      <div className='page-content'>
        <SideBar />
        <div className='page-column'>
          <div className={`card-container ${searchedItems.length === 0 ? 'no-results' : ''}`}>
            {searchedItems.length > 0 ? (
              searchedItems.map(product => (
                <Card key={product.name} product={product} />
              ))
            ) : (
              <h4>No results found for the search query</h4>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchedProductsPage;
