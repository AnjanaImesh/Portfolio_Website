import React from 'react'
import heroPhoto from '../assets/hero-photo.jpg'
import { personal } from '../data.js'
export default function Hero() {

  const s = {
    section: {
      minHeight: '100dvh', position: 'relative', overflow: 'hidden',
      display: 'flex', flexDirection: 'column', justifyContent: 'center',
      padding: '120px var(--px) 48px',
    },
    // Decorative gradient orbs
    orbA: {
      position: 'absolute', top: '-15%', right: '-8%', width: 560, height: 560,
      background: 'radial-gradient(circle, rgba(200,243,29,0.12) 0%, transparent 70%)',
      borderRadius: '50%', filter: 'blur(80px)', pointerEvents: 'none',
    },
    orbB: {
      position: 'absolute', bottom: '-25%', left: '-12%', width: 460, height: 460,
      background: 'radial-gradient(circle, rgba(200,243,29,0.06) 0%, transparent 70%)',
      borderRadius: '50%', filter: 'blur(60px)', pointerEvents: 'none',
    },
    inner: {
      maxWidth: 'var(--container)', margin: '0 auto', width: '100%',
      display: 'grid', gridTemplateColumns: '1fr', gap: 40,
      position: 'relative', zIndex: 1,
    },
    badge: {
      display: 'inline-flex', alignItems: 'center', gap: 8,
      padding: '7px 16px', borderRadius: 'var(--r-pill)',
      border: '1px solid var(--border)', background: 'var(--surface)',
      fontSize: '0.84rem', fontWeight: 500, color: 'var(--text-2)',
      width: 'fit-content',
    },
    dot: {
      width: 8, height: 8, borderRadius: '50%',
      background: 'var(--accent)', animation: 'dotPulse 2s ease infinite',
    },
    heading: {
      fontFamily: 'var(--font-display)', fontSize: 'clamp(2.6rem, 6.5vw, 5rem)',
      fontWeight: 800, lineHeight: 1.06, color: 'var(--text)',
      letterSpacing: '-0.03em', marginTop: 20, marginBottom: 0,
    },
    accent: { color: 'var(--accent)' },
    muted: { color: 'var(--text-2)' },
    sub: {
      maxWidth: 520, fontSize: '1.05rem', lineHeight: 1.7,
      color: 'var(--text-2)', marginTop: 16, marginBottom: 0,
    },
    btns: {
      display: 'flex', flexWrap: 'wrap', gap: 14, marginTop: 28,
    },
    primary: {
      display: 'inline-flex', alignItems: 'center', gap: 10,
      padding: '14px 30px', borderRadius: 'var(--r-pill)',
      background: 'var(--accent)', color: '#050505',
      fontWeight: 600, fontSize: '0.95rem',
      transition: 'transform var(--t), box-shadow var(--t)',
      boxShadow: '0 4px 24px rgba(200,243,29,0.18)',
    },
    secondary: {
      display: 'inline-flex', alignItems: 'center', gap: 10,
      padding: '14px 30px', borderRadius: 'var(--r-pill)',
      border: '1px solid var(--border)',
      color: 'var(--text)', fontWeight: 500, fontSize: '0.95rem',
      transition: 'border-color var(--t), background var(--t)',
    },
    stats: {
      display: 'flex', flexWrap: 'wrap', gap: '24px 36px', marginTop: 40,
      paddingTop: 28, borderTop: '1px solid var(--border)',
    },
    statNum: {
      fontFamily: 'var(--font-display)', fontSize: '1.85rem',
      fontWeight: 700, color: 'var(--text)', lineHeight: 1.2,
    },
    statLabel: {
      fontSize: '0.82rem', color: 'var(--text-2)', marginTop: 4,
    },
    photoWrap: {
      position: 'relative', display: 'flex', justifyContent: 'center',
      alignItems: 'center',
    },
    photo: {
      width: '100%', maxWidth: 360, aspectRatio: '3/4', objectFit: 'cover',
      borderRadius: 'var(--r-lg)', border: '2px solid var(--border)',
      filter: 'grayscale(20%)',
      transition: 'filter var(--t)',
    },
  }

  return (
    <section id="hero" style={s.section}>
      <div style={s.orbA} />
      <div style={s.orbB} />

      <div style={s.inner} className="hero-grid">
        <div>
          <div style={s.badge}>
            <span style={s.dot}></span>
            Available for work
          </div>
          <h1 style={s.heading}>
            I build <span style={s.accent}>digital</span><br />
            experiences <span style={s.muted}>that</span><br />
            people <span style={s.accent}>love.</span>
          </h1>
          <p style={s.sub}>
            {personal.tagline}. Crafting high-impact web experiences with clean code and thoughtful design.
          </p>
          <div style={s.btns}>
            <a href="#work" style={s.primary}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 40px rgba(200,243,29,0.3)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 4px 24px rgba(200,243,29,0.18)' }}
            >
              View My Work
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7M17 7H7M17 7v10"/></svg>
            </a>
            <a href={`mailto:${personal.email}`} style={s.secondary}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.background = 'var(--surface)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.background = 'transparent' }}
            >
              Say Hello
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>

          <div style={s.stats}>
            {[
              { n: '3+', l: 'Years Exp' },
              { n: '15+', l: 'Projects' },
              { n: '8+', l: 'Happy Clients' },
            ].map((st, i) => (
              <div key={i}>
                <div style={s.statNum}>{st.n}</div>
                <div style={s.statLabel}>{st.l}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={s.photoWrap} className="hero-photo-wrap">
          <img src={heroPhoto} alt={personal.name} style={s.photo}
            onMouseEnter={e => e.currentTarget.style.filter = 'grayscale(0%)'}
            onMouseLeave={e => e.currentTarget.style.filter = 'grayscale(20%)'}
          />
        </div>
      </div>

      <style>{`
        @media(min-width:768px){
          .hero-grid{grid-template-columns:1.15fr 0.85fr!important;align-items:center;gap:56px!important}
        }
        @media(min-width:1200px){
          .hero-grid{gap:64px!important}
        }
        @media(max-width:767px){
          .hero-photo-wrap{display:none!important}
          #hero{padding-top:100px!important;padding-bottom:40px!important;min-height:auto!important}
        }
        @media(max-width:480px){
          #hero{padding-top:88px!important;padding-bottom:32px!important}
          #hero h1{font-size:2.2rem!important}
          #hero p{font-size:0.95rem!important}
        }
      `}</style>
    </section>
  )
}
