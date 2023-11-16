import React, { useState } from 'react';
import PasswordField from '../PasswordField/PasswordField';
import Links from '../Links/index'


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
      <PasswordField placeholder={'Password'} handlePasswordChange={setPassword} />
      <div>
        <input className='btn btn-outline-primary btn-block my-2' type='submit' value={'Register'}/>
      </div>
      <hr/>
      <div className='d-flex justify-content-center'>
        <p className="mx-2 text-decoration-underline">Not SignUp?</p>
        <Links link={'/RegisterPage'} title={"Sign Up"} />
      </div>
      </form>
  )
}

export default LoginForm;
