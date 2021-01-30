import React, { useState, useEffect} from 'react';

import AuthContext from './AuthContext';
import app from  '../../firebaseConfig';

export const AuthProvider = ({ children }) => {
    const [user, setUser] =  useState(null);

    useEffect(() => {
        app.auth().onAuthStateChanged(setUser);
    }, [])

    return (
        <AuthContext.Provider value = {{ user }}>
            {children}
        </AuthContext.Provider>
    );
};