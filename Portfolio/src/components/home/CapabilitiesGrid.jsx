import React from 'react'

export default function CapabilitiesGrid() {
  const capabilityColumns = [
    {
      index: '01',
      title: 'Frontend Systems',
      subtitle: 'React & Modern Web',
      description:
        'Engineering responsive, accessible interfaces with React, Next.js, strict design tokens, and optimized Core Web Vitals.',
      tags: ['React', 'Next.js', 'TypeScript', 'WCAG 2.1'],
    },
    {
      index: '02',
      title: 'Backend & APIs',
      subtitle: 'Spring Boot & Node.js',
      description:
        'Developing resilient RESTful microservices, normalized relational schemas in PostgreSQL/MySQL, and secure JWT authentication.',
      tags: ['Java / Spring Boot', 'Node.js', 'PostgreSQL', 'Docker'],
    },
    {
      index: '03',
      title: 'Commercial Media',
      subtitle: 'Onex Media Direction',
      description:
        'Directing high-impact commercial visual campaigns, event coverage, and brand cinematography with deliberate color grading.',
      tags: ['Commercial Video', 'Live Stage', 'Brand Direction'],
    },
    {
      index: '04',
      title: 'Portraiture & Wedding',
      subtitle: 'GradPortraits & Moonory',
      description:
        'Capturing university milestones and unscripted natural-light weddings with directional lighting and documentary truth.',
      tags: ['Convocation', 'Documentary Wedding', 'Natural Light'],
    },
  ]

  return (
    <section
      id="capabilities"
      style={{
        paddingTop: 'clamp(3rem, 6vw, 5rem)',
        paddingBottom: 'clamp(3rem, 6vw, 5rem)',
      }}
    >
      <div className="container">
        {/* Centered Heading (As in Visual Reference) */}
        <div className="section-header-centered">
          <div className="section-pill-tag">Capabilities</div>
          <h2 className="display-section" style={{ margin: '0 auto 1rem auto' }}>
            Disciplined execution across code and camera.
          </h2>
          <p className="body-text" style={{ maxWidth: '620px', margin: '0 auto' }}>
            Two distinct disciplines sharing one high standard: clean architecture, mathematical rigor, and visual empathy.
          </p>
        </div>

        {/* ── Flat 4-Column Row (No Cards, As in Visual Reference) ── */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: 'clamp(2rem, 3.5vw, 3rem)',
            borderTop: '1px solid var(--border)',
            paddingTop: 'clamp(2.5rem, 4vw, 3.5rem)',
          }}
          className="capabilities-flat-grid"
        >
          {capabilityColumns.map((col) => (
            <div key={col.title} style={{ display: 'flex', flexDirection: 'column' }}>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.74rem',
                  letterSpacing: '0.1em',
                  color: 'var(--accent)',
                  fontWeight: 650,
                  marginBottom: '0.8rem',
                }}
              >
                [{col.index}]
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  color: 'var(--ink)',
                  marginBottom: '0.25rem',
                }}
              >
                {col.title}
              </h3>

              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.74rem',
                  letterSpacing: '0.04em',
                  color: 'var(--ink-muted)',
                  textTransform: 'uppercase',
                  marginBottom: '0.85rem',
                }}
              >
                {col.subtitle}
              </div>

              <p
                className="body-sm"
                style={{
                  color: 'var(--ink-secondary)',
                  lineHeight: 1.6,
                  marginBottom: '1.2rem',
                }}
              >
                {col.description}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginTop: 'auto' }}>
                {col.tags.map((t) => (
                  <span
                    key={t}
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.68rem',
                      color: 'var(--ink-muted)',
                    }}
                  >
                    • {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
