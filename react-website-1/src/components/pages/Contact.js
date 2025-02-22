import React from 'react';
import '../../App.css';
import '../Contact.css';

function Contact({ hideHeader }) {
  return (
    <div>
      {!hideHeader && <h1 className='contact'> Contact Us</h1>}
      <div className='contact-content'>
        <div className='location-container'>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d201911.66332737566!2d-122.31429778923845!3d37.74620005476819!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1693030119391!5m2!1sen!2sus"
            width='100%'
            height='300'
            style={{ border: 0 }}
            allowFullScreen=''
            loading='lazy'
            title='Google Map'
          ></iframe>
        </div>
        <div className='contacts-list'>
          <p>San Francisco Bay Area, California, USA</p>
          <p>(650)-223-5810</p>
          <p>contact@bullseyebio.com</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
