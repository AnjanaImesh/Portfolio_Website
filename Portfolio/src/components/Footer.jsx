import React, { useEffect, useRef } from 'react'
import { personal, socials } from '../data.js'

export default function Footer() {
  const year = new Date().getFullYear()
  const footerRef = useRef(null)
  const footerContentRef = useRef(null)

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

    if (footerContentRef.current) observer.observe(footerContentRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <footer ref={footerRef} className="footer">
      <div className="container">
        <div className="footer-content fade-in-up" ref={footerContentRef}>
          <div className="footer-main">
            <div className="footer-brand">
              <div className="footer-logo">
                <span className="logo-text">AI</span>
              </div>
              <span className="footer-name">{personal.name}</span>
            </div>
            
            <div className="footer-nav">
              <a href="#about">About</a>
              <a href="#skills">Skills</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
            </div>
            
            <div className="footer-social">
              <a href={socials.github} target="_blank" rel="noreferrer" className="social-icon" title="GitHub">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 .5A12 12 0 0 0 0 12.7c0 5.38 3.44 9.94 8.21 11.55.6.12.82-.27.82-.59 0-.29-.01-1.05-.02-2.06-3.34.75-4.04-1.66-4.04-1.66-.55-1.44-1.35-1.82-1.35-1.82-1.1-.78.08-.76.08-.76 1.22.09 1.86 1.28 1.86 1.28 1.08 1.9 2.83 1.35 3.52 1.03.11-.81.42-1.35.76-1.66-2.67-.31-5.47-1.37-5.47-6.1 0-1.35.47-2.45 1.25-3.31-.13-.31-.54-1.56.12-3.24 0 0 1.01-.33 3.3 1.25a11.2 11.2 0 0 1 6 0c2.29-1.58 3.3-1.25 3.3-1.25.66 1.68.25 2.93.12 3.24.78.86 1.25 1.96 1.25 3.31 0 4.74-2.8 5.78-5.48 6.09.43.37.81 1.1.81 2.23 0 1.61-.02 2.91-.02 3.31 0 .32.22.71.83.59A12.03 12.03 0 0 0 24 12.71 12 12 0 0 0 12 .5z"/>
                </svg>
              </a>
              <a href={socials.linkedin} target="_blank" rel="noreferrer" className="social-icon" title="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V23h-4zM8.5 8.5h3.8v2h.05c.53-1 1.84-2.05 3.8-2.05 4.07 0 4.82 2.68 4.82 6.16V23h-4v-5.88c0-1.4-.03-3.2-1.95-3.2-1.96 0-2.26 1.52-2.26 3.1V23h-4z"/>
                </svg>
              </a>
              <a href={socials.twitter} target="_blank" rel="noreferrer" className="social-icon" title="Twitter">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.95 4.57c-.88.39-1.83.66-2.82.78a4.93 4.93 0 0 0 2.16-2.71 9.86 9.86 0 0 1-3.13 1.2A4.92 4.92 0 0 0 11.72 8a13.95 13.95 0 0 1-10.14-5.14 4.92 4.92 0 0 0 1.52 6.57 4.91 4.91 0 0 1-2.23-.62v.06a4.92 4.92 0 0 0 3.95 4.82 4.95 4.95 0 0 1-2.22.08 4.93 4.93 0 0 0 4.6 3.41A9.88 9.88 0 0 1 0 19.54a13.95 13.95 0 0 0 7.55 2.21c9.05 0 14-7.5 14-14l-.02-.64A9.94 9.94 0 0 0 24 4.59l-.05-.02z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-bottom">
            <span className="copyright">© {year} {personal.name} </span>
            <button 
              className="back-to-top-btn"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              aria-label="Back to top"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M18 15l-6-6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}