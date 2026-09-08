import React, { useState, useEffect } from 'react'
import { personal, socials } from '../../data/portfolioData.js'

export default function Footer({ onNavigate }) {
  const currentYear = new Date().getFullYear()
  const [localTime, setLocalTime] = useState('')

  useEffect(() => {
    const updateTime = () => {
      try {
        const timeStr = new Intl.DateTimeFormat('en-US', {
          timeZone: 'Asia/Colombo',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        }).format(new Date())
        setLocalTime(timeStr)
      } catch {
        setLocalTime('COLOMBO UTC+5:30')
      }
    }
    updateTime()
    const timer = setInterval(updateTime, 1000)
    return () => clearInterval(timer)
  }, [])

  const scrollToTop = (e) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer
      style={{
        borderTop: '1px solid var(--section-dark-border)',
        backgroundColor: 'var(--section-dark)',
        color: 'var(--section-dark-ink)',
        paddingTop: 'clamp(4rem, 8vw, 6.5rem)',
        paddingBottom: '3rem',
        marginTop: 0,
      }}
    >
      <div className="container">
        {/* Large Editorial Invitation */}
        <div style={{ marginBottom: 'clamp(3rem, 6vw, 5rem)' }}>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.78rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              marginBottom: '1.2rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
          >
            <span>08</span>
            <span>/ CLOSING INVITATION</span>
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(2.4rem, 6vw, 5.5rem)',
              fontWeight: 750,
              lineHeight: 1.02,
              letterSpacing: '-0.04em',
              color: 'var(--section-dark-ink)',
              maxWidth: '1000px',
              marginBottom: '2rem',
            }}
          >
            HAVE A PRODUCT TO BUILD <br />
            OR A STORY TO FRAME?
          </h2>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <a
              href={`mailto:${personal.email}`}
              className="btn-sharp"
              style={{ fontSize: '0.85rem', padding: '0.9rem 1.8rem' }}
            >
              <span>Say Hello</span>
              <span>↗</span>
            </a>

            <button
              onClick={() => onNavigate?.('/contact')}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.85rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                padding: '0.9rem 1.8rem',
                background: 'transparent',
                color: 'var(--section-dark-ink)',
                border: '1px solid var(--section-dark-border)',
                cursor: 'pointer',
              }}
            >
              Inquiry Form
            </button>
          </div>
        </div>

        {/* Directory & Meta Columns */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2.5rem',
            paddingTop: '2.5rem',
            borderTop: '1px solid var(--section-dark-border)',
            marginBottom: '3.5rem',
          }}
        >
          {/* Identity Column */}
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', letterSpacing: '0.08em', color: 'var(--section-dark-muted)', marginBottom: '1rem', textTransform: 'uppercase' }}>
              PRACTICE
            </div>
            <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: '1.05rem', color: 'var(--section-dark-ink)', marginBottom: '0.4rem' }}>
              ANJANA IMESH
            </div>
            <p style={{ fontSize: '0.88rem', color: 'var(--section-dark-muted)', lineHeight: 1.6 }}>
              Associate Software Engineer & Photographer. Focused on structured web systems and human visual stories.
            </p>
          </div>

          {/* Location & Timezone */}
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', letterSpacing: '0.08em', color: 'var(--section-dark-muted)', marginBottom: '1rem', textTransform: 'uppercase' }}>
              LOCATION & CLOCK
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.92rem', color: 'var(--section-dark-ink)', marginBottom: '0.3rem' }}>
              {personal.location}
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--accent)' }}>
              {localTime ? `${localTime} LKT (UTC+5:30)` : 'UTC+05:30'}
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', letterSpacing: '0.08em', color: 'var(--section-dark-muted)', marginBottom: '1rem', textTransform: 'uppercase' }}>
              ARCHIVE
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <a href="/work" onClick={(e) => { e.preventDefault(); onNavigate?.('/work') }} className="link-arrow" style={{ color: 'rgba(250, 250, 248, 0.8)' }}>
                01 Selected Work
              </a>
              <a href="/photography" onClick={(e) => { e.preventDefault(); onNavigate?.('/photography') }} className="link-arrow" style={{ color: 'rgba(250, 250, 248, 0.8)' }}>
                02 Visual Ventures
              </a>
              <a href="/about" onClick={(e) => { e.preventDefault(); onNavigate?.('/about') }} className="link-arrow" style={{ color: 'rgba(250, 250, 248, 0.8)' }}>
                03 Career & Practice
              </a>
              <a href="/contact" onClick={(e) => { e.preventDefault(); onNavigate?.('/contact') }} className="link-arrow" style={{ color: 'rgba(250, 250, 248, 0.8)' }}>
                04 Direct Contact
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', letterSpacing: '0.08em', color: 'var(--section-dark-muted)', marginBottom: '1rem', textTransform: 'uppercase' }}>
              NETWORK
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {socials.map((soc) => (
                <a
                  key={soc.label}
                  href={soc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-arrow"
                  style={{ color: 'rgba(250, 250, 248, 0.8)' }}
                >
                  <span>{soc.label}</span>
                  <span style={{ fontSize: '0.72rem', color: 'var(--accent)' }}>↗</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Hairline Sub-Footer */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingTop: '1.5rem',
            borderTop: '1px solid var(--section-dark-border)',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.74rem', color: 'var(--section-dark-muted)' }}>
            © {currentYear} ANJANA IMESH.
          </div>

          <a
            href="#top"
            onClick={scrollToTop}
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.74rem',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'var(--section-dark-ink)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
            }}
          >
            <span>BACK TO TOP</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="19" x2="12" y2="5" />
              <polyline points="5 12 12 5 19 12" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  )
}
