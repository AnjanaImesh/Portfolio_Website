import React, { useState } from 'react'

export default function PhotographyPreview({ onNavigate }) {
  const [activeBrandId, setActiveBrandId] = useState('onex')

  const brands = [
    {
      id: 'onex',
      index: '01',
      name: 'ONEX MEDIA',
      discipline: 'Commercial Production & Visual Media',
      description:
        'High-impact commercial visual campaigns, cinematic video productions, brand identity direction, and live concert / stage coverage across Sri Lanka.',
      year: '2023 — PRESENT',
      url: 'https://onexmedia.online',
      isInternal: false,
      cta: 'VISIT SITE ↗',
      image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop',
      caption: 'Onex Media // Commercial Production & Cinematic Live Stage',
    },
    {
      id: 'gradportraits',
      index: '02',
      name: 'GRADPORTRAITS LK',
      discipline: 'Convocation & Milestone Portraiture',
      description:
        'A specialized portraiture brand capturing university convocation milestones with tailored directional lighting, heritage architecture framing, and archival color grading.',
      year: '2023 — PRESENT',
      url: 'https://gradportraitslk.vercel.app/',
      isInternal: false,
      cta: 'VISIT SITE ↗',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200&auto=format&fit=crop',
      caption: 'GradPortraits LK // University Milestone Convocation Portraiture',
    },
    {
      id: 'moonory',
      index: '03',
      name: 'MOONORY',
      discipline: 'Lifestyle & Documentary Weddings',
      description:
        'Intimate, unhurried lifestyle sessions and natural wedding storytelling. Documenting raw human connection in golden natural light, free of artificial poses or wedding clichés.',
      year: '2024 — PRESENT',
      url: '/photography/moonory',
      isInternal: true,
      cta: 'VIEW PRACTICE →',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop',
      caption: 'Moonory // Unscripted Natural Light Lifestyle & Couples',
    },
  ]

  const activeBrand = brands.find((b) => b.id === activeBrandId) || brands[0]

  return (
    <section
      id="visual-practice"
      className="section-dark-block"
      style={{
        paddingTop: 'clamp(5.5rem, 10vw, 9.5rem)',
        paddingBottom: 'clamp(5.5rem, 10vw, 9.5rem)',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid var(--section-dark-border)',
        borderBottom: '1px solid var(--section-dark-border)',
      }}
    >
      {/* ── Subtle Geometric Vector Background ── */}
      <div
        className="shape-arc-container"
        style={{
          inset: 0,
          width: '100%',
          height: '100%',
          opacity: 0.15,
        }}
        aria-hidden="true"
      >
        <svg width="100%" height="100%" viewBox="0 0 1440 800" fill="none" preserveAspectRatio="xMidYMid slice">
          <circle cx="1100" cy="400" r="340" stroke="var(--accent)" strokeWidth="1" strokeDasharray="6 8" />
          <line x1="0" y1="400" x2="1440" y2="400" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
        </svg>
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header Bar */}
        <div
          className="section-header-bar"
          style={{ borderBottomColor: 'var(--section-dark-border)' }}
        >
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.8rem' }}>
            <span className="section-index" style={{ color: 'var(--accent)' }}>
              03
            </span>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--section-dark-muted)',
              }}
            >
              / BEHIND THE CAMERA
            </span>
          </div>

          <span
            className="section-meta-right"
            style={{ color: 'var(--section-dark-muted)' }}
          >
            3 INDEPENDENT PRACTICES
          </span>
        </div>

        {/* Section Headline */}
        <div style={{ marginBottom: 'clamp(3rem, 6vw, 5rem)', maxWidth: '840px' }}>
          <h2
            className="display-section"
            style={{
              color: 'var(--section-dark-ink)',
              lineHeight: 1,
              marginBottom: '1.2rem',
            }}
          >
            LIGHT, GEOMETRY & HUMAN STORIES.
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '1.02rem',
              lineHeight: 1.65,
              color: 'rgba(250, 250, 248, 0.75)',
              margin: 0,
            }}
          >
            My photography work is organized into dedicated creative enterprises.
            Hover each practice to view a selected moment from its archive.
          </p>
        </div>

        {/* ── 2-Column Composition: Editorial List (Left) + Dynamic Single Visual (Right) ── */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: 'clamp(3rem, 6vw, 5rem)',
            alignItems: 'center',
          }}
          className="practice-interactive-grid"
        >
          {/* Left Column: Large Typographic List */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {brands.map((brand) => {
              const isActive = activeBrandId === brand.id

              return (
                <div
                  key={brand.id}
                  onMouseEnter={() => setActiveBrandId(brand.id)}
                  onClick={() => setActiveBrandId(brand.id)}
                  style={{
                    borderTop: '1px solid var(--section-dark-border)',
                    padding: 'clamp(1.8rem, 3.5vw, 2.6rem) 0',
                    cursor: 'pointer',
                    transition: 'all var(--duration-fast) ease',
                  }}
                  className="practice-list-row"
                >
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.8rem', marginBottom: '0.4rem' }}>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.82rem',
                        color: isActive ? 'var(--accent)' : 'var(--section-dark-muted)',
                        fontWeight: 650,
                      }}
                    >
                      [{brand.index}]
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.74rem',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        color: isActive ? 'var(--section-dark-ink)' : 'var(--section-dark-muted)',
                      }}
                    >
                      {brand.discipline}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(2rem, 4.2vw, 3.6rem)',
                      fontWeight: 850,
                      letterSpacing: '-0.04em',
                      lineHeight: 1,
                      textTransform: 'uppercase',
                      color: isActive ? '#FFFFFF' : 'rgba(250, 250, 248, 0.65)',
                      marginBottom: '0.8rem',
                      transition: 'color var(--duration-fast) ease',
                    }}
                  >
                    {brand.name}
                  </h3>

                  <p
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.92rem',
                      lineHeight: 1.6,
                      color: 'rgba(250, 250, 248, 0.7)',
                      maxWidth: '520px',
                      marginBottom: '1.2rem',
                    }}
                  >
                    {brand.description}
                  </p>

                  <div>
                    {brand.isInternal ? (
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation()
                          onNavigate?.(brand.url)
                        }}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.8rem',
                          letterSpacing: '0.08em',
                          textTransform: 'uppercase',
                          color: isActive ? 'var(--accent)' : 'rgba(250, 250, 248, 0.7)',
                          background: 'none',
                          border: 'none',
                          borderBottom: `1px solid ${isActive ? 'var(--accent)' : 'var(--section-dark-border)'}`,
                          paddingBottom: '2px',
                          cursor: 'pointer',
                        }}
                      >
                        <span>{brand.cta}</span>
                      </button>
                    ) : (
                      <a
                        href={brand.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.8rem',
                          letterSpacing: '0.08em',
                          textTransform: 'uppercase',
                          color: isActive ? 'var(--accent)' : 'rgba(250, 250, 248, 0.7)',
                          borderBottom: `1px solid ${isActive ? 'var(--accent)' : 'var(--section-dark-border)'}`,
                          paddingBottom: '2px',
                        }}
                      >
                        <span>{brand.cta}</span>
                      </a>
                    )}
                  </div>
                </div>
              )
            })}
          </div>

          {/* Right Column: Dynamic Single Visual Stage (One Curated Photo in Arch Frame) */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              position: 'relative',
            }}
          >
            <div
              className="arch-frame"
              style={{
                width: '100%',
                maxWidth: '380px',
                aspectRatio: '4/5',
                borderColor: 'var(--section-dark-border)',
                backgroundColor: 'rgba(255,255,255,0.03)',
                position: 'relative',
              }}
            >
              {brands.map((b) => (
                <img
                  key={b.id}
                  src={b.image}
                  alt={b.caption}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    opacity: activeBrandId === b.id ? 1 : 0,
                    transition: 'opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s ease',
                    transform: activeBrandId === b.id ? 'scale(1)' : 'scale(1.04)',
                  }}
                />
              ))}

              {/* Minimalist Micro Coordinates Plate */}
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: '0.6rem 0.9rem',
                  backgroundColor: 'rgba(10, 10, 10, 0.85)',
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  borderTop: '1px solid rgba(255, 255, 255, 0.12)',
                  zIndex: 2,
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.68rem',
                    letterSpacing: '0.08em',
                    color: '#FAFAF8',
                    textTransform: 'uppercase',
                  }}
                >
                  ARCHIVE // {activeBrand.name}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.64rem',
                    color: 'var(--accent)',
                  }}
                >
                  SINGLE VISUAL STAGE
                </span>
              </div>
            </div>

            <div
              style={{
                width: '100%',
                maxWidth: '380px',
                marginTop: '0.8rem',
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  color: 'var(--section-dark-muted)',
                }}
              >
                {activeBrand.caption}
              </span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 960px) {
          .practice-interactive-grid {
            grid-template-columns: 1.25fr 0.95fr !important;
            gap: 4rem !important;
          }
        }
      `}</style>
    </section>
  )
}
