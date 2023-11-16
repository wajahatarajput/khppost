import React, { useState } from 'react';
import PasswordField from '../PasswordField/PasswordField';

import './Registerform.css'

const RegisterForm = () => {

  const [showPassword, setShowPassword] = useState('password');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');


  const toggleShowPassword = () => {
    setShowPassword(showPassword === 'password' ? 'text' : 'password');
  }

  const submitHandeler = (event) => {
    event.preventDefault(); // stops the page from refresh

  }
  return (
    <form className='register-form' onSubmit={submitHandeler}>
      <input className='form-control border border-rounded my-2' type='text' placeholder='First Name' />
      <input className='form-control border border-rounded my-2' type='text' placeholder='Last Name' />
      <input className='form-control border border-rounded my-2' type='email' placeholder='Email' />
      <PasswordField placeholder={'Password'} handlePasswordChange={setPassword} />
      <PasswordField placeholder={'Confirm Password'} handlePasswordChange={setConfirmPassword} />
      <input className='form-control border border-rounded my-2' type='date' />
      <div className='flu'>
        <input className='btn btn-outline-primary btn-block my-2' type='submit' value={'Register'} />
        <button className='btn btn-outline-primary btn-block my-2'><a href='/login'>Login</a> </button>
      </div>
    </form>
  )
}

export default RegisterForm