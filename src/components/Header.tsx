import React from 'react';
import '../styles.css';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => (
  <header className="header">
    <div className="header-left">
      <h1>{title}</h1>
    </div>
    <div className="header-right">
      <ul>
        <li>VR/AR Tours</li>
        <li>App Development</li>
        <li>Web Development</li>
        <li>Sign Up</li>
        <li>Log In</li>
      </ul>
    </div>
  </header>
);

export default Header;
