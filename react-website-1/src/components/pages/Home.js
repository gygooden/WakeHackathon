import React from 'react';
import '../../App.css';
import BasicHome from '../BasicHome';
import Mission from './Mission.js';
import Organoids from './Organoids.js';
import Team from './Team.js';
import Publications from './Publications.js';
import Contact from './Contact.js';
import SignUp from './SignUp.js';
import Header from '../Header';

export default function Home() {
  return (
    <>
      <BasicHome />
      {/* <Cards /> */}
      <Header title="Mission" />
      <Mission hideHeader={true} />
      <Header title="Organoids" />
      <Organoids hideHeader={true} />
      <Header title="Meet the Team!" />
      <Team hideHeader={true} />
      <Header title="Relevant Publications" />
      <Publications hideHeader={true} />
      <SignUp hideHeader={true} />
      <Header title="Contact Us" />
      <Contact hideHeader={true} />
    </>
  );
}