import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { personal, socials } from '../../data/portfolioData.js'

const SERVICE_ID = 'service_h4apch1'
const TEMPLATE_ID = 'template_6072hts'
const PUBLIC_KEY = 'vS4-fXR-yhzGRdmyW'

export default function ContactSection() {
  const formRef = useRef(null)
  const [sending, setSending] = useState(false)
  const [status, setStatus] = useState(null) // 'success' | 'error' | null
  const [inquiryType, setInquiryType] = useState('Software Engineering')

  const scopes = [
    'Software Engineering',
    'Commercial Media (Onex)',
    'Graduation Portraits',
    'Moonory Weddings & Lifestyle',
    'General Inquiry',
  ]

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)
    setStatus(null)

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      setStatus('success')
      formRef.current?.reset()
    } catch (err) {
      console.error('Email sending error:', err)
      setStatus('error')
    } finally {
      setSending(false)
      setTimeout(() => setStatus(null), 7000)
    }
  }

  return (
    <section
      id="contact"
      style={{
        paddingTop: 'clamp(5rem, 9vw, 9rem)',
        paddingBottom: 'clamp(5rem, 9vw, 9rem)',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid var(--border)',
        backgroundColor: 'var(--bg)',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'baseline',
            marginBottom: 'clamp(2.5rem, 4vw, 3.5rem)',
            borderBottom: '1px solid var(--border)',
            paddingBottom: '1.2rem',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <div>
            <div className="section-pill-tag" style={{ marginBottom: '0.6rem' }}>Contact</div>
            <h1 className="display-section" style={{ margin: 0 }}>
              Let's talk about your next project.
            </h1>
          </div>

          <span className="meta-tag">RESPONSE WITHIN 24 HOURS</span>
        </div>

        {/* 2-Column Editorial Contact Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: 'clamp(3rem, 6vw, 6rem)',
          }}
          className="contact-layout-grid"
        >
          {/* Left Column: Direct Human Channels */}
          <div>
            <h2
              className="display-section"
              style={{
                color: 'var(--ink)',
                marginBottom: '1.5rem',
                lineHeight: 1.02,
                maxWidth: '620px',
              }}
            >
              LET'S BUILD A SYSTEM OR FRAME A STORY.
            </h2>

            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '1rem',
                lineHeight: 1.7,
                color: 'var(--ink-secondary)',
                maxWidth: '520px',
                marginBottom: '2.5rem',
              }}
            >
              Available for enterprise software engineering roles, full-stack architectural contracts,
              and creative direction across commercial visual media and portraiture.
            </p>

            {/* Direct Channels with Clean Hairline Rules */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.6rem', marginBottom: '2.5rem' }}>
              <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1.2rem' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    letterSpacing: '0.1em',
                    color: 'var(--accent)',
                    display: 'block',
                    marginBottom: '0.35rem',
                    textTransform: 'uppercase',
                  }}
                >
                  DIRECT INBOX
                </span>
                <a
                  href={`mailto:${personal.email}`}
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: 'clamp(1.2rem, 2.2vw, 1.6rem)',
                    fontWeight: 650,
                    color: 'var(--ink)',
                    letterSpacing: '-0.02em',
                    transition: 'color var(--duration-fast) ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--ink)')}
                >
                  {personal.email}
                </a>
              </div>

              <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1.2rem' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    letterSpacing: '0.1em',
                    color: 'var(--ink-muted)',
                    display: 'block',
                    marginBottom: '0.35rem',
                    textTransform: 'uppercase',
                  }}
                >
                  LOCATION & TIMEZONE
                </span>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.9rem',
                    color: 'var(--ink)',
                  }}
                >
                  {personal.location} (Asia/Colombo UTC+5:30)
                </div>
              </div>
            </div>

            {/* Verified Network Links */}
            <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1.6rem' }}>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  letterSpacing: '0.1em',
                  color: 'var(--ink-muted)',
                  display: 'block',
                  marginBottom: '1rem',
                  textTransform: 'uppercase',
                }}
              >
                VERIFIED NETWORK
              </span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem 1.6rem' }}>
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-text-arrow"
                    style={{ fontSize: '0.82rem' }}
                  >
                    <span>{s.label}</span>
                    <span style={{ fontSize: '0.76rem', color: 'var(--accent)' }}>↗</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Clean Minimalist Underline Form (No Box Container) */}
          <div>
            <form ref={formRef} onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.8rem' }}>
              {/* Inquiry Scope Selection: Soft Minimal Pill Chips */}
              <div>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    letterSpacing: '0.1em',
                    color: 'var(--ink-muted)',
                    display: 'block',
                    marginBottom: '0.8rem',
                    textTransform: 'uppercase',
                  }}
                >
                  SELECT INQUIRY DOMAIN
                </span>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {scopes.map((scope) => {
                    const isSelected = inquiryType === scope
                    return (
                      <button
                        key={scope}
                        type="button"
                        onClick={() => setInquiryType(scope)}
                        style={{
                          fontFamily: 'var(--font-sans)',
                          fontSize: '0.78rem',
                          fontWeight: 500,
                          padding: '0.45rem 1rem',
                          border: '1px solid',
                          borderColor: isSelected ? 'var(--ink)' : 'var(--border)',
                          backgroundColor: isSelected ? 'var(--ink)' : 'var(--bg-subtle)',
                          color: isSelected ? 'var(--bg)' : 'var(--ink-secondary)',
                          borderRadius: 'var(--radius-pill)',
                          cursor: 'pointer',
                          transition: 'all var(--duration-fast) ease',
                        }}
                      >
                        {scope}
                      </button>
                    )
                  })}
                </div>
                <input type="hidden" name="inquiry_type" value={inquiryType} />
              </div>

              {/* Minimal Underline Inputs */}
              <div>
                <label
                  htmlFor="contact-name"
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.7rem',
                    letterSpacing: '0.1em',
                    color: 'var(--ink-muted)',
                    display: 'block',
                    marginBottom: '0.4rem',
                    textTransform: 'uppercase',
                  }}
                >
                  YOUR NAME / ORGANIZATION *
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="user_name"
                  required
                  placeholder="e.g. Elena Silva / Acme Studio"
                  style={{
                    width: '100%',
                    background: 'none',
                    border: 'none',
                    borderBottom: '1px solid var(--border)',
                    padding: '0.7rem 0',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '1rem',
                    color: 'var(--ink)',
                    outline: 'none',
                    borderRadius: '0px',
                    transition: 'border-color 0.2s ease',
                  }}
                  onFocus={(e) => (e.target.style.borderBottomColor = 'var(--accent)')}
                  onBlur={(e) => (e.target.style.borderBottomColor = 'var(--border)')}
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.7rem',
                    letterSpacing: '0.1em',
                    color: 'var(--ink-muted)',
                    display: 'block',
                    marginBottom: '0.4rem',
                    textTransform: 'uppercase',
                  }}
                >
                  YOUR EMAIL ADDRESS *
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="user_email"
                  required
                  placeholder="name@company.com"
                  style={{
                    width: '100%',
                    background: 'none',
                    border: 'none',
                    borderBottom: '1px solid var(--border)',
                    padding: '0.7rem 0',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '1rem',
                    color: 'var(--ink)',
                    outline: 'none',
                    borderRadius: '0px',
                    transition: 'border-color 0.2s ease',
                  }}
                  onFocus={(e) => (e.target.style.borderBottomColor = 'var(--accent)')}
                  onBlur={(e) => (e.target.style.borderBottomColor = 'var(--border)')}
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.7rem',
                    letterSpacing: '0.1em',
                    color: 'var(--ink-muted)',
                    display: 'block',
                    marginBottom: '0.4rem',
                    textTransform: 'uppercase',
                  }}
                >
                  PROJECT OVERVIEW / MESSAGE *
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Briefly describe your objectives, timelines, and technical or visual scope..."
                  style={{
                    width: '100%',
                    background: 'none',
                    border: 'none',
                    borderBottom: '1px solid var(--border)',
                    padding: '0.7rem 0',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '1rem',
                    color: 'var(--ink)',
                    outline: 'none',
                    borderRadius: '0px',
                    resize: 'vertical',
                    transition: 'border-color 0.2s ease',
                  }}
                  onFocus={(e) => (e.target.style.borderBottomColor = 'var(--accent)')}
                  onBlur={(e) => (e.target.style.borderBottomColor = 'var(--border)')}
                />
              </div>

              {/* Submit Trigger — Minimal Pill CTA */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginTop: '0.8rem' }}>
                <button
                  type="submit"
                  disabled={sending}
                  className="btn-pill"
                  style={{
                    opacity: sending ? 0.6 : 1,
                    cursor: sending ? 'not-allowed' : 'pointer',
                  }}
                >
                  <span>{sending ? 'Dispatching...' : 'Dispatch Message'}</span>
                  <span>→</span>
                </button>

                {status === 'success' && (
                  <span
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.84rem',
                      color: '#2E7D32',
                      fontWeight: 500,
                    }}
                  >
                    ✓ Message transmitted directly.
                  </span>
                )}

                {status === 'error' && (
                  <span
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.84rem',
                      color: 'var(--accent)',
                      fontWeight: 500,
                    }}
                  >
                    ✕ Failed to dispatch. Please email directly.
                  </span>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 920px) {
          .contact-layout-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
