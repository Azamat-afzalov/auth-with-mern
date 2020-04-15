import React , {useState} from 'react';
import {
    BrowserRouter as Router,
    Route,
    // Redirect,
    Switch

} from 'react-router-dom';
import {AuthContext} from './context/auth-context';
import {useAuth} from './hooks/auth-hook.js';
import Users from './components/user/pages/Users';
import User from './components/user/pages/User';
import Header from './components/header/Header';
import Login from './components/form/pages/Login';
import SignUp from './components/form/pages/SignUp';
import LogOut from './components/form/pages/LogOut';

function App() {
    const {token , login , logout  , userId} = useAuth();


    let routes;

    if(token){
        routes = (
            <Switch>
                <Route path="/" exact>
                    <Users/>
                </Route>
                <Route path="/logout">
                    <LogOut/>
                </Route>
                <Route path="/users/:userId" component={User}>

                </Route>
            </Switch>
        )
    }else if(!token){
        routes = (
            <Switch>
                <Route path="/" exact>
                    <Users/>
                </Route>
                <Route path="/login" exact>
                    <Login/>
                </Route>
                <Route path="/signup">
                    <SignUp/>
                </Route>
                <Route path="/users/:userId" component={User}>
                </Route>
            </Switch>
        )
    }
    return (
        <AuthContext.Provider value={{
            isLoggedIn : !!token,
            token: token,
            login : login,
            logOut : logout,
            userId: userId,
            }}>
            <Router>
                <main className="main-page">
                    <Header/>
                    {routes}
                </main>

            </Router>
        </AuthContext.Provider>

    );
}

export default App;
