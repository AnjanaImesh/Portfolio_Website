import React, { useState } from 'react'
import { testimonials } from '../data.js'
import useReveal from '../hooks/useReveal.js'

export default function Testimonials() {
  const ref = useReveal()
  const [active, setActive] = useState(0)

  const t = testimonials[active]

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
    card: {
      padding: 'clamp(20px, 5vw, 40px) clamp(18px, 4vw, 36px)', borderRadius: 'var(--r-lg)',
      border: '1px solid var(--border)', background: 'var(--surface)',
      position: 'relative', overflow: 'hidden',
    },
    quote: {
      position: 'absolute', top: 24, left: 32,
      fontFamily: 'var(--font-display)', fontSize: '6rem',
      fontWeight: 800, lineHeight: 1, color: 'var(--accent)',
      opacity: 0.15, pointerEvents: 'none',
    },
    text: {
      fontSize: 'clamp(0.95rem, 2.5vw, 1.15rem)', lineHeight: 1.8, color: 'var(--text)',
      position: 'relative', zIndex: 1, fontStyle: 'italic',
      maxWidth: 700,
    },
    meta: {
      display: 'flex', alignItems: 'center', gap: 16,
      marginTop: 28, position: 'relative', zIndex: 1,
    },
    avatar: {
      width: 52, height: 52, borderRadius: '50%',
      background: 'var(--accent)', color: '#050505',
      display: 'grid', placeItems: 'center',
      fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.1rem',
    },
    name: {
      fontFamily: 'var(--font-display)', fontWeight: 600,
      fontSize: '1rem', color: 'var(--text)',
    },
    role: {
      fontSize: '0.85rem', color: 'var(--text-2)', marginTop: 2,
    },
    dots: {
      display: 'flex', gap: 8, marginTop: 28,
    },
    dot: (isA) => ({
      width: isA ? 32 : 10, height: 10, borderRadius: 'var(--r-pill)',
      background: isA ? 'var(--accent)' : 'var(--surface-2)',
      border: '1px solid',
      borderColor: isA ? 'var(--accent)' : 'var(--border)',
      cursor: 'pointer',
      transition: 'all 0.3s var(--ease)',
    }),
  }

  return (
    <section id="testimonials" style={s.section}>
      <div style={s.inner} className="rv" ref={ref}>
        <div style={s.label}>
          <span style={{ color: 'var(--accent)' }}>◆</span> Testimonials
        </div>
        <h2 style={s.h2}>
          Kind words from <span style={{ color: 'var(--accent)' }}>clients</span>
        </h2>

        <div style={s.card}>
          <span style={s.quote}>"</span>
          <p style={s.text}>{t.text}</p>
          <div style={s.meta}>
            <div style={s.avatar}>
              {t.name.split(' ').map(w => w[0]).join('')}
            </div>
            <div>
              <div style={s.name}>{t.name}</div>
              <div style={s.role}>{t.role}</div>
            </div>
          </div>
        </div>

        <div style={s.dots} role="tablist" aria-label="Testimonials">
          {testimonials.map((_, i) => (
            <button key={i} style={s.dot(active === i)}
              onClick={() => setActive(i)}
              role="tab" aria-selected={active === i}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
