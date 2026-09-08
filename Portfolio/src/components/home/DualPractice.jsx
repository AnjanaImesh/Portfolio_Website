import React from 'react'

export default function DualPractice({ onNavigate }) {
  return (
    <section
      id="ethos"
      className="section-dark-block"
      style={{
        paddingTop: 'clamp(5.5rem, 10vw, 9.5rem)',
        paddingBottom: 'clamp(5.5rem, 10vw, 9.5rem)',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid var(--section-dark-border)',
        borderBottom: '1px solid var(--section-dark-border)',
      }}
    >
      {/* ── Architectural SVG Shape System: Large Arc Crossing Coordinate Grid ── */}
      <div
        className="shape-arc-container"
        style={{
          inset: 0,
          width: '100%',
          height: '100%',
          opacity: 0.25,
        }}
        aria-hidden="true"
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1440 800"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
          style={{ width: '100%', height: '100%' }}
        >
          {/* Engineering Technical Grid */}
          <line x1="0" y1="200" x2="1440" y2="200" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="2 4" />
          <line x1="0" y1="400" x2="1440" y2="400" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
          <line x1="0" y1="600" x2="1440" y2="600" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="2 4" />
          <line x1="480" y1="0" x2="480" y2="800" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
          <line x1="960" y1="0" x2="960" y2="800" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />

          {/* Creative Practice Arc Crossing the Technical Grid */}
          <circle
            cx="960"
            cy="400"
            r="320"
            stroke="var(--accent)"
            strokeWidth="1.5"
            strokeDasharray="6 8"
            opacity="0.75"
          />
          <circle
            cx="960"
            cy="400"
            r="8"
            fill="var(--accent)"
          />
        </svg>
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header Bar */}
        <div
          className="section-header-bar"
          style={{ borderBottomColor: 'var(--section-dark-border)' }}
        >
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.8rem' }}>
            <span className="section-index" style={{ color: 'var(--accent)' }}>
              01
            </span>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--section-dark-muted)',
              }}
            >
              / IDENTITY & DISCIPLINE
            </span>
          </div>

          <span
            className="section-meta-right"
            style={{ color: 'var(--section-dark-muted)' }}
          >
            THE DUAL PRACTICE
          </span>
        </div>

        {/* Central Typographic Manifesto */}
        <div style={{ maxWidth: '1080px', marginBottom: 'clamp(4rem, 7vw, 6rem)' }}>
          <h2
            className="display-section"
            style={{
              color: 'var(--section-dark-ink)',
              lineHeight: 1.02,
              marginBottom: '2rem',
              letterSpacing: '-0.04em',
            }}
          >
            ENGINEER BY PROFESSION.<br />
            <span style={{ color: 'var(--accent)' }}>PHOTOGRAPHER</span> BY PRACTICE.
          </h2>

          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(1.15rem, 2vw, 1.55rem)',
              lineHeight: 1.55,
              color: 'rgba(250, 250, 248, 0.85)',
              fontWeight: 350,
              maxWidth: '860px',
            }}
          >
            I build resilient full-stack systems and document real human stories.
            Software engineering brings mathematical structure, clean architecture, and operational rigor.
            Photography brings visual empathy, compositional discipline, and sensitivity to light.
            These are not opposing paths—they are two facets of one cohesive creative standard.
          </p>
        </div>

        {/* Comparative Typographic Columns (No Cards / Open Layout) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: 'clamp(3rem, 6vw, 5rem)',
            borderTop: '1px solid var(--section-dark-border)',
            paddingTop: 'clamp(2.5rem, 5vw, 4rem)',
          }}
          className="ethos-columns"
        >
          {/* Column 01: Engineering */}
          <div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                letterSpacing: '0.14em',
                color: 'var(--section-dark-muted)',
                marginBottom: '1rem',
              }}
            >
              [DOMAIN 01] / SOFTWARE ENGINEERING
            </div>

            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.5rem, 2.5vw, 2.1rem)',
                fontWeight: 750,
                color: 'var(--section-dark-ink)',
                letterSpacing: '-0.03em',
                marginBottom: '1.2rem',
              }}
            >
              SYSTEMS, INTERFACES & SCALABLE LOGIC
            </h3>

            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.98rem',
                lineHeight: 1.7,
                color: 'rgba(250, 250, 248, 0.72)',
                marginBottom: '1.5rem',
              }}
            >
              Engineering enterprise full-stack web applications, microservices in Java/Spring Boot,
              and modern reactive frontends. Prioritizing strict type boundaries, database normalization,
              efficient query plans, and accessible, responsive interfaces that perform under real production loads.
            </p>

            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                letterSpacing: '0.06em',
                color: 'var(--accent)',
                textTransform: 'uppercase',
              }}
            >
              SPRING BOOT • REACT • NODE.JS • POSTGRESQL • DOCKER
            </div>
          </div>

          {/* Column 02: Photography */}
          <div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                letterSpacing: '0.14em',
                color: 'var(--accent)',
                marginBottom: '1rem',
              }}
            >
              [DOMAIN 02] / VISUAL STORYTELLING
            </div>

            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.5rem, 2.5vw, 2.1rem)',
                fontWeight: 750,
                color: 'var(--section-dark-ink)',
                letterSpacing: '-0.03em',
                marginBottom: '1.2rem',
              }}
            >
              LIGHT, GEOMETRY & HUMAN NARRATIVE
            </h3>

            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.98rem',
                lineHeight: 1.7,
                color: 'rgba(250, 250, 248, 0.72)',
                marginBottom: '1.5rem',
              }}
            >
              Behind the lens, operating across commercial visual media (Onex Media), academic convocation
              portraiture (GradPortraits LK), and intimate lifestyle documentation (Moonory). Mastering
              natural and continuous lighting, color theory, and candid storytelling without artificial clichés.
            </p>

            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                letterSpacing: '0.06em',
                color: 'var(--section-dark-muted)',
                textTransform: 'uppercase',
              }}
            >
              EDITORIAL PORTRAITURE • COMMERCIAL MEDIA • LIFESTYLE • COLOR SCIENCE
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 860px) {
          .ethos-columns {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
