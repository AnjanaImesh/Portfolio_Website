import React, { useState, useEffect } from 'react'
import { personal } from '../../data/portfolioData.js'

export default function Navbar({ currentRoute, onNavigate, theme, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  const navLinks = [
    { id: 'home', label: 'Overview', path: '/' },
    { id: 'work', label: 'Work', path: '/work' },
    { id: 'photography', label: 'Visual', path: '/photography' },
    { id: 'about', label: 'About', path: '/about' },
    { id: 'contact', label: 'Contact', path: '/contact' },
  ]

  const handleLinkClick = (e, path) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    onNavigate(path)
  }

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: scrolled
          ? 'rgba(255, 255, 255, 0.92)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        transition: 'background-color 0.25s ease, border-color 0.25s ease',
      }}
      className="site-navbar"
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: scrolled ? '62px' : '72px',
          transition: 'height 0.25s ease',
        }}
      >
        {/* Left: ANJANA IMESH Identity */}
        <a
          href="/"
          onClick={(e) => handleLinkClick(e, '/')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem',
            textDecoration: 'none',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 700,
              fontSize: '0.94rem',
              letterSpacing: '-0.02em',
              color: 'var(--ink)',
            }}
          >
            ANJANA IMESH
          </span>
          <span
            style={{
              display: 'inline-block',
              width: '4px',
              height: '4px',
              borderRadius: '50%',
              backgroundColor: 'var(--accent)',
            }}
          />
        </a>

        {/* Center/Right: Simple Unboxed Nav Links */}
        <nav
          aria-label="Main navigation"
          className="navbar-desktop-nav"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1.8rem',
          }}
        >
          {navLinks.map((link) => {
            const isActive =
              (link.id === 'home' && currentRoute === 'home') ||
              (link.id !== 'home' && currentRoute === link.id)
            return (
              <a
                key={link.id}
                href={link.path}
                onClick={(e) => handleLinkClick(e, link.path)}
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.86rem',
                  fontWeight: isActive ? 600 : 450,
                  color: isActive ? 'var(--ink)' : 'var(--ink-secondary)',
                  position: 'relative',
                  padding: '0.3rem 0',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  if (!isActive) e.currentTarget.style.color = 'var(--ink)'
                }}
                onMouseLeave={(e) => {
                  if (!isActive) e.currentTarget.style.color = 'var(--ink-secondary)'
                }}
              >
                {link.label}
              </a>
            )
          })}
        </nav>

        {/* Right Actions: Subtle CV Pill & Theme Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
          <a
            href={personal.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-resume-btn"
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.82rem',
              fontWeight: 500,
              color: 'var(--ink)',
              padding: '0.4rem 0.95rem',
              borderRadius: 'var(--radius-pill)',
              backgroundColor: 'var(--surface)',
              border: '1px solid var(--border)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--ink)'
              e.currentTarget.style.transform = 'translateY(-1px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--border)'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            <span>Resume</span>
            <span style={{ fontSize: '0.76rem', color: 'var(--ink-muted)' }}>↗</span>
          </a>

          {/* Borderless Theme Toggle */}
          <button
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title={`Toggle theme`}
            style={{
              width: '32px',
              height: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: 'none',
              backgroundColor: 'transparent',
              color: 'var(--ink-secondary)',
              borderRadius: '50%',
              transition: 'all 0.2s ease',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--bg-shell)'
              e.currentTarget.style.color = 'var(--ink)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent'
              e.currentTarget.style.color = 'var(--ink-secondary)'
            }}
          >
            {theme === 'dark' ? (
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            ) : (
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="navbar-mobile-toggle"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
            style={{
              width: '34px',
              height: '34px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '4px',
              border: 'none',
              backgroundColor: 'transparent',
              cursor: 'pointer',
            }}
          >
            <span
              style={{
                width: '18px',
                height: '1.5px',
                backgroundColor: 'var(--ink)',
                transform: mobileMenuOpen ? 'translateY(5.5px) rotate(45deg)' : 'none',
                transition: 'transform 0.25s ease',
              }}
            />
            <span
              style={{
                width: '18px',
                height: '1.5px',
                backgroundColor: 'var(--ink)',
                opacity: mobileMenuOpen ? 0 : 1,
                transition: 'opacity 0.2s ease',
              }}
            />
            <span
              style={{
                width: '18px',
                height: '1.5px',
                backgroundColor: 'var(--ink)',
                transform: mobileMenuOpen ? 'translateY(-5.5px) rotate(-45deg)' : 'none',
                transition: 'transform 0.25s ease',
              }}
            />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className="navbar-mobile-drawer"
        style={{
          position: 'fixed',
          top: '62px',
          left: 0,
          right: 0,
          bottom: 0,
          height: 'calc(100dvh - 62px)',
          backgroundColor: 'var(--bg)',
          borderTop: '1px solid var(--border)',
          display: mobileMenuOpen ? 'flex' : 'none',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '2.5rem 1.75rem',
          zIndex: 999,
          overflowY: 'auto',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
          {navLinks.map((link) => {
            const isActive =
              (link.id === 'home' && currentRoute === 'home') ||
              (link.id !== 'home' && currentRoute === link.id)
            return (
              <a
                key={link.id}
                href={link.path}
                onClick={(e) => handleLinkClick(e, link.path)}
                style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  justifyContent: 'space-between',
                  padding: '0.8rem 0',
                  borderBottom: '1px solid var(--border)',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '1.5rem',
                  fontWeight: 650,
                  letterSpacing: '-0.02em',
                  color: isActive ? 'var(--accent)' : 'var(--ink)',
                  textDecoration: 'none',
                }}
              >
                <span>{link.label}</span>
              </a>
            )
          })}
        </div>

        <div style={{ paddingTop: '2rem', borderTop: '1px solid var(--border)' }}>
          <p style={{ fontSize: '0.88rem', color: 'var(--ink-secondary)', marginBottom: '1.2rem' }}>
            {personal.status} • {personal.location}
          </p>
          <a
            href={personal.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pill"
            style={{ width: '100%' }}
          >
            <span>Curriculum Vitae</span>
            <span>↗</span>
          </a>
        </div>
      </div>

      <style>{`
        [data-theme="dark"] .site-navbar {
          background-color: ${scrolled ? 'rgba(12, 12, 13, 0.92)' : 'transparent'} !important;
        }
        .navbar-mobile-toggle { display: none !important; }
        @media (max-width: 768px) {
          .navbar-desktop-nav { display: none !important; }
          .navbar-resume-btn { display: none !important; }
          .navbar-mobile-toggle { display: flex !important; }
        }
      `}</style>
    </header>
  )
}
