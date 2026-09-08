import React from 'react'

export default function PhotographyPreview({ onNavigate }) {
  const practices = [
    {
      id: 'onex',
      name: 'ONEX MEDIA',
      category: 'Creative / Visual Media',
      description:
        'High-impact commercial visual campaigns, cinematic video productions, brand identity direction, and concert stage coverage across Sri Lanka.',
      url: 'https://onexmedia.online',
      isInternal: false,
      cta: 'Visit official website ↗',
    },
    {
      id: 'gradportraits',
      name: 'GRADPORTRAITS LK',
      category: 'Graduation & Milestone Portraiture',
      description:
        'A dedicated portraiture brand capturing university convocation milestones with directional studio lighting and archival color grading.',
      url: 'https://gradportraitslk.vercel.app/',
      isInternal: false,
      cta: 'Visit official website ↗',
    },
    {
      id: 'moonory',
      name: 'MOONORY',
      category: 'Lifestyle & Wedding Photography',
      description:
        'Intimate, unscripted lifestyle sessions and natural wedding storytelling. Guided by environmental light and genuine human connection.',
      url: '/photography/moonory',
      isInternal: true,
      cta: 'View Moonory practice →',
    },
  ]

  return (
    <section
      id="visual-practice"
      style={{
        paddingTop: 'clamp(3.5rem, 6vw, 6rem)',
        paddingBottom: 'clamp(3.5rem, 6vw, 6rem)',
      }}
    >
      <div className="container">
        {/* Section Shell or Open Section Header */}
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
            <div className="section-pill-tag" style={{ marginBottom: '0.6rem' }}>Behind the Camera</div>
            <h2 className="display-section" style={{ margin: 0 }}>
              Independent visual practices.
            </h2>
          </div>

          <button
            type="button"
            onClick={() => onNavigate?.('/photography')}
            className="link-text-arrow"
          >
            <span>Explore visual ventures</span>
            <span>→</span>
          </button>
        </div>

        {/* ── 3 Clean Practice Rows ── */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {practices.map((p) => (
            <div
              key={p.id}
              className="minimal-practice-row"
            >
              <div style={{ maxWidth: '320px' }}>
                <h3
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)',
                    fontWeight: 750,
                    letterSpacing: '-0.02em',
                    color: 'var(--ink)',
                    marginBottom: '0.2rem',
                    transition: 'color var(--duration-fast) ease',
                  }}
                >
                  {p.name}
                </h3>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.76rem',
                    letterSpacing: '0.06em',
                    color: 'var(--ink-muted)',
                    textTransform: 'uppercase',
                  }}
                >
                  {p.category}
                </div>
              </div>

              <p
                className="body-text"
                style={{
                  maxWidth: '520px',
                  margin: 0,
                  fontSize: '0.94rem',
                }}
              >
                {p.description}
              </p>

              <div>
                {p.isInternal ? (
                  <button
                    type="button"
                    onClick={() => onNavigate?.(p.url)}
                    className="link-text-arrow"
                  >
                    <span>{p.cta}</span>
                  </button>
                ) : (
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-text-arrow"
                  >
                    <span>{p.cta}</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
