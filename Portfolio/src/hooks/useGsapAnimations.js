import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ScrollTrigger plugin safely in browser
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export function useGsapAnimations(containerRef, dependencies = []) {
  useEffect(() => {
    if (typeof window === 'undefined' || !containerRef?.current) return

    // Guard for prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const mm = gsap.matchMedia()
    const ctx = gsap.context(() => {
      // ── HERO CHOREOGRAPHED SEQUENCE ────────────────────────────────
      // Sequence: 1. Portrait/badge -> 2. Name -> 3. Profession -> 4. Statement -> 5. CTAs
      const heroShell = containerRef.current.querySelector('.section-shell')
      if (heroShell) {
        const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } })

        const avatar = heroShell.querySelector('img')
        const avatarBadge = heroShell.querySelector('.hero-avatar-badge')
        const nameLine = heroShell.querySelector('div[style*="text-transform: uppercase"]')
        const profession = heroShell.querySelector('.display-hero')?.previousElementSibling
        const headline = heroShell.querySelector('.display-hero')
        const subheadline = heroShell.querySelector('.subheadline')
        const ctaButtons = heroShell.querySelectorAll('.btn-pill, .btn-pill-subtle')
        const partnerStrip = heroShell.querySelector('.partner-strip')

        // 1. Soft entrance of the hero shell
        heroTl.fromTo(
          heroShell,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6 }
        )

        // 2. Avatar & Badge
        if (avatar) {
          heroTl.fromTo(
            avatar,
            { scale: 0.85, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.5, ease: 'back.out(1.4)' },
            '-=0.3'
          )
        }
        if (avatarBadge) {
          heroTl.fromTo(
            avatarBadge,
            { scale: 0.8, opacity: 0, y: 4 },
            { scale: 1, opacity: 1, y: 0, duration: 0.4 },
            '-=0.2'
          )
        }

        // 3. Main Statement & Subheadline
        if (headline) {
          heroTl.fromTo(
            headline,
            { opacity: 0, y: 15 },
            { opacity: 1, y: 0, duration: 0.55 },
            '-=0.2'
          )
        }
        if (subheadline) {
          heroTl.fromTo(
            subheadline,
            { opacity: 0, y: 10 },
            { opacity: 1, y: 0, duration: 0.45 },
            '-=0.3'
          )
        }

        // 4. CTAs
        if (ctaButtons.length) {
          heroTl.fromTo(
            ctaButtons,
            { opacity: 0, y: 8 },
            { opacity: 1, y: 0, duration: 0.4, stagger: 0.1 },
            '-=0.2'
          )
        }

        // 5. Tech/Partner Strip
        if (partnerStrip) {
          heroTl.fromTo(
            partnerStrip,
            { opacity: 0 },
            { opacity: 1, duration: 0.5 },
            '-=0.1'
          )
        }
      }

      // ── SUBTLE SCROLL-TRIGGERED SECTION FADES ──────────────────────
      const sectionShells = containerRef.current.querySelectorAll('.section-shell:not(#top .section-shell), .section-shell-white')
      sectionShells.forEach((shell) => {
        gsap.fromTo(
          shell,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: shell,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        )
      })

      // Project Row Stagger Fade
      const projectRows = containerRef.current.querySelectorAll('.project-list-entry')
      if (projectRows.length) {
        gsap.fromTo(
          projectRows,
          { opacity: 0, y: 16 },
          {
            opacity: 1,
            y: 0,
            duration: 0.45,
            stagger: 0.08,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: '#work',
              start: 'top 78%',
              toggleActions: 'play none none none',
            },
          }
        )
      }

      // Timeline Row Fade
      const timelineRows = containerRef.current.querySelectorAll('.timeline-flat-row')
      if (timelineRows.length) {
        gsap.fromTo(
          timelineRows,
          { opacity: 0, y: 15 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: '#experience',
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        )
      }
    }, containerRef)

    // Cleanup triggers and matchMedia on route changes or unmount
    return () => {
      ctx.revert()
      mm.revert()
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [containerRef, ...dependencies])
}
