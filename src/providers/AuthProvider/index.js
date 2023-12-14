import React, { useState } from 'react'
import { AuthContext } from './context';
import Cookies from 'universal-cookie';

const AuthProvider = ({ children }) => {
    const cookies = new Cookies(null, { path: '/' });

    const [user, setUser] = useState(null);

    return (
        <AuthContext.Provider value={{ user, setUser, cookies }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;
