import React from 'react'
import ContactSection from '../home/ContactSection.jsx'

export default function ContactPage({ onNavigate }) {
  return (
    <div style={{ paddingTop: 'clamp(5rem, 8vw, 7rem)', minHeight: '80vh' }}>
      <ContactSection />
    </div>
  )
}
