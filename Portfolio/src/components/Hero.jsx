import React, { useEffect, useRef } from 'react'
import { personal } from '../data.js'
import heroPhoto from '../assets/hero-photo.jpg'

export default function Hero() {
  const heroRef = useRef(null)
  const textRef = useRef(null)
  const imageRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    if (textRef.current) observer.observe(textRef.current)
    if (imageRef.current) observer.observe(imageRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="home" className="hero" ref={heroRef}>
      <div className="container hero-wrap">
        <div ref={textRef} className="fade-in-left">
          <div className="section-kicker">Full Stack Developer</div>
          <h1>Hi, I'm {personal.name}. I craft scalable web apps.</h1>
          <p>{personal.tagline}</p>

          <div className="badges">
            <span className="badge">React • Node.js • TypeScript</span>
            <span className="badge">AWS • Docker • PostgreSQL</span>
          </div>

          <div className="hero-actions">
            <a className="btn" href="#projects">
              View Projects
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            {personal.resumeUrl !== "#" && (
              <a className="btn" href={personal.resumeUrl} target="_blank" rel="noopener noreferrer">
                Download CV
              </a>
            )}
            <a className="btn" href="#contact">Contact</a>
          </div>
        </div>

        <div className="hero-card" ref={imageRef}>
          <img
            className="project-media"
            alt="Anjana Imesh - Professional Full Stack Developer with Camera"
            src={heroPhoto}
          />
        </div>
      </div>
    </section>
  )
}