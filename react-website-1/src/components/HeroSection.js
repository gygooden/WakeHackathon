import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import './HeroSection.css';
import heroLogoImage from '../images/Bullseye.png';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video className="hero-video" src="/videos/PotentialBackground.mp4" autoPlay loop muted playsInline />
      <Link to='/' className='hero-logo'>
        <img src={heroLogoImage} alt="Bullseye Hero Bio Logo" className="hero-logo-image" />
      </Link>
    </div>
  );
}

export default HeroSection;
