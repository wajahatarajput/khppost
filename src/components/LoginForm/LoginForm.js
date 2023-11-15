import React, { useState } from 'react'
import PasswordField from '../PasswordField/PasswordField'

const LoginForm = () => {
    const [password,setPassword]=useState('');
    
    const submitHandeler=(event)=>{
        event.preventDefault();
    }

  return (
    <>
    <form className='LoginForm' onSubmit={submitHandeler}>
    <input className='form-control border border-rounded my-2' type='email' placeholder='Email'/>
    <PasswordField placeholder={'Password'}  handlePasswordChange={setPassword}/>
    <input className='btn btn-outline-primary btn-block my-2' type='button' value={'Login'}/>
    </form>
    </>
  )
}

export default LoginForm