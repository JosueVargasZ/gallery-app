import React from 'react';
import { useUI } from '../context/UIProvider';

export const SideBar = ( props ) => {

    const { ui } = useUI();
    const { toggleMenu } = ui;
    
    return (
        <aside className="sidebar" style={(!toggleMenu ) ? {transform: 'translateX(-100%)'} : { transform: 'translateX(-0)'}}>
            { props.children}
        </aside>
    )
}
