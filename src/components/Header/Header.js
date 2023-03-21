import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    return (
        <div className='Header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/shop">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/Inventory">Inventory</Link>
                <a href="/about">About</a>
                <Link to="/login">Login</Link>
            </div>
        </div>
    );
};

export default Header;