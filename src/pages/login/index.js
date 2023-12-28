import React from 'react'
import { LoginFeature } from '../../features';
import { AppLayout } from '../../component';
import { useAuth } from '../../providers';
import { Navigate } from 'react-router-dom';

const LoginPage = () => {


  const { cookies } = useAuth();
  if (cookies.get('auth')) {
    return <Navigate to={'/browserposts'} />
  }

  return (
    <AppLayout>
      <LoginFeature />
    </AppLayout>
  )
}

export default LoginPage;