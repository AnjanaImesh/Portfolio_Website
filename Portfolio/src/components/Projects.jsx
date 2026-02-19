import React, { useState } from 'react'
import { projects } from '../data.js'
import useReveal from '../hooks/useReveal.js'

/* Local image map */
import travelbudyImage from '../assets/travelbudy.png'
import automotiveImage from '../assets/Automotive.jpeg'
const IMG_MAP = { 'Travel Buddy': travelbudyImage, 'Mr.Automotive': automotiveImage }

export default function Projects() {
  const ref = useReveal()
  const [hov, setHov] = useState(null)

  const featured = projects.find(p => p.featured) || projects[0]
  const rest = projects.filter(p => p !== featured)

  const s = {
    section: { padding: 'var(--py) var(--px)' },
    inner: { maxWidth: 'var(--container)', margin: '0 auto' },
    label: {
      display: 'inline-flex', alignItems: 'center', gap: 8,
      padding: '6px 14px', borderRadius: 'var(--r-pill)',
      border: '1px solid var(--border)', fontSize: '0.8rem',
      fontWeight: 500, color: 'var(--text-2)', textTransform: 'uppercase',
      letterSpacing: '0.08em', marginBottom: 16,
    },
    h2: {
      fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4.5vw, 3.2rem)',
      fontWeight: 700, lineHeight: 1.1, color: 'var(--text)',
      letterSpacing: '-0.02em', marginBottom: 48, maxWidth: 600,
    },
    feat: {
      position: 'relative', borderRadius: 'var(--r-lg)', overflow: 'hidden',
      border: '1px solid var(--border)', marginBottom: 16,
      cursor: 'pointer', background: 'var(--surface)',
    },
    featImg: {
      width: '100%', height: 'auto', minHeight: 200, maxHeight: 440, objectFit: 'cover',
      display: 'block', transition: 'transform 0.6s var(--ease)',
    },
    featOverlay: {
      position: 'absolute', inset: 0,
      background: 'linear-gradient(to top, rgba(5,5,5,0.85) 0%, transparent 50%)',
      display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
      padding: 'clamp(16px, 4vw, 32px) clamp(16px, 3vw, 28px)',
    },
    featBadge: {
      display: 'inline-flex', alignItems: 'center', gap: 6,
      padding: '5px 12px', borderRadius: 'var(--r-pill)',
      background: 'var(--accent)', color: '#050505',
      fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase',
      letterSpacing: '0.06em', width: 'fit-content', marginBottom: 12,
    },
    featTitle: {
      fontFamily: 'var(--font-display)', fontSize: 'clamp(1.4rem, 3vw, 2rem)',
      fontWeight: 700, color: '#fff', marginBottom: 8,
    },
    featDesc: {
      fontSize: '0.95rem', color: 'rgba(255,255,255,0.7)', maxWidth: 500,
      lineHeight: 1.6,
    },
    featTech: {
      display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 16,
    },
    chip: {
      padding: '5px 14px', borderRadius: 'var(--r-pill)', fontSize: '0.78rem',
      fontWeight: 500, background: 'rgba(255,255,255,0.1)', color: '#fff',
      backdropFilter: 'blur(8px)',
    },
    grid: {
      display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))',
      gap: 16,
    },
    card: (isHov) => ({
      position: 'relative', height: 380, borderRadius: 'var(--r-lg)', overflow: 'hidden',
      border: '1px solid', borderColor: isHov ? 'var(--accent)' : 'var(--border)',
      background: 'var(--surface)', cursor: 'pointer',
      transition: 'border-color 0.3s var(--ease), transform 0.3s var(--ease)',
      transform: isHov ? 'translateY(-4px)' : 'none',
    }),
    cardImg: {
      width: '100%', height: '100%', objectFit: 'cover', display: 'block',
      position: 'absolute', inset: 0, transition: 'transform 0.6s var(--ease)',
    },
    cardOverlay: {
      position: 'absolute', inset: 0,
      background: 'linear-gradient(to top, rgba(5,5,5,0.95) 0%, rgba(5,5,5,0.4) 60%, transparent 100%)',
      display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
      padding: '24px', zIndex: 1, pointerEvents: 'none',
    },
    cardTitle: {
      fontFamily: 'var(--font-display)', fontSize: '1.4rem',
      fontWeight: 700, color: '#fff', marginBottom: 8,
    },
    cardDesc: {
      fontSize: '0.9rem', lineHeight: 1.6, color: 'rgba(255,255,255,0.7)',
      marginBottom: 16, display: '-webkit-box', WebkitLineClamp: 2,
      WebkitBoxOrient: 'vertical', overflow: 'hidden', lineClamp: 2,
    },
    cardFoot: {
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      marginTop: 'auto', width: '100%', pointerEvents: 'auto',
    },
    techRow: { display: 'flex', flexWrap: 'wrap', gap: 8 },
    links: { display: 'flex', gap: 10, zIndex: 2 },
    iconLink: {
      width: 36, height: 36, borderRadius: 10, display: 'grid', placeItems: 'center',
      color: '#fff', background: 'rgba(255,255,255,0.1)',
      backdropFilter: 'blur(4px)', border: '1px solid rgba(255,255,255,0.1)',
      transition: 'all var(--t)',
    },
  }

  return (
    <section id="work" style={s.section}>
      <div style={s.inner} className="rv" ref={ref}>
        <div style={s.label}>
          <span style={{ color: 'var(--accent)' }}>◆</span> Selected Work
        </div>
        <h2 style={s.h2}>
          Projects I'm <span style={{ color: 'var(--accent)' }}>proud of</span>
        </h2>

        {/* Featured */}
        <div style={s.feat}
          onClick={() => featured.live && window.open(featured.live, '_blank')}
          onMouseEnter={e => { const img = e.currentTarget.querySelector('img'); if (img) img.style.transform = 'scale(1.04)' }}
          onMouseLeave={e => { const img = e.currentTarget.querySelector('img'); if (img) img.style.transform = '' }}
        >
          <img src={IMG_MAP[featured.title] || featured.image} alt={featured.title} style={s.featImg} />
          <div style={s.featOverlay}>
            <div style={s.featBadge}>★ Featured</div>
            <h3 style={s.featTitle}>{featured.title}</h3>
            <p style={s.featDesc}>{featured.desc}</p>
            <div style={{
              display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between',
              marginTop: 24, gap: 16,
            }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {featured.tech.map(t => <span key={t} style={s.chip}>{t}</span>)}
              </div>
              <div style={{ ...s.links, pointerEvents: 'auto' }}>
                {featured.github && (
                  <a href={featured.github} target="_blank" rel="noopener noreferrer" style={s.iconLink}
                    onClick={e => e.stopPropagation()}
                    aria-label="GitHub">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" /></svg>
                  </a>
                )}
                {featured.live && (
                  <a href={featured.live} target="_blank" rel="noopener noreferrer" style={s.iconLink}
                    onClick={e => e.stopPropagation()}
                    aria-label="Live demo">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div style={s.grid}>
          {rest.map((p, i) => {
            const isHov = hov === i
            return (
              <div key={p.title} style={s.card(isHov)}
                onMouseEnter={() => setHov(i)} onMouseLeave={() => setHov(null)}
                onClick={() => (p.live || p.github) && window.open(p.live || p.github, '_blank')}
              >
                <img src={IMG_MAP[p.title] || p.image} alt={p.title} style={s.cardImg}
                  ref={el => {
                    if (el) {
                      el.style.transform = isHov ? 'scale(1.06)' : 'none'
                    }
                  }}
                />
                <div style={s.cardOverlay}>
                  <h3 style={s.cardTitle}>{p.title}</h3>
                  <p style={s.cardDesc}>{p.desc}</p>
                  <div style={s.cardFoot}>
                    <div style={s.techRow}>
                      {p.tech.slice(0, 3).map(t => <span key={t} style={s.chip}>{t}</span>)}
                    </div>
                    {(p.github || p.live) && (
                      <div style={s.links}>
                        {p.github && (
                          <a href={p.github} target="_blank" rel="noopener noreferrer" style={s.iconLink}
                            onClick={e => e.stopPropagation()}
                            aria-label="GitHub">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" /></svg>
                          </a>
                        )}
                        {p.live && (
                          <a href={p.live} target="_blank" rel="noopener noreferrer" style={s.iconLink}
                            onClick={e => e.stopPropagation()}
                            aria-label="Live demo">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
