import React, { useCallback, useState } from 'react'
import { useUsers } from '../../hooks/useUsers';

const Update = () => {
    const [image, setImage] = useState(null);
    const { handleRegisterUser, loginUser } = useUsers();

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
    

    const handleSubmitReg = useCallback((e) => {
        e.preventDefault();
    
        if (e.target[3].value === e.target[4].value) {
          const user = {
            displayName: e.target[0].value,
            nickName: e.target[1].value,
            email: e.target[2].value,
            dob: new Date(e.target[4].value),
            profile: image
          }
    
          console.log(user, e.target[5].value)
    
          handleRegisterUser(user)
        } else {
          alert(`Passwords Doesn't Match!!`);
        }
      }, [handleRegisterUser, image])

    return (
    <div className="forms">
    <div className='form signup d-block'>
    <span className="title">Update</span>
    <form onSubmit="">
      <div className="input-field">
        <input type="text" placeholder="Enter your name" required />
        <i className="uil uil-user"></i>
      </div>
      <div className="input-field">
        <input type="text" placeholder="Enter your nick name" required />
        <i className="uil uil-user"></i>
      </div>
      <div className="input-field">
        <input type="email" placeholder="Enter your email" required />
        <i className="uil uil-envelope icon"></i>
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
            </div>
            </div>
  )
}

export default Update
