import React from 'react'
import logoImage from '../../assets/logo.jpg'
import {BiSolidHome,BiSolidUser} from 'react-icons/bi'
import {FaShoppingCart,FaBell,FaSearch} from 'react-icons/fa'
import './NavBar.css'


const NavBar=()=>
{
    return(
    
        <div className="nav-bar">
            <img src={logoImage} alt="Kent Logo Image"/> 
        
            <div className="middle-container">
                <div className="in-group">
                    <input type="text" placeholder="Search" aria-label="Search"/>
                    <div className="icon-container-search">
                        <FaSearch className="search-icon"/>
                    </div>  
                </div>
                <div className="all-icons-container">
                    <button type="button" className="btn btn-secondary btn-sm"><BiSolidHome /></button>
                    <button type="button" className="btn btn-secondary btn-sm"><FaShoppingCart/></button>
                    <button type="button" className="btn btn-secondary btn-sm"> <FaBell/></button>
                </div>
            </div>

            <div className="login_singup-container">
                <div className="regLogin"><a href="#">Login</a> | <a href="#">Register</a></div>
                <button type="button" className="btn btn-secondary btn-sm" id="roundBtn">  <BiSolidUser/></button>    
            </div>
           
        </div>
        
    
    )
}
export default NavBar