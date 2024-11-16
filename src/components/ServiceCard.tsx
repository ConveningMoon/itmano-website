import React from 'react';
import '../styles.css';

interface ServiceCardProps {
  title: string;
  description: string;
  imageSrc: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, imageSrc }) => (
  <div className="service-card">
    <img src={imageSrc} alt={title} /> {/* Replace with actual image URLs */}
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

export default ServiceCard;
