import React from 'react';
import { AuthProvider } from './context/AuthProvider';
import { AppRouter } from './routers/AppRouter';

export const GalleryApp = () => {


    return (
        <AuthProvider>
            <AppRouter />
        </AuthProvider>
    )
}
