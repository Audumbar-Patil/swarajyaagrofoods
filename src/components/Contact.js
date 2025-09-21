import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact section">
      <div className="container">
        <h2 className="section-title fade-in-up">Get In Touch</h2>
        <p className="section-subtitle fade-in-up">
          Ready to experience the finest Indian spices? Contact us today!
        </p>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item fade-in-up">
              <div className="contact-icon">📧</div>
              <div className="contact-details">
                <h3>Email Us</h3>
                <p>info@swarajyaagrofoods.com</p>
                <p>sales@swarajyaagrofoods.com</p>
              </div>
            </div>
            
            <div className="contact-item fade-in-up">
              <div className="contact-icon">📞</div>
              <div className="contact-details">
                <h3>Call Us</h3>
                <p>+91 98765 43210</p>
                <p>+91 87654 32109</p>
              </div>
            </div>
            
            <div className="contact-item fade-in-up">
              <div className="contact-icon">📍</div>
              <div className="contact-details">
                <h3>Visit Us</h3>
                <p>123 Spice Market</p>
                <p>Mumbai, Maharashtra 400001</p>
              </div>
            </div>
          </div>
          
          <div className="contact-form-container fade-in-up">
            <form className="contact-form">
              <div className="form-group">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="form-input"
                  required
                />
              </div>
              
              <div className="form-group">
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="form-input"
                  required
                />
              </div>
              
              <div className="form-group">
                <input 
                  type="tel" 
                  placeholder="Your Phone" 
                  className="form-input"
                />
              </div>
              
              <div className="form-group">
                <textarea 
                  placeholder="Your Message" 
                  className="form-input form-textarea"
                  rows="5"
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary form-submit">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
