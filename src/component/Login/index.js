// Import necessary dependencies
import React, { useState } from 'react';
// import './login.css'

// Create the Login component
const Login = () => {
  // Define state variables for username and password
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform authentication logic here (e.g., send data to a server)
    console.log('Username:', username);
    console.log('Password:', password);
    // Reset the form fields
    setUsername('');
    setPassword('');
  };

  
  return (
    <div className="container-fluid">
    <div className="row mh-100vh">
        <div className="col-10 col-sm-8 col-md-6 col-lg-6 offset-1 offset-sm-2 offset-md-3 offset-lg-0 align-self-center d-lg-flex align-items-lg-center align-self-lg-stretch bg-white p-5 rounded rounded-lg-0 my-5 my-lg-0" id="login-block">
            <div className="m-auto w-lg-75 w-xl-50">
                <h2 className="text-info fw-light mb-5">KHP POST</h2>
                <form>
                    <div className="form-group mb-3"><label className="form-label text-secondary">Email</label><input className="form-control" type="text" required="" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}$" inputmode="email"/></div>
                    <div className="form-group mb-3"><label className="form-label text-secondary">Password</label><input className="form-control" type="password" required=""/></div><button className="btn btn-info mt-2" type="submit">Log In</button>
                </form>
                <p className="mt-3 mb-0"><a className="text-info small" href="#">Forgot your email or password?</a></p>
            </div>
        </div>
    </div>
</div>
  );
};
export default Login;
