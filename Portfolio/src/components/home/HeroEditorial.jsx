import React from 'react'
import { personal } from '../../data/portfolioData.js'

export default function HeroEditorial({ onNavigate }) {
  const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const focusStack = [
    'Spring Boot',
    'React',
    'Node.js',
    'PostgreSQL',
    'Docker',
    'Onex Media',
    'GradPortraits LK',
    'Moonory',
  ]

  return (
    <section
      id="top"
      style={{
        paddingTop: 'clamp(5.5rem, 8vw, 7.5rem)',
        paddingBottom: 'clamp(1rem, 2vw, 2rem)',
      }}
    >
      <div className="container">
        {/* ── Large Soft Section Shell for Hero (Matching Visual Reference) ── */}
        <div className="section-shell" style={{ textAlign: 'center' }}>
          {/* Centered Compact Avatar with Friendly Speech Bubble */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              marginBottom: '1.8rem',
            }}
          >
            <div
              style={{
                width: '76px',
                height: '76px',
                borderRadius: '50%',
                overflow: 'hidden',
                border: '2px solid var(--surface)',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.06)',
                backgroundColor: 'var(--border)',
              }}
            >
              <picture>
                <source srcSet={personal.heroImageWebp} type="image/webp" />
                <img
                  src={personal.heroImage}
                  alt="Anjana Imesh"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                  loading="eager"
                  fetchPriority="high"
                />
              </picture>
            </div>

            {/* Small speech badge next to portrait */}
            <div
              style={{
                position: 'absolute',
                top: '-4px',
                right: '-80px',
                backgroundColor: 'var(--surface)',
                border: '1px solid var(--border)',
                padding: '0.25rem 0.65rem',
                borderRadius: 'var(--radius-pill)',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.74rem',
                fontWeight: 500,
                color: 'var(--ink)',
                whiteSpace: 'nowrap',
                boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
              }}
              className="hero-avatar-badge"
            >
              Hello there! 👋
            </div>
          </div>

          {/* Identity & Career Position */}
          <div style={{ marginBottom: '1.2rem' }}>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--ink-muted)',
                marginBottom: '0.4rem',
              }}
            >
              ANJANA IMESH
            </div>
            <div
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.88rem',
                fontWeight: 600,
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                color: 'var(--accent)',
              }}
            >
              ASSOCIATE SOFTWARE ENGINEER × PHOTOGRAPHER
            </div>
          </div>

          {/* Centered Main Statement (Calm, Modern, Authorial) */}
          <h1
            className="display-hero"
            style={{
              maxWidth: '820px',
              margin: '0 auto 1.5rem auto',
            }}
          >
            Building resilient software systems & framing authentic stories.
          </h1>

          <p
            className="subheadline"
            style={{
              maxWidth: '580px',
              margin: '0 auto 2.4rem auto',
            }}
          >
            Focused on reliable full-stack architectures, clean database systems, and human-centered visual media. Based in Sri Lanka.
          </p>

          {/* Compact Centered CTAs */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1rem',
              flexWrap: 'wrap',
            }}
          >
            <button
              type="button"
              onClick={() => scrollToSection('work')}
              className="btn-pill"
            >
              <span>View my work</span>
              <span style={{ fontSize: '0.84rem' }}>↓</span>
            </button>

            <button
              type="button"
              onClick={() => scrollToSection('contact')}
              className="btn-pill-subtle"
            >
              <span>Contact me</span>
              <span style={{ fontSize: '0.84rem' }}>→</span>
            </button>
          </div>

          {/* Clean Monochrome Partner / Tech Strip Underneath */}
          <div className="partner-strip">
            {focusStack.map((tech, idx) => (
              <span key={tech} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem' }}>
                <span>{tech}</span>
                {idx < focusStack.length - 1 && (
                  <span style={{ color: 'var(--border)', fontSize: '0.7rem' }}>•</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 580px) {
          .hero-avatar-badge {
            display: none !important;
          }
        }
      `}</style>
    </section>
  )
}
