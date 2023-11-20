import React from 'react'
import { Footer, HeroImage2, Navbar, ContactForm } from '../../components'

export default function Contact() {
  return (
    <div>
      <Navbar />
      <HeroImage2 title="CONTACT" desc='Reach out to me' />
      <ContactForm />
      <Footer />
    </div>
  )
}
