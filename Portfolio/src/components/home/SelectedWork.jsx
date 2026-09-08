import React from 'react'
import { engineeringProjects } from '../../data/portfolioData.js'

export default function SelectedWork({ onNavigate }) {
  return (
    <section
      id="selected-work"
      style={{
        paddingTop: 'clamp(5rem, 9vw, 9rem)',
        paddingBottom: 'clamp(5rem, 9vw, 9.5rem)',
        position: 'relative',
        backgroundColor: 'var(--bg)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <div className="container">
        {/* Section Header Bar */}
        <div className="section-header-bar">
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.8rem' }}>
            <span className="section-index">02</span>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--ink-muted)',
              }}
            >
              / SELECTED SYSTEMS & PRODUCT ARCHITECTURE
            </span>
          </div>

          <span className="section-meta-right">
            04 PRODUCTION CASE BREAKDOWNS
          </span>
        </div>

        {/* Section Title & Philosophy */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'baseline',
            marginBottom: 'clamp(3.5rem, 7vw, 6rem)',
            flexWrap: 'wrap',
            gap: '1.5rem',
          }}
        >
          <h2 className="display-section" style={{ maxWidth: '760px', margin: 0 }}>
            SYSTEMS BUILT FOR RESILIENCE.
          </h2>

          <p
            className="body-text"
            style={{
              maxWidth: '440px',
              fontSize: '0.94rem',
              color: 'var(--ink-secondary)',
              margin: 0,
            }}
          >
            Engineering distributed backend architectures, normalized database models, and responsive web platforms.
            Open case breakdowns with verified outcomes.
          </p>
        </div>

        {/* ── Open Editorial Projects List (No Box Cards / No Drop Shadows) ── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(4.5rem, 8vw, 7.5rem)' }}>
          {engineeringProjects.map((project, idx) => {
            const isEven = idx % 2 === 0

            return (
              <article
                key={project.id}
                style={{
                  borderTop: '1px solid var(--border)',
                  paddingTop: 'clamp(2rem, 4vw, 3rem)',
                }}
                className="project-open-entry"
              >
                {/* Meta Top Line */}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'baseline',
                    marginBottom: '1.5rem',
                    flexWrap: 'wrap',
                    gap: '1rem',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem' }}>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '1rem',
                        fontWeight: 700,
                        color: 'var(--accent)',
                      }}
                    >
                      {project.index}
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.78rem',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        color: 'var(--ink-secondary)',
                      }}
                    >
                      {project.category}
                    </span>
                  </div>

                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.78rem',
                      letterSpacing: '0.08em',
                      color: 'var(--ink-muted)',
                      textTransform: 'uppercase',
                    }}
                  >
                    {project.role} • {project.period}
                  </span>
                </div>

                {/* 2-Column Asymmetric Open Layout: Narrative & Open Media */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr',
                    gap: 'clamp(2rem, 4vw, 4rem)',
                    alignItems: 'start',
                  }}
                  className={`project-content-grid ${isEven ? 'layout-standard' : 'layout-reversed'}`}
                >
                  {/* Text & Specs Column */}
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <h3
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 'clamp(1.8rem, 3.8vw, 3rem)',
                        fontWeight: 800,
                        letterSpacing: '-0.035em',
                        lineHeight: 1.05,
                        color: 'var(--ink)',
                        marginBottom: '0.6rem',
                      }}
                    >
                      {project.title}
                    </h3>

                    <p
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.82rem',
                        color: 'var(--ink-muted)',
                        marginBottom: '1.8rem',
                        lineHeight: 1.5,
                      }}
                    >
                      {project.subtitle}
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', marginBottom: '2rem' }}>
                      <div>
                        <span className="coord-mark" style={{ display: 'block', marginBottom: '0.3rem', color: 'var(--accent)' }}>
                          PROBLEM STATEMENT
                        </span>
                        <p className="body-text" style={{ fontSize: '0.94rem', color: 'var(--ink-secondary)', margin: 0 }}>
                          {project.problem}
                        </p>
                      </div>

                      <div>
                        <span className="coord-mark" style={{ display: 'block', marginBottom: '0.3rem' }}>
                          ENGINEERING ARCHITECTURE
                        </span>
                        <p className="body-text" style={{ fontSize: '0.94rem', color: 'var(--ink)', margin: 0 }}>
                          {project.decisions}
                        </p>
                      </div>

                      <div>
                        <span className="coord-mark" style={{ display: 'block', marginBottom: '0.3rem' }}>
                          MEASURABLE OUTCOME
                        </span>
                        <p className="body-sm" style={{ color: 'var(--ink-secondary)', margin: 0 }}>
                          {project.outcome}
                        </p>
                      </div>
                    </div>

                    {/* Monospace Tech Stack */}
                    <div
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.76rem',
                        letterSpacing: '0.06em',
                        color: 'var(--ink-muted)',
                        textTransform: 'uppercase',
                        paddingTop: '1.2rem',
                        borderTop: '1px solid var(--border)',
                        marginBottom: '1.8rem',
                      }}
                    >
                      {project.tech.join(' • ')}
                    </div>

                    {/* Direct Unboxed Actions */}
                    <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'center', flexWrap: 'wrap' }}>
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-sharp"
                        >
                          <span>VIEW REPOSITORY</span>
                          <span>↗</span>
                        </a>
                      )}

                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-sharp-ghost"
                        >
                          <span>LIVE SYSTEM</span>
                          <span>↗</span>
                        </a>
                      )}

                      <button
                        type="button"
                        onClick={() => onNavigate?.('/work')}
                        className="link-editorial-underline"
                        style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                      >
                        <span>FULL ARCHIVE CASE</span>
                        <span>→</span>
                      </button>
                    </div>
                  </div>

                  {/* Open Media Preview (Real Screenshot, No Box Card / No Shadow) */}
                  <div style={{ position: 'relative' }}>
                    <div
                      className="open-media-frame"
                      style={{
                        aspectRatio: '16/10',
                        width: '100%',
                      }}
                    >
                      <img
                        src={project.image}
                        alt={`${project.title} — Technical preview and system architecture`}
                        loading="lazy"
                      />
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        paddingTop: '0.5rem',
                      }}
                    >
                      <span className="coord-mark">SYS_FIG. 0{idx + 1} // {project.title.toUpperCase()}</span>
                      <span className="coord-mark">{project.period}</span>
                    </div>
                  </div>
                </div>
              </article>
            )
          })}
        </div>

        {/* Bottom Archive Action */}
        <div
          style={{
            marginTop: '5rem',
            paddingTop: '2rem',
            borderTop: '1px solid var(--border)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1.5rem',
          }}
        >
          <span className="coord-mark">COMPLETE SYSTEM ARCHIVE / 2024 — 2026</span>
          <button
            type="button"
            onClick={() => onNavigate?.('/work')}
            className="btn-sharp"
          >
            <span>EXPLORE ALL DOCUMENTED WORK</span>
            <span>→</span>
          </button>
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .project-content-grid {
            grid-template-columns: 1.1fr 1fr !important;
          }
          .layout-reversed {
            grid-template-columns: 1fr 1.1fr !important;
          }
          .layout-reversed > div:first-child {
            order: 2;
          }
          .layout-reversed > div:last-child {
            order: 1;
          }
        }
      `}</style>
    </section>
  )
}
