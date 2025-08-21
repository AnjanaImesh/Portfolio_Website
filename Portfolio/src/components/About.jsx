import React, { useEffect, useRef } from 'react'
import { about, skills } from '../data.js'

export default function About() {
  const aboutRef = useRef(null)

  if (!about || !skills) {
    return (
      <section id="about" className="about-section">
        <div className="container">
          <div className="section-header">
            <div className="section-kicker">About</div>
            <h2 className="section-title">Loading...</h2>
          </div>
        </div>
      </section>
    )
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    if (aboutRef.current) observer.observe(aboutRef.current)

    return () => observer.disconnect()
  }, [])

  const topSkills = skills.slice(0, 6)
  const otherSkills = skills.slice(6)

  return (
    <section id="about" ref={aboutRef} className="about-section">
      <div className="container">
        <div className="section-header">
          <div className="section-kicker">About</div>
          <h2 className="section-title">Who I Am</h2>
          <p className="section-subtitle">Developer, problem solver, and tech enthusiast</p>
        </div>

        <div className="about-content">
          {/* Stats Grid */}
          <div className="stats-grid">
            {about.stats && about.stats.map((stat, i) => (
              <div className="stat-card" key={i}>
                <div className="stat-number">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Tools Section */}
          <div className="tools-section">
            <h3>Tools & Technologies</h3>
            <div className="tools-grid">
              {otherSkills.map((tool, i) => (
                <span className="tool-tag" key={i}>{tool}</span>
              ))}
            </div>
          </div>

          {/* Values Section */}
          <div className="values-section">
            <h3>What Drives Me</h3>
            <div className="values-grid">
              <div className="value-card">
                <div className="value-icon">🎯</div>
                <h4>Problem Solving</h4>
                <p>I love turning complex challenges into elegant solutions</p>
              </div>
              
              <div className="value-card">
                <div className="value-icon">🚀</div>
                <h4>Performance First</h4>
                <p>Every project is optimized for speed and scalability</p>
              </div>
              
              <div className="value-card">
                <div className="value-icon">🤝</div>
                <h4>Team Collaboration</h4>
                <p>Working effectively with designers, PMs, and developers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}