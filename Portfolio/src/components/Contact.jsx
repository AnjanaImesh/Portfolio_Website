import React, { useEffect, useRef, useState } from 'react'
import { personal, socials } from '../data.js'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const contactRef = useRef(null)
  const contactGridRef = useRef(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

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

    if (contactGridRef.current) observer.observe(contactGridRef.current)

    return () => observer.disconnect()
  }, [])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('sending')
    
    try {
      // Send email using EmailJS
      const result = await emailjs.send(
        'service_h4apch1', // You'll get this from EmailJS
        'template_6072hts', // You'll get this from EmailJS
        {
          to_email: 'anjanaimesh600@gmail.com',
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          reply_to: formData.email
        },
        'vS4-fXR-yhzGRdmyW' // You'll get this from EmailJS
      )
      
      if (result.status === 200) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', message: '' })
        // Reset form after success
        setTimeout(() => setSubmitStatus(null), 3000)
      } else {
        throw new Error('Failed to send email')
      }
    } catch (error) {
      console.error('Email error:', error)
      setSubmitStatus('error')
      // Reset error after 3 seconds
      setTimeout(() => setSubmitStatus(null), 3000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" ref={contactRef}>
      <div className="container">
        <div className="section-header">
          <div className="section-kicker">Contact</div>
          <h2 className="section-title">Let's build something amazing</h2>
        </div>

        <div className="contact-grid fade-in-up" ref={contactGridRef}>
          <div className="contact-card">
            <h3 className="contact-title">Get in touch</h3>
            <p className="contact-description">
              Available for freelance, contract, or full‑time roles. Let's discuss your next project!
            </p>
            
            <div className="contact-actions">
              <a className="contact-btn primary" href={`mailto:$anjanaimesh600@gmail.com`}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                <span>Email me</span>
              </a>
              
              <a className="contact-btn secondary" href="https://www.linkedin.com/in/anjanaimesh" target="_blank" rel="noreferrer">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V23h-4zM8.5 8.5h3.8v2h.05c.53-1 1.84-2.05 3.8-2.05 4.07 0 4.82 2.68 4.82 6.16V23h-4v-5.88c0-1.4-.03-3.2-1.95-3.2-1.96 0-2.26 1.52-2.26 3.1V23h-4z"/>
                </svg>
                <span>Connect on LinkedIn</span>
              </a>
            </div>

            <div className="social-links">
              <span className="social-label">Follow me on</span>
              <div className="social-icons">
                <a className="social-icon" href="https://github.com/AnjanaImesh" target="_blank" rel="noreferrer" title="GitHub">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 .5A12 12 0 0 0 0 12.7c0 5.38 3.44 9.94 8.21 11.55.6.12.82-.27.82-.59 0-.29-.01-1.05-.02-2.06-3.34.75-4.04-1.66-4.04-1.66-.55-1.44-1.35-1.82-1.35-1.82-1.1-.78.08-.76.08-.76 1.22.09 1.86 1.28 1.86 1.28 1.08 1.9 2.83 1.35 3.52 1.03.11-.81.42-1.35.76-1.66-2.67-.31-5.47-1.37-5.47-6.1 0-1.35.47-2.45 1.25-3.31-.13-.31-.54-1.56.12-3.24 0 0 1.01-.33 3.3 1.25a11.2 11.2 0 0 1 6 0c2.29-1.58 3.3-1.25 3.3-1.25.66 1.68.25 2.93.12 3.24.78.86 1.25 1.96 1.25 3.31 0 4.74-2.8 5.78-5.48 6.09.43.37.81 1.1.81 2.23 0 1.61-.02 2.91-.02 3.31 0 .32.22.71.83.59A12.03 12.03 0 0 0 24 12.71 12 12 0 0 0 12 .5z"/>
                  </svg>
                </a>
                <a className="social-icon" href="https://www.behance.net/anjanaz" target="_blank" rel="noreferrer" title="Behance">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22 7h-7V5h7v2zm1.5 10c0 1.38-1.12 2.5-2.5 2.5H16V7h4.5C21.88 7 23 8.12 23 9.5v7.5zM16 7v10h-3V7h3zM9.5 7H13v10H9.5c-1.38 0-2.5-1.12-2.5-2.5V9.5C7 8.12 8.12 7 9.5 7zM7 9.5v5c0 1.38-1.12 2.5-2.5 2.5S2 15.88 2 14.5v-5C2 8.12 3.12 7 4.5 7S7 8.12 7 9.5z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <form className="contact-card contact-form" onSubmit={handleSubmit}>
            <h3 className="contact-title">Send a message</h3>
            <div className="form-fields">
              <div className="input-group">
                <label htmlFor="name" className="input-label">Name</label>
                <input 
                  className="contact-input" 
                  id="name"
                  type="text" 
                  name="name" 
                  placeholder="Your name" 
                  required 
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>
              
              <div className="input-group">
                <label htmlFor="email" className="input-label">Email</label>
                <input 
                  className="contact-input" 
                  id="email"
                  type="email" 
                  name="email" 
                  placeholder="your.email@example.com" 
                  required 
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              
              <div className="input-group">
                <label htmlFor="message" className="input-label">Message</label>
                <textarea 
                  className="contact-textarea" 
                  id="message"
                  name="message" 
                  placeholder="Tell me about your project..." 
                  rows="5" 
                  required 
                  value={formData.message}
                  onChange={handleInputChange}
                />
              </div>
              
                             <button 
                 className={`submit-btn ${isSubmitting ? 'loading' : ''} ${submitStatus === 'success' ? 'success' : ''} ${submitStatus === 'error' ? 'error' : ''}`} 
                 type="submit"
                 disabled={isSubmitting}
               >
                 {isSubmitting ? (
                   <>
                     <div className="spinner"></div>
                     <span>Sending...</span>
                   </>
                 ) : submitStatus === 'success' ? (
                   <>
                     <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                       <polyline points="20,6 9,17 4,12"/>
                     </svg>
                     <span>Message sent!</span>
                   </>
                 ) : submitStatus === 'error' ? (
                   <>
                     <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                       <circle cx="12" cy="12" r="10"/>
                       <line x1="15" y1="9" x2="9" y2="15"/>
                       <line x1="9" y1="9" x2="15" y2="15"/>
                     </svg>
                     <span>Failed to send</span>
                   </>
                 ) : (
                   <>
                     <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                       <line x1="22" y1="2" x2="11" y2="13"/>
                       <polygon points="22,2 15,22 11,13 2,9 22,2"/>
                     </svg>
                     <span>Send message</span>
                   </>
                 )}
               </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}