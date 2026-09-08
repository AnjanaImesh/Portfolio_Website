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

    // 1. Accessibility: Guard for prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const mm = gsap.matchMedia()
    const ctx = gsap.context(() => {
      // ── DESKTOP MOTION (min-width: 800px) ──────────────────────────
      mm.add('(min-width: 800px)', () => {
        // 1. Hero Intentional Choreography
        const heroLeft = containerRef.current.querySelector('.hero-title-left')
        const heroRight = containerRef.current.querySelector('.hero-title-right')
        const heroArc = containerRef.current.querySelector('.hero-svg-arc-accent')
        const heroOuterArc = containerRef.current.querySelector('.hero-svg-arc-outer')
        const heroProf = containerRef.current.querySelector('.hero-profession-line')
        const heroCoord = containerRef.current.querySelectorAll('.hero-coord-line')

        if (heroLeft && heroRight) {
          const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } })

          // 1. Technical coordinate axes enter
          if (heroCoord.length) {
            heroTl.fromTo(
              heroCoord,
              { opacity: 0 },
              { opacity: 0.7, duration: 0.5, stagger: 0.1 }
            )
          }

          // 2. Large "I BUILD SYSTEMS." reveals
          heroTl.fromTo(
            heroLeft,
            { y: 35, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.65, ease: 'power4.out' },
            '-=0.2'
          )

          // 3. Large SVG arc draws and rotates subtly
          if (heroArc || heroOuterArc) {
            heroTl.fromTo(
              [heroArc, heroOuterArc].filter(Boolean),
              { rotation: -20, transformOrigin: '720px 450px', opacity: 0 },
              { rotation: 0, opacity: 0.75, duration: 0.8, ease: 'power2.out' },
              '-=0.4'
            )
          }

          // 4. Integrated Human Arch Portrait reveals
          const archFrame = containerRef.current.querySelector('.hero-arch-frame')
          if (archFrame) {
            heroTl.fromTo(
              archFrame,
              { opacity: 0, scale: 0.95, y: 15 },
              { opacity: 1, scale: 1, y: 0, duration: 0.75, ease: 'power3.out' },
              '-=0.6'
            )
          }

          // 5. "I FRAME STORIES." enters
          heroTl.fromTo(
            heroRight,
            { y: 35, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.65, ease: 'power4.out' },
            '-=0.5'
          )

          // 5. Profession line and direct links settle
          if (heroProf) {
            heroTl.fromTo(
              heroProf,
              { y: 15, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.5 },
              '-=0.3'
            )
          }
        }

        // 2. Continuous Subtle Parallax on Hero Geometry
        const heroContainer = containerRef.current.querySelector('#top')
        const heroSvgArcs = containerRef.current.querySelectorAll('#top circle, #top path')
        if (heroContainer && heroSvgArcs.length) {
          gsap.to(heroSvgArcs, {
            rotation: 25,
            transformOrigin: '720px 460px',
            ease: 'none',
            scrollTrigger: {
              trigger: heroContainer,
              start: 'top top',
              end: 'bottom top',
              scrub: 1.5,
            },
          })
        }

        // 3. ScrollTrigger for Section Header Bars
        const sectionHeaders = containerRef.current.querySelectorAll('.section-header-bar')
        sectionHeaders.forEach((header) => {
          gsap.fromTo(
            header,
            { opacity: 0, y: 18 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: header,
                start: 'top 88%',
                toggleActions: 'play none none none',
              },
            }
          )
        })

        // 4. Text-Driven Project Index Row Transitions
        const projectRows = containerRef.current.querySelectorAll('.project-index-row')
        if (projectRows.length) {
          gsap.fromTo(
            projectRows,
            { opacity: 0, y: 24 },
            {
              opacity: 1,
              y: 0,
              duration: 0.55,
              stagger: 0.1,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: '#selected-work',
                start: 'top 78%',
                toggleActions: 'play none none none',
              },
            }
          )
        }

        // 5. Visual Practice Typography Rows in Black Section
        const practiceRows = containerRef.current.querySelectorAll('.practice-row')
        if (practiceRows.length) {
          gsap.fromTo(
            practiceRows,
            { opacity: 0, y: 25 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              stagger: 0.12,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: '#visual-practice',
                start: 'top 76%',
                toggleActions: 'play none none none',
              },
            }
          )
        }

        // 6. Chronology Timeline Rows
        const timelineRows = containerRef.current.querySelectorAll('.timeline-row')
        if (timelineRows.length) {
          gsap.fromTo(
            timelineRows,
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 0.55,
              stagger: 0.1,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: '#experience',
                start: 'top 80%',
                toggleActions: 'play none none none',
              },
            }
          )
        }
      })

      // ── MOBILE MOTION (max-width: 799px) ───────────────────────────
      mm.add('(max-width: 799px)', () => {
        const heroLeft = containerRef.current.querySelector('.hero-title-left')
        const heroRight = containerRef.current.querySelector('.hero-title-right')

        if (heroLeft && heroRight) {
          gsap.fromTo(
            [heroLeft, heroRight],
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: 'power2.out' }
          )
        }

        const projectRows = containerRef.current.querySelectorAll('.project-index-row')
        projectRows.forEach((row) => {
          gsap.fromTo(
            row,
            { opacity: 0, y: 15 },
            {
              opacity: 1,
              y: 0,
              duration: 0.5,
              scrollTrigger: {
                trigger: row,
                start: 'top 88%',
                toggleActions: 'play none none none',
              },
            }
          )
        })
      })
    }, containerRef)

    // Cleanup triggers and matchMedia on route changes or unmount
    return () => {
      ctx.revert()
      mm.revert()
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [containerRef, ...dependencies])
}
