import React , {useState} from 'react';
import {
    BrowserRouter as Router,
    Route,
    // Redirect,
    Switch

} from 'react-router-dom';
import {AuthContext} from './context/auth-context';
import Users from './components/user/pages/Users';
import User from './components/user/pages/User';
import Header from './components/header/Header';
import Login from './components/form/pages/Login';
import SignUp from './components/form/pages/SignUp';
import LogOut from './components/form/pages/LogOut';

function App() {
    const [isLoggedIn , setIsLoggedIn] = useState(false);
    const login = () => setIsLoggedIn(true);
    const logOut = () => setIsLoggedIn(false);
    let routes;

    if(isLoggedIn){
        routes = (
            <Switch>
                <Route path="/" exact>
                    <Users/>
                </Route>
                <Route path="/logout">
                    <LogOut/>
                </Route>
                <Route path="/users/:id">
                    <User/>
                </Route>
            </Switch>
        )
    }else if(!isLoggedIn){
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
                <Route path="/users/:userId">
                    <User/>
                </Route>
            </Switch>
        )
    }
    return (
        <AuthContext.Provider value={{
            isLoggedIn : isLoggedIn,
            login : login,
            logOut : logOut
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
