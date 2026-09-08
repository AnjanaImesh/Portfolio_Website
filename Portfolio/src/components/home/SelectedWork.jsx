import React, { useState } from 'react'
import { engineeringProjects } from '../../data/portfolioData.js'

export default function SelectedWork({ onNavigate }) {
  const [activeProjectId, setActiveProjectId] = useState(engineeringProjects[0]?.id || null)

  const activeProject = engineeringProjects.find((p) => p.id === activeProjectId) || engineeringProjects[0]

  return (
    <section
      id="work"
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
            <div className="section-pill-tag" style={{ marginBottom: '0.6rem' }}>Selected Work</div>
            <h2 className="display-section" style={{ margin: 0 }}>
              Recent engineering projects.
            </h2>
          </div>

          <button
            type="button"
            onClick={() => onNavigate?.('/work')}
            className="link-text-arrow"
          >
            <span>View all projects</span>
            <span>→</span>
          </button>
        </div>

        {/* ── Minimalist Project List with Hover / Active Preview ── */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: 'clamp(2rem, 4vw, 3.5rem)',
          }}
          className="work-dual-layout"
        >
          {/* Projects Column */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {engineeringProjects.map((project) => {
              const isActive = activeProjectId === project.id

              return (
                <div
                  key={project.id}
                  onMouseEnter={() => setActiveProjectId(project.id)}
                  onClick={() => setActiveProjectId(project.id)}
                  style={{
                    borderTop: '1px solid var(--border)',
                    padding: 'clamp(1.5rem, 2.5vw, 2rem) 0',
                    cursor: 'pointer',
                    transition: 'all var(--duration-fast) ease',
                  }}
                  className="project-list-entry"
                >
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'baseline',
                      flexWrap: 'wrap',
                      gap: '0.8rem',
                      marginBottom: '0.4rem',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem' }}>
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.85rem',
                          color: isActive ? 'var(--accent)' : 'var(--ink-muted)',
                          fontWeight: 650,
                        }}
                      >
                        {project.index}
                      </span>
                      <h3
                        style={{
                          fontFamily: 'var(--font-sans)',
                          fontSize: 'clamp(1.3rem, 2.2vw, 1.7rem)',
                          fontWeight: 700,
                          color: isActive ? 'var(--ink)' : 'var(--ink-secondary)',
                          letterSpacing: '-0.02em',
                          margin: 0,
                          transition: 'color var(--duration-fast) ease',
                        }}
                      >
                        {project.title}
                      </h3>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.76rem',
                          color: 'var(--ink-muted)',
                          textTransform: 'uppercase',
                        }}
                      >
                        {project.period}
                      </span>
                      <span
                        style={{
                          fontSize: '1rem',
                          color: isActive ? 'var(--accent)' : 'var(--ink-muted)',
                          transition: 'transform var(--duration-fast) ease, color var(--duration-fast) ease',
                          transform: isActive ? 'translateX(4px)' : 'none',
                        }}
                      >
                        →
                      </span>
                    </div>
                  </div>

                  <p
                    className="body-sm"
                    style={{
                      maxWidth: '560px',
                      marginBottom: '0.8rem',
                      marginLeft: '2rem',
                    }}
                  >
                    {project.subtitle} — {project.decisions}
                  </p>

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1.2rem',
                      marginLeft: '2rem',
                      flexWrap: 'wrap',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.72rem',
                        color: 'var(--ink-muted)',
                        textTransform: 'uppercase',
                      }}
                    >
                      {project.tech.slice(0, 4).join(' • ')}
                    </span>

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="link-text-arrow"
                        style={{ fontSize: '0.78rem' }}
                      >
                        <span>Repo</span>
                        <span style={{ fontSize: '0.7rem' }}>↗</span>
                      </a>
                    )}

                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="link-text-arrow"
                        style={{ fontSize: '0.78rem', color: 'var(--accent)' }}
                      >
                        <span>Live</span>
                        <span style={{ fontSize: '0.7rem' }}>↗</span>
                      </a>
                    )}
                  </div>
                </div>
              )
            })}
          </div>

          {/* Optional Sleek Preview On Active / Hover (Unboxed, Soft Radius) */}
          <div
            style={{
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
            className="work-preview-column"
          >
            <div
              style={{
                width: '100%',
                aspectRatio: '16/10',
                borderRadius: 'var(--radius-card)',
                overflow: 'hidden',
                backgroundColor: 'var(--bg-shell)',
                border: '1px solid var(--border)',
                position: 'relative',
              }}
            >
              {engineeringProjects.map((p) => (
                <img
                  key={p.id}
                  src={p.image}
                  alt={p.title}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    opacity: activeProjectId === p.id ? 1 : 0,
                    transition: 'opacity 0.4s ease, transform 0.6s ease',
                    transform: activeProjectId === p.id ? 'scale(1)' : 'scale(1.03)',
                  }}
                />
              ))}
            </div>
            <div
              style={{
                marginTop: '0.75rem',
                display: 'flex',
                justifyContent: 'space-between',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.74rem',
                color: 'var(--ink-muted)',
              }}
            >
              <span>{activeProject.title}</span>
              <span>{activeProject.category}</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 960px) {
          .work-dual-layout {
            grid-template-columns: 1.35fr 0.9fr !important;
            align-items: center !important;
          }
        }
        @media (max-width: 959px) {
          .work-preview-column {
            display: none !important;
          }
        }
      `}</style>
    </section>
  )
}
