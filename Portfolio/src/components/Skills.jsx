import React, { useState } from 'react'
import { skills } from '../data.js'
import useReveal from '../hooks/useReveal.js'

const CATEGORY_ICONS = {
  Frontend: '◐',
  Backend: '◆',
  'Tools & DevOps': '⚙',
  Databases: '◈',
}

export default function Skills() {
  const ref = useReveal()
  const [active, setActive] = useState(Object.keys(skills)[0])

  const categories = Object.keys(skills)

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
    tabs: {
      display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 32,
    },
    tab: (isA) => ({
      padding: '9px 18px', borderRadius: 'var(--r-pill)',
      border: '1px solid',
      borderColor: isA ? 'var(--accent)' : 'var(--border)',
      background: isA ? 'var(--accent)' : 'transparent',
      color: isA ? '#050505' : 'var(--text-2)',
      fontWeight: 600, fontSize: '0.9rem',
      transition: 'all 0.3s var(--ease)', cursor: 'pointer',
      display: 'inline-flex', alignItems: 'center', gap: 8,
    }),
    grid: {
      display: 'flex', flexWrap: 'wrap', gap: 10,
    },
    chip: (isHov) => ({
      display: 'inline-flex', alignItems: 'center', gap: 8,
      padding: '10px 18px', borderRadius: 'var(--r-pill)',
      border: '1px solid',
      borderColor: isHov ? 'var(--accent)' : 'var(--border)',
      background: isHov ? 'var(--surface)' : 'transparent',
      fontSize: '0.9rem', fontWeight: 500,
      color: isHov ? 'var(--text)' : 'var(--text-2)',
      transition: 'all 0.3s var(--ease)', cursor: 'default',
    }),
    dot: (isHov) => ({
      width: 6, height: 6, borderRadius: '50%',
      background: isHov ? 'var(--accent)' : 'var(--text-2)',
      transition: 'background 0.3s var(--ease)',
    }),
    allWrap: {
      marginTop: 48, paddingTop: 40, borderTop: '1px solid var(--border)',
    },
    allLabel: {
      fontFamily: 'var(--font-display)', fontSize: '1rem',
      fontWeight: 600, color: 'var(--text-2)', marginBottom: 20,
    },
    allGrid: {
      display: 'flex', flexWrap: 'wrap', gap: 8,
    },
    allChip: {
      padding: '8px 16px', borderRadius: 'var(--r-pill)',
      background: 'var(--surface)', fontSize: '0.82rem',
      fontWeight: 500, color: 'var(--text-2)',
      border: '1px solid var(--border)',
    },
  }

  return (
    <section id="skills" style={s.section}>
      <div style={s.inner} className="rv" ref={ref}>
        <div style={s.label}>
          <span style={{ color: 'var(--accent)' }}>◆</span> Tech Stack
        </div>
        <h2 style={s.h2}>
          Tools & technologies <span style={{ color: 'var(--accent)' }}>I work with</span>
        </h2>

        <div style={s.tabs}>
          {categories.map(cat => (
            <button key={cat} style={s.tab(active === cat)}
              onClick={() => setActive(cat)}>
              <span>{CATEGORY_ICONS[cat] || '◆'}</span>
              {cat}
            </button>
          ))}
        </div>

        <SkillGrid items={skills[active]} s={s} />

        {/* All skills in a compact list at bottom */}
        <div style={s.allWrap}>
          <div style={s.allLabel}>All Technologies</div>
          <div style={s.allGrid}>
            {Object.values(skills).flat().map(sk => (
              <span key={sk} style={s.allChip}>{sk}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function SkillGrid({ items, s }) {
  const [hov, setHov] = useState(null)
  return (
    <div style={s.grid}>
      {items.map((sk, i) => (
        <div key={sk} style={s.chip(hov === i)}
          onMouseEnter={() => setHov(i)}
          onMouseLeave={() => setHov(null)}>
          <span style={s.dot(hov === i)} />
          {sk}
        </div>
      ))}
    </div>
  )
}
