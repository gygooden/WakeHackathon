import React from 'react';
import '../../App.css';
import '../Mission.css';

export default function Mission({ hideHeader }) {
  return (
    <div>
      {!hideHeader && <h1 className='mission'>Mission</h1>}
      <div className='mission-container'>
        <p className='mission-description'>
          We aim to <span className='mission-underline'>enhance</span> healthcare accessibility<br /><br />
          We are developing a <span className='mission-underline'>smart</span> & <span className='mission-underline'>intuitive</span> AI-powered web app that helps users understand their symptoms using advanced <span className='mission-underline'>AI analysis</span> & <span className='mission-underline'>machine learning</span><br /><br />
          We provide <span className='mission-underline'>individuals</span>, <span className='mission-underline'>clinicians</span> & <span className='mission-underline'>researchers</span> with insights, recommendations & potential diagnoses while maintaining <span className='mission-underline'>data privacy</span> & <span className='mission-underline'>security</span>
        </p>
      </div>
    </div>
  );
}
