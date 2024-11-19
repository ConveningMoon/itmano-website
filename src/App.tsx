import React from 'react';
import Header from './screens/home/Header';
import HeroSection from './screens/home/HeroSection';
import AboutUs from './screens/home/AboutUs';
import Services from './screens/home/Services';
import ContactUs from './screens/home/ContactUs';
import Footer from './screens/home/Footer';
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
