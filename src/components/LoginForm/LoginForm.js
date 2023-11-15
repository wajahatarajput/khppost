import React, { useState } from 'react';
import PasswordField from '../PasswordField/PasswordField';

const LoginForm = () => {

  const [showPassword,setShowPassword] = useState('password');
  const [password,setPassword] = useState('');

  const toggleShowPassword = ()=>{
    setShowPassword(showPassword === 'password' ? 'text' : 'password');
  }

  const submitHandeler = (event)=>{
  event.preventDefault(); // stops the page from refresh

  }

  return (
      <form className='register-form' onSubmit={submitHandeler}>
      <input className='form-control border border-rounded my-2' type='text' placeholder='User Name'/>
      <input className='form-control border border-rounded my-2' type='email' placeholder='Email'/>
      <PasswordField placeholder={'Password'} handlePasswordChange={setPassword}/>
      </form>
  )
}

export default LoginForm;
