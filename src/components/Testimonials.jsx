import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const testimonials = [
  {
    text: 'Raghav built our entire lead gen funnel in 2 weeks. The design looks premium and perfectly tailored to our brand. We went from 0 to 200+ leads in the first month!',
    name: 'Arjun Mehta',
    role: 'Business Coach',
    initials: 'AM',
  },
  {
    text: 'Best investment for our startup. The website looks absolutely stunning and the custom features have automated so much of our daily work.',
    name: 'Vikram Nair',
    role: 'SaaS Founder',
    initials: 'VN',
  },
  {
    text: 'The UI/UX design is top-notch. Our users love the new interface, and our conversion rate went up by 300% since the redesign.',
    name: 'Priya Sharma',
    role: 'E-commerce Owner',
    initials: 'PS',
  },
]

function Testimonials() {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-darker">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-primary text-sm font-bold uppercase tracking-wider">Clients</span>
          <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Trusted by Growing <span className="text-gradient">Brands</span>
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.article
              key={item.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 relative hover:glow-border transition-colors duration-300"
            >
              <div className="flex gap-1 text-primary mb-6">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" />
                ))}
              </div>
              <p className="text-slate-300 leading-relaxed text-lg mb-8">"{item.text}"</p>
              
              <div className="flex items-center gap-4 mt-auto">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 text-primary font-bold">
                  {item.initials}
                </div>
                <div>
                  <p className="font-bold text-white">{item.name}</p>
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
