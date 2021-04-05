import React, { useState } from 'react';
import { Container } from './components/Container';
import { Navbar } from './components/Navbar';
import { SideBar } from './components/SideBar';


const initialState = () => {
    if(window.innerWidth >= 1024){
        return true;
    } else{
        return false
    }
}

export const GalleryApp = () => {

    const [toggleMenu, setToggleMenu] = useState(initialState);

    return (
        <div className="gallery" >
            <Navbar toggleMenu={ toggleMenu } setToggleMenu={ setToggleMenu }/>
            <SideBar toggleMenu={ toggleMenu }/>
            <Container />
        </div>
    )
}
