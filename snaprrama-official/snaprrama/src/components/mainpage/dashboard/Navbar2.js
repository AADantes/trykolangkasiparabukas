import React, { useState } from 'react';
import logo from './snapprama.png';
import { Link } from 'react-router-dom';
import { useNavigate} from 'react-router-dom';
import axios from 'axios';

export default function Navbar2() {

    const [isOpen, setIsOpen] = useState(false);

    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();


    const handleSearch = async () => {
      try {
        const response = await axios.get('http://localhost:8000/search', { params: { username: searchTerm } });
        const results = response.data;
        navigate(`/search-user/`, { state: { searchTerm } }); // Pass searchTerm as a state
      } catch (error) {
        console.error(error);
      }
    };
    

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


    <div className="search-container">
        <input
          type="text"
          placeholder="Search..."
          className="search-input"
          style={{
            borderRadius: '20px',
            padding: '10px',
            width: '600px',
            border: '1px solid #ccc',
          }}
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <Link to = "/search-user">
        <button className="search-button" onClick={handleSearch} 
                  style={{
                    borderRadius: '20px',
                    padding: '10px',
                    width: '100px',
                    border: '1px solid #ccc',
                  }}>
          Search
        </button>
        </Link>

      </div>
            


    <button className={`menu-toggle ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
      ☰
    </button>
    <div className={`navbar-links ${isOpen ? 'open' : ''}`}>

       <div className="navbar-buttons">

        <Link to= "/">

        <button className="login-button">Logout</button>
        </Link>

        
      </div>
    </div>
  </nav>
);
}
