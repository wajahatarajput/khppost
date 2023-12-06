import React, { useState } from 'react';

const LoginComponent = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isSignUpActive, setIsSignUpActive] = useState(false);

  const handleTogglePassword = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleToggleForm = () => {
    setIsSignUpActive(!isSignUpActive);
  };

    return (
      <div className='main-cover'>
    <div className={`containerMain ${isSignUpActive ? 'active' : ''}`}>
      <div className="forms">
        <div className={`form login ${isSignUpActive ? 'd-none' : 'active d-block'}`}>
          <span className="title">Login</span>
          <form action="#">
            <div className="input-field">
              <input type="text" placeholder="Enter your email" required />
              <i className="uil uil-envelope icon"></i>
            </div>
            <div className="input-field">
              <input
                type={isPasswordVisible ? 'text' : 'password'}
                className="password"
                placeholder="Enter your password"
                required
              />
              <i className="uil uil-lock icon"></i>
              <i
                className={`uil ${
                  isPasswordVisible ? 'uil-eye' : 'uil-eye-slash'
                } showHidePw`}
                onClick={handleTogglePassword}
              ></i>
            </div>
            <div className="checkbox-text">
              <div className="checkbox-content">
                <input type="checkbox" id="logCheck" />
                <label htmlFor="logCheck" className="text">
                  Remember me
                </label>
              </div>

              <a href="#" className="text">
                Forgot password?
              </a>
            </div>
            <div className="input-field button">
              <input type="button" value="Login" />
            </div>
          </form>
          <div className="login-signup">
            <span className="text">
              Not a member?
              <a href="#" className="text signup-link" onClick={handleToggleForm}>
                Signup Now
              </a>
            </span>
          </div>
        </div>
        <div className={`form signup ${isSignUpActive ? 'active d-block' : 'd-none'}`}>
          <span className="title">Registration</span>
          <form action="#">
            <div className="input-field">
              <input type="text" placeholder="Enter your name" required />
              <i className="uil uil-user"></i>
                </div>
                <div className="input-field">
              <input type="text" placeholder="Enter your nick name" required />
              <i className="uil uil-user"></i>
            </div>
            <div className="input-field">
              <input type="text" placeholder="Enter your email" required />
              <i className="uil uil-envelope icon"></i>
            </div>
            <div className="input-field">
              <input
                type={isPasswordVisible ? 'text' : 'password'}
                className="password"
                placeholder="Create a password"
                required
              />
              <i className="uil uil-lock icon"></i>
            </div>
            <div className="input-field">
              <input
                type={isPasswordVisible ? 'text' : 'password'}
                className="password"
                placeholder="Confirm a password"
                required
              />
              <i className="uil uil-lock icon"></i>
              <i
                className={`uil ${
                  isPasswordVisible ? 'uil-eye' : 'uil-eye-slash'
                } showHidePw`}
                onClick={handleTogglePassword}
              ></i>
            </div>
            <div className="checkbox-text">
              <div className="checkbox-content">
                <input type="checkbox" id="termCon" />
                <label htmlFor="termCon" className="text">
                  I accepted all terms and conditions
                </label>
              </div>
            </div>
            <div className="input-field button">
              <input type="button" value="Signup" />
            </div>
          </form>
          <div className="login-signup">
            <span className="text">
              Already a member?
              <a href="#" className="text login-link" onClick={handleToggleForm}>
                Login Now
              </a>
            </span>
          </div>
        </div>
      </div>
            </div>
            </div>
  );
};

export default LoginComponent;
