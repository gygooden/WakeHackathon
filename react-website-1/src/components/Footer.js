import React, { useState } from 'react';
import './Footer.css';
import logoImage from '../images/Bullseye.png';
import { Link, useNavigate } from 'react-router-dom';

function Footer() {
  const [click, setClick] = useState(false);  // State for managing mobile menu
  const navigate = useNavigate(); // Hook for navigation

  const closeMobileMenu = () => setClick(false);
  const handleClick = () => setClick(!click);

  // Potential code for button
  // const googleFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSc0bSlBx8iksQYxNLSAPjVf4u49mTyFLEi9EIqzfMpGXDamkA/viewform?usp=sf_link';
  // const openGoogleForm = () => {
  //   window.open(googleFormUrl, '_blank', 'noopener,noreferrer');
  // };

  const handleHomeClick = () => {
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className='footer-container'>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          {/* Potential about us section */}
          {/* <div className='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/' onClick={closeMobileMenu}>Terms of Service</Link>
            <Link to='/' onClick={closeMobileMenu}>Investors</Link>
            <Link to='/' onClick={closeMobileMenu}>Careers</Link>
          </div> */}
          
          <div className='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/' onClick={closeMobileMenu}>Privacy Policy</Link>
            <Link to='/' onClick={closeMobileMenu}>Terms of Use</Link>
          </div>
        </div>

        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2> </h2>
            <a
              href='mailto:finems23@wfu.edu'
              target='_blank'
              rel='noreferrer'
              aria-label='Contact'
            >
              Company email
            </a>
            <a
              href='mailto:goodgy24@wfu.edu'
              target='_blank'
              rel='noreferrer'
              aria-label='Contact'
            >
              Support email
            </a>
          </div>
        </div>

        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Our Work</h2>
            <Link to='/mission' onClick={closeMobileMenu}>Mission</Link>
            <Link to='/organoids' onClick={closeMobileMenu}>Organoids</Link>
          </div>
        </div>

        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2> </h2>
            <Link to='/team' onClick={closeMobileMenu}>Team</Link>
            <Link to='/publications' onClick={closeMobileMenu}>Publications</Link>
            <Link to='/contact' onClick={closeMobileMenu}>Contact</Link>
          </div>
        </div>
      </div>

      <section className='footer-subscription'>
        {/* Potential sign up section */}
        {/* <p className='footer-subscription-heading'>
          Join our email list for more updates
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time
        </p> */}
      </section>

      <div className='input-areas'>
        <button type='button' className='btn btn--outline' onClick={handleHomeClick}>
          Home
        </button>
      </div>

      <div className='social-media-spacing'>
        <section className='social-media'>
          <div className='social-media-wrap'>
            <div className='social-icons'>
              <a
                className='social-icon-link instagram'
                href='https://www.instagram.com/Deacon_Code/'
                target='_blank'
                rel='noreferrer'
                aria-label='Instagram'
              >
                <i className='fab fa-instagram' />
              </a>
              <a
                className='social-icon-link twitter'
                href='https://x.com/?lang=en'
                target='_blank'
                rel='noreferrer'
                aria-label='Twitter'
              >
                <i className='fab fa-twitter' />
              </a>
              <a
                className='social-icon-link linkedin'
                href='https://www.linkedin.com/company/deacon-code/'
                target='_blank'
                rel='noreferrer'
                aria-label='LinkedIn'
              >
                <i className='fab fa-linkedin' />
              </a>
            </div>
          </div>
        </section>
      </div>

      <div className='footer-logo'>
        <Link to='/' className='footer-logo' onClick={handleClick}>
          <img src={logoImage} alt='Bullseye Bio Logo' className='logo-image' />
        </Link>
      </div>

      <small className='website-rights'>Grayson and Max, Inc © 2025</small>
    </div>
  );
}

export default Footer;
