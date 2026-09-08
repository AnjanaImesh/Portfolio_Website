import React from 'react'
import { creativeVentures } from '../../data/portfolioData.js'

export default function PhotographyPage({ onNavigate }) {
  return (
    <div style={{ paddingTop: 'clamp(6.5rem, 10vw, 9rem)', minHeight: '80vh', backgroundColor: 'var(--bg)' }}>
      <div className="container">
        {/* Header Bar */}
        <div className="section-header-bar">
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.8rem' }}>
            <span className="section-index">VISUAL PRACTICES</span>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--ink-muted)',
              }}
            >
              / DEDICATED CREATIVE HUBS & VENTURES
            </span>
          </div>

          <span className="section-meta-right">SRI LANKA & REGIONAL ESSAYS</span>
        </div>

        {/* Page Title & Manifesto */}
        <div style={{ marginBottom: 'clamp(3rem, 6vw, 5.5rem)', maxWidth: '920px' }}>
          <h1
            className="display-hero"
            style={{
              fontSize: 'clamp(2.5rem, 6.5vw, 5.2rem)',
              lineHeight: 0.95,
              marginBottom: '1.5rem',
              letterSpacing: '-0.04em',
            }}
          >
            BEHIND THE CAMERA. <br />
            <span style={{ color: 'var(--accent)' }}>THREE VENTURES.</span>
          </h1>

          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(1.1rem, 1.8vw, 1.35rem)',
              lineHeight: 1.6,
              color: 'var(--ink-secondary)',
              fontWeight: 350,
            }}
          >
            My photography practice is organized into dedicated creative enterprises—each
            focusing on a distinct visual domain. Visit each official destination below to explore
            their complete, high-resolution visual archives and booking availability.
          </p>
        </div>

        {/* ── Visual Ventures Architectural Index (No Photo Card Clutter) ── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(3.5rem, 7vw, 6rem)', marginBottom: '6rem' }}>
          {creativeVentures.map((venture, idx) => (
            <article
              key={venture.id}
              style={{
                borderTop: '1px solid var(--border)',
                paddingTop: '2.5rem',
                display: 'grid',
                gridTemplateColumns: '1fr',
                gap: 'clamp(2rem, 4vw, 4rem)',
              }}
              className="venture-editorial-row"
            >
              {/* Left Column: Number & Identity */}
              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.82rem',
                    letterSpacing: '0.1em',
                    color: 'var(--accent)',
                    marginBottom: '0.5rem',
                    fontWeight: 650,
                  }}
                >
                  [VENTURE 0{idx + 1}]
                </div>

                <h2
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(2rem, 4vw, 3.4rem)',
                    fontWeight: 850,
                    letterSpacing: '-0.04em',
                    lineHeight: 1,
                    color: 'var(--ink)',
                    marginBottom: '0.6rem',
                  }}
                >
                  {venture.name}
                </h2>

                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.78rem',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: 'var(--ink-muted)',
                  }}
                >
                  {venture.role} • EST. {venture.founded} • {venture.location}
                </div>
              </div>

              {/* Right Column: Narrative, Capabilities & Direct Link */}
              <div style={{ maxWidth: '680px' }}>
                <p
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '1.05rem',
                    lineHeight: 1.7,
                    color: 'var(--ink)',
                    marginBottom: '1.8rem',
                  }}
                >
                  {venture.description}
                </p>

                <div style={{ marginBottom: '2rem' }}>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: 'var(--ink-muted)',
                      marginBottom: '0.8rem',
                    }}
                  >
                    FOCUS & CAPABILITIES
                  </div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {venture.capabilities.map((cap) => (
                      <li
                        key={cap}
                        style={{
                          borderTop: '1px solid var(--border)',
                          padding: '0.65rem 0',
                          fontFamily: 'var(--font-sans)',
                          fontSize: '0.92rem',
                          color: 'var(--ink-secondary)',
                          display: 'flex',
                          justifyContent: 'space-between',
                        }}
                      >
                        <span>{cap}</span>
                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--accent)' }}>
                          •
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Direct Action Link */}
                <div>
                  {venture.isInternal ? (
                    <button
                      type="button"
                      onClick={() => onNavigate?.(venture.url)}
                      className="btn-sharp"
                    >
                      <span>EXPLORE MOONORY PRACTICE</span>
                      <span>→</span>
                    </button>
                  ) : (
                    <a
                      href={venture.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-sharp"
                    >
                      <span>VISIT OFFICIAL DESTINATION ({venture.name})</span>
                      <span>↗</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 860px) {
          .venture-editorial-row {
            grid-template-columns: 360px 1fr !important;
          }
        }
      `}</style>
    </div>
  )
}
