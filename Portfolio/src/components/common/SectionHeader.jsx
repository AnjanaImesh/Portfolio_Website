import React from 'react'

export default function SectionHeader({ index, label, title, metaRight, subtitle }) {
  return (
    <div style={{ marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
      <div className="section-header-bar">
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.8rem', flexWrap: 'wrap' }}>
          {index && <span className="section-index">{index}</span>}
          {label && (
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--ink-muted)',
                fontWeight: 500,
              }}
            >
              / {label}
            </span>
          )}
        </div>

        {metaRight && <div className="section-meta-right">{metaRight}</div>}
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '1rem' }}>
        <h2 className="section-title">{title}</h2>
        {subtitle && (
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '1rem',
              color: 'var(--ink-muted)',
              maxWidth: '520px',
              lineHeight: 1.6,
            }}
          >
            {subtitle}
          </p>
        )}
      </div>
    </div>
  )
}
