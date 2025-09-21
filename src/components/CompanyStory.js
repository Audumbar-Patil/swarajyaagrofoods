import React from 'react';
import './CompanyStory.css';

const CompanyStory = () => {
  return (
    <section className="company-story section">
      <div className="container">
        <h2 className="section-title fade-in-up">Our Story</h2>
        <p className="section-subtitle fade-in-up">
          From humble beginnings to becoming a trusted name in premium Indian spices
        </p>
        
        <div className="story-content">
          <div className="story-text fade-in-up">
            <div className="story-paragraph">
              <h3>Our Mission</h3>
              <p>
                At Swarajya Agro Foods, our mission is to preserve and share the rich 
                heritage of Indian spices while maintaining the highest standards of 
                quality and authenticity. We believe that every spice tells a story 
                of tradition, culture, and craftsmanship.
              </p>
            </div>
            
            <div className="story-paragraph">
              <h3>Our Vision</h3>
              <p>
                To become the leading provider of premium Indian spices globally, 
                connecting people with authentic flavors and traditional recipes 
                that have been passed down through generations.
              </p>
            </div>
            
            <div className="story-paragraph">
              <h3>Our Values</h3>
              <ul>
                <li><strong>Quality:</strong> We never compromise on the quality of our spices</li>
                <li><strong>Authenticity:</strong> We source directly from trusted farmers and suppliers</li>
                <li><strong>Innovation:</strong> We continuously improve our processes and products</li>
                <li><strong>Customer Focus:</strong> Our customers are at the heart of everything we do</li>
                <li><strong>Sustainability:</strong> We support sustainable farming practices</li>
              </ul>
            </div>
          </div>
          
          <div className="story-visual fade-in-up">
            <div className="story-cards">
              <div className="story-card">
                <div className="card-icon">🌱</div>
                <h4>Sustainable Sourcing</h4>
                <p>We work directly with farmers who practice sustainable agriculture</p>
              </div>
              
              <div className="story-card">
                <div className="card-icon">🔬</div>
                <h4>Quality Testing</h4>
                <p>Every batch undergoes rigorous quality testing before packaging</p>
              </div>
              
              <div className="story-card">
                <div className="card-icon">🚚</div>
                <h4>Fresh Delivery</h4>
                <p>We ensure your spices reach you fresh and full of flavor</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyStory;
