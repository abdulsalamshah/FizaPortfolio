import React from 'react';
import './Contact.css';
import ContactInfo from './ContactInfo';
import Form from './Form';

function Contact() {
  return (
    <section className='contact-container'  id="contact">
      <h4>Contact Me</h4>
      <div className='contact-content'>
        <div className='contact-info'>
          <ContactInfo iconUrl="./assets/images/email-icon.png" text="fizabatool0278@gmail.com" />
          <ContactInfo iconUrl="./assets/images/linkedin-icon.png" text="www.linkedin.com/in/fizabatool027" />
        </div>
        <Form />
      </div>
    </section>
  );
}

export default Contact;
