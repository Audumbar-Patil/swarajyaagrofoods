import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <span className="logo-text">Swarajya</span>
              <span className="logo-subtitle">Agro Foods</span>
            </div>
            <p className="footer-description">
              Bringing you the finest quality Indian spices with authentic flavors 
              and traditional heritage. Experience the taste of India with every dish.
            </p>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Facebook">
                📘
              </a>
              <a href="#" className="social-link" aria-label="Instagram">
                📷
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                🐦
              </a>
              <a href="#" className="social-link" aria-label="LinkedIn">
                💼
              </a>
            </div>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="#spices">Our Spices</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-title">Our Products</h3>
            <ul className="footer-links">
              <li><a href="#">Turmeric</a></li>
              <li><a href="#">Cardamom</a></li>
              <li><a href="#">Cumin</a></li>
              <li><a href="#">Coriander</a></li>
              <li><a href="#">Red Chili</a></li>
              <li><a href="#">Black Pepper</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-title">Contact Info</h3>
            <div className="contact-info">
              <p>📧 info@swarajyaagrofoods.com</p>
              <p>📞 +91 98765 43210</p>
              <p>📍 Mumbai, Maharashtra 400001</p>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; 2024 Swarajya Agro Foods. All rights reserved.</p>
            <div className="footer-bottom-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
