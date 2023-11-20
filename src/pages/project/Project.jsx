import React from 'react'
import { Footer, Navbar,HeroImage2,Work } from '../../components'

export default function Project() {
  return (
    <div>
      <Navbar />
      <HeroImage2 title="PROJECTS" desc='These are some of my works' />
      <Work />
      <Footer />
    </div>
  )
}
