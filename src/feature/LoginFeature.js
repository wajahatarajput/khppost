import React from 'react'
import Card from '../components/Card/Card';
import LoginForm from '../components/RegisterForm/LoginForm';
import Navbar from '../components/Navbar/Navbar';


const LoginFeature = () => {
    return (
        <>
            <Navbar />
            <Card heading="Login">
                <LoginForm />
            </Card>
        </>
    )
}

export default LoginFeature;