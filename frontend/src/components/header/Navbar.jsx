import React from 'react';
import {Link} from 'react-router-dom';
import NavLinks from './NavLinks';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="Navbar-nav">
            <span className="Navbar-logo">
                <Link to="/">MyProject</Link>
            </span>
            <NavLinks/>
        </nav>
    )
}

export default Navbar
