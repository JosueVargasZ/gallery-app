import React, { useState } from 'react';

import { Container } from './Container';
import { Menu } from './Menu';
import { Navbar } from './Navbar';
import { Profile } from './Profile';
import { SideBar } from './SideBar';


const initialState = () => {
    if(window.innerWidth >= 1024){
        return true;
    } else{
        return false
    }
}

export const Gallery = () => {

    const [toggleMenu, setToggleMenu] = useState(initialState);

    return (
        <div className="gallery" >
            <Navbar toggleMenu={ toggleMenu } setToggleMenu={ setToggleMenu }/>
            <SideBar toggleMenu={ toggleMenu }>
                <Profile />
                <Menu />
            </SideBar>
            <Container />
        </div>
    )
}
