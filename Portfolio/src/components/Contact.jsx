import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { personal } from '../data.js'
import useReveal from '../hooks/useReveal.js'

const SERVICE_ID = 'service_h4apch1'
const TEMPLATE_ID = 'template_6072hts'
const PUBLIC_KEY = 'vS4-fXR-yhzGRdmyW'

export default function Contact() {
  const ref = useReveal()
  const formRef = useRef(null)
  const [sending, setSending] = useState(false)
  const [result, setResult] = useState(null)
  const [focused, setFocused] = useState(null)

  const send = async (e) => {
    e.preventDefault()
    setSending(true)
    setResult(null)
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      setResult('success')
      formRef.current.reset()
    } catch {
      setResult('error')
    } finally {
      setSending(false)
      setTimeout(() => setResult(null), 5000)
    }
  }

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
      letterSpacing: '-0.02em', marginBottom: 16,
    },
    desc: {
      fontSize: '1.05rem', lineHeight: 1.7, color: 'var(--text-2)', maxWidth: 480,
      marginBottom: 32,
    },
    info: { display: 'flex', flexDirection: 'column', gap: 20 },
    infoItem: {
      display: 'flex', alignItems: 'center', gap: 14,
    },
    infoIcon: {
      width: 48, height: 48, borderRadius: 14,
      background: 'var(--surface)', border: '1px solid var(--border)',
      display: 'grid', placeItems: 'center', color: 'var(--accent)',
      flexShrink: 0,
    },
    infoLabel: { fontSize: '0.82rem', color: 'var(--text-2)' },
    infoVal: { fontSize: '0.95rem', color: 'var(--text)', fontWeight: 500, marginTop: 2 },
    form: {
      padding: 'clamp(20px, 4vw, 36px) clamp(16px, 3.5vw, 32px)', borderRadius: 'var(--r-lg)',
      border: '1px solid var(--border)', background: 'var(--surface)',
    },
    formTitle: {
      fontFamily: 'var(--font-display)', fontSize: '1.3rem',
      fontWeight: 600, color: 'var(--text)', marginBottom: 24,
    },
    row: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 },
    group: { marginBottom: 16 },
    labelText: {
      display: 'block', fontSize: '0.82rem', fontWeight: 500,
      color: 'var(--text-2)', marginBottom: 8, textTransform: 'uppercase',
      letterSpacing: '0.04em',
    },
    input: (isFoc) => ({
      width: '100%', padding: '14px 18px', borderRadius: 14,
      border: '1px solid',
      borderColor: isFoc ? 'var(--accent)' : 'var(--border)',
      background: 'var(--bg)', color: 'var(--text)',
      fontSize: '0.95rem', fontFamily: 'var(--font-body)',
      transition: 'border-color var(--t)',
      outline: 'none', boxSizing: 'border-box',
    }),
    textarea: (isFoc) => ({
      width: '100%', padding: '14px 18px', borderRadius: 14,
      border: '1px solid',
      borderColor: isFoc ? 'var(--accent)' : 'var(--border)',
      background: 'var(--bg)', color: 'var(--text)',
      fontSize: '0.95rem', fontFamily: 'var(--font-body)',
      transition: 'border-color var(--t)',
      outline: 'none', resize: 'vertical', minHeight: 130, boxSizing: 'border-box',
    }),
    btn: {
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 10,
      width: '100%', padding: '16px 32px', borderRadius: 'var(--r-pill)',
      background: 'var(--accent)', color: '#050505',
      fontWeight: 600, fontSize: '1rem', marginTop: 8,
      transition: 'transform var(--t), box-shadow var(--t), opacity var(--t)',
      boxShadow: '0 4px 24px rgba(200,243,29,0.18)',
      opacity: sending ? 0.7 : 1, cursor: sending ? 'wait' : 'pointer',
    },
    alert: (type) => ({
      padding: '14px 20px', borderRadius: 14, marginTop: 16,
      fontSize: '0.9rem', fontWeight: 500, textAlign: 'center',
      border: '1px solid',
      ...(type === 'success'
        ? { background: 'rgba(200,243,29,0.08)', borderColor: 'var(--accent)', color: 'var(--accent)' }
        : { background: 'rgba(255,68,68,0.08)', borderColor: 'var(--error)', color: 'var(--error)' }
      ),
    }),
  }

  return (
    <section id="contact" style={s.section}>
      <div style={s.inner} className="rv contact-grid" ref={ref}>
        <div>
          <div style={s.label}>
            <span style={{ color: 'var(--accent)' }}>◆</span> Get in Touch
          </div>
          <h2 style={s.h2}>
            Let's build something <span style={{ color: 'var(--accent)' }}>great</span>
          </h2>
          <p style={s.desc}>
            Have a project in mind or just want to chat? I'm always open to discussing new opportunities.
          </p>

          <div style={s.info}>
            <div style={s.infoItem}>
              <div style={s.infoIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              </div>
              <div>
                <div style={s.infoLabel}>Email</div>
                <div style={s.infoVal}>{personal.email}</div>
              </div>
            </div>
            <div style={s.infoItem}>
              <div style={s.infoIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <div>
                <div style={s.infoLabel}>Location</div>
                <div style={s.infoVal}>{personal.location}</div>
              </div>
            </div>
          </div>
        </div>

        <form ref={formRef} onSubmit={send} style={s.form}>
          <div style={s.formTitle}>Send a message</div>
          <div style={s.row} className="contact-row">
            <div style={s.group}>
              <label style={s.labelText}>Name</label>
              <input name="from_name" required placeholder="John Doe"
                style={s.input(focused === 'name')}
                onFocus={() => setFocused('name')} onBlur={() => setFocused(null)} />
            </div>
            <div style={s.group}>
              <label style={s.labelText}>Email</label>
              <input name="from_email" type="email" required placeholder="john@example.com"
                style={s.input(focused === 'email')}
                onFocus={() => setFocused('email')} onBlur={() => setFocused(null)} />
            </div>
          </div>
          <div style={s.group}>
            <label style={s.labelText}>Subject</label>
            <input name="subject" required placeholder="Project discussion"
              style={s.input(focused === 'subj')}
              onFocus={() => setFocused('subj')} onBlur={() => setFocused(null)} />
          </div>
          <div style={s.group}>
            <label style={s.labelText}>Message</label>
            <textarea name="message" required placeholder="Tell me about your project..."
              style={s.textarea(focused === 'msg')}
              onFocus={() => setFocused('msg')} onBlur={() => setFocused(null)} />
          </div>
          <input type="hidden" name="to_email" value="anjanaimesh600@gmail.com" />
          <button type="submit" disabled={sending} style={s.btn}
            onMouseEnter={e => { if (!sending) { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 40px rgba(200,243,29,0.3)' }}}
            onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 4px 24px rgba(200,243,29,0.18)' }}
          >
            {sending ? (
              <><span className="spinner" /> Sending...</>
            ) : (
              <>Send Message
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
              </>
            )}
          </button>

          {result && (
            <div style={s.alert(result)}>
              {result === 'success'
                ? '✓ Message sent successfully! I\'ll get back to you soon.'
                : '✕ Failed to send. Please try again or email directly.'}
            </div>
          )}
        </form>
      </div>

      <style>{`
        @media(min-width:768px){
          .contact-grid{grid-template-columns:0.9fr 1.1fr!important;align-items:start}
        }
        @media(max-width:550px){
          .contact-row{grid-template-columns:1fr!important}
        }
        @media(max-width:480px){
          .contact-grid{gap:32px!important}
        }
      `}</style>
    </section>
  )
}
