import React from 'react'
import Card from '../components/Card/Card';
import RegisterForm from '../components/RegisterForm/RegisterForm';
import Navbar from '../components/Navbar/Navbar';


const RegisterFeature = () => {
  return (
    <>
      <Navbar />
      <Card heading="Register">
        <RegisterForm />
      </Card>
    </>

  )
}

export default RegisterFeature