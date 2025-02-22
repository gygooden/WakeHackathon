import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';  // Directly import HeroSection
import Mission from './Mission.js';
import Diagnose from './Diagnose.js';
import Team from './Team.js';
import RelevantWork from './RelevantWork.js';
import Contact from './Contact.js';
import SignUp from './SignUp.js';
import Header from '../Header';

export default function Home() {
  return (
    <>
      <HeroSection />  {/* Ensure this is rendered directly */}
      <Header title="Our Mission" />
      <Mission hideHeader={true} />
      <Header title="Diagnosis Process" />
      <Diagnose hideHeader={true} />
      <Header title="Team!" />
      <Team hideHeader={true} />
      <Header title="Similar Projects" />
      <RelevantWork hideHeader={true} />
      <SignUp hideHeader={true} />
      <Header title="Contact Us" />
      <Contact hideHeader={true} />
    </>
  );
}
