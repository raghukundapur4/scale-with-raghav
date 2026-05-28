import { motion } from 'framer-motion'
import { Quote, Star } from 'lucide-react'

const testimonials = [
  {
    text: 'Raghav built our entire lead gen funnel in 2 weeks. We went from 0 to 200+ leads in the first month!',
    name: 'Arjun Mehta',
    role: 'Business Coach',
    initials: 'AM',
  },
  {
    text: 'The WhatsApp automation saved us 10+ hours weekly. Our response rate went up by 300%!',
    name: 'Priya Sharma',
    role: 'Online Educator',
    initials: 'PS',
  },
  {
    text: 'Best investment for our startup. The website looks premium and converts visitors into clients.',
    name: 'Vikram Nair',
    role: 'SaaS Founder',
    initials: 'VN',
  },
]

function Testimonials() {
  return (
    <section id="testimonials" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center text-4xl font-bold"
        >
          <span className="text-gradient">What Our Clients Say</span>
        </motion.h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.article
              key={item.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass rounded-2xl p-6"
            >
              <Quote size={40} className="mb-4 text-blue-300" />
              <p className="text-slate-200">{item.text}</p>
              <div className="mt-4 flex gap-1 text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <div className="mt-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-500 font-semibold">
                  {item.initials}
                </div>
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-slate-400">{item.role}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
