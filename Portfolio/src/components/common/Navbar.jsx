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
    { id: 'home', label: 'INDEX', path: '/' },
    { id: 'work', label: 'WORK', path: '/work' },
    { id: 'photography', label: 'VISUAL', path: '/photography' },
    { id: 'about', label: 'ABOUT', path: '/about' },
    { id: 'contact', label: 'CONTACT', path: '/contact' },
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
          ? 'var(--bg)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        transition: 'background-color 0.3s ease, border-color 0.3s ease',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: scrolled ? '64px' : '76px',
          transition: 'height 0.3s ease',
        }}
      >
        {/* Monogram / Brand */}
        <a
          href="/"
          onClick={(e) => handleLinkClick(e, '/')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.85rem',
            textDecoration: 'none',
          }}
        >
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '32px',
              height: '32px',
              backgroundColor: 'var(--ink)',
              color: 'var(--bg)',
              fontFamily: 'var(--font-mono)',
              fontWeight: 700,
              fontSize: '0.82rem',
              letterSpacing: '0.04em',
              borderRadius: 'var(--radius-none)',
            }}
          >
            AI
          </span>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: 700,
                fontSize: '0.95rem',
                letterSpacing: '-0.02em',
                color: 'var(--ink)',
                lineHeight: 1.1,
              }}
            >
              ANJANA IMESH
            </span>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.66rem',
                letterSpacing: '0.06em',
                color: 'var(--ink-muted)',
                textTransform: 'uppercase',
              }}
              className="navbar-sub-role"
            >
              ENGINEER × PHOTOGRAPHER
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
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
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.78rem',
                  letterSpacing: '0.08em',
                  fontWeight: isActive ? 600 : 450,
                  color: isActive ? 'var(--accent)' : 'var(--ink-secondary)',
                  position: 'relative',
                  padding: '0.4rem 0',
                  textTransform: 'uppercase',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  if (!isActive) e.currentTarget.style.color = 'var(--ink)'
                }}
                onMouseLeave={(e) => {
                  if (!isActive) e.currentTarget.style.color = 'var(--ink-secondary)'
                }}
              >
                {isActive && (
                  <span
                    style={{
                      display: 'inline-block',
                      width: '4px',
                      height: '4px',
                      backgroundColor: 'var(--accent)',
                      borderRadius: '50%',
                      marginRight: '6px',
                      verticalAlign: 'middle',
                    }}
                  />
                )}
                {link.label}
              </a>
            )
          })}
        </nav>

        {/* Actions Right (Theme Toggle, Resume, Mobile Menu Toggle) */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
          {/* Theme Toggle Button */}
          <button
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title={`Toggle ${theme === 'dark' ? 'light' : 'dark'} theme`}
            style={{
              width: '36px',
              height: '36px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid var(--border)',
              backgroundColor: 'var(--bg-subtle)',
              color: 'var(--ink)',
              borderRadius: 'var(--radius-none)',
              transition: 'border-color 0.2s ease, background-color 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--ink)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--border)'
            }}
          >
            {theme === 'dark' ? (
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>

          {/* Resume link */}
          <a
            href={personal.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-resume-btn"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.74rem',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              color: 'var(--ink)',
              padding: '0.45rem 0.9rem',
              border: '1px solid var(--border-strong)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              borderRadius: 'var(--radius-none)',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--ink)'
              e.currentTarget.style.color = 'var(--bg)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent'
              e.currentTarget.style.color = 'var(--ink)'
            }}
          >
            <span>CV</span>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17 17 7M17 7H7M17 7v10" />
            </svg>
          </a>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="navbar-mobile-toggle"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
            style={{
              width: '38px',
              height: '38px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '5px',
              border: '1px solid var(--border)',
              backgroundColor: 'var(--bg-subtle)',
              borderRadius: 'var(--radius-none)',
            }}
          >
            <span
              style={{
                width: '18px',
                height: '1.5px',
                backgroundColor: 'var(--ink)',
                transform: mobileMenuOpen ? 'translateY(6.5px) rotate(45deg)' : 'none',
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
                transform: mobileMenuOpen ? 'translateY(-6.5px) rotate(-45deg)' : 'none',
                transition: 'transform 0.25s ease',
              }}
            />
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      <div
        className="navbar-mobile-drawer"
        style={{
          position: 'fixed',
          top: '64px',
          left: 0,
          right: 0,
          bottom: 0,
          height: 'calc(100dvh - 64px)',
          backgroundColor: 'var(--bg)',
          borderTop: '1px solid var(--border)',
          display: mobileMenuOpen ? 'flex' : 'none',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '2rem 1.5rem',
          zIndex: 999,
          overflowY: 'auto',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
          {navLinks.map((link, idx) => {
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
                  fontSize: '1.75rem',
                  fontWeight: 700,
                  letterSpacing: '-0.02em',
                  color: isActive ? 'var(--accent)' : 'var(--ink)',
                  textDecoration: 'none',
                }}
              >
                <span>{link.label}</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--ink-muted)' }}>
                  0{idx + 1}
                </span>
              </a>
            )
          })}
        </div>

        <div style={{ paddingTop: '2rem', borderTop: '1px solid var(--border)' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', letterSpacing: '0.08em', color: 'var(--ink-muted)', marginBottom: '0.5rem' }}>
            CURRENT STATUS
          </div>
          <p style={{ fontSize: '0.9rem', color: 'var(--ink-secondary)', marginBottom: '1.5rem' }}>
            {personal.status} • {personal.location}
          </p>
          <a
            href={personal.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-editorial"
            style={{ width: '100%' }}
          >
            Download Curriculum Vitae
          </a>
        </div>
      </div>

      <style>{`
        .navbar-mobile-toggle { display: none !important; }
        @media (max-width: 768px) {
          .navbar-desktop-nav { display: none !important; }
          .navbar-sub-role { display: none !important; }
          .navbar-resume-btn { display: none !important; }
          .navbar-mobile-toggle { display: flex !important; }
        }
      `}</style>
    </header>
  )
}
