import React from 'react';
import styles from './styles/ContactUsCard.module.css';

interface ContactUsCardProps {
    title: string;
    description: JSX.Element;
    contactUsImg: string;
}

const ContactUsCard: React.FC<ContactUsCardProps> = ({title, description, contactUsImg}) => (
    <div className={styles.contactUsCardContainer}>
        <div className={styles.contactUsHeader}>
            <h1>Contact Us</h1>
        </div>
        <h2>{title}</h2>
        <div className={styles.contactUsCardContentContainer}>
                <img src={contactUsImg} alt="subService_img" />
                <div className={styles.mainContentContainer}>
                    {description}
                    <button> 
                        <span>REQUEST IT NOW</span>
                    </button>
                </div>
        </div>
    </div>
);

export default ContactUsCard;
