import React, { useState } from 'react';

export const Navbar = () => {

    const [toggleMenu, setToggleMenu] = useState(false);

    // useEffect(() => {
        
    //     window.addEventListener('resize', () =>{
    //         if( window.innerWidth >= 768){
    //             menu.current.style = 'visibility: visible;';
    //         }
    //         else{
    //             setToggleMenu(false);
    //             menu.current.style = 'visibility: hidden;';
    //         }
    //     });

    //     return () => {
    //         window.removeEventListener('resize',window);
    //     }
    // }, [])

    const handleToggle = () => {
        setToggleMenu( toggle => !toggle );
        
        // if( toggleMenu) {
        //     menu.current.style = 'animation: menu-out 200ms ease-in-out forwards';
        // } else{
        //     menu.current.style = 'animation: menu-in 200ms ease-in-out forwards';
        // }
    }



    return (
        <nav className="navbar">

             <div className="navbar__menu-toggle">
                <input 
                    className="menu-toggle__check" 
                    type="checkbox"
                    checked={ toggleMenu} 
                    onChange={ handleToggle } 
                    />
                <span className="menu-toggle__toggler">
                </span>
            </div>
            <h2 className="navbar__logo">GalleryApp</h2>
            <button className="navbar__logout">Log out</button>
        </nav>
    )
}
