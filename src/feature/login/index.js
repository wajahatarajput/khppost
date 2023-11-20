import React from 'react';
import LoginForm from "../../components/LoginForm/LoginForm";
import Card from '../../components/Card/Card';

function LoginFeature(){
  return ( 
    <Card heading="Login Now">
      <LoginForm />
    </Card>
  )
}

export default LoginFeature
