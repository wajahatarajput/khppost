import React, { useState } from 'react';
import PasswordField from '../PasswordField/PasswordField';
import './Registerform.css'

const LoginForm = () => {

    const [showPassword, setShowPassword] = useState('password');
    const [password, setPassword] = useState('');


    const toggleShowPassword = () => {
        setShowPassword(showPassword === 'password' ? 'text' : 'password');
    }

    const submitHandeler = (event) => {
        event.preventDefault(); // stops the page from refresh

    }
    return (
        <form className='register-form' onSubmit={submitHandeler}>
            <input className='form-control border border-rounded my-2' type='email' placeholder='Email' />
            <PasswordField placeholder={'Password'} handlePasswordChange={setPassword} />
            <div className='flu'>
                <input className='btn btn-outline-primary btn-block my-2' type='submit' value={'Login'} />
                <button className='btn btn-outline-primary btn-block my-2'><a href='/register'>Register</a> </button>
            </div>
        </form>
    )
}

export default LoginForm