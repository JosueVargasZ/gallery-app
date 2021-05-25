import React, { useEffect } from 'react';
import { useAuth } from '../context/AuthProvider';
import { useUI } from '../context/UIProvider';
import { signOut } from '../firebase/firebase-helper';

export const Navbar = () => {

    const { authDispatch } = useAuth();
    const { ui, uiDispatch } = useUI();
    const { toggleMenu } = ui;

    useEffect(() => {
        
        const winListener = () => {
            if( window.innerWidth >= 1024){
                uiDispatch({ type: 'menu-toggle-show'});
            }
            else{
                uiDispatch({ type: 'menu-toggle-hide'});
            }
        }

        window.addEventListener('resize', winListener );

        return () => {
            window.removeEventListener('resize',winListener);
        }
    }, [uiDispatch])


    const handleLogout = () => {
        signOut(authDispatch);

    }

    return (
        <nav className="navbar">

             <div className="navbar__menu-toggle">
                <input 
                    className="menu-toggle__check" 
                    type="checkbox"
                    tabIndex="0"
                    checked={ toggleMenu } 
                    onChange={ ()=> { uiDispatch({ type: 'menu-toggle'}); }  } 
                    />
                <span className="menu-toggle__toggler">
                </span>
            </div>
            <h2 className="navbar__logo">GalleryApp</h2>
            <button 
                className="navbar__logout"
                tabIndex="0"
                onClick={ handleLogout }>Log out</button>
        </nav>
    )
}
