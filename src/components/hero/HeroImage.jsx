import React from 'react';
import "./heroimage.css";
import bgImage from '../../assets/intro-bg.jpg';
import { Link } from 'react-router-dom';

export default function HeroImage() {
  return (
      <div className='heroImage'>
          <div className="heroImage-image">
              <img src={bgImage} alt="background" className="bg-image" />
          </div>
          <div className="heroImage-content">
              <p>Hi, My name is Ramesh P R</p>
              <h1>I'm a react Developer</h1>
              <div>
                  <Link to='/project' className='btn'>Projects</Link>
                  <Link to='/contact' className='btn btn-light'>Contact</Link>
              </div>
          </div>
    </div>
  )
}
