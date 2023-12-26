import React, { useEffect, useState } from "react";
import lion from './lion.jpg';
import { AuthenticatedRoutes, AuthenticatedRoutesNames, UnauthenticatedRoutes, UnauthenticatedRoutesNames } from './../../utils';
import { NavLink, useLocation, useNavigate, useRouteError } from "react-router-dom";
import { useAuth } from "../../providers";
import { useUsers } from "../../hooks/useUsers";

const AppLayout = ({ children }) => {
  const { cookies } = useAuth();
  const { logout } = useUsers();
  const location = useLocation();
  const navigate = useNavigate();
  const [routesArray, setRoutesArray] = useState(cookies.get('auth') ? AuthenticatedRoutes : UnauthenticatedRoutes);
  const [routesNamesArray, setRoutesNamesArray] = useState(cookies.get('auth') ? AuthenticatedRoutesNames : UnauthenticatedRoutesNames);


  useEffect(() => {
    if (!cookies.get('auth')) {
      if (!location.pathname === '/browserposts')
        navigate('/')
    }
  }, [cookies, navigate, location])

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
            <input type="search" className="form-control input-field col-xs-2" style={{ transform: 'translate(0px)', border: 'none', borderBottom: '1px solid black' }} />
            <a
              className="btn btn-dark ms-md-2"
              role="button"
              href="#"
              style={{
                transform: 'translate(0px) scale(0.81)',
                borderRadius: '65px'
              }}
            >
              Search
            </a>
            <ul className="navbar-nav align-items-center">
              {
                routesArray?.map((route, index) => {
                  if (route.path === '/editposts')
                    return <span key={index}></span>
                  else
                    return (
                      <li className="nav-item" key={index}>
                        <NavLink className="nav-link active" style={{
                          fontWeight: 'bold',
                          backdropFilter: 'opacity(1)',
                          backdropFilter: 'opacity(1)',
                          width: 'max-content'
                        }} to={route.path}>
                          {routesNamesArray[index]}
                        </NavLink>
                      </li>
                    )
                })
              }
              <div className="btn-group">
                <img src={lion}
                  alt="profile image"
                  className="dropdown-toggle rounded-circle"
                  style={{ height: '50px', width: '50px' }}
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                />
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Settings
                    </a>
                  </li>
                  <li>
                    <button className="dropdown-item" onClick={logout}>
                      Logout
                    </button>
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

export default AppLayout;
