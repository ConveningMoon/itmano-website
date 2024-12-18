import React from 'react';
import styles from './styles/NavOption.module.css';

interface NavProps {
    title: string;
    imgSrc: string;
    alt?: string;
    // onClick: () => void;
}

const NavOption: React.FC<NavProps> = ({ title, imgSrc, alt='thumbnail_alt'}) => (
    <div className={styles.navOption}>
        <img src={imgSrc} alt={alt}/>
        <p>{title}</p>
    </div>
);

export default NavOption;
