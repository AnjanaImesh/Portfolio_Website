import { useState, useEffect, useCallback } from 'react'

export function useRouter() {
  const parsePath = () => {
    if (typeof window === 'undefined') return { page: 'home', slug: null }
    const path = window.location.pathname.replace(/^\/|\/$/g, '')
    if (!path || path === '') return { page: 'home', slug: null }
    
    const parts = path.split('/')
    if (parts[0] === 'work') {
      return { page: 'work', slug: parts[1] || null }
    }
    if (parts[0] === 'photography') {
      if (parts[1] === 'moonory') {
        return { page: 'moonory', slug: null }
      }
      return { page: 'photography', slug: null }
    }
    if (parts[0] === 'about') {
      return { page: 'about', slug: null }
    }
    if (parts[0] === 'contact') {
      return { page: 'contact', slug: null }
    }
    return { page: 'home', slug: null }
  }

  const [route, setRoute] = useState(parsePath)

  useEffect(() => {
    const handlePopState = () => {
      setRoute(parsePath())
    }
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const navigate = useCallback((path, options = {}) => {
    const targetPath = path.startsWith('/') ? path : `/${path}`
    if (window.location.pathname !== targetPath) {
      window.history.pushState({}, '', targetPath)
      setRoute(parsePath())
      if (!options.preventScroll) {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    }
  }, [])

  return {
    page: route.page,
    slug: route.slug,
    navigate,
    isHome: route.page === 'home',
    isWork: route.page === 'work',
    isPhotography: route.page === 'photography',
    isMoonory: route.page === 'moonory',
    isAbout: route.page === 'about',
    isContact: route.page === 'contact',
  }
}
