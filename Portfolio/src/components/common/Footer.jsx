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
        paddingTop: 'clamp(2rem, 4vw, 3.5rem)',
        paddingBottom: '2.5rem',
        backgroundColor: 'var(--bg)',
      }}
    >
      <div className="container">
        {/* ── Large Soft Section Shell for Closing CTA (Matching Reference) ── */}
        <div className="section-shell" style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          {/* Handshake / Conversation Icon Badge */}
          <div
            style={{
              width: '56px',
              height: '56px',
              borderRadius: '50%',
              backgroundColor: 'var(--surface)',
              border: '1px solid var(--border)',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.4rem',
              marginBottom: '1.5rem',
              boxShadow: '0 2px 10px rgba(0,0,0,0.03)',
            }}
          >
            🤝
          </div>

          <h2
            className="display-section"
            style={{
              maxWidth: '680px',
              margin: '0 auto 1rem auto',
            }}
          >
            Tell me about your next project.
          </h2>

          <p
            className="subheadline"
            style={{
              maxWidth: '520px',
              margin: '0 auto 2rem auto',
            }}
          >
            Open for software engineering roles, full-stack contracts, and creative visual media collaborations.
          </p>

          {/* Compact Rounded CTAs */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1rem',
              flexWrap: 'wrap',
            }}
          >
            <a
              href={`mailto:${personal.email}`}
              className="btn-pill"
            >
              <span>Email me</span>
              <span style={{ fontSize: '0.8rem' }}>↗</span>
            </a>

            <button
              type="button"
              onClick={() => onNavigate?.('/contact')}
              className="btn-pill-subtle"
            >
              <span>Inquiry form</span>
              <span style={{ fontSize: '0.8rem' }}>→</span>
            </button>
          </div>
        </div>

        {/* ── Bottom Line: Copyright, Timezone & Socials ── */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingTop: '1.2rem',
            borderTop: '1px solid var(--border)',
            flexWrap: 'wrap',
            gap: '1rem',
            fontFamily: 'var(--font-sans)',
            fontSize: '0.82rem',
            color: 'var(--ink-secondary)',
          }}
        >
          <div>
            © {currentYear} Anjana Imesh. All rights reserved.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.76rem', color: 'var(--ink-muted)' }}>
              {localTime ? `${localTime} LKT (UTC+5:30)` : 'Sri Lanka'}
            </span>

            <div style={{ display: 'flex', gap: '1.2rem' }}>
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-text-arrow"
                  style={{ fontSize: '0.82rem' }}
                >
                  <span>{s.label}</span>
                </a>
              ))}
            </div>

            <a
              href="#top"
              onClick={scrollToTop}
              className="link-text-arrow"
              style={{ fontSize: '0.8rem', color: 'var(--ink-muted)' }}
              title="Back to top"
            >
              ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
