import React, {useContext , useEffect} from 'react';
import {Redirect , Route} from 'react-router-dom'
import {AuthContext} from '../../../context/auth-context';

const LogOut = () => {
    const {logOut} = useContext(AuthContext);
    useEffect(() => {
        logOut();
    })
    return (
        <Route>
            <Redirect to="/"/>
        </Route>
    )
}

export default LogOut;
