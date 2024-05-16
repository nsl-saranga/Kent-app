import React, { useState } from 'react';
import NavBar from '../../Components/NavBar/NavBar';
import SideBar from '../../Components/SideBar/SideBar';
import Card from '../../Components/Card/Card';
import './ProductPage.css';
import { useParams} from 'react-router-dom'; 
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import Products from '../../Data/data';
import SelectMenu from '../../Components/SelectMenu/SelectMenu';

const ProductsPage = () => {
  const { productId } = useParams();
  const [selectedFlavour, setSelectedFlavour] = useState("All");
  const [selectedVolume, setSelectedVolume] = useState("All");
 

  const handleFlavourChange = (e) => {
    setSelectedFlavour(e.target.value);
  };

  const handleVolumeChange = (e) => {
    setSelectedVolume(e.target.value);
  };

  const category = Products.find(category => category.type === productId);

  if (category) {
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
                category.products.map(product => (
                  <Card key={product.name} product={product} />
                ))
              ) : selectedFlavour !== "All" && selectedVolume === "All" ? (
                category.products
                  .filter(product => product.name.includes(selectedFlavour))
                  .map(product => (
                    <Card key={product.name} product={product} />
                  ))
              ) : selectedFlavour === "All" && selectedVolume !== "All" ? (
                category.products
                  .filter(product => product.name.includes(selectedVolume))
                  .map(product => (
                    <Card key={product.name} product={product} />
                  ))
              ) : ( // Combined filtering for flavour and volume
                category.products
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
  } 
  else  {
    return (<NotFoundPage />);
  }
};

export default ProductsPage;
