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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6444.552317136209!2d-80.27928869999998!3d36.135488699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8853adf824f2c181%3A0x9e805d290cfd29f0!2sWake%20Forest%20University!5e0!3m2!1sen!2sus!4v1740246420032!5m2!1sen!2sus"
            width='100%'
            height='300'
            style={{ border: 0 }}
            allowFullScreen=''
            loading='lazy'
            title='Google Map'
          ></iframe>
        </div>
        <div className='contacts-list'>
          <p>Wake Forest University, Winston-Salem, North Carolina, USA</p>
          <p>(626)-208-6996</p>
          <p>goodgy24@wfu.edu</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
