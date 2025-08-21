import React, { useEffect, useRef } from 'react'
import { projects } from '../data.js'
import travelbudyImage from '../assets/travelbudy.png'
import automotiveImage from '../assets/Automotive.jpeg'

export default function Projects() {
  const projectsRef = useRef(null)
  const projectsGridRef = useRef(null)

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

    if (projectsGridRef.current) observer.observe(projectsGridRef.current)

    return () => observer.disconnect()
  }, [])

  const getProjectImage = (project) => {
    // Use local image for Travel Buddy project
    if (project.title === "Travel Buddy") {
      return travelbudyImage
    }
    // Use local image for Mr.Automotive project
    if (project.title === "Mr.Automotive") {
      return automotiveImage
    }
    // Use the image from data for other projects
    return project.image
  }

  return (
    <section id="projects" ref={projectsRef}>
      <div className="container">
        <div className="section-header">
          <div className="section-kicker">Projects</div>
          <h2 className="section-title">Selected work</h2>
        </div>

        <div className="projects-grid fade-in-up" ref={projectsGridRef}>
          {projects.map((p, idx) => (
            <article className="project-card" key={idx}>
              <img className="project-media" src={getProjectImage(p)} alt={p.title} />
              <div className="project-body">
                <h3 className="project-title">{p.title}</h3>
                <p className="project-desc">{p.description}</p>
                <div className="tags">
                  {p.tags.map((t) => (
                    <span className="pill" key={t}>{t}</span>
                  ))}
                </div>
                <div className="project-actions">
                  {p.demo && (
                    <a className="btn" href={p.demo} target="_blank" rel="noreferrer">
                      Live Demo
                    </a>
                  )}
                  {p.source && (
                    <a className="btn" href={p.source} target="_blank" rel="noreferrer">
                      Source
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="small" style={{ marginTop: 16 }}>
          More available on request or on my GitHub.
        </p>
      </div>
    </section>
  )
}