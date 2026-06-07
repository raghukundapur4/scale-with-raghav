import { motion } from 'framer-motion'
import { Monitor, PenTool, Search, Share2 } from 'lucide-react'

const services = [
  {
    icon: Monitor,
    title: 'Custom Websites',
    description: 'We build premium, high-converting websites and Shopify stores tailored to your brand.',
    className: 'md:col-span-2 md:row-span-1 bg-gradient-to-br from-grayCustom to-dark border-primary/20',
  },
  {
    icon: PenTool,
    title: 'UI/UX Design',
    description: 'Stunning interfaces that captivate users and ensure seamless experiences.',
    className: 'md:col-span-1 md:row-span-1 bg-darker border-white/5',
  },
  {
    icon: Search,
    title: 'SEO & Performance',
    description: 'Dominate search rankings and ensure lightning-fast page load speeds.',
    className: 'md:col-span-1 md:row-span-1 bg-darker border-white/5',
  },
  {
    icon: Share2,
    title: 'Social Media Management',
    description: 'Engaging content and strategies to grow your brand presence online.',
    className: 'md:col-span-2 md:row-span-1 bg-gradient-to-tr from-dark to-grayCustom border-primary/10',
  },
]

function Services() {
  return (
    <section id="services" className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/3 h-96 w-96 rounded-full bg-primary/10 blur-[100px] pointer-events-none" />
      
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-primary text-sm font-bold uppercase tracking-wider">Services</span>
          <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            What We Do <span className="text-gradient">Best</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            We offer full suite digital services designed to enhance your brand presence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 lg:gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`glass-card rounded-3xl p-8 flex flex-col justify-between group transition-all duration-300 hover:glow-border border ${service.className}`}
              >
                <div>
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-darker transition-all duration-300">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{service.description}</p>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services
