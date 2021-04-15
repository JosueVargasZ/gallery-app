import React, { createContext, useReducer } from 'react'

export const AuthContext = createContext();

const authReducer = (state, action) => {
    switch(action.type) {
        case 'login':
            return {
                uid: action.payload.uid,
                name: action.payload.displayName,
            }
        case 'logout':
            return {}
        default:
            return state;
    }
}
 
export const AuthProvider = ({ children }) => {

    const [user, dispatch] = useReducer(authReducer, {})

    return (
        <AuthContext.Provider value={{ user, dispatch }} >
            {children}
        </AuthContext.Provider>
    )
}
