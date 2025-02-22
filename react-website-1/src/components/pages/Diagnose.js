import React from 'react';
import '../../App.css';
import '../Diagnose.css';

const organoidGifs = [
  { src: '/videos/cVOBeat.gif', description: 'Heart organoid beating (Phase)' },
  { src: '/videos/cVONkx.gif', description: 'Beating heart organoid (Nkx-GFP)' },
  { src: '/videos/cVOTimelapse.gif', description: 'Timelapse of organoid development (16 days)' },
  { src: '/videos/cVO20xMag.gif', description: 'Organoid at 20x magnification' }
  /* If wanting to use youtube clips: 'https://www.youtube.com/embed/0I5MldVOjWg',*/
];

export default function Diagnose({ hideHeader }) {
  return (
    <div>
      {!hideHeader && <h1 className='diagnose'>Get Diagnosed</h1>}
      <div className='organoids-container'>
        <p className='organoids-description'>
          Diagnoses description process
        </p>
        <div className='organoid-gifs'>
          {organoidGifs.map((organoid, index) => (
            <div className='organoid-gif' key={index}>
              <img
                src={organoid.src}
                alt={`Organoid GIF ${index + 1}`}
                width='100%'
                height='200'
              />
              <p>{organoid.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
