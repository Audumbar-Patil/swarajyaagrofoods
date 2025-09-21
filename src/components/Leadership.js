import React from 'react';
import './Leadership.css';

const Leadership = () => {
  const leaders = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      position: 'Chief Executive Officer',
      image: '👨‍💼',
      description: 'With over 15 years of experience in the food industry, Rajesh has been instrumental in building Swarajya Agro Foods from the ground up. His vision and leadership have helped establish the company as a trusted name in premium Indian spices.',
      achievements: [
        '15+ years in food industry',
        'Founded Swarajya Agro Foods',
        'Expert in spice sourcing and quality'
      ]
    },
    {
      id: 2,
      name: 'Priya Sharma',
      position: 'Managing Director',
      image: '👩‍💼',
      description: 'Priya brings extensive expertise in business operations and strategic planning. Her commitment to quality and customer satisfaction has been key to the company\'s growth and success in the competitive spice market.',
      achievements: [
        '12+ years in business operations',
        'MBA in International Business',
        'Specialist in supply chain management'
      ]
    }
  ];

  return (
    <section className="leadership section">
      <div className="container">
        <h2 className="section-title fade-in-up">Our Leadership Team</h2>
        <p className="section-subtitle fade-in-up">
          Meet the visionaries behind Swarajya Agro Foods' success
        </p>
        
        <div className="leadership-grid">
          {leaders.map((leader, index) => (
            <div 
              key={leader.id}
              className="leader-card card fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="leader-image">
                <div className="leader-photo">
                  {leader.image}
                </div>
                <div className="leader-badge">
                  <span className="badge-text">{leader.position.split(' ')[0]}</span>
                </div>
              </div>
              
              <div className="leader-info">
                <h3 className="leader-name">{leader.name}</h3>
                <h4 className="leader-position">{leader.position}</h4>
                <p className="leader-description">{leader.description}</p>
                
                <div className="leader-achievements">
                  <h5>Key Achievements:</h5>
                  <ul>
                    {leader.achievements.map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="leader-overlay">
                <div className="social-links">
                  <a href="#" className="social-link" aria-label="LinkedIn">
                    💼
                  </a>
                  <a href="#" className="social-link" aria-label="Email">
                    📧
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
