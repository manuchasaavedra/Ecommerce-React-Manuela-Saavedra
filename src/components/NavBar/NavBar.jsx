import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import indolfoLogo from './indolfoLogo.png';
import './NavBar.css';
import {NavLink, Link} from 'react-router-dom'


const NavBar = () => { 
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="d-flex justify-content-between align-items-center w-100">
                <Link to='/' className="navbar-brand">
                    <img src={indolfoLogo} alt="Indolfo Logo" width="120" />
                </Link>
                <div className="d-flex ml-auto">
                    <NavLink to={'/category/picadas'} className={({isActive}) => isActive? 'ActiveOption' : 'Option' } style={{ marginRight: '2rem', textDecoration: 'none' }}>Picadas</NavLink>
                    <NavLink to={'/category/tortas'} className={({isActive}) => isActive? 'ActiveOption' : 'Option'} style={{ marginRight: '2rem' , textDecoration: 'none' }}>Tortas</NavLink>
                    <NavLink to={'/category/entradas'} className={({isActive}) => isActive? 'ActiveOption' : 'Option'} style={{ marginRight: '2rem' , textDecoration: 'none' }}>Entradas</NavLink>
                    <div style={{ marginRight: '2rem' }}>
                    <CartWidget />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;