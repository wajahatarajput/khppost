import React from 'react'
import { useAuth } from '../../providers';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoutes = ({ children }) => {
    const { cookies } = useAuth();
    console.log(cookies.get('auth'))

    if (!cookies.get('auth'))
        return <Navigate to={'/'} />

    return (
        <>
            {children}
        </>
    )
}

export default ProtectedRoutes
