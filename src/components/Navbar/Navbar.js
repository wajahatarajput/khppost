
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import RegisterForm from '../RegisterForm/RegisterForm';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/">Navbar</Link>
                <div className='hi'>
                    <li className='link'><Link to="/">Home</Link></li>
                    <li><Link to="/register">Register</Link></li>
                    <li><Link to="/login">Login</Link></li>

                </div>
            </nav>
        </div>
    );
}

export default Navbar;
