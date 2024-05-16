import React from 'react';
import SideBar from '../../Components/SideBar/SideBar';
import Card from '../../Components/Card/Card';
import './SearchedProductsPage.css';
import { useParams } from 'react-router-dom';
import Products from '../../Data/data';
import NavBar from '../../Components/NavBar/NavBar';

const SearchedProductsPage = () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const searchInput = urlParams.get('q');

    const filteredProducts = Products.flatMap(category =>
        category.products.filter(product =>
            product.name.toLowerCase().includes(searchInput.toLowerCase())
        )
    );

    return (
        <>  
            <NavBar value={searchInput} />
            <div className='page-content'>
                <SideBar />
                <div className='page-column'>
                    <div className={`card-container ${filteredProducts.length === 0 ? 'no-results' : ''}`}>
                        {filteredProducts.length > 0 ? (
                            filteredProducts.map(product => (
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
