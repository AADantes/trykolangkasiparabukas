import React, { useState } from 'react';
import logo from './snapprama.png';
import { Link } from 'react-router-dom';



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="/">
          <img
            src={logo}
            alt="Brand Logo"
            className="navbar-logo"
            style={{ width: '118px', height: '18px' }}
           
          />
        </a>
      </div>
      <button className={`menu-toggle ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        ☰
      </button>
      <div className={`navbar-links ${isOpen ? 'open' : ''}`}>

         <div className="navbar-buttons">

          <Link to= "/login-signup">

          <button className="login-button">Login</button>
          <button className="signup-button">Signup</button>

          </Link>

          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;