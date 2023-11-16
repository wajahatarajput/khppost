import React, { useState } from 'react';
import PasswordField from '../PasswordField/PasswordField';

const LoginForm = () => {
  const [password, setPassword] = useState('');
  console.log(password)

  const submitHandler = (event)=>{
  event.preventDefault(); // stops the page from refresh

  }

  return (
      <form className='register-form form' onSubmit={submitHandler}>
        <input className='form-control border border-rounded my-2' type='email' placeholder='Email'/>
        <PasswordField placeholder={'Password'} handlePasswordChange={setPassword} />
        <div>
          <input className='btn btn-outline-primary btn-block my-2' type='submit' value={'Login'}/>
        </div>
        <hr />
        {/* Link to register */}
      </form>
  )
}

export default LoginForm;
