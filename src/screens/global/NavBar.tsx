import React from 'react';

import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import styles from './styles/NavBar.module.css';

import NavOption from '../../components/NavOption';

import headerLogo from '../../assets/images/logo-header.png';
import toursLogo from '../../assets/icons/vr-glasses_ico.png';
import appLogo from '../../assets/icons/smartphone_ico.png';
import webLogo from '../../assets/icons/www_ico.png';

import { getHomePath, getLoginPath, getRegisterPath } from '../../routes/routes';

import { CiLogin } from "react-icons/ci";
import { TiThMenu } from "react-icons/ti";

interface NavBarProps {
  alreadyLogged?: boolean;
  isAuthenticating?: boolean;
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

const NavBar: React.FC<NavBarProps> = ({alreadyLogged = false, isAuthenticating = false}) => {
  const isMobile = useMediaQuery({ query: '(max-width: 1070px)' });

  return (
    <header className={isAuthenticating? styles.small_header : styles.general_header}>
      {!isMobile ? 
        <div className={styles.desktopNavContainer}>
          <Link to={getHomePath()} style={{textDecoration: 'none'}}>
            <div className={styles.homeLogo}>
              <img src={headerLogo} alt="logo-header"/>
              <h1>IT<span>MANO</span></h1>
            </div>
          </Link>
          {alreadyLogged && !isAuthenticating &&
            <div className={styles.header_navigator}>
              <NavOption title="VR/AR Tours" imgSrc={toursLogo} onClick={ToursOptionHandler}/>
              <NavOption title="App Development" imgSrc={appLogo} onClick={AppOptionHandler}/>
              <NavOption title="Web Development" imgSrc={webLogo} onClick={WebOptionHandler}/>
            </div> 
          }
          {!alreadyLogged && !isAuthenticating &&
            <div className={styles.header_navigator}>
              <a href='#about' className={styles.toNavOptionText}>About Us</a> 
              <a href='#services' className={styles.toNavOptionText}>Services</a>   
              <a href='#contactus' className={styles.toNavOptionText}>Contact Us</a>     
            </div>
          }
          {alreadyLogged && !isAuthenticating &&
            <p className={styles.toProfileText}>My Profile</p> 
          }
          {!alreadyLogged && !isAuthenticating &&
            <div className={styles.header_account}>
              <Link 
                to={getRegisterPath()} 
                style={{textDecoration: 'none'}}
              >
                <div className={styles.signUpButton}>Sign Up</div>          
              </Link>
              <Link 
                to={getLoginPath()}
                style={{textDecoration: 'none'}}
              >
                <div className={styles.loginButton}>
                  <p>Log In</p>
                  <CiLogin 
                    size='25px'
                    className={styles.loginIcon}
                  />
                </div>
              </Link>
            </div>
          }
        </div>
      :
        <div className={styles.mobileNavContainer}>
          <Link to={getHomePath()} style={{textDecoration: 'none', flex: '1'}}>
            <div className={styles.homeLogo}>
              <img src={headerLogo} alt="logo-header"/>
              <h1>IT<span>MANO</span></h1>
            </div>
          </Link>
          {!isAuthenticating &&
            <div className={styles.menuMainContainer}>          
              <TiThMenu 
                size='25px'
                className={styles.menuIcon}
              />
              {alreadyLogged ?
                <div className={styles.menuOptionsContainer}>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      paddingLeft: '50px',
                      paddingBottom: '20px'
                    }}
                  >
                    <NavOption title="VR/AR Tours" imgSrc={toursLogo} onClick={ToursOptionHandler}/>
                    <NavOption title="App Development" imgSrc={appLogo} onClick={AppOptionHandler}/>
                    <NavOption title="Web Development" imgSrc={webLogo} onClick={WebOptionHandler}/>
                  </div>
                  <p className={styles.toProfileText}>My Profile</p> 
                </div>
              :
                <div className={styles.menuOptionsContainer}>
                  <a href='#about' style={{paddingTop: '30px'}}>About Us</a> 
                  <a href='#services'>Services</a>   
                  <a href='#contactus'>Contact Us</a>  
                  <div className={styles.header_account}>
                    <Link 
                      to={getRegisterPath()} 
                      style={{textDecoration: 'none'}}
                    >
                      <div className={styles.signUpButton}>Sign Up</div>          
                    </Link>
                    <Link 
                      to={getLoginPath()}
                      style={{textDecoration: 'none'}}
                    >
                      <div className={styles.loginButton}>
                        <p>Log In</p>
                        <CiLogin 
                          size='25px'
                          className={styles.loginIcon}
                        />
                      </div>
                    </Link>
                  </div>    
                </div>   
              }         
            </div>  
          }
        </div>  
      }
    </header>
  );
};

export default NavBar;
