import React from 'react';
import './Features.css';

const Features = () => {
  const features = [
    {
      icon: '🌾',
      title: 'Premium Quality',
      description: 'We source only the finest spices from trusted farmers across India, ensuring superior quality and authentic flavors.'
    },
    {
      icon: '🚚',
      title: 'Fast Delivery',
      description: 'Get your spices delivered fresh to your doorstep with our reliable and fast delivery network across the country.'
    },
    {
      icon: '🔒',
      title: 'Quality Assurance',
      description: 'Every batch undergoes rigorous testing to ensure purity, freshness, and adherence to international quality standards.'
    },
    {
      icon: '🌱',
      title: 'Organic & Natural',
      description: 'Our spices are naturally grown without harmful pesticides, preserving their authentic taste and health benefits.'
    }
  ];

  return (
    <section className="features section">
      <div className="container">
        <h2 className="section-title fade-in-up">Why Choose Swarajya Agro Foods?</h2>
        <p className="section-subtitle fade-in-up">
          We are committed to bringing you the best quality spices with exceptional service and care.
        </p>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="feature-card card fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="feature-icon">
                {feature.icon}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
