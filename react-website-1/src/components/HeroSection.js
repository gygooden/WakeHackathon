import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import './HeroSection.css';
import heroLogoImage from '../images/Bullseye.png';

function HeroSection() {
  return (
    <div className='hero-container'>
      {/* <video src='/videos/video-2.mp4' autoPlay loop muted /> */}
      <Link to='/' className='hero-logo'>
        <img src={heroLogoImage} alt="Bullseye Hero Bio Logo" className="hero-logo-image" />
      </Link>
      {/* <p>Pioneering vascularized organoids</p>
      Potential buttons on home page
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          to='/contact'
        >
          More about us
        </Button>
      </div>
      */}
    </div>
  );
}

export default HeroSection;
