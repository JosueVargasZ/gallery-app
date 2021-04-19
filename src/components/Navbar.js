import React, { useEffect } from 'react';
import { useAuth } from '../context/AuthProvider';
import { signOut } from '../firebase/firebase-helper';

export const Navbar = ({ toggleMenu, setToggleMenu }) => {

    const { authDispatch } = useAuth();

    useEffect(() => {
        
        const winListener = () => {
            if( window.innerWidth >= 1024){
                setToggleMenu(true)
            }
            else{
                setToggleMenu(false);
            }
        }

        window.addEventListener('resize', winListener );

        return () => {
            window.removeEventListener('resize',winListener);
        }
    }, [setToggleMenu])


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
                    checked={ toggleMenu} 
                    onChange={ ()=> { setToggleMenu( toggle => !toggle ) }  } 
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
