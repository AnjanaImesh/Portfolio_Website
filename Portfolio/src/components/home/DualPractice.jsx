import React from 'react'

export default function DualPractice({ onNavigate }) {
  return (
    <section
      id="ethos"
      style={{
        paddingTop: 'clamp(5rem, 9vw, 8.5rem)',
        paddingBottom: 'clamp(5rem, 9vw, 8.5rem)',
        position: 'relative',
        overflow: 'hidden',
        borderBottom: '1px solid var(--border)',
        backgroundColor: 'var(--bg)',
      }}
    >
      {/* ── Architectural SVG Shape System: Subtle Coordinate Grid ── */}
      <div
        className="shape-arc-container"
        style={{
          inset: 0,
          width: '100%',
          height: '100%',
          opacity: 0.5,
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
          <line x1="0" y1="200" x2="1440" y2="200" stroke="var(--border)" strokeWidth="1" strokeDasharray="3 6" />
          <line x1="0" y1="400" x2="1440" y2="400" stroke="var(--border)" strokeWidth="1" />
          <line x1="0" y1="600" x2="1440" y2="600" stroke="var(--border)" strokeWidth="1" strokeDasharray="3 6" />
          <line x1="480" y1="0" x2="480" y2="800" stroke="var(--border)" strokeWidth="1" strokeDasharray="3 6" />
          <line x1="960" y1="0" x2="960" y2="800" stroke="var(--border)" strokeWidth="1" strokeDasharray="3 6" />

          {/* Creative Practice Arc Crossing the Technical Grid */}
          <circle
            cx="960"
            cy="400"
            r="300"
            stroke="var(--accent)"
            strokeWidth="1.2"
            strokeDasharray="6 8"
            opacity="0.4"
          />
          <circle
            cx="960"
            cy="400"
            r="6"
            fill="var(--accent)"
          />
        </svg>
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header Bar */}
        <div className="section-header-bar">
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.8rem' }}>
            <span className="section-index">01</span>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--ink-muted)',
              }}
            >
              / IDENTITY & DISCIPLINE
            </span>
          </div>

          <span className="section-meta-right">THE DUAL PRACTICE</span>
        </div>

        {/* Central Typographic Manifesto */}
        <div style={{ maxWidth: '1080px', marginBottom: 'clamp(3.5rem, 6vw, 5.5rem)' }}>
          <h2
            className="display-section"
            style={{
              color: 'var(--ink)',
              lineHeight: 1.02,
              marginBottom: '1.8rem',
              letterSpacing: '-0.04em',
            }}
          >
            ENGINEER BY PROFESSION.<br />
            <span style={{ color: 'var(--accent)' }}>PHOTOGRAPHER</span> BY PRACTICE.
          </h2>

          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(1.1rem, 1.8vw, 1.45rem)',
              lineHeight: 1.55,
              color: 'var(--ink-secondary)',
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

        {/* Comparative Typographic Columns (Open, Airy Layout) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: 'clamp(2.5rem, 5vw, 4.5rem)',
            borderTop: '1px solid var(--border)',
            paddingTop: 'clamp(2rem, 4vw, 3.5rem)',
          }}
          className="ethos-columns"
        >
          {/* Column 01: Engineering */}
          <div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.74rem',
                letterSpacing: '0.12em',
                color: 'var(--ink-muted)',
                marginBottom: '0.8rem',
              }}
            >
              [DOMAIN 01] / SOFTWARE ENGINEERING
            </div>

            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.4rem, 2.3vw, 1.95rem)',
                fontWeight: 750,
                color: 'var(--ink)',
                letterSpacing: '-0.03em',
                marginBottom: '1rem',
              }}
            >
              SYSTEMS, INTERFACES & SCALABLE LOGIC
            </h3>

            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.96rem',
                lineHeight: 1.7,
                color: 'var(--ink-secondary)',
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
                fontSize: '0.74rem',
                letterSpacing: '0.06em',
                color: 'var(--ink-muted)',
                textTransform: 'uppercase',
              }}
            >
              Spring Boot • React • Node.js • PostgreSQL • Docker
            </div>
          </div>

          {/* Column 02: Photography */}
          <div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.74rem',
                letterSpacing: '0.12em',
                color: 'var(--accent)',
                marginBottom: '0.8rem',
              }}
            >
              [DOMAIN 02] / VISUAL STORYTELLING
            </div>

            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.4rem, 2.3vw, 1.95rem)',
                fontWeight: 750,
                color: 'var(--ink)',
                letterSpacing: '-0.03em',
                marginBottom: '1rem',
              }}
            >
              LIGHT, GEOMETRY & HUMAN NARRATIVE
            </h3>

            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.96rem',
                lineHeight: 1.7,
                color: 'var(--ink-secondary)',
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
                fontSize: '0.74rem',
                letterSpacing: '0.06em',
                color: 'var(--accent)',
                textTransform: 'uppercase',
              }}
            >
              Editorial Portraiture • Commercial Media • Lifestyle • Color Science
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
