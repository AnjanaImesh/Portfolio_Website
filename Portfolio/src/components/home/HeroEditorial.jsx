import React, { useRef } from 'react'
import { personal } from '../../data/portfolioData.js'

export default function HeroEditorial({ onNavigate }) {
  const heroRef = useRef(null)

  const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="top"
      ref={heroRef}
      style={{
        minHeight: 'clamp(85vh, 92vh, 960px)',
        paddingTop: 'clamp(6rem, 9vw, 8.5rem)',
        paddingBottom: 'clamp(3rem, 5vw, 4.5rem)',
        position: 'relative',
        borderBottom: '1px solid var(--border)',
        backgroundColor: 'var(--bg)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        overflow: 'hidden',
      }}
    >
      {/* ── Architectural SVG Vector Guide System in Background ── */}
      <div
        className="shape-arc-container"
        style={{
          inset: 0,
          width: '100%',
          height: '100%',
          opacity: 0.75,
        }}
        aria-hidden="true"
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1440 900"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
          style={{ width: '100%', height: '100%' }}
        >
          {/* Engineering Coordinate Axes */}
          <line
            x1="80"
            y1="450"
            x2="1360"
            y2="450"
            stroke="var(--border)"
            strokeWidth="1"
            strokeDasharray="4 6"
            className="hero-coord-line"
          />
          <line
            x1="720"
            y1="80"
            x2="720"
            y2="820"
            stroke="var(--border)"
            strokeWidth="1"
            strokeDasharray="4 6"
            className="hero-coord-line"
          />

          {/* Precision Arc Crossing the Portrait Focal Center */}
          <circle
            cx="720"
            cy="450"
            r="320"
            stroke="var(--border)"
            strokeWidth="1"
            fill="none"
            className="hero-svg-arc-outer"
          />
          <path
            d="M 460 450 A 260 260 0 0 1 980 450"
            stroke="var(--accent)"
            strokeWidth="1.5"
            fill="none"
            opacity="0.7"
            className="hero-svg-arc-accent"
          />

          {/* Optical Center Crosshair */}
          <line x1="710" y1="450" x2="730" y2="450" stroke="var(--ink)" strokeWidth="1" />
          <line x1="720" y1="440" x2="720" y2="460" stroke="var(--ink)" strokeWidth="1" />
        </svg>
      </div>

      <div
        className="container"
        style={{
          position: 'relative',
          zIndex: 1,
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          justifyContent: 'space-between',
        }}
      >
        {/* ── Top Bar: Identity & Geolocation ── */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'baseline',
            paddingBottom: '1.4rem',
            borderBottom: '1px solid var(--border)',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem' }}>
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1rem, 1.4vw, 1.25rem)',
                fontWeight: 800,
                letterSpacing: '-0.02em',
                color: 'var(--ink)',
                textTransform: 'uppercase',
              }}
            >
              ANJANA IMESH
            </span>
            <span className="coord-mark">/ SRI LANKA</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
            <span className="coord-mark">6.9271° N, 79.8612° E</span>
            <span style={{ color: 'var(--border)' }}>•</span>
            <span className="coord-mark" style={{ color: 'var(--accent)', fontWeight: 600 }}>
              2026 ARCHIVE
            </span>
          </div>
        </div>

        {/* ── Center Stage: Asymmetric 3-Part Composition (Text + Arch Portrait + Text) ── */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: 'clamp(2rem, 4vw, 3.5rem)',
            margin: 'clamp(2.5rem, 5vw, 4.5rem) 0',
            alignItems: 'center',
          }}
          className="hero-center-composition"
        >
          {/* Left Wing: Engineering Systems */}
          <div className="hero-wing-left">
            <div
              className="coord-mark"
              style={{ marginBottom: '0.8rem', color: 'var(--ink-muted)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <span style={{ width: '14px', height: '1px', backgroundColor: 'var(--ink-muted)', display: 'inline-block' }} />
              <span>01 / SYSTEMS ARCHITECTURE</span>
            </div>
            <h1
              className="display-hero hero-title-left"
              style={{
                margin: 0,
                lineHeight: 0.9,
                fontSize: 'clamp(2.8rem, 6.5vw, 6.2rem)',
              }}
            >
              I BUILD<br />
              <span style={{ color: 'var(--ink)' }}>SYSTEMS.</span>
            </h1>
            <p
              className="body-sm"
              style={{
                maxWidth: '380px',
                marginTop: '1.2rem',
                color: 'var(--ink-secondary)',
                lineHeight: 1.6,
                margin: '1.2rem 0 0 0',
              }}
            >
              Engineering enterprise full-stack platforms, distributed Spring Boot services, and high-performance React frontends.
            </p>
          </div>

          {/* Center Stage: Integrated Architectural Arch Portrait (Human Presence, No Card Box!) */}
          <div
            className="hero-portrait-stage"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative',
            }}
          >
            <div
              className="arch-frame hero-arch-frame"
              style={{
                width: '100%',
                maxWidth: '310px',
                aspectRatio: '3/4',
                borderColor: 'var(--border)',
                position: 'relative',
              }}
            >
              <picture>
                <source srcSet={personal.heroImageWebp} type="image/webp" />
                <img
                  src={personal.heroImage}
                  alt="Anjana Imesh — Associate Software Engineer and Visual Creative with camera"
                  loading="eager"
                  fetchPriority="high"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </picture>

              {/* Minimalist Micro Coordinates Plate */}
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: '0.5rem 0.8rem',
                  backgroundColor: 'rgba(17, 17, 17, 0.82)',
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  borderTop: '1px solid rgba(255, 255, 255, 0.15)',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.66rem',
                    letterSpacing: '0.08em',
                    color: '#FAFAF8',
                    textTransform: 'uppercase',
                  }}
                >
                  FIG. 01 // ANJANA IMESH
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.64rem',
                    color: 'var(--accent)',
                    letterSpacing: '0.06em',
                  }}
                >
                  OPTICAL SENSOR
                </span>
              </div>
            </div>
          </div>

          {/* Right Wing: Creative Practice & Stories */}
          <div className="hero-wing-right" style={{ textAlign: 'left' }}>
            <div
              className="coord-mark"
              style={{ marginBottom: '0.8rem', color: 'var(--accent)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <span style={{ width: '14px', height: '1px', backgroundColor: 'var(--accent)', display: 'inline-block' }} />
              <span>02 / VISUAL STORYTELLING</span>
            </div>
            <h2
              className="display-hero hero-title-right"
              style={{
                margin: 0,
                lineHeight: 0.9,
                fontSize: 'clamp(2.8rem, 6.5vw, 6.2rem)',
              }}
            >
              I FRAME<br />
              <span style={{ color: 'var(--accent)' }}>STORIES.</span>
            </h2>
            <p
              className="body-sm"
              style={{
                maxWidth: '380px',
                marginTop: '1.2rem',
                color: 'var(--ink-secondary)',
                lineHeight: 1.6,
                margin: '1.2rem 0 0 0',
              }}
            >
              Framing light, raw human celebration, and commercial visual media through Onex Media, GradPortraits LK, and Moonory.
            </p>
          </div>
        </div>

        {/* ── Bottom Section: Role Statement & Non-Rectangular Direct Actions ── */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            paddingTop: '1.8rem',
            borderTop: '1px solid var(--border)',
            flexWrap: 'wrap',
            gap: '1.8rem',
          }}
        >
          <div style={{ maxWidth: '540px' }}>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.84rem',
                letterSpacing: '0.1em',
                fontWeight: 650,
                textTransform: 'uppercase',
                color: 'var(--ink)',
                marginBottom: '0.4rem',
              }}
              className="hero-profession-line"
            >
              ASSOCIATE SOFTWARE ENGINEER × PHOTOGRAPHER
            </div>
            <p
              className="body-text"
              style={{
                fontSize: '0.92rem',
                color: 'var(--ink-secondary)',
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              Building dependable software architectures and documenting authentic human stories. Two distinct disciplines united by deliberate craft.
            </p>
          </div>

          {/* Minimal Text Links (No Pill Buttons) */}
          <div
            style={{
              display: 'flex',
              gap: 'clamp(1.2rem, 2.5vw, 2.2rem)',
              alignItems: 'center',
              flexWrap: 'wrap',
            }}
          >
            <button
              type="button"
              onClick={() => scrollToSection('selected-work')}
              className="link-editorial-underline"
              style={{ background: 'none', border: 'none', cursor: 'pointer' }}
            >
              <span>EXPLORE WORK</span>
              <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent)' }}>[01]</span>
              <span>↓</span>
            </button>

            <button
              type="button"
              onClick={() => scrollToSection('visual-practice')}
              className="link-editorial-underline"
              style={{ background: 'none', border: 'none', cursor: 'pointer' }}
            >
              <span>VISUAL PRACTICES</span>
              <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent)' }}>[02]</span>
              <span>→</span>
            </button>

            <button
              type="button"
              onClick={() => scrollToSection('contact')}
              className="btn-sharp"
            >
              <span>LET'S TALK</span>
              <span>→</span>
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 990px) {
          .hero-center-composition {
            grid-template-columns: 1.15fr 0.9fr 1.15fr !important;
            gap: 2.5rem !important;
          }
          .hero-wing-right {
            text-align: right !important;
          }
          .hero-wing-right p {
            margin-left: auto !important;
          }
          .hero-wing-right .coord-mark {
            justify-content: flex-end !important;
          }
        }
        @media (max-width: 989px) {
          .hero-portrait-stage {
            order: -1;
            margin-bottom: 1rem;
          }
          .hero-arch-frame {
            max-width: 240px !important;
          }
        }
      `}</style>
    </section>
  )
}
