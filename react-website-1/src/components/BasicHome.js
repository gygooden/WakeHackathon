import React from 'react';
import '../App.css';
import HeroSection from './HeroSection';

export default function BasicHome({ hideHeader }) {
  return (
    <div className="home">
      {!hideHeader && <HeroSection />}
    </div>
  );
}
