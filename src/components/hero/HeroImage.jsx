import React, { useState } from 'react';
import "./heroimage.css";
import bgImage from '../../assets/intro-bg.jpg';
import { Link } from 'react-router-dom';
import ExperienceModal from '../experiencemodal/ExperienceModal';

export default function HeroImage() {
    const [isOpen, setIsOpen] = useState(false);
  const handlePopUp = () => {
    setIsOpen(true);
  };

  const closePopUp = () => {
    setIsOpen(false);
    };
    
  return (
      <div className='heroImage'>
          <div className="heroImage-image">
              <img src={bgImage} alt="background" className="bg-image" />
          </div>
          <div className="heroImage-content">
              <p>Hi, My name is Ramesh P R</p>
              <h1>I'm a Front End Developer</h1>
              <div>
                  <Link to='/project' className='btn btn-light'>Projects</Link>
                  <Link to='/contact' className='btn btn-light'>Contact</Link>
              </div>
              <div><button onClick={handlePopUp} className='experience btn'>Experience</button></div>
          </div>
          <ExperienceModal isOpen={isOpen} onClose={closePopUp}/>
    </div>
  )
}
