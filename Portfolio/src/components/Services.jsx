import React, { useState } from 'react'
import { services } from '../data.js'
import useReveal from '../hooks/useReveal.js'

const ICONS = {
  code: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
  ),
  brush: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/></svg>
  ),
  api: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>
  ),
  cloud: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>
  ),
}

export default function Services() {
  const ref = useReveal()
  const [hov, setHov] = useState(null)

  const s = {
    section: {
      padding: 'var(--py) var(--px)',
    },
    inner: {
      maxWidth: 'var(--container)', margin: '0 auto',
    },
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
      letterSpacing: '-0.02em', marginBottom: 48,
      maxWidth: 600,
    },
    grid: {
      display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(260px, 100%), 1fr))',
      gap: 16,
    },
    card: (i, isHov) => ({
      padding: 'clamp(20px, 4vw, 32px)', borderRadius: 'var(--r-lg)',
      border: '1px solid',
      borderColor: isHov ? 'var(--accent)' : 'var(--border)',
      background: isHov ? 'var(--surface)' : 'transparent',
      transition: 'all 0.4s var(--ease)',
      cursor: 'default', position: 'relative', overflow: 'hidden',
    }),
    glow: (isHov) => ({
      position: 'absolute', top: -40, right: -40, width: 120, height: 120,
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(200,243,29,0.12) 0%, transparent 70%)',
      opacity: isHov ? 1 : 0, transition: 'opacity 0.4s var(--ease)',
      pointerEvents: 'none',
    }),
    icon: (isHov) => ({
      width: 56, height: 56, borderRadius: 14,
      background: isHov ? 'var(--accent)' : 'var(--surface)',
      color: isHov ? '#050505' : 'var(--accent)',
      display: 'grid', placeItems: 'center',
      transition: 'all 0.4s var(--ease)', marginBottom: 20,
    }),
    cardTitle: {
      fontFamily: 'var(--font-display)', fontSize: '1.15rem',
      fontWeight: 600, color: 'var(--text)', marginBottom: 10,
    },
    cardDesc: {
      fontSize: '0.95rem', lineHeight: 1.6, color: 'var(--text-2)',
    },
    num: (isHov) => ({
      position: 'absolute', bottom: 16, right: 20,
      fontFamily: 'var(--font-display)', fontSize: '4rem',
      fontWeight: 800, lineHeight: 1,
      color: isHov ? 'rgba(200,243,29,0.08)' : 'var(--border)',
      transition: 'color 0.4s var(--ease)', pointerEvents: 'none',
    }),
  }

  return (
    <section id="services" style={s.section}>
      <div style={s.inner} className="rv" ref={ref}>
        <div style={s.label}>
          <span style={{ color: 'var(--accent)' }}>◆</span> What I Do
        </div>
        <h2 style={s.h2}>
          Services that deliver <span style={{ color: 'var(--accent)' }}>real results</span>
        </h2>

        <div style={s.grid}>
          {services.map((svc, i) => {
            const isHov = hov === i
            return (
              <div key={svc.title} style={s.card(i, isHov)}
                onMouseEnter={() => setHov(i)} onMouseLeave={() => setHov(null)}>
                <div style={s.glow(isHov)} />
                <div style={s.icon(isHov)}>
                  {ICONS[svc.icon] || ICONS.code}
                </div>
                <h3 style={s.cardTitle}>{svc.title}</h3>
                <p style={s.cardDesc}>{svc.desc}</p>
                <span style={s.num(isHov)}>0{i + 1}</span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
