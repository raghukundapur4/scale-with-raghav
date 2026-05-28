import { motion } from 'framer-motion'
import { Check, MessageCircle, Monitor, TrendingUp } from 'lucide-react'

const services = [
  {
    icon: Monitor,
    title: 'Website Development',
    description: 'Premium responsive websites designed to convert visitors into paying clients.',
    features: ['Responsive Design', 'SEO Optimized', 'Fast Performance', 'Landing Pages', 'Business Websites'],
    iconClass: 'text-blue-400',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp Automation',
    description: 'Automate engagement and lead nurturing with robust WhatsApp systems.',
    features: ['Automated Replies', 'Lead Follow-up', 'WhatsApp Funnels', 'CRM Integration', 'Broadcast Automation'],
    iconClass: 'text-emerald-400',
  },
  {
    icon: TrendingUp,
    title: 'Lead Generation',
    description: 'Build repeatable lead acquisition funnels that scale your pipeline consistently.',
    features: ['Meta Ads Funnels', 'Landing Page Optimization', 'Lead Capture Systems', 'CRM Setup', 'Conversion Tracking'],
    iconClass: 'text-purple-400',
  },
]

function Services() {
  return (
    <section id="services" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center text-4xl font-bold"
        >
          <span className="text-gradient">Our Services</span>
        </motion.h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.12 }}
                viewport={{ once: true }}
                className="glass rounded-2xl p-6 transition duration-300 hover:scale-[1.02] hover:border-blue-400/40"
              >
                <Icon className={`${service.iconClass} mb-4`} size={32} />
                <h3 className="text-2xl font-semibold">{service.title}</h3>
                <p className="mt-3 text-slate-300">{service.description}</p>
                <ul className="mt-5 space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-slate-200">
                      <Check size={16} className="text-blue-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a href="https://wa.me/919999999999" className="mt-6 inline-block font-semibold text-blue-300 hover:text-blue-200">
                  Get Started →
                </a>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services
