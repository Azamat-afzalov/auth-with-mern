import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch

} from 'react-router-dom';

import Header from './components/header/Header';

function App() {
    return (

        <Router>
            <Header/>
            <Switch>
                <Route path="/" exact>
                    <main className="main-page">

                    </main>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
