import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import indolfoLogo from './indolfoLogo.png';
import './NavBar.css';


const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="d-flex justify-content-between align-items-center w-100">
                <div className="navbar-brand">
                    <img src={indolfoLogo} alt="Indolfo Logo" width="120" />
                </div>
                <div className="d-flex ml-auto">
                    <button className="nav-link btn btn-link">Picadas</button>
                    <button className="nav-link btn btn-link">Plato Principal</button>
                    <button className="nav-link btn btn-link">Postres</button>
                    <button className="nav-link btn btn-link">Tragos</button>
                    <CartWidget />
                </div>
            </div>
        </nav>
    );
};

export default NavBar;