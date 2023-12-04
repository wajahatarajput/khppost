import React from "react";
import lion from './lion.jpg';

const AppLayout = ({ children }) => {
  return (
    <>
      <nav className="navbar navbar-light navbar-expand-md py-3">
        <div className="container">
          <a className="navbar-brand d-flex align-items-center" href="#">
            <span
                          className="bs-icon-sm bs-icon-rounded bs-icon-primary d-flex justify-content-center align-items-center me-2 bs-icon"
                          style={{ background: 'var(--bs-navbar-active-color)' }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                fill="currentColor"
                viewBox="0 0 16 16"
                className="bi bi-signpost-2"
              >
                <path d="M7 1.414V2H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h5v1H2.5a1 1 0 0 0-.8.4L.725 8.7a.5.5 0 0 0 0 .6l.975 1.3a1 1 0 0 0 .8.4H7v5h2v-5h5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H9V6h4.5a1 1 0 0 0 .8-.4l.975-1.3a.5.5 0 0 0 0-.6L14.3 2.4a1 1 0 0 0-.8-.4H9v-.586a1 1 0 0 0-2 0zM13.5 3l.75 1-.75 1H2V3h11.5zm.5 5v2H2.5l-.75-1 .75-1H14z"></path>
              </svg>
            </span>
                      <span style={{ fontWeight: 'bold', fontFamily: 'Abril Fatface, serif' }}>
              KHP POST
            </span>
          </a>
          <button
            data-bs-toggle="collapse"
            className="navbar-toggler"
            data-bs-target="#navcol-2"
          >
            <span className="visually-hidden">Toggle navigation</span>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="py-2 py-md-0 collapse navbar-collapse d-flex flex-column flex-md-row d-md-block" id="navcol-2">
                      <input type="search" className="form-control col-xs-2" style={{ transform: 'translate(0px)' }} />
            <a
              className="btn btn-dark ms-md-2"
              role="button"
              href="#"
              style={{
              transform: 'translate(0px) scale(0.81)'
            }}
            >
              Search
            </a>
            <ul className="navbar-nav align-items-center">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  href="#"
                  style={{
                  fontWeight: 'bold',
                  backdropFilter: 'opacity(1)',
                  backdropFilter: 'opacity(1)'
                }}
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                                  className="nav-link"
                                  href="#"
                                  style={{ fontWeight: 'bold', color: 'var(--bs-navbar-brand-color)' }}
                >
                  Explore
                </a>
              </li>
              <li className="nav-item">
                <a
                                  className="nav-link"
                                  href="#"
                                  style={{fontWeight: 'bold', color: 'var(--bs-navbar-brand-color)'}}
                >
                    SignUp
                </a>
              </li>
              <li className="nav-item">
                <a
                                  className="nav-link"
                                  href="C:\Users\Ali Computers\Desktop\khppost\src\component\AppLayout\SignUp\SignUpForm.js"
                                  style={{fontWeight: 'bold', color: 'var(--bs-navbar-brand-color)'}}
                                  
                >
                  Profile
                </a>
              </li>
              <div class="btn-group">
                <img src={lion}
                  alt="profile image"
                  class="dropdown-toggle rounded-circle"
                  style={{height:'50px', width:'50px'}}
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                />
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      Settings
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
            </ul>
          </div>
        </div>
      </nav>
      <main>
        {children}
      </main>
      
      

    </>
  );
};

export default AppLayout