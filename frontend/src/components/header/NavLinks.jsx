import React , {useContext} from 'react';
import {NavLink} from 'react-router-dom';
import './NavLinks.css';
import {AuthContext} from '../../context/auth-context';

const NavLinks = () => {
    const {isLoggedIn } = useContext(AuthContext);
    return (
        <ul className="NavLinks-ul">
            {!isLoggedIn && (<li className="NavLinks-li">
                <NavLink
                    to='/login'
                    activeClassName="NavLinks-li-active"
                    className="NavLinks-li-a"
                    exact>
                    Log in
                </NavLink>
            </li>)}
            {!isLoggedIn && (<li className="NavLinks-li">
                <NavLink
                    to='/signup'
                    activeClassName="NavLinks-li-active"
                    className="NavLinks-li-a"
                    exact
                >
                    Sign Up
                </NavLink>
            </li>)}
            {isLoggedIn && (<li className="NavLinks-li">
                <NavLink
                    to='/logout'
                    activeClassName="NavLinks-li-active"
                    className="NavLinks-li-a"
                    exact
                >
                    Log out
                </NavLink>
            </li>)}

        </ul>
    )
}

export default NavLinks
