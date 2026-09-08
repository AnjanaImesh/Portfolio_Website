import React, { useState } from 'react'
import { moonoryGallery } from '../../data/portfolioData.js'
import Lightbox from '../common/Lightbox.jsx'

export default function MoonoryPage({ onNavigate }) {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null)
  const activePhoto = selectedPhotoIndex !== null ? moonoryGallery[selectedPhotoIndex] : null

  return (
    <div style={{ paddingTop: 'clamp(6.5rem, 10vw, 9rem)', minHeight: '85vh', backgroundColor: 'var(--bg)' }}>
      <div className="container">
        {/* Breadcrumb Header Bar */}
        <div className="section-header-bar">
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.8rem' }}>
            <a
              href="/photography"
              onClick={(e) => {
                e.preventDefault()
                onNavigate?.('/photography')
              }}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                letterSpacing: '0.1em',
                color: 'var(--accent)',
                textTransform: 'uppercase',
              }}
            >
              ← BACK TO PRACTICES
            </a>
            <span style={{ color: 'var(--border-strong)' }}>/</span>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--ink-muted)',
              }}
            >
              MOONORY SHOWCASE
            </span>
          </div>

          <span className="section-meta-right">INTERNAL ARCHIVE • SRI LANKA</span>
        </div>

        {/* Hero Title & Manifesto */}
        <div style={{ marginBottom: 'clamp(3.5rem, 6vw, 5.5rem)' }}>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.8rem',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              marginBottom: '0.8rem',
              fontWeight: 650,
            }}
          >
            LIFESTYLE & WEDDING PHOTOGRAPHY
          </div>

          <h1
            className="display-hero"
            style={{
              maxWidth: '920px',
              lineHeight: 0.94,
              marginBottom: '1.8rem',
            }}
          >
            MOONORY.
          </h1>

          <p
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.25rem, 2.4vw, 1.8rem)',
              fontStyle: 'italic',
              color: 'var(--ink-secondary)',
              maxWidth: '780px',
              lineHeight: 1.5,
              marginBottom: '2rem',
            }}
          >
            "Warm, intimate, natural light storytelling. Documenting raw human emotion, quiet promises,
            and unscripted life moments without artificial wedding clichés."
          </p>

          <p className="body-text" style={{ maxWidth: '680px', color: 'var(--ink-secondary)' }}>
            Founded by Anjana Imesh, Moonory represents a restrained, documentary-led approach to couples,
            lifestyle portraits, and celebrations across Sri Lanka. Rejecting stiff poses and oversaturated filters,
            every session is guided by natural environmental light, honest human connection, and timeless color grading.
          </p>
        </div>

        {/* ── Gallery Frames ── */}
        <div style={{ borderTop: '1px solid var(--border)', paddingTop: '3rem' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'baseline',
              marginBottom: '2.5rem',
              flexWrap: 'wrap',
              gap: '0.5rem',
            }}
          >
            <span className="meta-tag" style={{ color: 'var(--ink)', fontWeight: 650 }}>
              SELECTED DOCUMENTARY FRAMES
            </span>
            <span className="meta-tag">CLICK FRAME TO INSPECT FULL RESOLUTION</span>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(12, 1fr)',
              gap: '1.8rem',
            }}
            className="moonory-grid"
          >
            {moonoryGallery.map((photo, idx) => {
              const isEven = idx % 2 === 0
              const colSpan = isEven ? 'span 7' : 'span 5'
              const aspect = isEven ? '16/10' : '4/5'

              return (
                <div
                  key={photo.id}
                  onClick={() => setSelectedPhotoIndex(idx)}
                  className="moonory-grid-item"
                  style={{
                    gridColumn: colSpan,
                    cursor: 'pointer',
                  }}
                >
                  <div
                    className="media-frame"
                    style={{
                      aspectRatio: aspect,
                      position: 'relative',
                    }}
                  >
                    <img
                      src={photo.src}
                      alt={photo.title}
                      loading="lazy"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'baseline',
                      marginTop: '0.75rem',
                    }}
                  >
                    <div>
                      <span
                        style={{
                          fontFamily: 'var(--font-sans)',
                          fontSize: '0.95rem',
                          fontWeight: 650,
                          color: 'var(--ink)',
                          display: 'block',
                        }}
                      >
                        {photo.title}
                      </span>
                      <span className="meta-tag" style={{ color: 'var(--accent)' }}>
                        {photo.category} • {photo.location}
                      </span>
                    </div>

                    <span className="meta-tag">{photo.year}</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Inquire Action Strip — Open Layout */}
        <div
          style={{
            marginTop: 'clamp(4rem, 7vw, 6.5rem)',
            paddingTop: '2.5rem',
            borderTop: '1px solid var(--border)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1.5rem',
          }}
        >
          <div>
            <span className="meta-tag" style={{ color: 'var(--accent)', display: 'block', marginBottom: '0.3rem' }}>
              COLLABORATION & SESSIONS
            </span>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.5rem, 2.5vw, 2.2rem)',
                fontWeight: 800,
                color: 'var(--ink)',
                marginBottom: '0.4rem',
              }}
            >
              PLAN A SESSION WITH MOONORY
            </h2>
            <p className="body-text" style={{ maxWidth: '540px', margin: 0 }}>
              Inquire about upcoming intimate weddings, couple documentary sessions, or personal lifestyle stories.
            </p>
          </div>

          <button
            onClick={() => onNavigate?.('/contact')}
            className="btn-pill"
          >
            <span>Inquire for Moonory Session</span>
            <span>↗</span>
          </button>
        </div>
      </div>

      <Lightbox
        item={activePhoto}
        onClose={() => setSelectedPhotoIndex(null)}
        onPrev={() => setSelectedPhotoIndex((prev) => (prev > 0 ? prev - 1 : moonoryGallery.length - 1))}
        onNext={() => setSelectedPhotoIndex((prev) => (prev < moonoryGallery.length - 1 ? prev + 1 : 0))}
        hasPrev={moonoryGallery.length > 1}
        hasNext={moonoryGallery.length > 1}
      />

      <style>{`
        @media (max-width: 768px) {
          .moonory-grid-item {
            grid-column: span 12 !important;
          }
        }
      `}</style>
    </div>
  )
}
