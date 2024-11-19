import React from 'react';
import ServiceCard from '../../components/ServiceCard';
import styles from './styles/Services.module.css';

import toursMockup from '../../assets/images/vr-tour-image.jpg';
import appMockup from '../../assets/images/app-development-image.jpg';
import webMockup from '../../assets/images/web-development-image.jpg';

const toursDescription = 
<p>
  Imagine giving your clients the power to walk through their dream property without stepping foot outside. With our state-of-the-art 3D AR/VR tours, that's exactly what you'll offer. Properties showcased with immersive tours attract <b>60% more inquiries and sell 40% faster</b> than traditional listings. Don't let your listings blend into the background—stand out in Dubai's competitive market!
  <br />Embrace innovation, captivate buyers, and watch your sales soar. Get started now and redefine the future of real estate showcasing!
  <br /><br /><b>Elevate Your Real Estate Game Today</b>
</p>

const appDescription =
<p>
  Imagine offering your clients a seamless, personalized experience right at their fingertips. With our custom app development services, you can transform the way buyers and sellers interact with your properties. By embracing mobile technology, real estate businesses often see a significant <b>boost in client engagement and satisfaction</b>. Stand out in Real Estate's dynamic market by providing an intuitive app that keeps your clients connected and informed.
  <br />Don't let your competitors leave you behind. Contact us today to create a bespoke app that will revolutionize your client experience and propel your business to new heights!
  <br /><br /><b>Take the Next Leap Forward</b>
</p>

const webDescription =
<p>
  Imagine a stunning, user-friendly website that captures the essence of every property you represent. Our custom web development services are designed to showcase your listings with elegance and functionality, ensuring potential buyers are engaged from the first click. Properties featured on professionally developed websites receive <b>50% more traffic and achieve 35% higher conversion rates</b> compared to standard listings. Stand out in Real Estate's vibrant market with a website that not only looks impressive but also delivers exceptional performance.
  <br />Don’t miss out on maximizing your digital impact. Partner with us now to create a captivating, responsive website that attracts more clients, enhances user experience, and drives your sales to new heights!
  <br /><br /><b>Transform Your Online Real Estate Experience Today</b>
</p>

const Services: React.FC = () => (
  <section className={styles.services}>
    <h2>OUR SERVICES</h2>
    <div className={styles.serviceGrid}>
      <ServiceCard
        title="3D VR/AR Tours for Real Estate"
        description={toursDescription}
        imageSrc={toursMockup}
        isImgOnLeft={true}
      />
      <ServiceCard
        title="App Development"
        description={appDescription}
        imageSrc={appMockup}
        isImgOnLeft={false}
      />
      <ServiceCard
        title="Web Development"
        description={webDescription}
        imageSrc={webMockup}
        isImgOnLeft={true}
      />
    </div>
  </section>
);

export default Services;

