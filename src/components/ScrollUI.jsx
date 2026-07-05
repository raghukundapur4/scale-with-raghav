import { useEffect, useState } from 'react'
import { motion, useSpring, AnimatePresence } from 'framer-motion'
import { ArrowUp } from 'lucide-react'

/**
 * ScrollProgressBar — A thin bar at the top of the viewport
 * that fills as the user scrolls down the page.
 */
export function ScrollProgressBar({ scrollProgress }) {
  const scaleX = useSpring(scrollProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })

  return (
    <motion.div
      className="fixed left-0 right-0 top-0 z-[9999] h-[3px] origin-left bg-gradient-to-r from-accent via-emerald-500 to-teal-500"
      style={{ scaleX }}
    />
  )
}

/**
 * ScrollToTop — A floating button that appears when the user scrolls
 * past 20% of the page and smoothly scrolls back to the top on click.
 */
export function ScrollToTop({ scrollProgress }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const unsub = scrollProgress.on('change', (v) => setVisible(v > 0.2))
    return unsub
  }, [scrollProgress])

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <motion.button
      onClick={handleClick}
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={visible ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 20 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="fixed bottom-28 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white text-accent shadow-lg transition-colors hover:bg-accent-light"
      aria-label="Scroll to top"
    >
      <ArrowUp size={18} strokeWidth={2.5} />
    </motion.button>
  )
}

/**
 * MobileStickyCTA — A sticky banner at the bottom of mobile screens
 * that slides in when scrolling past 15% and slides out near the bottom.
 */
export function MobileStickyCTA({ scrollProgress }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const unsub = scrollProgress.on('change', (v) => {
      // Visible between 15% and 90% of the page
      setVisible(v > 0.15 && v < 0.90)
    })
    return unsub
  }, [scrollProgress])

  const handleClick = (e) => {
    e.preventDefault()
    const target = document.querySelector('#cta-form')
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'click_mobile_sticky_cta')
      }
    }
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="fixed bottom-0 left-0 right-0 z-40 border-t border-border bg-white/95 p-3 pb-4 shadow-xl backdrop-blur md:hidden flex items-center justify-between gap-3"
        >
          <div className="flex flex-col text-left">
            <span className="text-[10px] font-bold uppercase tracking-wider text-accent">Free Audit Session</span>
            <span className="text-xs font-extrabold text-text-primary mt-0.5">Claim Custom Roadmap</span>
          </div>
          <a
            href="#cta-form"
            onClick={handleClick}
            className="rounded-xl bg-accent px-4 py-2.5 text-xs font-bold text-white shadow-sm hover:bg-accent-dark transition-all flex items-center gap-1"
          >
            Book Free Call &rsaquo;
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
