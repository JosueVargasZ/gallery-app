import React, { createContext, useContext, useReducer } from 'react';

//context for UI 
const UIContext = createContext();
// Reducer for UI handling
const uiReducer = (state, action) => {
    switch(action.type) {
        case 'menu-toggle':
            return {
                ...state,
                toggleMenu: !state.toggleMenu
            }
        case 'menu-toggle-show':
            return {
                ...state,
                toggleMenu: true
            }
        case 'menu-toggle-hide':
            return {
                ...state,
                toggleMenu: false
            }
        case 'menu-gallery':
            return {
                ...state,
                toComponent: 'gallery'
            }
        case 'menu-favorites':
            return {
                ...state,
                toComponent: 'favorites'
            }
        case 'menu-upload':
            return {
                ...state,
                toComponent: 'upload'
            }
        case 'login-first-render':
            return {
                ...state,
                firstLoginRender: true
            }
        case 'login-next-render':
            return {
                ...state,
                firstLoginRender: false
            }
        default:
            return state;
    }
}

// initial state for uiReducer
const initialState = {
    toComponent: 'gallery',
    firstLoginRender: true,
    toggleMenu: (window.innerWidth >= 1024) ? true : false
}

// Component for providing the context and nesting the application 
export const UIProvider = ({ children }) => {

    const [state, dispatch] = useReducer(uiReducer, initialState)

    return (
        <UIContext.Provider value={{ ui: state, uiDispatch: dispatch }} >
            {children}
        </UIContext.Provider>
    )
}

// Custom hook for using the context
// This is the only way to access to the UIContext
export const useUI = () => {
    
    const context = useContext(UIContext);
    if (context === undefined) {
        throw new Error('useUI must be used within a UIProvider')
    }

    return context;
}
