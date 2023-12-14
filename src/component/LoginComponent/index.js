import React, { useCallback, useEffect, useState } from 'react';
import { useUsers } from '../../hooks/useUsers';
import { useAuth } from '../../providers';
import { useNavigate } from 'react-router-dom';

const LoginComponent = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isSignUpActive, setIsSignUpActive] = useState(false);
  const [image, setImage] = useState(null);
  const { cookies } = useAuth();
  const navigate = useNavigate();
  const { handleRegisterUser, loginUser } = useUsers();

  useEffect(() => {
    console.log(cookies.get('auth'))
    if (cookies.get('auth')) {
      navigate('/browserposts')
    }
  }, [cookies, navigate])

  const handleTogglePassword = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleToggleForm = () => {
    setIsSignUpActive(!isSignUpActive);
  };

  const handleImageUpload = useCallback((e) => {
    const file = e.target.files[0];
    setImage(setImage);
    const reader = new FileReader();
    reader.onload = function (e) {
      const imageDataURI = e.target.result;
      setImage(imageDataURI);
    };
    reader.readAsDataURL(file);
  }, []);

  const handleLoginUser = useCallback((e) => {
    e.preventDefault();
    const user = {
      email: e.target[0].value,
      password: e.target[1].value
    }
    loginUser(user)
  }, [loginUser])

  const handleSubmitReg = useCallback((e) => {
    e.preventDefault();

    if (e.target[3].value === e.target[4].value) {
      const user = {
        displayName: e.target[0].value,
        nickName: e.target[1].value,
        email: e.target[2].value,
        password: e.target[3].value,
        dob: new Date(e.target[5].value),
        profile: image
      }

      console.log(user, e.target[5].value)

      handleRegisterUser(user)
    } else {
      alert(`Passwords Doesn't Match!!`);
    }
  }, [handleRegisterUser, image])

  return (
    <div className='main-cover'>
      <div className={`containerMain ${isSignUpActive ? 'active' : ''}`}>
        <div className="forms">
          <div className={`form login ${isSignUpActive ? 'd-none' : 'active d-block'}`}>
            <span className="title">Login</span>
            <form onSubmit={handleLoginUser}>
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
                  className={`uil ${isPasswordVisible ? 'uil-eye' : 'uil-eye-slash'
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
                <input type="submit" value="Login" />
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
            <form onSubmit={handleSubmitReg}>
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
                  className={`uil ${isPasswordVisible ? 'uil-eye' : 'uil-eye-slash'
                    } showHidePw`}
                  onClick={handleTogglePassword}
                ></i>
              </div>

              <div className='input-field'>
                <input type='date' max="2000-01-01" required />
              </div>
              <div style={{ background: `url(${image})`, height: '250px' }}>
                <label className='fa fa-upload upload-icon' htmlFor={'file'} />
                <input id='file' type="file" onChange={handleImageUpload} hidden />
              </div>
              <div className="input-field button">
                <input type="submit" value="Signup" />
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
