import React from 'react';
import '../styles.css';
import ServiceCard from './ServiceCard';

const Services: React.FC = () => (
  <section className="services">
    <h2>OUR SERVICES</h2>
    <div className="service-grid">
        <ServiceCard
          title="3D VR/AR Tours for Real Estate"
          description="Some text for this service..."
          imageSrc="/images/vr-tour-image.jpg" 
        />
      <ServiceCard
        title="App Development"
        description="Some text for this service..."
        imageSrc="/images/app-development-image.jpg"
      />
      <ServiceCard
        title="Web Development"
        description="Some text for this service..."
        imageSrc="/images/web-development-image.jpg"
      />
    </div>
  </section>
);

export default Services;

