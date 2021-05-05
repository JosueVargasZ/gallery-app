import React from 'react';
import { useUI } from '../context/UIProvider';

export const Menu = () => {

    const { ui, uiDispatch } = useUI();
    const { toComponent } = ui;

    return (
       <nav>
            <ul className="sidebar__menu">
                <li className={(toComponent === 'gallery') ? "sidebar__menu__item sidebar__menu__item--active" : "sidebar__menu__item"} onClick={ ()=> { uiDispatch({type: 'menu-gallery'})}}>Gallery</li>
                <li className={(toComponent === 'favorites') ? "sidebar__menu__item sidebar__menu__item--active" : "sidebar__menu__item"} onClick={ ()=> { uiDispatch({type: 'menu-favorites'})}}>Favorites</li>
                <li className={(toComponent === 'upload') ? "sidebar__menu__item sidebar__menu__item--active" : "sidebar__menu__item"} onClick={ ()=> { uiDispatch({type: 'menu-upload'})}}>Upload Picture</li>
            </ul>
        </nav>
    )
}
