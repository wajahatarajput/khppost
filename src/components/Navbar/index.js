import React from 'react';
import Links from '../Links/index';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
  <Links Links={'https://www.google.com'}  Title={'NavBar'}  />
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
                <Links Links={'https://www.google.com'}  Title={'Google'}  />
        </li>
        <li className="nav-item">
        <Links Links={'https://www.facebook.com'}  Title={'Facebook'}  />
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><Links Links={'https://www.google.com'}  Title={'Google'}  /></li>
            <li><Links Links={'https://www.google.com'}  Title={'Google'}  /></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Links Links={'https://www.google.com'}  Title={'Google'}  /></li>
          </ul>
        </li>
        <li className="nav-item">
        <Links Links={'https://www.youtube.com'}  Title={'Youtube'}  />
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
