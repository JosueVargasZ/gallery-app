import React from 'react';

import { useUI } from '../context/UIProvider';
import { UploadContentScreen } from './UploadContentScreen';
import { MainGalleryScreen } from './MainGalleryScreen';
import { FavoriteGalleryScreen } from './FavoriteGalleryScreen';

export const Container = () => {

    const { ui } = useUI();
    const { toComponent } = ui;

    return (
        <main className="container">
            {
                (toComponent === 'gallery') ? (
                <MainGalleryScreen />
                )
                : (toComponent === 'favorites') ? (
                    <FavoriteGalleryScreen />
                )
                : (
                <UploadContentScreen />
                )
            }
        </main>
    )
}
