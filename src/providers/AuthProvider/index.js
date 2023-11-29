import React, { useState } from 'react'
import { AuthContext } from './context';

const AuthProvider = ({ children }) => {

    const [token, setToken] = useState({});

    const setUserContext = (user) => {
        setToken(user)
    }


  return (
      <AuthContext.Provider value={{
          token,
          setUserContext
    }}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;
