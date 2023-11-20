import React from 'react';
import Links from '../Links';

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark navbar-expand-lg fixed-top bg-white portfolio-navbar gradient">
      <div className="container">
        <ul className="navbar-nav ms-auto">
        <Links className="navbar-brand logo" title={ 'KHPPOSTS' } link={'/'} />
      </ul>
              <button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navbarNav">
                  <span className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon"></span>
              </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <Links link={'/'} title={'Home'} />
              <Links link={'/register'} title={'Register'} />
              <Links link={'/login'} title={'Login'} />                      
            </ul>
        </div>
    </div>
</nav>
  )
}

export default Navbar
