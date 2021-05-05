import React from 'react';
import { AuthProvider } from './context/AuthProvider';
import { UIProvider } from './context/UIProvider';
import { AppRouter } from './routers/AppRouter';

export const GalleryApp = () => {


    return (
        <UIProvider>
            <AuthProvider>
                <AppRouter />
            </AuthProvider>
        </UIProvider>
    )
}
