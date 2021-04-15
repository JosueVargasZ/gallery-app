import React from 'react';
import { useAuth } from '../context/AuthProvider';

export const Profile = () => {

    const { user } = useAuth();

    return (
        <figure className="sidebar__profile">
                <img className="sidebar__profile__picture" src={user.photoURL} alt="profile"/>
        </figure>
    )
}
