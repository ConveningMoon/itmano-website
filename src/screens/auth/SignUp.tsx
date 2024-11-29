import React from 'react';
import styles from './styles/SignUp.module.css';

import NavBar from '../global/NavBar';
import AccountCard from '../../components/AccountCard';

const SignUp: React.FC = () => (
    <div className={styles.SignUpContainer}>
        <NavBar />
        <AccountCard
            isRegister={true}
        />
    </div>
);

export default SignUp;
