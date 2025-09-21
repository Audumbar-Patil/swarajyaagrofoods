import React from 'react';
import './SpicesShowcase.css';

const SpicesShowcase = () => {
  const spices = [
    {
      id: 1,
      name: 'Turmeric',
      description: 'Golden spice known for its anti-inflammatory properties and vibrant color. Essential for Indian curries and traditional medicine.',
      benefits: ['Anti-inflammatory', 'Antioxidant', 'Digestive aid'],
      color: '#FFD700',
      gradient: 'linear-gradient(135deg, #FFD700, #FFA500)'
    },
    {
      id: 2,
      name: 'Cardamom',
      description: 'The "Queen of Spices" with a sweet, floral aroma. Perfect for desserts, chai, and aromatic rice dishes.',
      benefits: ['Digestive health', 'Antioxidant', 'Breath freshener'],
      color: '#90EE90',
      gradient: 'linear-gradient(135deg, #90EE90, #32CD32)'
    },
    {
      id: 3,
      name: 'Cumin',
      description: 'Earthy and warm spice that forms the backbone of many Indian dishes. Essential for tempering and spice blends.',
      benefits: ['Iron rich', 'Digestive aid', 'Immune booster'],
      color: '#8B4513',
      gradient: 'linear-gradient(135deg, #8B4513, #A0522D)'
    },
    {
      id: 4,
      name: 'Coriander',
      description: 'Fresh citrusy flavor that pairs perfectly with cumin. Used both as seeds and fresh leaves in Indian cooking.',
      benefits: ['Vitamin C', 'Digestive aid', 'Anti-inflammatory'],
      color: '#228B22',
      gradient: 'linear-gradient(135deg, #228B22, #32CD32)'
    },
    {
      id: 5,
      name: 'Red Chili',
      description: 'Fiery spice that adds heat and depth to dishes. Available in various forms from mild to extremely hot.',
      benefits: ['Vitamin C', 'Metabolism boost', 'Pain relief'],
      color: '#DC143C',
      gradient: 'linear-gradient(135deg, #DC143C, #FF4500)'
    },
    {
      id: 6,
      name: 'Black Pepper',
      description: 'The "King of Spices" with sharp, pungent flavor. Enhances the absorption of other nutrients in food.',
      benefits: ['Nutrient absorption', 'Antioxidant', 'Digestive aid'],
      color: '#2F4F4F',
      gradient: 'linear-gradient(135deg, #2F4F4F, #696969)'
    }
  ];

  return (
    <section id="spices" className="spices-showcase section">
      <div className="container">
        <h2 className="section-title fade-in-up">Our Premium Spices</h2>
        <p className="section-subtitle fade-in-up">
          Discover our carefully curated collection of authentic Indian spices, 
          each selected for its superior quality and authentic flavor.
        </p>
        
        <div className="spices-grid">
          {spices.map((spice, index) => (
            <div 
              key={spice.id} 
              className="spice-card card fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div 
                className="spice-icon"
                style={{ background: spice.gradient }}
              >
                <div className="spice-emoji">
                  {spice.name === 'Turmeric' && '🟡'}
                  {spice.name === 'Cardamom' && '🟢'}
                  {spice.name === 'Cumin' && '🟤'}
                  {spice.name === 'Coriander' && '🌿'}
                  {spice.name === 'Red Chili' && '🌶️'}
                  {spice.name === 'Black Pepper' && '⚫'}
                </div>
              </div>
              
              <h3 className="spice-name">{spice.name}</h3>
              <p className="spice-description">{spice.description}</p>
              
              <div className="spice-benefits">
                <h4>Key Benefits:</h4>
                <ul>
                  {spice.benefits.map((benefit, idx) => (
                    <li key={idx}>{benefit}</li>
                  ))}
                </ul>
              </div>
              
              <div className="spice-overlay">
                <button className="btn btn-primary">Learn More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpicesShowcase;
