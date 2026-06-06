import { useEffect, useState } from 'react'
import { motion, useSpring, useTransform } from 'framer-motion'
import { ArrowUp } from 'lucide-react'

/**
 * ScrollProgress — A thin glowing bar at the top of the viewport
 * that fills as the user scrolls down the page.
 */
export function ScrollProgressBar({ scrollProgress }) {
  const scaleX = useSpring(scrollProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] z-[9999] origin-left bg-gradient-to-r from-emerald-400 via-green-500 to-teal-400"
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
      className="fixed bottom-28 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-primary glow-primary text-darker shadow-xl hover:bg-emerald-400 transition-colors"
      aria-label="Scroll to top"
    >
      <ArrowUp size={18} strokeWidth={2.5} />
    </motion.button>
  )
}
