import React from 'react';
import { Container } from './components/Container';
import { Navbar } from './components/Navbar';
import { SideBar } from './components/SideBar';

export const GalleryApp = () => {
    return (
        <div>
            <Navbar />
            <div style={{marginTop: '70px'}}>
                <SideBar />
                <Container />
            </div>
        </div>
    )
}
