import React from 'react';
import Hero from '../components/AboutHero';
import Leadership from '../components/Leadership';
import CompanyStory from '../components/CompanyStory';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="about">
      <Hero />
      <CompanyStory />
      <Leadership />
      <Footer />
    </div>
  );
};

export default About;
