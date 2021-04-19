import React from 'react';
import { useAuth } from '../context/AuthProvider';

import profilePlaceHolder from '../assets/user.png';

export const Profile = () => {

    const { user } = useAuth();

    return (
        <figure className="sidebar__profile">
                <img className="sidebar__profile__picture" src={`${(user.photoURL) ? user.photoURL : profilePlaceHolder}`} alt="profile"/>
        </figure>
    )
}
