import React, { useState } from 'react';
import PasswordField from '../PasswordField/PasswordField';

const LoginForm = () => {

  const [showPassword,setShowPassword] = useState('password');
  const [password,setPassword] = useState('');

  const toggleShowPassword = ()=>{
    setShowPassword(showPassword === 'password' ? 'text' : 'password');
  }

  const submitHandler = (event)=>{
  event.preventDefault(); // stops the page from refresh

  }

  return (
      <form className='register-form form' onSubmit={submitHandler}>
      <input className='form-control border border-rounded my-2' type='email' placeholder='Email'/>
      <PasswordField placeholder={'Password'} handlePasswordChange={setPassword}/>
      </form>
  )
}

export default LoginForm;
