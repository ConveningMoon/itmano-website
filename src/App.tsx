import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import './styles.css';

const App: React.FC = () => (
  <div className="app">
    <Header title="ITMANO" />
    <HeroSection />
    <AboutUs />
    <Services />
    <ContactUs />
    <Footer />
  </div>
);

export default App;
