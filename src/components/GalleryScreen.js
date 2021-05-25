import React, { useEffect } from 'react';
import { useUI } from '../context/UIProvider';

import { Container } from './Container';
import { Menu } from './Menu';
import { Navbar } from './Navbar';
import { Profile } from './Profile';
import { SideBar } from './SideBar';

export const GalleryScreen = () => {


    const { uiDispatch } = useUI();

    useEffect(() => {
        uiDispatch({type: 'login-first-render'});
    }, [])

    return (
        <div className="gallery" >
            <Navbar />
            <SideBar>
                <Profile />
                <Menu />
            </SideBar>
            <Container />
        </div>
    )
}
