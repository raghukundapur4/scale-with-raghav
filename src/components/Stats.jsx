import { motion } from 'framer-motion'

const stats = [
  { value: '50+', label: 'Happy Clients' },
  { value: '97%', label: 'Job Success Rate' },
  { value: '80%', label: 'Client Retention Rate' },
]

export default function Stats() {
  return (
    <section className="border-t border-white/5 bg-darker py-12 md:py-20 relative overflow-hidden">
      <div className="pointer-events-none absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 h-[300px] w-[600px] rounded-[100%] bg-primary/10 blur-[80px]" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:gap-12 md:grid-cols-3">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex flex-col items-center justify-center text-center space-y-2"
            >
              <div className="text-4xl sm:text-5xl md:text-6xl font-black text-white">{stat.value}</div>
              <div className="text-sm tracking-[0.2em] text-primary uppercase font-bold">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
