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
      className="section-dark-block"
      style={{
        paddingTop: 'clamp(5.5rem, 10vw, 9.5rem)',
        paddingBottom: 'clamp(5.5rem, 10vw, 9.5rem)',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid var(--section-dark-border)',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div
          className="section-header-bar"
          style={{ borderBottomColor: 'var(--section-dark-border)' }}
        >
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.8rem' }}>
            <span className="section-index" style={{ color: 'var(--accent)' }}>
              06
            </span>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--section-dark-muted)',
              }}
            >
              / DIRECT TRANSMISSION & INQUIRY
            </span>
          </div>

          <span
            className="section-meta-right"
            style={{ color: 'var(--section-dark-muted)' }}
          >
            RESPONSE WITHIN 24 HOURS
          </span>
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
                color: 'var(--section-dark-ink)',
                marginBottom: '1.8rem',
                lineHeight: 1.02,
                maxWidth: '620px',
              }}
            >
              LET'S BUILD A SYSTEM OR FRAME A STORY.
            </h2>

            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '1.02rem',
                lineHeight: 1.7,
                color: 'rgba(250, 250, 248, 0.78)',
                maxWidth: '520px',
                marginBottom: '2.5rem',
              }}
            >
              Available for enterprise software engineering roles, full-stack architectural contracts,
              and creative direction across commercial visual media and portraiture.
            </p>

            {/* Direct Channels with Clean Hairline Rules */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.8rem', marginBottom: '2.5rem' }}>
              <div style={{ borderTop: '1px solid var(--section-dark-border)', paddingTop: '1.2rem' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    letterSpacing: '0.1em',
                    color: 'var(--accent)',
                    display: 'block',
                    marginBottom: '0.4rem',
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
                    color: '#FAFAF8',
                    letterSpacing: '-0.02em',
                    transition: 'color var(--duration-fast) ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#FAFAF8')}
                >
                  {personal.email}
                </a>
              </div>

              <div style={{ borderTop: '1px solid var(--section-dark-border)', paddingTop: '1.2rem' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    letterSpacing: '0.1em',
                    color: 'var(--section-dark-muted)',
                    display: 'block',
                    marginBottom: '0.4rem',
                    textTransform: 'uppercase',
                  }}
                >
                  LOCATION & TIMEZONE
                </span>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.92rem',
                    color: 'rgba(250, 250, 248, 0.9)',
                  }}
                >
                  {personal.location} (Asia/Colombo UTC+5:30)
                </div>
              </div>
            </div>

            {/* Verified Network Links */}
            <div style={{ borderTop: '1px solid var(--section-dark-border)', paddingTop: '1.8rem' }}>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  letterSpacing: '0.1em',
                  color: 'var(--section-dark-muted)',
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
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.8rem',
                      letterSpacing: '0.06em',
                      color: 'rgba(250, 250, 248, 0.7)',
                      textTransform: 'uppercase',
                      transition: 'color var(--duration-fast) ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(250, 250, 248, 0.7)')}
                  >
                    <span>{s.label}</span>
                    <span style={{ marginLeft: '0.25rem', color: 'var(--accent)' }}>↗</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Minimalist Underline Form (No Box Container) */}
          <div>
            <form ref={formRef} onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {/* Inquiry Scope Selection */}
              <div>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.74rem',
                    letterSpacing: '0.1em',
                    color: 'var(--section-dark-muted)',
                    display: 'block',
                    marginBottom: '0.8rem',
                    textTransform: 'uppercase',
                  }}
                >
                  SELECT INQUIRY DOMAIN
                </span>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {scopes.map((scope) => (
                    <button
                      key={scope}
                      type="button"
                      onClick={() => setInquiryType(scope)}
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.74rem',
                        letterSpacing: '0.06em',
                        textTransform: 'uppercase',
                        padding: '0.45rem 0.85rem',
                        border: '1px solid',
                        borderColor: inquiryType === scope ? 'var(--accent)' : 'var(--section-dark-border)',
                        backgroundColor: inquiryType === scope ? 'var(--accent-muted)' : 'transparent',
                        color: inquiryType === scope ? 'var(--accent)' : 'rgba(250, 250, 248, 0.7)',
                        borderRadius: '0px',
                        cursor: 'pointer',
                        transition: 'all var(--duration-fast) ease',
                      }}
                    >
                      {scope}
                    </button>
                  ))}
                </div>
                <input type="hidden" name="inquiry_type" value={inquiryType} />
              </div>

              {/* Minimal Underline Inputs */}
              <div>
                <label
                  htmlFor="contact-name"
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    letterSpacing: '0.1em',
                    color: 'var(--section-dark-muted)',
                    display: 'block',
                    marginBottom: '0.5rem',
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
                  placeholder="e.g. Elena Silva / Acme Corp"
                  style={{
                    width: '100%',
                    background: 'none',
                    border: 'none',
                    borderBottom: '1px solid var(--section-dark-border)',
                    padding: '0.75rem 0',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '1.05rem',
                    color: '#FAFAF8',
                    outline: 'none',
                    borderRadius: '0px',
                  }}
                  onFocus={(e) => (e.target.style.borderBottomColor = 'var(--accent)')}
                  onBlur={(e) => (e.target.style.borderBottomColor = 'var(--section-dark-border)')}
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    letterSpacing: '0.1em',
                    color: 'var(--section-dark-muted)',
                    display: 'block',
                    marginBottom: '0.5rem',
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
                    borderBottom: '1px solid var(--section-dark-border)',
                    padding: '0.75rem 0',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '1.05rem',
                    color: '#FAFAF8',
                    outline: 'none',
                    borderRadius: '0px',
                  }}
                  onFocus={(e) => (e.target.style.borderBottomColor = 'var(--accent)')}
                  onBlur={(e) => (e.target.style.borderBottomColor = 'var(--section-dark-border)')}
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    letterSpacing: '0.1em',
                    color: 'var(--section-dark-muted)',
                    display: 'block',
                    marginBottom: '0.5rem',
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
                    borderBottom: '1px solid var(--section-dark-border)',
                    padding: '0.75rem 0',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '1.05rem',
                    color: '#FAFAF8',
                    outline: 'none',
                    borderRadius: '0px',
                    resize: 'vertical',
                  }}
                  onFocus={(e) => (e.target.style.borderBottomColor = 'var(--accent)')}
                  onBlur={(e) => (e.target.style.borderBottomColor = 'var(--section-dark-border)')}
                />
              </div>

              {/* Submit Trigger & Status Feedback */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginTop: '1rem' }}>
                <button
                  type="submit"
                  disabled={sending}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.8rem',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.84rem',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    fontWeight: 650,
                    padding: '0.9rem 1.8rem',
                    backgroundColor: 'var(--accent)',
                    color: '#FFFFFF',
                    border: 'none',
                    borderRadius: '0px',
                    cursor: sending ? 'not-allowed' : 'pointer',
                    transition: 'all var(--duration-fast) ease',
                    opacity: sending ? 0.6 : 1,
                  }}
                >
                  <span>{sending ? 'DISPATCHING...' : 'DISPATCH MESSAGE'}</span>
                  <span>→</span>
                </button>

                {status === 'success' && (
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.8rem',
                      letterSpacing: '0.06em',
                      color: '#4BB543',
                    }}
                  >
                    ✓ MESSAGE TRANSMITTED DIRECTLY.
                  </span>
                )}

                {status === 'error' && (
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.8rem',
                      letterSpacing: '0.06em',
                      color: 'var(--accent)',
                    }}
                  >
                    ✕ FAILED TO DISPATCH. PLEASE EMAIL DIRECTLY.
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
