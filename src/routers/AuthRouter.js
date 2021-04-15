import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

import { LoginScreen } from '../components/auth/LoginScreen';
import { RegisterScreen } from '../components/auth/RegisterScreen';

export const AuthRouter = () => {
    return (
        <Router>
            <div>
                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route exact path="/auth/login" component={ LoginScreen }/>
                    <Route exact path="/auth/register" component={ RegisterScreen }/>
                    <Redirect to="/auth/login"/>
                </Switch>
            </div>
        </Router>
    )
}
