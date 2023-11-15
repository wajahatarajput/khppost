import React from 'react'
import Card from "../components/Card/"
import LoginForm from "../components/LoginForm/LoginForm";

function LoginFeature(){
  return ( 
  <div>
    <Card heading="Login Now">
      <LoginForm />
    </Card>
    </div>
  )
}

export default LoginFeature
