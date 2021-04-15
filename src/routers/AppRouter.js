import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Redirect
} from "react-router-dom";

import { AuthRouter } from "./AuthRouter";
import { PublicRoute } from "./PublicRoute";
import { PrivateRoute } from "./PrivateRoute";
import { GalleryScreen } from "../components/GalleryScreen";

import { firebase } from '../firebase/firebase-config';
import { useAuth } from "../context/AuthProvider";

export const AppRouter = () => {

    const { authDispatch } = useAuth();
    const [checking, setChecking] = useState(true);
    const [ isLoggedIn, setIsLoggedIn ] = useState(false);


    useEffect(() => {
        
        firebase.auth().onAuthStateChanged( ( user ) => {
            if( user?.uid ){
                authDispatch( 
                    {
                        type: 'login',
                        payload: {
                            uid: user.uid,
                            displayName: user.displayName,
                            photoURL: user.photoURL
                        }
                    }
                );
                setIsLoggedIn(true);

            } else {
                setIsLoggedIn(false);
            }
            setChecking(false);
        });
        
    }, [])


    if( checking ){
        return (
            <h1>Wait...</h1> //create a loading screen
        );
    }

    return (
        <Router>
            <div>
            <Switch>
                <PublicRoute  path="/auth" 
                              component={ AuthRouter }
                              isAuthenticated={ isLoggedIn } 
                />

                <PrivateRoute exact 
                              isAuthenticated={ isLoggedIn } 
                              path="/" 
                              component={ GalleryScreen }
                />
                
                <Redirect to="/auth/login" />
            </Switch>
            </div>
        </Router>
    )
}
