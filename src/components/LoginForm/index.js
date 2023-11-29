import React, { useState } from 'react';
import PasswordField from '../PasswordField';
import useUsersProvider from '../../providers/UsersProvider/hook';
import useAuth from '../../providers/AuthProvider/useAuth';

const LoginForm = () => {
  const [password, setPassword] = useState('');
  console.log(password)

  const { users } = useUsersProvider();
  const { token , setUserContext } = useAuth();
  const submitHandler = (event)=>{
    event.preventDefault(); // stops the page from refresh
    const data = users.filter((user) => {
      return user?.email === event.target[0].value && user?.password === event.target[1].value;
    })
    
    data?.length > 0 && setUserContext(data[0]);

  }

  console.log(token)

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
