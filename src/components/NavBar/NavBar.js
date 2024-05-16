import React, { useState } from 'react';
import logoImage from '../../assets/logo.jpg';
import './NavBar.css';
import { BiSolidHome, BiSolidUser } from 'react-icons/bi';
import { FaShoppingCart, FaBell, FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NavBar = ({value}) => {
  const [searchInput, setSearchInput] = useState(value);

  const handleInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleIconClick = () => {
    window.location.href = `/search?q=${searchInput}`;
  };
  const viewCart = () => {
    window.location.href = `/cart`;
  };

  return (
    <div className="nav-bar">
      <img src={logoImage} alt="Kent Logo Image" />
      <div className="middle-container">
        <div className="in-group">
          <input
            type="text"
            placeholder="Search"
            aria-label="Search"
            value={searchInput}
            onChange={handleInputChange}
          />
          <div className="icon-container-search" onClick={handleIconClick}>
            <FaSearch className="search-icon" />
          </div>
        </div>
        <div className="all-icons-container">
          <button type="button" className="btn btn-sm btn-navbar">
            <BiSolidHome />
          </button>
          <button onClick={viewCart} type="button" className="btn btn-secondary btn-sm btn-navbar">
            <FaShoppingCart />
          </button>
          <button type="button" className="btn btn-secondary btn-sm btn-navbar">
            <FaBell />
          </button>
        </div>
      </div>
      <div className="login_singup-container">
        <div className="regLogin">
          <a href="#">Login</a> | <a href="#">Register</a>
        </div>
        <BiSolidUser className="user" />
      </div>
    </div>
  );
};

export default NavBar;
