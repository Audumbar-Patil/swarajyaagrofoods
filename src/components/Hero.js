import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title fade-in-up">
            Premium Indian Spices
            <span className="hero-subtitle">for Authentic Flavors</span>
          </h1>
          <p className="hero-description fade-in-up">
            Experience the rich heritage of Indian spices with Swarajya Agro Foods. 
            We bring you the finest quality spices sourced directly from the heart of India, 
            ensuring every dish tells a story of tradition and excellence.
          </p>
          <div className="hero-buttons fade-in-up">
            <a href="#spices" className="btn btn-primary">
              Explore Our Spices
            </a>
            <a href="#contact" className="btn btn-secondary">
              Get In Touch
            </a>
          </div>
        </div>
        <div className="hero-image">
          <div className="spice-bowl">
            <div className="spice spice-1"></div>
            <div className="spice spice-2"></div>
            <div className="spice spice-3"></div>
            <div className="spice spice-4"></div>
            <div className="spice spice-5"></div>
            <div className="spice spice-6"></div>
          </div>
        </div>
      </div>
      <div className="hero-wave">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
