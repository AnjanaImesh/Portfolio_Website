import React from 'react'
import { personal, careerTimeline } from '../../data/portfolioData.js'

export default function AboutPage({ onNavigate }) {
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
    <div style={{ paddingTop: 'clamp(6.5rem, 10vw, 9rem)', minHeight: '80vh', backgroundColor: 'var(--bg)' }}>
      <div className="container">
        {/* Header Bar */}
        <div className="section-header-bar">
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.8rem' }}>
            <span className="section-index">ABOUT</span>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--ink-muted)',
              }}
            >
              / CAREER & PERSONAL PRACTICE
            </span>
          </div>

          <span className="section-meta-right">ANJANA IMESH</span>
        </div>

        {/* ── Open Composition: Editorial Statement (Left) + Candid Arch Crop (Right) ── */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: 'clamp(3rem, 5vw, 5rem)',
            alignItems: 'center',
            marginBottom: 'clamp(4rem, 8vw, 6.5rem)',
            position: 'relative',
          }}
          className="about-top-grid"
        >
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div className="coord-mark" style={{ marginBottom: '1.2rem', color: 'var(--accent)' }}>
              IDENTITY / 2026 ARCHIVE
            </div>

            <h1
              className="display-hero"
              style={{
                fontSize: 'clamp(2.5rem, 6.2vw, 5.2rem)',
                lineHeight: 0.95,
                marginBottom: '2rem',
                letterSpacing: '-0.04em',
              }}
            >
              ENGINEER BY PROFESSION.<br />
              <span style={{ color: 'var(--accent)' }}>PHOTOGRAPHER</span> BY PRACTICE.
            </h1>

            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(1.1rem, 1.8vw, 1.35rem)',
                lineHeight: 1.6,
                color: 'var(--ink)',
                marginBottom: '2rem',
                fontWeight: 350,
              }}
            >
              I am an Associate Software Engineer and Photographer based in Sri Lanka.
              My professional focus moves between two distinct disciplines: building dependable,
              high-performance software systems and documenting authentic human stories through the lens.
            </p>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr',
                gap: '1.8rem',
                borderTop: '1px solid var(--border)',
                paddingTop: '1.8rem',
              }}
              className="about-narrative-grid"
            >
              <p className="body-text" style={{ margin: 0 }}>
                In engineering, I focus on distributed systems, enterprise Java/Spring Boot APIs,
                and responsive React frontend architectures. I prioritize clean interface boundaries,
                normalized database design, accessible components, and the disciplined work of making
                systems reliable under production load.
              </p>

              <p className="body-text" style={{ margin: 0 }}>
                Parallel to software, I lead three visual practices: <strong>Onex Media</strong> (commercial visual production),
                <strong>GradPortraits LK</strong> (academic convocation portraiture), and <strong>Moonory</strong> (intimate lifestyle
                and documentary wedding photography). In photography, as in code, excellence comes from patience with subtle details—light,
                composition, and genuine human connection.
              </p>
            </div>

            <div style={{ marginTop: '2.5rem', display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
              <a
                href={personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-sharp"
              >
                <span>DOWNLOAD CURRICULUM VITAE (PDF)</span>
                <span>↗</span>
              </a>

              <a
                href={`mailto:${personal.email}`}
                className="btn-sharp-ghost"
              >
                <span>DIRECT EMAIL</span>
                <span>→</span>
              </a>
            </div>
          </div>

          {/* Candid Arch Crop Connected by Subtle SVG Arc */}
          <div style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
            <div
              className="arch-frame"
              style={{
                width: '100%',
                maxWidth: '280px',
                aspectRatio: '3/4',
                position: 'relative',
                zIndex: 1,
              }}
            >
              <img
                src={personal.heroImage}
                alt="Anjana Imesh"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            {/* Connecting Arc */}
            <div
              style={{
                position: 'absolute',
                top: '-20px',
                right: '-20px',
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                zIndex: 0,
              }}
              aria-hidden="true"
            >
              <svg width="100%" height="100%" viewBox="0 0 320 400" fill="none">
                <circle cx="160" cy="200" r="140" stroke="var(--accent)" strokeWidth="1" strokeDasharray="4 6" opacity="0.6" />
              </svg>
            </div>
          </div>
        </div>

        {/* ── Career Chronology ── */}
        <div style={{ borderTop: '1px solid var(--border)', paddingTop: '3.5rem', marginBottom: '5rem' }}>
          <div className="section-header-bar">
            <span className="section-title" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)' }}>
              CHRONOLOGY & MILESTONES
            </span>
            <span className="section-meta-right">2023 — PRESENT</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {careerTimeline.map((item, idx) => (
              <div
                key={idx}
                style={{
                  borderTop: '1px solid var(--border)',
                  paddingTop: '1.8rem',
                  paddingBottom: '2rem',
                  display: 'grid',
                  gridTemplateColumns: '1fr',
                  gap: '1rem',
                }}
                className="about-timeline-row"
              >
                <div>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.82rem',
                      color: idx === 0 ? 'var(--accent)' : 'var(--ink-muted)',
                      fontWeight: 650,
                    }}
                  >
                    {item.period}
                  </span>
                </div>

                <div>
                  <h2
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '1.25rem',
                      fontWeight: 700,
                      color: 'var(--ink)',
                      marginBottom: '0.2rem',
                    }}
                  >
                    {item.role}
                  </h2>
                  <p
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.78rem',
                      color: 'var(--ink-secondary)',
                      textTransform: 'uppercase',
                    }}
                  >
                    {item.context} • {item.location}
                  </p>
                </div>

                <div>
                  <p className="body-text" style={{ color: 'var(--ink-secondary)', margin: 0 }}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Grouped Capabilities (No Cards) ── */}
        <div style={{ borderTop: '1px solid var(--border)', paddingTop: '3.5rem', paddingBottom: '5rem' }}>
          <div className="section-header-bar">
            <span className="section-title" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)' }}>
              TOOLKIT & DOMAINS
            </span>
            <span className="section-meta-right">PRODUCTION-TESTED</span>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: 'clamp(2.5rem, 5vw, 5rem)',
            }}
            className="about-capabilities-grid"
          >
            {capabilities.map((c, idx) => (
              <div key={c.group}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.8rem', marginBottom: '1rem' }}>
                  <span className="coord-mark" style={{ color: idx === 0 ? 'var(--ink)' : 'var(--accent)' }}>
                    [0{idx + 1}]
                  </span>
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.6rem',
                      fontWeight: 750,
                      color: 'var(--ink)',
                      textTransform: 'uppercase',
                      margin: 0,
                    }}
                  >
                    {c.group}
                  </h3>
                </div>

                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {c.items.map((i) => (
                    <li
                      key={i}
                      style={{
                        borderTop: '1px solid var(--border)',
                        padding: '0.85rem 0',
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.98rem',
                        color: 'var(--ink-secondary)',
                        display: 'flex',
                        justifyContent: 'space-between',
                      }}
                    >
                      <span>{i}</span>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--ink-muted)' }}>
                        VERIFIED
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .about-top-grid {
            grid-template-columns: 1.25fr 0.85fr !important;
          }
          .about-narrative-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          .about-timeline-row {
            grid-template-columns: 220px 300px 1fr !important;
            align-items: baseline;
          }
          .about-capabilities-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </div>
  )
}
