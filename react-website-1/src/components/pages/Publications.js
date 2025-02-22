import React from 'react';
import '../../App.css';
import PublicationCards from '../PublicationCards';

export default function Publications({ hideHeader }) {
  return (
    <>
      {!hideHeader && <h1 className='publications'>Publications</h1>}
      <PublicationCards />
    </>
  );
}
