import React from 'react';
import styles from './styles/Footer.module.css';

const Footer: React.FC = () => (
  <footer className={styles.footerContainer}>
    <p className={styles.footerText}>&copy; 2024 ITMANO. All rights reserved.</p>
  </footer>
);

export default Footer;
