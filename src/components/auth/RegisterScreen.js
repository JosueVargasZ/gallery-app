import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthProvider';
import { useUI } from '../../context/UIProvider';
import { RegisterWithEmailPassName } from '../../firebase/firebase-helper';

import { useForm } from '../../hooks/useForm';

export const RegisterScreen = () => {

    const { ui, uiDispatch } = useUI();
    const { firstLoginRender } = ui;

    const registerRef = useRef(null);
    const pass2Ref = useRef(null);

    const [passAlert, setPassAlert] = useState(false);
    

    useEffect(() => {

        if( firstLoginRender ){
            registerRef.current.style = 'animation: fade-in 400ms ease-in-out forwards';
            uiDispatch({type: 'login-next-render'});
        } else{
        registerRef.current.style = 'animation: right-in 400ms ease-in-out forwards';
        }

    }, [])
    
    
    const initialValue = {
        name: '',
        email: '',
        password: '',
        password2: ''
    }

    const { authDispatch } = useAuth();
    
    const [ formValues, handleInputChange ] = useForm( initialValue );
    
    const { name, email, password, password2 } = formValues;

    const handleSignUp = (e) => {
        e.preventDefault();
        
        if( password2 !== password){
            pass2Ref.current.focus();
            setPassAlert(true);
            setTimeout(() => {
                setPassAlert(false);
            }, 4000);
            return;
        }

        RegisterWithEmailPassName(email, password, name ).then( ({uid, displayName, photoURL}) => {
            authDispatch({
                type: 'login',
                payload: {
                    uid,
                    displayName,
                    photoURL
                }
            })
        })
        .catch( (e) => {
        }) 
    }

    return (
        <section className="auth-container auth-container--center auth-container--color">
            <form 
                ref={ registerRef }
                className="auth"
                onSubmit={ handleSignUp }>
                
                <h2 className="auth__title">Create an account </h2>
                
                <input 
                    type="text"
                    className="auth__input"
                    name="name"
                    placeholder="Name"
                    autoComplete="off"
                    required
                    minLength="3"
                    value={ name }
                    onChange={ handleInputChange }
                />

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

                <input 
                    type="password"
                    ref={ pass2Ref }
                    className="auth__input"
                    name="password2"
                    placeholder="Confirm password"
                    required
                    minLength="6"
                    value={ password2 }
                    onChange={ handleInputChange }
                />

                <span className={ `auth__password-alert ${( passAlert ) ? 'auth__password-alert--show' : '' } `}>
                    <span className="auth__password-alert__icon">!</span> Passwords do not match
                </span>
                

                <button 
                    type="submit"
                    className="btn btn--success auth__submit"
                    // disabled={ loading }
                    >
                        Sign up
                </button>

                <Link to="/auth/login" className="auth__navigation">Already have an account?</Link>
            </form>
            
        </section>
    )
}
