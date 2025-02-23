import React from 'react';
import '../../App.css';
import '../Mission.css';

export default function Mission({ hideHeader }) {
  return (
    <div>
      {!hideHeader && <h1 className='mission'>Our Mission</h1>}
      <div className='mission-container'>
        <p className='mission-description'>
          We aim to <span className='mission-underline'>transform</span> healthcare by making it more accessible and personalized.<br /><br />
          Our AI-powered web app uses advanced <span className='mission-underline'>AI analysis</span> and <span className='mission-underline'>machine learning</span> to help individuals understand their symptoms, providing insights into potential diagnoses.<br /><br />
          By analyzing your symptoms, we deliver <span className='mission-underline'>personalized recommendations</span> and <span className='mission-underline'>diagnosis suggestions</span>, offering valuable guidance for <span className='mission-underline'>individuals</span>, <span className='mission-underline'>clinicians</span>, and <span className='mission-underline'>researchers</span> alike. All of this is done while maintaining <span className='mission-underline'>data privacy</span> and <span className='mission-underline'>security</span>.
        </p>
      </div>
    </div>
  );
}
