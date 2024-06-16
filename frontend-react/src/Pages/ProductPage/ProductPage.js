import React, { useState, useEffect } from 'react';
import NavBar from '../../Components/NavBar/NavBar';
import SideBar from '../../Components/SideBar/SideBar';
import Card from '../../Components/Card/Card';
import './ProductPage.css';
import { useParams } from 'react-router-dom'; 
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import SelectMenu from '../../Components/SelectMenu/SelectMenu';
import axios from 'axios';

const ProductsPage = () => {
  const { productType } = useParams();
  const [selectedFlavour, setSelectedFlavour] = useState("All");
  const [selectedVolume, setSelectedVolume] = useState("All");
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const loadProductInfo = async () => {
      try {
        const response = await axios.get(`/api/getProducts/${productType}`);
        if (response.data.length === 0) {
          setError(true); // No products found for the given category
        } else {
          setProducts(response.data);
        }
      } catch (error) {
        setError(true); // Error fetching data or category not found
      } finally {
        setLoading(false);
      }
    };

    loadProductInfo();
  }, [productType]);

  const handleFlavourChange = (e) => {
    setSelectedFlavour(e.target.value);
  };

  const handleVolumeChange = (e) => {
    setSelectedVolume(e.target.value);
  };

  if (loading) {
    return (
      <>
        <NavBar value={""}/>
        <div>Loading...</div>
      </>
    );
  }

  if (error || !products) {
    return (
      <>
        <NavBar value={""}/>
        <NotFoundPage />
      </>
    );
  }

  return (
    <>
      <NavBar value={""}/>
      <div className='page-content'>
        <SideBar />
        <div className='page-column'>
          <SelectMenu
            onChangeFlavour={handleFlavourChange}
            flavourValue={selectedFlavour}
            onChangeVolume={handleVolumeChange}
            volumeValue={selectedVolume}
          />
          <div className='card-container'>
            {selectedFlavour === "All" && selectedVolume === "All" ? (
              products.map(product => (
                <Card key={product.name} product={product} />
              ))
            ) : selectedFlavour !== "All" && selectedVolume === "All" ? (
              products
                .filter(product => product.name.includes(selectedFlavour))
                .map(product => (
                  <Card key={product.name} product={product} />
                ))
            ) : selectedFlavour === "All" && selectedVolume !== "All" ? (
              products
                .filter(product => product.name.includes(selectedVolume))
                .map(product => (
                  <Card key={product.name} product={product} />
                ))
            ) : ( // Combined filtering for flavour and volume
              products
                .filter(
                  product =>
                    product.name.includes(selectedFlavour) &&
                    product.name.includes(selectedVolume)
                )
                .map(product => (
                  <Card key={product.name} product={product}/>
                ))
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsPage;
