import React from 'react';

import { Container } from './Container';
import { Menu } from './Menu';
import { Navbar } from './Navbar';
import { Profile } from './Profile';
import { SideBar } from './SideBar';

export const GalleryScreen = () => {

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
