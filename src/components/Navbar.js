import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="logo-text">Swarajya</span>
          <span className="logo-subtitle">Agro Foods</span>
        </Link>
        
        <div className="menu-icon" onClick={toggleMenu}>
          <span className={isMenuOpen ? 'fas fa-times' : 'fas fa-bars'}></span>
        </div>
        
        <ul className={isMenuOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-links" onClick={() => setIsMenuOpen(false)}>
              About Us
            </Link>
          </li>
          <li className="nav-item">
            <a href="#spices" className="nav-links" onClick={() => setIsMenuOpen(false)}>
              Our Spices
            </a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-links" onClick={() => setIsMenuOpen(false)}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
