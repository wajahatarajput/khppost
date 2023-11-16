import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='container-fluid bg-success'>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <Link to="/" class="navbar-brand text-white fw-bold fs-3" href="#">KHPPOST</Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item ">
                <a class="nav-link text-white fw-bold" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white fw-bold" href="#">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white fw-bold" aria-disabled="true">Contact Us</a>
              </li>
            </ul>

            <div>
              <Link to="/login"><button className='btn text-white fw-bold boder bg-dark'>Login</button></Link>
              <Link to="/Register"><button className='btn text-white fw-bold bg-dark ms-2'>Register</button></Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
