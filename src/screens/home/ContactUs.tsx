import React from 'react';
import styles from './styles/ContactUs.module.css';

import contactUsImg from '../../assets/images/contact_us.svg';

const ContactUs: React.FC = () => (
  <section className={styles.contactUs}>
    <div className={styles.formContainer}>
      <h2>CONTACT US</h2>
      <form>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Message" />
        <button type="submit">SEND MESSAGE</button>
      </form>
    </div>
    <img src={contactUsImg} alt="contact_us_image"/>
  </section>
);

export default ContactUs;
