import { motion } from 'framer-motion'
import AnimatedCounter from './ui/AnimatedCounter'

const stats = [
  { value: '50+', label: 'Projects Delivered' },
  { value: '97%', label: 'Client Satisfaction' },
  { value: '80%', label: 'Repeat Clients' },
  { value: '14', label: 'Day Avg. Launch', suffix: ' days' },
]

export default function Stats() {
  return (
    <section className="border-y border-border bg-white py-14 md:py-16">
      <div className="site-container">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              className="text-center"
            >
              <div className="font-display text-4xl font-extrabold text-text-primary sm:text-5xl">
                <AnimatedCounter value={stat.value} suffix={stat.suffix || ''} />
              </div>
              <div className="mt-2 text-xs font-bold uppercase tracking-[0.18em] text-accent sm:text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
