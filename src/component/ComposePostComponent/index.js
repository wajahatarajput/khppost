import React, { useState } from 'react';

const ComposePostComponent = () => {
  const [image, setImage] = useState(null);

    return (
      <div className='main-cover'>
    <div className={`containerMain`}>
      <div className="forms">
        <div className={`form login`}>
          <span className="title">Compose Post </span>
              <form action="#">
                {
                  image ? 
              <div style={{background: `url(${image})`, height: '250px'}}>
                      <i className='fa fa-upload upload-icon' htmlFor={'file' } />
              </div>
                  :
                <div className="input-field">
                  <input id='file' type="file" required onChange={e=>setImage(URL.createObjectURL(e.target.files[0]))}/>
                  <i className="uil uil-envelope icon"></i>
                </div>
                }
            <div className="input-field">
              <input type="text" placeholder="Enter Text" required />
              <i className="uil uil-envelope icon"></i>
            </div>
            <div className="input-field">
              <input
                type='text'
                className="tags"
                placeholder="Enter Tags"
                required
              />
              <i className="uil uil-lock icon"></i>
            </div>
            <div className="input-field button">
              <input type="button" value="Create" />
            </div>
          </form>
        </div>
      </div>
            </div>
            </div>
  );
};

export default ComposePostComponent;
