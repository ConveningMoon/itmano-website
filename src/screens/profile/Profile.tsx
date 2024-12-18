import React from 'react';

import styles from './styles/Profile.module.css';

import { useLocation } from 'react-router-dom';
// import { useLocation, useNavigate } from 'react-router-dom';

import NavBar from '../global/NavBar';
import ServiceProfileCard from '../../components/ServiceProfileCard';

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
    // const navigate = useNavigate();
    const location = useLocation();

    const state = location.state as LocationState;
    const { user } = state ? state : { user: {name: 'test name', companyName: 'test company name', description: 'test description'}};

    return (
        <div className={styles.ProfileGlobalContainer}>
            <NavBar alreadyLogged={true}/>
            <div className={styles.profileImagesContainer}>
                <img src="/banner_example.png" alt="banner_image" className={styles.bannerImage}/>
                <img src="/avatar_example.png" alt="profile_image" className={styles.profileImage}/>                                    
            </div>
            <div className={styles.personalProfileInfo}>
                <h1>{user.name}</h1>
                <h2>{user.companyName}</h2>
            </div>    
            <div className={styles.profileContentContainer}>
                <h3 className={styles.companyTitle}>Company's Description</h3>
                <p className={styles.companyDescription}>{user.description}</p>
                <div className={styles.ServiceProfileMainContainer}>
                    <ServiceProfileCard title='App Development' id='appDevelopment'/>
                    <ServiceProfileCard title='Web Development' id='webDevelopment'/>
                    <ServiceProfileCard title='VR/AR Tours' id='tours'/>
                </div>
            </div>            
        </div>
    );
};

export default Profile;
