import React, { createContext } from 'react';
import app from '../../firebase.config';
import { getAuth } from "firebase/auth";

export const AuthContext = createContext(null);
const auth = getAuth(app)
const AuthProvider = ({children}) => {

const authInfo = {}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;