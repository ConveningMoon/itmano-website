import React from 'react';
import styles from './styles/Header.module.css';

import NavOption from '../../components/NavOption';

import headerLogo from '../../assets/images/logo-header.png';
import toursLogo from '../../assets/icons/vr-glasses_ico.png';
import appLogo from '../../assets/icons/smartphone_ico.png';
import webLogo from '../../assets/icons/www_ico.png';

import { CiLogin } from "react-icons/ci";

interface HeaderProps {
  title: string;
}

function toHomeHandler() {
  alert("To Home Handler!");
}

function ToursOptionHandler() {
  alert("VR/AR Tours Handler!");
}

function AppOptionHandler() {
  alert("App Development Handler!");
}

function WebOptionHandler() {
  alert("Web Development Handler!");
}

function loginHandler() {
  alert("Log In Handler!");
}

function signUpHandler() {
  alert("Sign Up Handler!");
}

const Header: React.FC<HeaderProps> = ({ title }) => (
  <header className={styles.header}>
    <div className={styles.header_logo} onClick={toHomeHandler}>
      <img src={headerLogo} alt="logo-header"/>
      <h1>{title}</h1>
    </div>
    <div className={styles.header_navigator}>
      <NavOption title="VR/AR Tours" imgSrc={toursLogo} onClick={ToursOptionHandler}/>
      <NavOption title="App Development" imgSrc={appLogo} onClick={AppOptionHandler}/>
      <NavOption title="Web Development" imgSrc={webLogo} onClick={WebOptionHandler}/>
      {/* <Link to="/about">About</Link> */}
    </div>
    <div className={styles.header_account}>
      <p className={styles.signUpButton} onClick={signUpHandler}>Sign Up</p>
      <div onClick={loginHandler} className={styles.loginButton}>
        <p>Log In</p>
        <CiLogin 
          size='25px'
          className={styles.loginIcon}
        />
      </div>
    </div>
  </header>
);

export default Header;
