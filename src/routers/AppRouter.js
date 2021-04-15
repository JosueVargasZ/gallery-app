import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";
import { LoginScreen } from "../components/auth/LoginScreen";
import { RegisterScreen } from "../components/auth/RegisterScreen";
import { GalleryScreen } from "../components/GalleryScreen";

export const AppRouter = () => {

    return (
        <Router>
            <div>
            <Switch>
                <Route exact path="/" component={  GalleryScreen }/>
                <Route exact path="/auth/login" component={ LoginScreen }/>
                <Route exact path="/auth/register" component={ RegisterScreen }/>
                
                <Redirect to="/" />
            </Switch>
            </div>
        </Router>
    )
}
