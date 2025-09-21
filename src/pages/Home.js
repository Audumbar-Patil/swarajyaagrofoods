import React from 'react';
import Hero from '../components/Hero';
import SpicesShowcase from '../components/SpicesShowcase';
import Features from '../components/Features';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <SpicesShowcase />
      <Features />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
