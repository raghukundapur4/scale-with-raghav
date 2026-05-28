import { motion } from 'framer-motion'
import { Layers, Rocket, Sparkles, TrendingUp, Users, Zap } from 'lucide-react'

const reasons = [
  { icon: Layers, title: 'Scalable Solutions', description: 'Systems built to support your next stage of growth.' },
  { icon: Zap, title: 'Automation-First Approach', description: 'Automate repetitive tasks and save valuable time.' },
  { icon: Sparkles, title: 'Modern UI/UX', description: 'Premium interfaces that build trust and improve conversions.' },
  { icon: Rocket, title: 'Fast Delivery', description: 'Lean process that helps you launch quickly with confidence.' },
  { icon: Users, title: 'Personalized Support', description: 'Hands-on support tailored to your unique business needs.' },
  { icon: TrendingUp, title: 'Business Growth Focus', description: 'Everything we build is optimized for measurable growth.' },
]

function WhyUs() {
  return (
    <section id="why-us" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center text-4xl font-bold"
        >
          <span className="text-gradient">Why Choose Us</span>
        </motion.h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <motion.article
                key={reason.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="glass rounded-2xl p-6"
              >
                <Icon size={30} className="mb-4 text-blue-300" />
                <h3 className="text-xl font-semibold">{reason.title}</h3>
                <p className="mt-2 text-slate-300">{reason.description}</p>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default WhyUs
