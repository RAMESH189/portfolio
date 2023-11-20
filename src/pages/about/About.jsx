import React from 'react';
import { HeroImage2, Navbar, Footer, AboutContent } from '../../components';


export default function About() {
  return (
    <div>
      <Navbar />
      <HeroImage2 title="ABOUT" desc='I am a curious person' />
      <AboutContent />
      <Footer />
    </div>
  )
}
