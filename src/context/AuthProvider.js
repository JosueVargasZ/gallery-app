import React, { createContext, useContext, useReducer } from 'react'

//context for authentication 
const AuthContext = createContext();
// Reducer for the authentication in firebase
const authReducer = (state, action) => {
    switch(action.type) {
        case 'login':
            return {
                uid: action.payload.uid,
                name: action.payload.displayName,
                photoURL: action.payload.photoURL
            }
        case 'logout':
            return {}
        default:
            return state;
    }
}
// Component for providing the context and nesting the application 
export const AuthProvider = ({ children }) => {

    const [state, dispatch] = useReducer(authReducer, {})

    return (
        <AuthContext.Provider value={{ user: state, authDispatch: dispatch }} >
            {children}
        </AuthContext.Provider>
    )
}

// Custom hook for using the context
// This is the only way to access to the AuthContext
export const useAuth = () => {
    
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within a AuthProvider')
    }

    return context;
}
