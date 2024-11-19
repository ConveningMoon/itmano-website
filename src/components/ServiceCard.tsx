import React from 'react';
import styles from './styles/ServiceCard.module.css';

interface ServiceCardProps {
  title: string;
  description: JSX.Element;
  imageSrc: string;
  isImgOnLeft: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, imageSrc, isImgOnLeft }) => (
  <div className={isImgOnLeft ? styles.serviceCard_imgOnLeft : styles.serviceCard_imgOnRight}>
    <img className={styles.cardImg} src={imageSrc} alt={title} />
    <div className={isImgOnLeft ? styles.serviceContent_imgOnLeft : styles.serviceContent_imgOnRight}>
      <h3 className={styles.titleCard}>{title}</h3>
      {description}
    </div>
  </div>
);

export default ServiceCard;
