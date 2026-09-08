import React, { useState } from 'react'
import { engineeringProjects } from '../../data/portfolioData.js'

export default function WorkPage({ onNavigate }) {
  const [filter, setFilter] = useState('ALL')

  const categories = ['ALL', 'FULL-STACK', 'PRODUCT DESIGN']

  const filteredProjects = engineeringProjects.filter((p) => {
    if (filter === 'ALL') return true
    if (filter === 'FULL-STACK') return p.category.toLowerCase().includes('full-stack') || p.category.toLowerCase().includes('platform')
    if (filter === 'PRODUCT DESIGN') return p.category.toLowerCase().includes('design')
    return true
  })

  return (
    <div style={{ paddingTop: 'clamp(6.5rem, 10vw, 9rem)', minHeight: '80vh' }}>
      <div className="container">
        {/* Breadcrumb / Page Header */}
        <div className="section-header-bar">
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.8rem' }}>
            <span className="section-index">ARCHIVE</span>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--ink-muted)',
              }}
            >
              / SELECTED ENGINEERING & PRODUCT SYSTEMS
            </span>
          </div>

          <span className="section-meta-right">{engineeringProjects.length} DOCUMENTED PROJECTS</span>
        </div>

        <div style={{ marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
          <h1 className="display-section" style={{ maxWidth: '850px', marginBottom: '1rem' }}>
            ENGINEERING ARCHIVE.
          </h1>
          <p className="body-text" style={{ maxWidth: '640px' }}>
            Detailed case breakdowns of full-stack web platforms, distributed Spring Boot architectures,
            MERN applications, and conversion-centered product design systems.
          </p>
        </div>

        {/* Filter Bar */}
        <div
          style={{
            display: 'flex',
            gap: '0.5rem',
            marginBottom: '3rem',
            borderBottom: '1px solid var(--border)',
            paddingBottom: '1rem',
            flexWrap: 'wrap',
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.74rem',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                padding: '0.45rem 0.9rem',
                border: '1px solid',
                borderColor: filter === cat ? 'var(--ink)' : 'var(--border)',
                backgroundColor: filter === cat ? 'var(--ink)' : 'transparent',
                color: filter === cat ? 'var(--bg)' : 'var(--ink-secondary)',
                cursor: 'pointer',
                borderRadius: 'var(--radius-none)',
                transition: 'all 0.2s ease',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(4rem, 7vw, 6rem)' }}>
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              style={{
                borderTop: '1px solid var(--border)',
                paddingTop: '2.5rem',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'baseline',
                  marginBottom: '1.8rem',
                  flexWrap: 'wrap',
                  gap: '1rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '1.2rem',
                      fontWeight: 750,
                      color: 'var(--accent)',
                    }}
                  >
                    {project.index}
                  </span>
                  <div>
                    <h2
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: 'clamp(1.7rem, 3.5vw, 2.6rem)',
                        fontWeight: 750,
                        letterSpacing: '-0.03em',
                        color: 'var(--ink)',
                      }}
                    >
                      {project.title}
                    </h2>
                    <p
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.8rem',
                        color: 'var(--ink-muted)',
                        marginTop: '0.2rem',
                      }}
                    >
                      {project.subtitle}
                    </p>
                  </div>
                </div>

                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.78rem',
                    letterSpacing: '0.06em',
                    color: 'var(--ink-muted)',
                    textTransform: 'uppercase',
                  }}
                >
                  {project.role} • {project.period}
                </div>
              </div>

              {/* Grid: Media Frame & Detailed Case Narrative */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr',
                  gap: 'clamp(2rem, 4vw, 3.5rem)',
                  alignItems: 'start',
                }}
                className="work-page-grid"
              >
                <div
                  style={{
                    aspectRatio: '16/10',
                    border: '1px solid var(--border)',
                    overflow: 'hidden',
                    backgroundColor: 'var(--bg-subtle)',
                  }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>
                  <div>
                    <span className="meta-tag" style={{ color: 'var(--accent)', display: 'block', marginBottom: '0.35rem' }}>
                      THE CHALLENGE
                    </span>
                    <p className="body-text" style={{ color: 'var(--ink-secondary)' }}>
                      {project.problem}
                    </p>
                  </div>

                  <div>
                    <span className="meta-tag" style={{ color: 'var(--ink)', display: 'block', marginBottom: '0.35rem' }}>
                      ENGINEERING & ARCHITECTURE DECISIONS
                    </span>
                    <p className="body-text" style={{ color: 'var(--ink-secondary)' }}>
                      {project.decisions}
                    </p>
                  </div>

                  <div>
                    <span className="meta-tag" style={{ color: 'var(--ink-muted)', display: 'block', marginBottom: '0.35rem' }}>
                      MEASURABLE OUTCOME
                    </span>
                    <p className="body-sm" style={{ color: 'var(--ink-muted)' }}>
                      {project.outcome}
                    </p>
                  </div>

                  <div>
                    <span className="meta-tag" style={{ display: 'block', marginBottom: '0.5rem' }}>
                      TECHNOLOGIES
                    </span>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                      {project.tech.map((t) => (
                        <span key={t} className="tag-chip">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      gap: '1.2rem',
                      alignItems: 'center',
                      paddingTop: '1rem',
                      borderTop: '1px solid var(--border)',
                      flexWrap: 'wrap',
                    }}
                  >
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="link-arrow">
                        <span>Repository Source</span>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M7 17 17 7M17 7H7M17 7v10" />
                        </svg>
                      </a>
                    )}
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="link-arrow" style={{ color: 'var(--accent)' }}>
                        <span>Case Study / Live Link</span>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M7 17 17 7M17 7H7M17 7v10" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .work-page-grid {
            grid-template-columns: 1.1fr 0.9fr !important;
          }
        }
      `}</style>
    </div>
  )
}
