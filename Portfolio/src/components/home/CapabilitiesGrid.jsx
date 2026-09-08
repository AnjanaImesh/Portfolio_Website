import React from 'react'

export default function CapabilitiesGrid() {
  const capabilities = [
    {
      group: 'ENGINEERING',
      sub: 'SYSTEMS & ARCHITECTURE',
      items: [
        'Frontend Architecture (React & Next.js)',
        'Backend & REST APIs (Java / Spring Boot)',
        'Node.js & Express / NestJS',
        'Database Modeling (PostgreSQL, MySQL, MongoDB)',
        'Containerization & Microservices (Docker)',
        'Web Performance & Core Vitals',
      ],
    },
    {
      group: 'VISUAL PRACTICE',
      sub: 'LIGHT & NARRATIVE',
      items: [
        'Editorial & Milestone Portraiture',
        'Commercial Visual Production (Onex Media)',
        'Academic Convocation Framing (GradPortraits LK)',
        'Lifestyle & Documentary Weddings (Moonory)',
        'Color Science & RAW Post-Production',
        'Brand Direction & Creative Media Strategy',
      ],
    },
  ]

  return (
    <section
      id="capabilities"
      style={{
        paddingTop: 'clamp(5rem, 9vw, 8.5rem)',
        paddingBottom: 'clamp(5rem, 9vw, 8.5rem)',
        borderBottom: '1px solid var(--border)',
        backgroundColor: 'var(--bg)',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div className="section-header-bar">
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.8rem' }}>
            <span className="section-index">05</span>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--ink-muted)',
              }}
            >
              / CAPABILITIES & COMPETENCIES
            </span>
          </div>

          <span className="section-meta-right">PRODUCTION-TESTED SKILLS</span>
        </div>

        {/* Headline */}
        <div style={{ marginBottom: 'clamp(3rem, 6vw, 5rem)' }}>
          <h2 className="display-section" style={{ maxWidth: '820px', margin: 0 }}>
            DISCIPLINED EXECUTION <br />
            ACROSS CODE AND CRAFT.
          </h2>
        </div>

        {/* ── Open Grouped Lists (No Cards / No Box UI) ── */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: 'clamp(3rem, 6vw, 6rem)',
            borderTop: '1px solid var(--border)',
            paddingTop: 'clamp(2.5rem, 5vw, 4rem)',
          }}
          className="capabilities-two-col"
        >
          {capabilities.map((cap, idx) => (
            <div key={cap.group}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  gap: '0.8rem',
                  marginBottom: '1.2rem',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.78rem',
                    color: idx === 0 ? 'var(--ink)' : 'var(--accent)',
                    fontWeight: 650,
                  }}
                >
                  [0{idx + 1}]
                </span>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.6rem, 2.8vw, 2.2rem)',
                    fontWeight: 800,
                    letterSpacing: '-0.03em',
                    color: 'var(--ink)',
                    textTransform: 'uppercase',
                    margin: 0,
                  }}
                >
                  {cap.group}
                </h3>
              </div>

              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  letterSpacing: '0.1em',
                  color: 'var(--ink-muted)',
                  textTransform: 'uppercase',
                  marginBottom: '2rem',
                }}
              >
                {cap.sub}
              </div>

              {/* Minimal Clean List */}
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {cap.items.map((item) => (
                  <li
                    key={item}
                    style={{
                      borderTop: '1px solid var(--border)',
                      padding: '1rem 0',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '1.02rem',
                      color: 'var(--ink-secondary)',
                      display: 'flex',
                      alignItems: 'baseline',
                      justifyContent: 'space-between',
                      transition: 'color var(--duration-fast) ease, transform var(--duration-fast) ease',
                    }}
                    className="capability-item"
                  >
                    <span>{item}</span>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.75rem',
                        color: 'var(--ink-muted)',
                      }}
                    >
                      / VERIFIED
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 860px) {
          .capabilities-two-col {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        .capability-item:hover {
          color: var(--ink) !important;
          padding-left: 0.5rem;
        }
      `}</style>
    </section>
  )
}
