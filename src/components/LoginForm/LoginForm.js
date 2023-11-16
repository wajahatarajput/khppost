import React, { useState } from 'react';
import PasswordField from '../PasswordField/PasswordField';
import { Link } from 'react-router-dom';

const LoginForm = () => {

  const [showPassword, setShowPassword] = useState('password');
  const [password, setPassword] = useState('');

  const toggleShowPassword = () => {
    setShowPassword(showPassword === 'password' ? 'text' : 'password');
  }

  const submitHandler = (event) => {
    event.preventDefault(); // stops the page from refresh

  }

  return (
    <form className='register-form form' onSubmit={submitHandler}>
      <input className='form-control border border-rounded my-2' type='email' placeholder='Email' />
      <PasswordField placeholder={'Password'} handlePasswordChange={setPassword} />
      <div>
        <input className='btn btn-outline-primary btn-block my-2' type='submit' value={'Login'}/>
      </div>
      <hr/>
      <div>
        <Link to="/Register">
          <button className='btn text-white fw-bold boder bg-danger'>Register</button>
        </Link>
      </div>
    </form>
  )
}

export default LoginForm;
