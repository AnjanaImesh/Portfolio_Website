import React, { useEffect, useState } from 'react'

const getPreferredTheme = () => {
  const stored = localStorage.getItem('theme')
  if (stored) return stored
  const prefers = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches
  return prefers ? 'light' : 'dark'
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState('dark')
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    setTheme(getPreferredTheme())
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const handleToggle = () => {
    if (isAnimating) return
    
    setIsAnimating(true)
    setTheme(theme === 'dark' ? 'light' : 'dark')
    
    // Reset animation state after animation completes
    setTimeout(() => setIsAnimating(false), 300)
  }

  return (
    <button
      aria-label="Toggle theme"
      className={`theme-toggle-btn ${theme} ${isAnimating ? 'animating' : ''}`}
      onClick={handleToggle}
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <div className="toggle-track">
        <div className="toggle-thumb">
          {theme === 'dark' ? (
            // Sun icon with enhanced design
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="sun-icon">
              <circle cx="12" cy="12" r="5" fill="currentColor" opacity="0.9"/>
              <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" 
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.7"/>
            </svg>
          ) : (
            // Moon icon with enhanced design
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="moon-icon">
              <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" 
                    fill="currentColor" opacity="0.9"/>
              <path d="M16 2a8 8 0 00-8 8c0 4.41 3.59 8 8 8 3.73 0 6.84-2.55 7.73-6" 
                    stroke="currentColor" strokeWidth="1.5" opacity="0.7"/>
            </svg>
          )}
        </div>
      </div>
      
      {/* Background glow effect */}
      <div className="toggle-glow"></div>
    </button>
  )
}