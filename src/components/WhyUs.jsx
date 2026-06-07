import { motion } from 'framer-motion'
import { Briefcase, CheckCircle, MonitorSmartphone, ShoppingCart, Settings, Headset } from 'lucide-react'

const reasons = [
  { icon: Briefcase, title: 'Expertise & Strategy', description: 'We combine industry expertise with data-driven strategy to ensure your website converts.' },
  { icon: CheckCircle, title: 'Quality & Delivery', description: 'Uncompromising quality delivered on time, every time, without cutting corners.' },
  { icon: MonitorSmartphone, title: 'Responsive Design', description: 'Flawless experiences across all devices, from desktop monitors to mobile phones.' },
  { icon: ShoppingCart, title: 'E-commerce Solutions', description: 'Robust Shopify and custom e-commerce stores designed to maximize your sales.' },
  { icon: Settings, title: 'Tailor-Made Solutions', description: 'Custom functionality and designs built specifically for your unique business needs.' },
  { icon: Headset, title: 'Constant Support', description: 'Reliable ongoing maintenance and support to keep your business running smoothly.' },
]

function WhyUs() {
  return (
    <section id="why-us" className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 h-96 w-96 rounded-full bg-primary/10 blur-[120px] pointer-events-none" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-primary text-sm font-bold uppercase tracking-wider">Perks</span>
          <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Why Work <span className="text-gradient">With Us?</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            Because we build websites that generate sales, not just look pretty.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <motion.article
                key={reason.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card rounded-2xl p-6 group transition-all duration-300 hover:scale-[1.02] border-t border-primary/20 hover:border-primary/50"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-darker transition-colors">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white">{reason.title}</h3>
                </div>
                <p className="text-slate-400 leading-relaxed">{reason.description}</p>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default WhyUs
