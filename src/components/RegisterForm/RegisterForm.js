import React from 'react';
import './RegisterForm.css'

const RegisterForm = () => {

const submitHandeler = (event)=>{
}


  return (
    <form className='register-form' onSubmit={submitHandeler}>
      <input type='text' placeholder='First Name'/>
      <input type='text' placeholder='Last Name'/>
      <input type='email' placeholder='Email'/>
      <input type='password' placeholder='Password'/>
      <input type='password' placeholder='Confirm Password'/>
      <input type='date' />
      <div className='btn_cont'>
      <input type='submit' value={'Register'}/>
      </div>
    </form>
  )
}

export default RegisterForm