import { useEffect } from 'react'
import { useMotionValue } from 'framer-motion'

/**
 * Tracks scroll progress (0–1) using native browser scroll events.
 * No third-party scroll hijacking — works exactly like a normal site.
 */
export function useSmoothScroll() {
  const scrollProgress = useMotionValue(0)

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = docHeight > 0 ? scrollTop / docHeight : 0
      scrollProgress.set(progress)
    }

    // Update on load and on scroll
    updateProgress()
    window.addEventListener('scroll', updateProgress, { passive: true })

    return () => {
      window.removeEventListener('scroll', updateProgress)
    }
  }, [scrollProgress])

  return scrollProgress
}
