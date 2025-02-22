import React from 'react';
import '../../App.css';
import TeamCards from '../TeamCards';

export default function Team({ hideHeader }) {
  return (
    <>
      {/* {!hideHeader && <TeamHero />} */}
      {!hideHeader && <h1 className='team'>Team</h1>}
      <TeamCards />
    </>
  );
}