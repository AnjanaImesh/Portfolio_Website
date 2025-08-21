import React, { useEffect, useRef } from 'react'
import { skills } from '../data.js'

export default function Skills() {
  const skillsRef = useRef(null)
  const tagsRef = useRef(null)

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

    if (tagsRef.current) observer.observe(tagsRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" ref={skillsRef}>
      <div className="container">
        <div className="section-header">
          <div className="section-kicker">Skills</div>
          <h2 className="section-title">Tech I work with</h2>
        </div>

        <div className="skill-tags fade-in-up" ref={tagsRef}>
          {skills.map((s, i) => (
            <span className="tag" key={s}>
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}