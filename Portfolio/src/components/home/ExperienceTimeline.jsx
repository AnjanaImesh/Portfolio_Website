import React from 'react'

export default function ExperienceTimeline({ onNavigate }) {
  const timeline = [
    {
      period: '2026 — Present',
      role: 'Associate Software Engineer',
      context: 'Enterprise Software Engineering',
      description:
        'Engineering resilient full-stack web platforms, RESTful APIs, and responsive frontends in Java/Spring Boot and modern React. Prioritizing database normalization, clean architecture, and test-driven reliability.',
      isCurrent: true,
    },
    {
      period: 'Dec 2025 — July 2026',
      role: 'Software Engineering Intern',
      context: 'Product Development & Full-Stack Systems',
      description:
        'Developed full-stack features, engineered REST API endpoints, designed relational database schemas, and actively contributed to sprint deliverables and team code reviews.',
      isCurrent: false,
    },
    {
      period: '2023 — 2026',
      role: 'BSc (Hons) in Information Technology',
      context: 'Software Engineering Specialization',
      description:
        'Rigorous study of Distributed Systems, Object-Oriented Architecture, Database Engineering, Algorithms, and Human-Computer Interaction.',
      isCurrent: false,
    },
  ]

  return (
    <section
      id="experience"
      style={{
        paddingTop: 'clamp(3.5rem, 6vw, 6rem)',
        paddingBottom: 'clamp(3.5rem, 6vw, 6rem)',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'baseline',
            marginBottom: 'clamp(2.5rem, 4vw, 3.5rem)',
            borderBottom: '1px solid var(--border)',
            paddingBottom: '1.2rem',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <div>
            <div className="section-pill-tag" style={{ marginBottom: '0.6rem' }}>Trajectory</div>
            <h2 className="display-section" style={{ margin: 0 }}>
              Career & milestones.
            </h2>
          </div>

          <span className="meta-tag">2023 — PRESENT</span>
        </div>

        {/* ── Flat Timeline Rows (No Cards, No Colorful Icons) ── */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {timeline.map((item, idx) => (
            <div
              key={idx}
              style={{
                borderTop: '1px solid var(--border)',
                paddingTop: '1.8rem',
                paddingBottom: '2.2rem',
                display: 'grid',
                gridTemplateColumns: '1fr',
                gap: '1.2rem',
              }}
              className="timeline-flat-row"
            >
              {/* Period */}
              <div>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.84rem',
                    color: item.isCurrent ? 'var(--accent)' : 'var(--ink-muted)',
                    fontWeight: item.isCurrent ? 650 : 500,
                  }}
                >
                  {item.period}
                </span>
                {item.isCurrent && (
                  <span
                    style={{
                      display: 'inline-block',
                      marginLeft: '0.6rem',
                      padding: '0.2rem 0.6rem',
                      backgroundColor: 'var(--accent-muted)',
                      color: 'var(--accent)',
                      fontSize: '0.68rem',
                      fontFamily: 'var(--font-mono)',
                      borderRadius: 'var(--radius-pill)',
                      fontWeight: 600,
                    }}
                  >
                    CURRENT
                  </span>
                )}
              </div>

              {/* Role & Context */}
              <div>
                <h3
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: 'clamp(1.2rem, 2vw, 1.5rem)',
                    fontWeight: 700,
                    letterSpacing: '-0.02em',
                    color: 'var(--ink)',
                    marginBottom: '0.25rem',
                  }}
                >
                  {item.role}
                </h3>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.76rem',
                    color: 'var(--ink-muted)',
                    textTransform: 'uppercase',
                  }}
                >
                  {item.context}
                </div>
              </div>

              {/* Description */}
              <div>
                <p className="body-sm" style={{ color: 'var(--ink-secondary)', margin: 0 }}>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 860px) {
          .timeline-flat-row {
            grid-template-columns: 240px 300px 1fr !important;
            align-items: baseline;
            gap: 2rem !important;
          }
        }
      `}</style>
    </section>
  )
}
