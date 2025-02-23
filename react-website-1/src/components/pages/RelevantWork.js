import React from 'react';
import '../../App.css';
import RelevantWorkCards from '../RelevantWorkCards';

export default function RelevantWork({ hideHeader }) {
  return (
    <>
      {!hideHeader && <h1 className='publications'>Similar Projects</h1>}
      <RelevantWorkCards />
    </>
  );
}
