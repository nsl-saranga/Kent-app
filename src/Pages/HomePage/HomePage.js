import React from 'react';
import NavBar from '../../Components/NavBar/NavBar';
import SideBar from '../../Components/SideBar/SideBar';
import HomeCarousel from '../../Components/HomeCorousel/HomeCorousel';
import Footer from '../../Components/Footer/Footer';
import './HomePage.css';
import logoImage from '../../assets/logo.jpg'

const HomePage = () => {
  return (
    <>
     <NavBar value={""}/>
      <div className='home-page-container'>  {/* New container */}
       <div className='home-page-row'>
       <SideBar/>
          <div className='page-column-corousel'>
            <HomeCarousel />
          </div>
       </div>
      </div>
     
  
    </>
  );
};

export default HomePage;
