import React, { useContext } from 'react'
import { AuthContext } from './context'

const useAuth = () => {
    const {
        token,
        setUserContext
    } = useContext(AuthContext);

  return {
        token,
        setUserContext
    }
}

export default useAuth
