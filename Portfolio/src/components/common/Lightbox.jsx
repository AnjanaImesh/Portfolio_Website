import React, { useEffect, useCallback } from 'react'

export default function Lightbox({ item, onClose, onPrev, onNext, hasPrev, hasNext }) {
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft' && onPrev) onPrev()
      if (e.key === 'ArrowRight' && onNext) onNext()
    },
    [onClose, onPrev, onNext]
  )

  useEffect(() => {
    if (!item) return
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [item, handleKeyDown])

  if (!item) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 2000,
        backgroundColor: 'rgba(10, 10, 12, 0.94)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 'clamp(1rem, 3vw, 2.5rem)',
        cursor: 'zoom-out',
        animation: 'fadeIn 0.25s ease forwards',
      }}
    >
      {/* Top Header Bar */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          cursor: 'default',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              color: '#4671FF',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}
          >
            {item.brand || 'PHOTOGRAPHY'}
          </span>
          <span style={{ color: 'rgba(255,255,255,0.2)' }}>•</span>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              color: 'rgba(255,255,255,0.6)',
              letterSpacing: '0.06em',
            }}
          >
            {item.location} ({item.year})
          </span>
        </div>

        <button
          onClick={onClose}
          aria-label="Close photo viewer"
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.78rem',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: '#FFFFFF',
            padding: '0.4rem 0.8rem',
            border: '1px solid rgba(255,255,255,0.2)',
            borderRadius: '0px',
            backgroundColor: 'transparent',
            cursor: 'pointer',
            transition: 'border-color 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = '#FFFFFF'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'
          }}
        >
          ESC / CLOSE ✕
        </button>
      </div>

      {/* Center Image Frame */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
          margin: '1.5rem 0',
          position: 'relative',
          cursor: 'default',
        }}
      >
        {hasPrev && (
          <button
            onClick={onPrev}
            aria-label="Previous photograph"
            style={{
              position: 'absolute',
              left: '0.5rem',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '44px',
              height: '44px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(20,20,24,0.6)',
              border: '1px solid rgba(255,255,255,0.15)',
              color: '#FFFFFF',
              zIndex: 10,
              cursor: 'pointer',
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
        )}

        <img
          src={item.src}
          alt={item.title}
          style={{
            maxHeight: '75vh',
            maxWidth: '90vw',
            objectFit: 'contain',
            border: '1px solid rgba(255,255,255,0.12)',
            boxShadow: '0 20px 60px rgba(0,0,0,0.6)',
          }}
        />

        {hasNext && (
          <button
            onClick={onNext}
            aria-label="Next photograph"
            style={{
              position: 'absolute',
              right: '0.5rem',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '44px',
              height: '44px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(20,20,24,0.6)',
              border: '1px solid rgba(255,255,255,0.15)',
              color: '#FFFFFF',
              zIndex: 10,
              cursor: 'pointer',
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        )}
      </div>

      {/* Bottom Caption Bar */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          width: '100%',
          cursor: 'default',
          borderTop: '1px solid rgba(255,255,255,0.1)',
          paddingTop: '1rem',
        }}
      >
        <div>
          <h3
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '1.2rem',
              fontWeight: 600,
              color: '#FFFFFF',
              marginBottom: '0.25rem',
            }}
          >
            {item.title}
          </h3>
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.88rem',
              color: 'rgba(255,255,255,0.7)',
              maxWidth: '650px',
              lineHeight: 1.5,
            }}
          >
            {item.caption}
          </p>
        </div>

        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            color: 'rgba(255,255,255,0.4)',
            letterSpacing: '0.06em',
          }}
        >
          {item.series}
        </div>
      </div>
    </div>
  )
}
