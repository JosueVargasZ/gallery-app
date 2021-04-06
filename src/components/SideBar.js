import React from 'react';

export const SideBar = ( props ) => {
    return (
        <aside className="sidebar" style={(!props.toggleMenu ) ? {transform: 'translateX(-100%)'} : { transform: 'translateX(-0)'}}>
            { props.children}
        </aside>
    )
}
