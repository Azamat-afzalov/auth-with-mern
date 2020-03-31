import React from 'react';
import {NavLink} from 'react-router-dom';
import './NavLinks.css';

const NavLinks = () => {
    return (
        <ul className="NavLinks-ul">
            <li className="NavLinks-li">
                <NavLink
                    to='/login'
                    activeClassName="NavLinks-li-active"
                    className="NavLinks-li-a"
                    exact>
                    Log in
                </NavLink>
            </li>
            <li className="NavLinks-li">
                <NavLink
                    to='/signup'
                    activeClassName="NavLinks-li-active"
                    className="NavLinks-li-a"
                    exact
                >
                    Sign Up
                </NavLink>
            </li>
            <li className="NavLinks-li">
                <NavLink
                    to='/'
                    activeClassName="NavLinks-li-active"
                    className="NavLinks-li-a"
                    exact
                >
                    Log out
                </NavLink>
            </li>
        </ul>
    )
}

export default NavLinks
