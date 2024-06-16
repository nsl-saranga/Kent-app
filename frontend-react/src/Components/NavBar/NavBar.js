import React, { useState } from 'react';
import logoImage from '../../assets/logo.jpg'; // Assuming the logo path is correct
import './NavBar.css';
import { BiSolidHome, BiSolidUser } from 'react-icons/bi';
import { FaShoppingCart, FaBell, FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const NavBar = ({value}) => {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState(value);

  const handleInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSearchSubmit = () => {
    if (searchInput) {
      navigate(`/search?q=${searchInput}`);
    }
  };

  const viewCart = () => {
    navigate(`/cart`);
  };

  const login = () => {
    navigate(`/login`);
  };
  const register = () => {
    navigate(`/register`);
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
          <button type="button" className="icon-container-search" onClick={handleSearchSubmit}>
            <FaSearch className="search-icon" />
          </button>
        </div>
        <div className="all-icons-container">
          <button type="button" className="btn btn-sm btn-navbar" onClick={() => navigate('/')}>
            <BiSolidHome />
          </button>
          <button type="button" className="btn btn-secondary btn-sm btn-navbar" onClick={viewCart}>
            <FaShoppingCart />
          </button>
          <button type="button" className="btn btn-secondary btn-sm btn-navbar">
            <FaBell />
          </button>
        </div>
      </div>
      <div className="login_singup-container">
        <div className="regLogin">
          <div onClick={login}>Login</div>
          <div onClick={register}>Register</div>
        </div>
        <BiSolidUser className="user" />
      </div>
    </div>
  );
};

export default NavBar;
