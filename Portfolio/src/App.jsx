import React, { useRef, useEffect } from 'react'
import { useRouter } from './hooks/useRouter.js'
import { useTheme } from './hooks/useTheme.js'
import { useGsapAnimations } from './hooks/useGsapAnimations.js'

import Navbar from './components/common/Navbar.jsx'
import Footer from './components/common/Footer.jsx'

// Homepage Sections
import HeroEditorial from './components/home/HeroEditorial.jsx'
import DualPractice from './components/home/DualPractice.jsx'
import SelectedWork from './components/home/SelectedWork.jsx'
import PhotographyPreview from './components/home/PhotographyPreview.jsx'
import ExperienceTimeline from './components/home/ExperienceTimeline.jsx'
import CapabilitiesGrid from './components/home/CapabilitiesGrid.jsx'
import ContactSection from './components/home/ContactSection.jsx'

// Dedicated Sub-Pages
import WorkPage from './components/pages/WorkPage.jsx'
import PhotographyPage from './components/pages/PhotographyPage.jsx'
import AboutPage from './components/pages/AboutPage.jsx'
import ContactPage from './components/pages/ContactPage.jsx'
import MoonoryPage from './components/pages/MoonoryPage.jsx'

import './styles/design-tokens.css'
import './styles/editorial.css'

export default function App() {
  const router = useRouter()
  const { theme, toggleTheme } = useTheme()
  const mainRef = useRef(null)

  // Initialize GSAP scroll animations whenever the active route updates
  useGsapAnimations(mainRef, [router.page])

  // Handle hash scrolling on initial load if hash is present
  useEffect(() => {
    if (window.location.hash) {
      const el = document.querySelector(window.location.hash)
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      }
    }
  }, [router.page])

  return (
    <>
      {/* Subtle Analog Film Texture Overlay */}
      <div className="editorial-grain" aria-hidden="true" />

      {/* Global Minimalist Navbar */}
      <Navbar
        currentRoute={router.page}
        onNavigate={router.navigate}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      {/* Main Content Viewport */}
      <main ref={mainRef} style={{ minHeight: '100vh', position: 'relative' }}>
        {router.isHome && (
          <>
            <HeroEditorial onNavigate={router.navigate} />
            <CapabilitiesGrid />
            <SelectedWork onNavigate={router.navigate} />
            <PhotographyPreview onNavigate={router.navigate} />
            <ExperienceTimeline onNavigate={router.navigate} />
          </>
        )}

        {router.isWork && <WorkPage onNavigate={router.navigate} />}
        {router.isPhotography && <PhotographyPage onNavigate={router.navigate} />}
        {router.isMoonory && <MoonoryPage onNavigate={router.navigate} />}
        {router.isAbout && <AboutPage onNavigate={router.navigate} />}
        {router.isContact && <ContactPage onNavigate={router.navigate} />}
      </main>

      {/* Global Editorial Footer */}
      <Footer onNavigate={router.navigate} />
    </>
  )
}
