import React from 'react';

import styles from './styles/Profile.module.css';

import NavBar from '../global/NavBar';
import { useLocation, useNavigate } from 'react-router-dom';

interface User {
    id: number;
    email: string;
    password: string;
    name: string;
    companyName: string;
    description: string;
}

interface LocationState {
    user: User;
}

const Profile: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const state = location.state as LocationState;
    const { user } = state;

    return (
        <div className={styles.ProfileGlobalContainer}>
            <NavBar alreadyLogged={true}/>
            <div className={styles.ProfileContentContainer}>
                <img src="/banner_example.png" alt="banner_image" className={styles.bannerImage}/>
                <img src="/avatar_example.png" alt="profile_image" className={styles.profileImage}/>        
                <div 
                    className={styles.personalInfo}
                >
                    <h1>{user.name} | {user.companyName}</h1>
                    <h2>Company's Description</h2>
                    <p>{user.description}</p>
                </div>                
            </div>
        </div>
    );
};

export default Profile;
