import React, { useCallback, useState } from "react";
import { useAuth } from "../../providers";
import { useLocation } from "react-router-dom";
import { useUsers } from "../../hooks/useUsers";

const Settings = () => {
  const location = useLocation();
  const { id, user } = location.state || {};
  const [image, setImage] = useState(null);
  const { cookies } = useAuth();
  const { handleUpdateUser } = useUsers();

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

const handleSubmit = useCallback(async (e) => {
  e.preventDefault();

  const user = {
    displayName: e.target[0].value,
    nickName: e.target[1].value,
    email: e.target[2].value,
    // password: e.target[3].value,
    dob: new Date(e.target[5].value),
    profile: image
  }



    await handleUpdateUser(id, user)
}, [image, handleUpdateUser, id, cookies, user]);

  return (
    <>
      <div className="container profile profile-view" id="profile" style={{marginTop:'4rem'}}>
        <div className="row">
          <div className="col-md-12 alert-col relative">
            <div
              className="alert alert-info alert-dismissible absolue center"
              role="alert"
            >
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
              ></button>
              <span>Settings updated successfully</span>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="row profile-row">
            <div className="col-md-4 relative" >
              <div className="avatar" style={{ background: `url(${image})`, height: '250px' }}>
                <div className="avatar-bg center"></div>
              </div>
              <input
                className="form-control form-control"
                type="file"
                name="avatar-file"
                onChange={handleImageUpload}
                   style={{
                        borderBottom: '1px solid #ced4da'
                      }}
              />
            </div>
            <div className="col-md-8">
              <h1 style={{ color: "rgb(35, 38, 41)" }}>Settings</h1>
              <hr />
              <div className="row">
                <div className="col-sm-12 col-md-6">
                  <div className="form-group mb-3">
                    <label className="form-label">Name</label>
                    <input
                      className="form-control"
                      type="text"
                      name="firstname"
                      style={{
                        borderBottom: '1px solid #ced4da'
                      }}
                      value={user?.displayName}
                    />
                  </div>
                </div>
                <div className="col-sm-12 col-md-6">
                  <div className="form-group mb-3">
                    <label className="form-label">Nick Name</label>
                    <input
                      className="form-control"
                      type="text"
                      name="lastname"
                         style={{
                        borderBottom: '1px solid #ced4da'
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="form-group mb-3">
                <label className="form-label">Email </label>
                <input
                  className="form-control"
                  type="email"
                  autocomplete="off"
                  required=""
                  name="email"
                     style={{
                        borderBottom: '1px solid #ced4da'
                      }}
                />
              </div>
              <div className="row">
                <div className="col-sm-12 col-md-6">
                  <div className="form-group mb-3">
                    <label className="form-label">DOB</label>
                    <input
                      className="form-control"
                      type="date"
                      max="2000-01-01"
                      name="password"
                      autocomplete="off"
                      required
                         style={{
                        borderBottom: '1px solid #ced4da'
                      }}
                    />
                  </div>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-md-12 content-right">
                  <button
                    className="btn btn-dark"
                    type="submit"
                    style={{ background: "rgb(13, 13, 13)", marginRight:'2rem' }}
                  >
                    Update
                  </button>
                  <button className="btn btn-danger form-btn" type="reset">
                    CANCEL
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};


export default Settings;