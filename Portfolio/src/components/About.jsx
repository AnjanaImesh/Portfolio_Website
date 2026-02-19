import React, { useEffect, useRef, useState } from 'react'
import { about } from '../data.js'
import useReveal from '../hooks/useReveal.js'

function CountUp({ end, suffix = '', duration = 2000 }) {
  const [val, setVal] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return
      obs.disconnect()
      const num = parseInt(end)
      const step = Math.max(1, Math.round(duration / num))
      let cur = 0
      const iv = setInterval(() => {
        cur += 1
        setVal(cur)
        if (cur >= num) clearInterval(iv)
      }, step)
    }, { threshold: 0.5 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [end, duration])

  return <span ref={ref}>{val}{suffix}</span>
}

const VALUE_ICONS = {
  target: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
  ),
  zap: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
  ),
  users: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
  ),
}

export default function About() {
  const ref = useReveal()

  const s = {
    section: { padding: 'var(--py) var(--px)' },
    inner: {
      maxWidth: 'var(--container)', margin: '0 auto',
      display: 'grid', gridTemplateColumns: '1fr', gap: 48,
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
      letterSpacing: '-0.02em', marginBottom: 24,
    },
    text: {
      fontSize: '1.05rem', lineHeight: 1.8, color: 'var(--text-2)', maxWidth: 680,
    },
    stats: {
      display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(120px, 100%), 1fr))',
      gap: 12, marginTop: 32,
    },
    stat: {
      padding: '24px 20px', borderRadius: 'var(--r-lg)',
      border: '1px solid var(--border)', background: 'var(--surface)',
      textAlign: 'center',
    },
    statNum: {
      fontFamily: 'var(--font-display)', fontSize: '2rem',
      fontWeight: 700, color: 'var(--accent)',
    },
    statLabel: {
      fontSize: '0.82rem', color: 'var(--text-2)', marginTop: 4,
    },
    values: {
      display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(180px, 100%), 1fr))',
      gap: 12, marginTop: 32,
    },
    value: {
      padding: '24px 22px', borderRadius: 'var(--r-lg)',
      border: '1px solid var(--border)', transition: 'border-color var(--t)',
    },
    valueIcon: {
      width: 48, height: 48, borderRadius: 12,
      background: 'var(--surface)', color: 'var(--accent)',
      display: 'grid', placeItems: 'center', marginBottom: 14,
    },
    valueTitle: {
      fontFamily: 'var(--font-display)', fontWeight: 600,
      fontSize: '1rem', color: 'var(--text)', marginBottom: 6,
    },
    valueDesc: {
      fontSize: '0.88rem', lineHeight: 1.6, color: 'var(--text-2)',
    },
  }

  return (
    <section id="about" style={s.section}>
      <div style={s.inner} className="rv about-grid" ref={ref}>
        <div>
          <div style={s.label}>
            <span style={{ color: 'var(--accent)' }}>◆</span> About Me
          </div>
          <h2 style={s.h2}>
            Passionate about building <span style={{ color: 'var(--accent)' }}>impactful</span> products
          </h2>
          <p style={s.text}>{about.summary}</p>

          <div style={s.stats}>
            {about.stats.map(st => (
              <div key={st.label} style={s.stat}>
                <div style={s.statNum}>
                  <CountUp end={st.value} suffix={st.suffix || '+'} />
                </div>
                <div style={s.statLabel}>{st.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div style={s.values}>
            {about.values.map(v => (
              <div key={v.title} style={s.value}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--accent)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
              >
                <div style={s.valueIcon}>
                  {VALUE_ICONS[v.icon] || VALUE_ICONS.target}
                </div>
                <h3 style={s.valueTitle}>{v.title}</h3>
                <p style={s.valueDesc}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media(min-width:768px){
          .about-grid{grid-template-columns:1.2fr 0.8fr!important;align-items:start}
        }
        @media(max-width:480px){
          .about-grid{gap:32px!important}
        }
      `}</style>
    </section>
  )
}
