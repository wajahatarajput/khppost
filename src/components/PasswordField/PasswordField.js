import React, { useState } from 'react'

const PasswordField = (props) => {
    const {placeholder, handlePasswordChange} = props;

const [showPassword,setShowPassword] = useState('password');

const toggleShowPassword = ()=>{
    setShowPassword(showPassword === 'password' ? 'text' : 'password');
}

  return (
    <div className='my-2 form-control d-flex justify-content-between align-items-center border border-rounded'>
        <input onChange={(e)=>handlePasswordChange(e.target.value)} className='border border-0' type={showPassword} placeholder={placeholder}/>
        <i class="fa fa-eye" onClick={toggleShowPassword}></i>
    </div>
  )
}

export default PasswordField