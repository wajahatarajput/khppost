import React, { useState } from 'react';
import PasswordField from '../PasswordField';
import useRegisteredUsers from './hooks/useRegisteredUsers';
import useUsersProvider from '../../providers/UsersProvider/hook';
// import './RegisterForm.css'

const RegisterForm = () => {
  // condition / value inside a component

  const { users, addUserData } = useUsersProvider();

  console.log(users)
  
  // const {
  //   addUserData,
  //   UsersTable
  // } = useRegisteredUsers();
  const [showPassword,setShowPassword] = useState('password');
  const [password,setPassword] = useState('');
  const [confirmPassword,setConfirmPassword] = useState('');
  

  const toggleShowPassword = ()=>{
    setShowPassword(showPassword === 'password' ? 'text' : 'password');
  }


  return (
    <form className='register-form' onSubmit={addUserData}>
      <input className='form-control border border-rounded my-2' type='text' placeholder='First Name'/>
      <input className='form-control border border-rounded my-2' type='text' placeholder='Last Name'/>
      <input className='form-control border border-rounded my-2' type='email' placeholder='Email'/>
      <PasswordField placeholder={'Password'} handlePasswordChange={setPassword}/>
      <PasswordField placeholder={'Confirm Password'} handlePasswordChange={setConfirmPassword}/>
      <input className='form-control border border-rounded my-2' type='date' />
      <div>
        <input className='btn btn-outline-primary btn-block my-2' type='submit' value={'Register'}/>
      </div>
      <hr />
      {/* Table */}
      {/* {UsersTable} */}
    </form>

  )
}

export default RegisterForm