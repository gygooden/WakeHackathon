import React from 'react';
import '../../App.css';
import '../Mission.css';

export default function Mission({ hideHeader }) {
  return (
    <div>
      {!hideHeader && <h1 className='mission'>Mission</h1>}
      <div className='mission-container'>
        <p className='mission-description'>
          We aim to <span className='mission-underline'>significantly</span> improve human health<br /><br />
          We are a very early-stage startup that creates <span className='mission-underline'>bigger</span> & <span className='mission-underline'>better</span> vascularized organoids via hPSCs, novel hardware & AI/ML for <span className='mission-underline'>drug discovery</span> & <span className='mission-underline'>regenerative therapies</span><br /><br />
          We provide <span className='mission-underline'>pharma</span>, <span className='mission-underline'>academia</span> & <span className='mission-underline'>eventually</span> <span className='mission-underline'>patients</span> with products, services & partnerships
        </p>
      </div>
    </div>
  );
}
