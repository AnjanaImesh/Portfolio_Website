import React from 'react'
import { careerTimeline, personal } from '../../data/portfolioData.js'

export default function ExperienceTimeline({ onNavigate }) {
  return (
    <section
      id="experience"
      style={{
        paddingTop: 'var(--pad-section)',
        paddingBottom: 'var(--pad-section)',
        borderBottom: '1px solid var(--border)',
        backgroundColor: 'var(--bg)',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div className="section-header-bar">
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.8rem' }}>
            <span className="section-index">04</span>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--ink-muted)',
              }}
            >
              / CHRONOLOGY & TRAJECTORY
            </span>
          </div>

          <span className="section-meta-right">ENGINEERING & CREATIVE PRACTICE</span>
        </div>

        <div style={{ marginBottom: 'clamp(3rem, 6vw, 5rem)' }}>
          <h2 className="display-section" style={{ maxWidth: '800px', marginBottom: '1rem' }}>
            A PROGRESSIVE PRACTICE <br />
            OF MAKING THINGS WELL.
          </h2>
          <p className="body-text" style={{ maxWidth: '640px' }}>
            Progressing through software engineering studies and intensive product internship into an
            Associate Software Engineer, while concurrently establishing and directing recognized visual creative practices.
          </p>
        </div>

        {/* Editorial Timeline Entries */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {careerTimeline.map((item, idx) => (
            <div
              key={idx}
              style={{
                borderTop: '1px solid var(--border)',
                paddingTop: '2rem',
                paddingBottom: '2.5rem',
                display: 'grid',
                gridTemplateColumns: '1fr',
                gap: '1.2rem',
              }}
              className="timeline-row"
            >
              {/* Period Column */}
              <div>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.82rem',
                    letterSpacing: '0.08em',
                    color: idx === 0 ? 'var(--accent)' : 'var(--ink-muted)',
                    fontWeight: idx === 0 ? 650 : 500,
                  }}
                >
                  {item.period}
                </span>
                {idx === 0 && (
                  <span
                    style={{
                      display: 'inline-block',
                      marginLeft: '0.6rem',
                      padding: '0.2rem 0.5rem',
                      backgroundColor: 'var(--accent-muted)',
                      border: '1px solid var(--accent)',
                      color: 'var(--accent)',
                      fontSize: '0.68rem',
                      fontFamily: 'var(--font-mono)',
                      borderRadius: 'var(--radius-none)',
                    }}
                  >
                    CURRENT LEVEL
                  </span>
                )}
              </div>

              {/* Role & Context Column */}
              <div>
                <h3
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: 'clamp(1.25rem, 2.2vw, 1.6rem)',
                    fontWeight: 700,
                    letterSpacing: '-0.02em',
                    color: 'var(--ink)',
                    marginBottom: '0.3rem',
                  }}
                >
                  {item.role}
                </h3>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.78rem',
                    color: 'var(--ink-secondary)',
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                  }}
                >
                  {item.context} • {item.location}
                </div>
              </div>

              {/* Contribution Description */}
              <div>
                <p className="body-text" style={{ color: 'var(--ink-secondary)' }}>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Action Link to Resume */}
        <div
          style={{
            marginTop: '2rem',
            paddingTop: '2rem',
            borderTop: '1px solid var(--border)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <span className="meta-tag">DETAILED CREDENTIALS & REFERENCES</span>
          <a
            href={personal.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="link-arrow"
          >
            <span>Download Complete Curriculum Vitae (PDF)</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17 17 7M17 7H7M17 7v10" />
            </svg>
          </a>
        </div>
      </div>

      <style>{`
        @media (min-width: 860px) {
          .timeline-row {
            grid-template-columns: 240px 320px 1fr !important;
            align-items: baseline;
            gap: 2rem !important;
          }
        }
      `}</style>
    </section>
  )
}
