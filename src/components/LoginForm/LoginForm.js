// import React from 'react'
import React, { useState } from 'react';
import PasswordField from '../PasswordField/PasswordField';
import './Login.css';

  const LoginForm = () => {

     const [password,setPassword] = useState('');
  
  return (
    <div>
         
          <form>
          <input type='text' placeholder='UserName'/>
          <PasswordField placeholder={'Password'} value={password} handlePasswordChange={setPassword}/>
          <p>Forget Password?</p>
          <input type='submit' value={'Login'}/>
          </form>
         
    </div>
  )
}

export default LoginForm
