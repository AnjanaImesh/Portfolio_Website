import React, { useEffect, useState, useCallback } from 'react'
import ThemeToggle from './ThemeToggle.jsx'
import { personal } from '../data.js'

const LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Skills', href: '#skills' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const close = useCallback(() => setOpen(false), [])

  const s = {
    header: {
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? 'var(--nav-bg, rgba(5,5,5,0.7))' : 'transparent',
      backdropFilter: scrolled ? 'blur(16px)' : 'none',
      WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
      transition: 'all 0.35s var(--ease)',
    },
    inner: {
      maxWidth: 'var(--container)', margin: '0 auto', padding: '0 var(--px)',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      height: 72,
    },
    logo: {
      display: 'flex', alignItems: 'center', gap: 12,
      fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.15rem',
      color: 'var(--text)', zIndex: 101, transition: 'opacity var(--t)',
    },
    mono: {
      width: 38, height: 38, borderRadius: 10,
      background: 'var(--accent)', color: '#050505',
      display: 'grid', placeItems: 'center',
      fontWeight: 800, fontSize: '0.85rem', letterSpacing: '0.02em',
    },
    nav: {
      display: 'flex', gap: 4, position: 'absolute', left: '50%', transform: 'translateX(-50%)',
    },
    link: {
      padding: '8px 18px', fontSize: '0.9rem', fontWeight: 500,
      color: 'var(--text-2)', borderRadius: 'var(--r-pill)',
      transition: 'color var(--t), background var(--t)',
    },
    actions: {
      display: 'flex', alignItems: 'center', gap: 10, zIndex: 101,
    },
    cta: {
      padding: '10px 22px', borderRadius: 'var(--r-pill)',
      background: 'var(--accent)', color: '#050505',
      fontWeight: 600, fontSize: '0.9rem',
      transition: 'transform var(--t), box-shadow var(--t)',
      boxShadow: '0 4px 24px rgba(200,243,29,0.18)',
    },
    burger: {
      display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 5,
      width: 44, height: 44, padding: 10, borderRadius: 10,
    },
    line: (i) => ({
      display: 'block', width: '100%', height: 2,
      background: 'var(--text)', borderRadius: 1,
      transition: 'transform 0.3s var(--ease), opacity 0.3s',
      transformOrigin: 'center',
      ...(open && i === 0 ? { transform: 'rotate(45deg) translate(5px,5px)' } : {}),
      ...(open && i === 1 ? { opacity: 0 } : {}),
      ...(open && i === 2 ? { transform: 'rotate(-45deg) translate(5px,-5px)' } : {}),
    }),
    drawer: {
      position: 'fixed', inset: 0, zIndex: 99,
      background: 'var(--bg)',
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 8,
      opacity: open ? 1 : 0, visibility: open ? 'visible' : 'hidden',
      transition: 'opacity 0.35s var(--ease), visibility 0.35s',
    },
    drawerLink: {
      fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 600,
      padding: '14px 32px', color: 'var(--text-2)', borderRadius: 'var(--r-pill)',
      transition: 'color var(--t)', textAlign: 'center',
    },
  }

  return (
    <header style={s.header}>
      <div style={s.inner}>
        <a href="#" style={s.logo} onClick={close}>
          <span style={s.mono}>AI</span>
          <span>{personal.name}</span>
        </a>

        {/* Desktop nav */}
        <nav style={{ ...s.nav, display: 'none' }} className="desk-nav" aria-label="Main">
          {LINKS.map(l => (
            <a key={l.href} href={l.href} style={s.link}
              onMouseEnter={e => { e.currentTarget.style.color = 'var(--text)'; e.currentTarget.style.background = 'var(--surface)' }}
              onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-2)'; e.currentTarget.style.background = 'transparent' }}
            >{l.label}</a>
          ))}
        </nav>

        <div style={s.actions}>
          <ThemeToggle />
          <a href="#contact" style={{ ...s.cta, display: 'none' }} className="desk-cta"
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(200,243,29,0.3)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 24px rgba(200,243,29,0.18)' }}
          >Let's Talk</a>
          <button style={{ ...s.burger }} className="mob-burger" aria-label="Menu" aria-expanded={open}
            onClick={() => setOpen(o => !o)}>
            <span style={s.line(0)} /><span style={s.line(1)} /><span style={s.line(2)} />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <nav style={s.drawer} aria-label="Mobile">
        {LINKS.map(l => (
          <a key={l.href} href={l.href} style={s.drawerLink} onClick={close}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--text-2)'}
          >{l.label}</a>
        ))}
        <a href="#contact" style={{ ...s.cta, marginTop: 16 }} onClick={close}>Let's Talk</a>
      </nav>

      {/* Responsive inline style-tag for nav breakpoint */}
      <style>{`
        .desk-nav{display:none!important}
        .desk-cta{display:none!important}
        .mob-burger{display:flex!important}
        @media(min-width:768px){
          .desk-nav{display:flex!important}
          .desk-cta{display:inline-flex!important}
          .mob-burger{display:none!important}
        }
      `}</style>
    </header>
  )
}
