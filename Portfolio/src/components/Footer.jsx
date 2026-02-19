import React from 'react'
import { personal, socials } from '../data.js'
import useReveal from '../hooks/useReveal.js'

const SOCIAL_ICONS = {
  GitHub: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>,
  LinkedIn: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>,
  Twitter: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>,
  Instagram: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>,
}

export default function Footer() {
  const ref = useReveal()
  const year = new Date().getFullYear()

  const s = {
    section: {
      padding: '80px var(--px) 40px', borderTop: '1px solid var(--border)',
    },
    inner: { maxWidth: 'var(--container)', margin: '0 auto' },
    cta: {
      textAlign: 'center', marginBottom: 64,
    },
    bigText: {
      fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,6vw,4.5rem)',
      fontWeight: 800, lineHeight: 1.05, color: 'var(--text)',
      letterSpacing: '-0.03em', marginBottom: 24,
    },
    ctaBtn: {
      display: 'inline-flex', alignItems: 'center', gap: 12,
      padding: 'clamp(14px, 3vw, 18px) clamp(28px, 5vw, 40px)', borderRadius: 'var(--r-pill)',
      background: 'var(--accent)', color: '#050505',
      fontWeight: 700, fontSize: '1.1rem',
      transition: 'transform var(--t), box-shadow var(--t)',
      boxShadow: '0 4px 24px rgba(200,243,29,0.18)',
    },
    bottom: {
      display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center',
      gap: 20, paddingTop: 32, borderTop: '1px solid var(--border)',
    },
    copy: {
      fontSize: '0.85rem', color: 'var(--text-2)',
    },
    socials: {
      display: 'flex', gap: 8,
    },
    socLink: {
      width: 42, height: 42, borderRadius: 12,
      display: 'grid', placeItems: 'center',
      color: 'var(--text-2)', border: '1px solid var(--border)',
      transition: 'all var(--t)',
    },
    back: {
      display: 'inline-flex', alignItems: 'center', gap: 8,
      padding: '10px 20px', borderRadius: 'var(--r-pill)',
      border: '1px solid var(--border)', fontSize: '0.85rem',
      fontWeight: 500, color: 'var(--text-2)',
      transition: 'all var(--t)',
    },
  }

  return (
    <footer style={s.section}>
      <div style={s.inner} className="rv" ref={ref}>
        <div style={s.cta}>
          <h2 style={s.bigText}>
            Have a project?<br />
            <span style={{ color: 'var(--accent)' }}>Let's talk.</span>
          </h2>
          <a href={`mailto:${personal.email}`} style={s.ctaBtn}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 12px 48px rgba(200,243,29,0.3)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 4px 24px rgba(200,243,29,0.18)' }}
          >
            Start a conversation
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7M17 7H7M17 7v10"/></svg>
          </a>
        </div>

        <div style={s.bottom} className="footer-bottom">
          <div style={s.copy}>
            © {year} {personal.name}.
          </div>

          <div style={s.socials}>
            {socials.map(soc => (
              <a key={soc.label} href={soc.url} target="_blank" rel="noopener noreferrer"
                style={s.socLink} aria-label={soc.label}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.background = 'var(--surface)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-2)'; e.currentTarget.style.background = 'transparent' }}
              >
                {SOCIAL_ICONS[soc.label] || <span>{soc.label[0]}</span>}
              </a>
            ))}
          </div>

          <a href="#" style={s.back}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-2)' }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19V5M5 12l7-7 7 7"/></svg>
            Back to top
          </a>
        </div>
      </div>
      <style>{`
        @media(min-width:768px){
          .footer-bottom{justify-content:space-between!important}
        }
      `}</style>
    </footer>
  )
}
