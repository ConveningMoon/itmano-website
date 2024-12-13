import React from 'react';

import NavBar from '../global/NavBar';
import HeroSection from './HeroSection';
import AboutUs from './AboutUs';
import Services from './Services';
import ContactUs from './ContactUs';
import Footer from '../global/Footer';
import styles from './styles/Home.module.css';

const Home: React.FC = () => {
  return ( 
    <div className={styles.HomeContainer}>
      <NavBar />
      <HeroSection />
      <AboutUs />
      <Services />
      <ContactUs />
      <Footer />    
    </div>
  );
};

export default Home;
