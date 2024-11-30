import React from 'react';

import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

import styles from './styles/NavBar.module.css';

import NavOption from '../../components/NavOption';

import headerLogo from '../../assets/images/logo-header.png';
import toursLogo from '../../assets/icons/vr-glasses_ico.png';
import appLogo from '../../assets/icons/smartphone_ico.png';
import webLogo from '../../assets/icons/www_ico.png';

import { getHomePath, getLoginPath, getRegisterPath } from '../../routes/routes';

import { CiLogin } from "react-icons/ci";

interface NavBarProps {
  alreadyLogged?: boolean;
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

const NavBar: React.FC<NavBarProps> = ({alreadyLogged = false}) => (
  <header className={styles.header}>
    <Link to={getHomePath()} style={{textDecoration: 'none'}}>
      <div className={styles.homeLogo}>
        <img src={headerLogo} alt="logo-header"/>
        <h1>IT<span>MANO</span></h1>
      </div>
    </Link>
    {alreadyLogged ?
      <div className={styles.header_navigator}>
        <NavOption title="VR/AR Tours" imgSrc={toursLogo} onClick={ToursOptionHandler}/>
        <NavOption title="App Development" imgSrc={appLogo} onClick={AppOptionHandler}/>
        <NavOption title="Web Development" imgSrc={webLogo} onClick={WebOptionHandler}/>
      </div> :
      <div className={styles.header_navigator}>
        <a href='#about' className={styles.toNavOptionText}>About Us</a> 
        <a href='#services' className={styles.toNavOptionText}>Services</a>   
        <a href='#contactus' className={styles.toNavOptionText}>Contact Us</a>     
      </div>
    }
    {alreadyLogged ? 
      <p className={styles.toProfileText}>My Profile</p> :
      <div className={styles.header_account}>
        <NavLink 
          to={getRegisterPath()} 
          className={({ isActive }) => (isActive ? styles.signUpButton_active : styles.signUpButton_desactive)}
        >
          Sign Up
        </NavLink>
        <NavLink 
          to={getLoginPath()}
          className={({ isActive }) => (isActive ? styles.loginButton_active : styles.loginButton_desactive)}
        >
            <p>Log In</p>
            <CiLogin 
              size='25px'
              className={styles.loginIcon}
            />
        </NavLink>
      </div>
    }
  </header>
);

export default NavBar;
