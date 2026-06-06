import { motion } from 'framer-motion'

/**
 * SectionReveal — wraps any section's content with a smooth
 * fade-up animation that triggers when it enters the viewport.
 *
 * Usage:
 *   <SectionReveal>
 *     <div>...</div>
 *   </SectionReveal>
 *
 * Props:
 *   - delay: optional animation delay in seconds (default 0)
 *   - className: optional extra classes on the wrapper div
 */
export function SectionReveal({ children, delay = 0, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/**
 * StaggerReveal — wraps a list of children with staggered
 * fade-up animations as they enter the viewport.
 *
 * Usage:
 *   <StaggerReveal>
 *     <div>item 1</div>
 *     <div>item 2</div>
 *   </StaggerReveal>
 */
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
}

export function StaggerReveal({ children, className = '' }) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-60px' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export { item as staggerItem }
