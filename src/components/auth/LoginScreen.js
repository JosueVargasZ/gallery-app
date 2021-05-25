import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthProvider';
import { useUI } from '../../context/UIProvider';
import { signInWithEmailPass, signInWithGoogle } from '../../firebase/firebase-helper';
import { useForm } from '../../hooks/useForm';

export const LoginScreen = () => {
    

    const { ui, uiDispatch } = useUI();
    const { firstLoginRender } = ui;
    const { authDispatch } = useAuth();

    const loginRef = useRef(null);

    useEffect(() => {
        
        if( firstLoginRender ){
            loginRef.current.style = 'animation: fade-in 400ms ease-in-out forwards';
            uiDispatch({type: 'login-next-render'});
        } else{
            loginRef.current.style = 'animation: left-in 400ms ease-in-out forwards';
        }

    }, [uiDispatch, firstLoginRender])

    

    const initialValue = {
        email: '',
        password: ''
    }

    const [ formValues, handleInputChange ] = useForm( initialValue );

    const { email, password } = formValues;

    const handleLogin = (e) => {
        e.preventDefault();
        
        signInWithEmailPass(email,password)
        .then( ({uid, displayName, photoURL}) =>{
            authDispatch({
                type: 'login',
                payload: {
                    uid,
                    displayName,
                    photoURL
                }
            })
        })
        .catch( e => {
        })
        
    }

    const handleGoogleLogin = () => {

        signInWithGoogle()
            .then( ({uid, displayName, photoURL}) =>{
                authDispatch({
                    type: 'login',
                    payload: {
                        uid,
                        displayName,
                        photoURL
                    }
                })
            })
            .catch( e => {

            })
    }

    return (
        <section className="auth-container auth-container--center auth-container--color">
            <form 
                ref={ loginRef }
                className="auth"
                onSubmit={ handleLogin }>

                <h2 className="auth__title">Sign In</h2>
                
                <input 
                    type="email"
                    className="auth__input"
                    name="email"
                    placeholder="Email"
                    autoComplete="off"
                    required
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    value={ email }
                    onChange={ handleInputChange }
                />

               <input 
                    type="password"
                    className="auth__input"
                    name="password"
                    placeholder="Password"
                    required
                    minLength="6"
                    value={ password }
                    onChange={ handleInputChange }
                />

                <button 
                    type="submit"
                    className="btn btn--success auth__submit"
                    // disabled={ loading }
                >
                        Sign in
                </button>

                <div className="auth__social-networks">
                    <p style={{color: '#ffffff', fontWeight: '700'}}>Login with social networks</p>
                    <div className="google-btn"
                        tabIndex="0"
                         onClick={ handleGoogleLogin }>
                        <div className="google-icon-wrapper">
                        <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                        <b>Sign in with google</b>
                        </p>
                    </div>
                </div>
                
                <Link to="/auth/register" className="auth__navigation">Create new account</Link>
            </form>
            
        </section>
    )
}
