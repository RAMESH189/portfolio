import React from 'react';
import './heroimage2.css';

export default function HeroImage2({title, desc}) {
  return (
    <div className='hero-iamge'>
      <div className="heading">
        <h1>{title}</h1>
        <p>{desc}</p>
      </div>
    </div>
  )
}
