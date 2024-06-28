import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', margin: '20px' }}>
            <Link to="/" style={{ textDecoration: 'none' }}> Home </Link>
            <Link to="/logout" style={{ textDecoration: 'none' }}> LogOut </Link>
        </div>
    );
};

export default NavBar;
