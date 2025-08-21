import React, { useEffect, useState } from 'react'
import ThemeToggle from './ThemeToggle.jsx'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      setScrolled(isScrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav">
        <a href="#home" className="brand">
          <div className="brand-logo">
            <span className="logo-text">AI</span>
            <div className="logo-glow"></div>
          </div>
          <span className="brand-name">Anjana Imesh</span>
        </a>

        <nav className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          <a href="#about" className="nav-link">
            <span className="nav-text">About</span>
            <span className="nav-indicator"></span>
          </a>
          <a href="#skills" className="nav-link">
            <span className="nav-text">Skills</span>
            <span className="nav-indicator"></span>
          </a>
          <a href="#projects" className="nav-link">
            <span className="nav-text">Projects</span>
            <span className="nav-indicator"></span>
          </a>
          <a href="#contact" className="cta">
            <span className="cta-text">Contact</span>
            <div className="cta-glow"></div>
          </a>
          <ThemeToggle />
        </nav>

        <button 
          className={`mobile-menu-btn ${mobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </div>
    </header>
  )
}