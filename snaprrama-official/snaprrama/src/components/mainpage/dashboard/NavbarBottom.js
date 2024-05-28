import React, { useState } from 'react';
import logo from './snapprama.png';
import { Link } from 'react-router-dom';



const NavbarBottom = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar-bottom">
      <div className="navbar-brand">
  
      Created by: Allan Andrei Dantes, Allan Gutierrez, Jimuel Aala, Lhance Ponce, Julius Uy
      </div>
    </nav>
  );
};

export default NavbarBottom;