import React from 'react';

export const SideBar = ({ toggleMenu }) => {
    return (
        <aside className="sidebar" style={(!toggleMenu ) ? {transform: 'translateX(-100%)'} : { transform: 'translateX(-0)'}}>
            <figure className="sidebar__profile">
                <img className="sidebar__profile__picture" src="https://i.pravatar.cc/150" alt="profile"/>
            </figure>
            <nav>
                <ul className="sidebar__menu">
                    <li className="sidebar__menu__item">Gallery</li>
                    <li className="sidebar__menu__item">Favorites</li>
                    <li className="sidebar__menu__item">Upload Picture</li>
                </ul>
            </nav>

        </aside>
    )
}
