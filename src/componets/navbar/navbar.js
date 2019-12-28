import React from 'react';
import './navbar.css';

const navbar = () => {
    return (
        <nav className="navbar navbar-dark bg-dark py-2">
            <div className="container">
                <a href="#">
                    <i className="fas fa-store text-white text-lg d-inline-block align-top" style={{ fontSize: '30px' }}></i>
                    <span className="ml-3 text-white text-lg">Marketplace</span>
                </a>
                <input type="text" className="form-control search text-sm pl-3 mx-5" placeholder=" &#xf002;  Search" />
                <button className="btn btn-car">
                    <i className="fas fa-shopping-cart"></i>
                    <span className="badge badge-pill badge-warning car-items">1</span>
                </button>
            </div>
        </nav>
    );
}

export default navbar;