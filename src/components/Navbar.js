import React, { useEffect } from 'react';

export const Navbar = ({ toggleMenu, setToggleMenu }) => {

    useEffect(() => {
        
        window.addEventListener('resize', () =>{
            if( window.innerWidth >= 1024){
                setToggleMenu(true)
            }
            else{
                setToggleMenu(false);
            }
        });

        return () => {
            window.removeEventListener('resize',window);
        }
    }, [setToggleMenu])

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
                tabIndex="0">Log out</button>
        </nav>
    )
}
