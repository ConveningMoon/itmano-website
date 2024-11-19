import React from 'react';
import styles from './styles/HeroSection.module.css';

const HeroSection: React.FC = () => (
  <section className={styles.hero}>
    <div className={styles.heroContainer}>
      <h2>ALL YOUR BUSINESS</h2>
      <h2>IN ONE PLACE</h2>
      <p>Boost your sales by joining the digital world</p>
    </div>
  </section>
);

export default HeroSection;
