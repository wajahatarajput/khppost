import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Navbar</a>
                <div className='hi'>
                    <li className='link'><a href='#'>Home</a></li>
                    <li><a href='#'>Services</a></li>
                    <li><a href='#'>About</a></li>
                    <li><a href='#'>Contact</a></li>
                </div>

            </nav>
        </div>
    )
}

export default Navbar
