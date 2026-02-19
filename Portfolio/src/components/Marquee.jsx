import React from 'react'

const ITEMS = [
  'Web Development', 'UI/UX Design', 'API Architecture', 'Cloud Deployment',
  'React.js', 'Node.js', 'System Design', 'Performance Optimization',
]

export default function Marquee() {
  const s = {
    wrap: {
      overflow: 'hidden', background: 'var(--accent)', padding: '14px 0',
      borderTop: '2px solid rgba(5,5,5,0.15)', borderBottom: '2px solid rgba(5,5,5,0.15)',
      userSelect: 'none',
    },
    track: {
      display: 'flex', width: 'max-content', gap: 0,
      animation: 'marquee 30s linear infinite',
    },
    item: {
      display: 'inline-flex', alignItems: 'center', gap: 'clamp(12px, 3vw, 24px)',
      padding: '0 clamp(12px, 3vw, 24px)', fontFamily: 'var(--font-display)',
      fontSize: 'clamp(0.75rem, 2vw, 0.95rem)', fontWeight: 700, letterSpacing: '0.02em',
      color: '#050505', textTransform: 'uppercase', whiteSpace: 'nowrap',
    },
    star: {
      width: 8, height: 8, background: '#050505', borderRadius: 2,
      transform: 'rotate(45deg)', flexShrink: 0,
    },
  }

  const items = [...ITEMS, ...ITEMS, ...ITEMS, ...ITEMS]

  return (
    <div style={s.wrap} aria-hidden="true">
      <div style={s.track} className="marquee-track">
        {items.map((t, i) => (
          <span key={i} style={s.item}>
            <span style={s.star} />
            {t}
          </span>
        ))}
      </div>
    </div>
  )
}
