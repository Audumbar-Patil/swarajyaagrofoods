import React from 'react';
import './AboutHero.css';

const AboutHero = () => {
  return (
    <section className="about-hero">
      <div className="about-hero-container">
        <div className="about-hero-content">
          <h1 className="about-hero-title fade-in-up">
            About Swarajya Agro Foods
          </h1>
          <p className="about-hero-description fade-in-up">
            Founded with a vision to bring authentic Indian spices to every kitchen, 
            Swarajya Agro Foods has been serving customers with premium quality spices 
            for over a decade. We believe that every meal should tell a story of tradition, 
            quality, and love.
          </p>
          <div className="about-hero-stats fade-in-up">
            <div className="stat">
              <span className="stat-number">10+</span>
              <span className="stat-label">Years of Excellence</span>
            </div>
            <div className="stat">
              <span className="stat-number">50+</span>
              <span className="stat-label">Spice Varieties</span>
            </div>
            <div className="stat">
              <span className="stat-number">1000+</span>
              <span className="stat-label">Happy Customers</span>
            </div>
          </div>
        </div>
        <div className="about-hero-image">
          <div className="spice-heritage">
            <div className="heritage-icon">🌶️</div>
            <div className="heritage-text">Indian Heritage</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
