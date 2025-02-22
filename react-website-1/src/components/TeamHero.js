import React from 'react';
import '../App.css';
import './HeroSection.css';

function TeamHero() {
  /*TeamHero creates an active video header, used on the team page**/
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1 className='team'>Our Team</h1>
    </div>
  );
}

export default TeamHero;
