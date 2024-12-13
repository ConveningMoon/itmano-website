import React from 'react';

import styles from './styles/LogIn.module.css';

import NavBar from '../global/NavBar';
import AccountCard from '../../components/AccountCard';

const LogIn: React.FC = () => (
  <div className={styles.LogInContainer}>
    <NavBar isAuthenticating={true} />
    <AccountCard
        isRegister={false}
    />
  </div>
);

export default LogIn;
