import React, { useState } from 'react'
import PasswordField from '../PasswordField/PasswordField';
const Login = () => {

    const [showPassword,setShowPassword] = useState('password');
    const [password,setPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');
    
    const toggleShowPassword = ()=>{
      setShowPassword(showPassword === 'password' ? 'text' : 'password');
    }
  
  const submitHandeler = (event)=>{
    event.preventDefault(); // stops the page from refresh
  
  }
  return (
    <div>
      <form className='register-form' onSubmit={submitHandeler}>
        <input className='form-control border border-rounded my-2' type='email' placeholder='Email' />
        <PasswordField placeholder={'Password'} handlePasswordChange={setPassword} />
        <PasswordField placeholder={'Confirm Password'} handlePasswordChange={setConfirmPassword} />
        <div>
          <input className='btn btn-outline-primary btn-block my-2' type='submit' value={'Login'} />
        </div>
      </form>
    </div>
  )
}

export default Login