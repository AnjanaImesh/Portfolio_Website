import React from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Marquee from './components/Marquee.jsx'
import Services from './components/Services.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'
import Testimonials from './components/Testimonials.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import './styles.css'

export default function App() {
  return (
    <>
      {/* Noise / grain texture overlay */}
      <div className="noise" />

      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Projects />
        <Skills />
        <Testimonials />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
