import React from 'react';
import '../styles.css';

const ContactUs: React.FC = () => (
  <section className="contact-us">
    <h2>CONTACT US</h2>
    <form>
      <input type="text" placeholder="Name" />
      <input type="email" placeholder="Email" />
      <textarea placeholder="Message" />
      <button type="submit">Send Message</button>
    </form>
  </section>
);

export default ContactUs;
