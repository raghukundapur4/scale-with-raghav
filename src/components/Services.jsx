import { motion } from 'framer-motion'
import { Bot, Monitor, PenTool, Search, Target } from 'lucide-react'
import SectionHeader from './ui/SectionHeader'

const services = [
  {
    icon: Monitor,
    title: 'Custom Websites & Shopify',
    description: 'Premium React/Vite websites and high-performance Shopify stores that load in under 1 second and command premium trust.',
    featured: true,
    tags: ['Next.js / Vite', 'Shopify Dev', 'High-Trust Design'],
  },
  {
    icon: Bot,
    title: 'WhatsApp & CRM Automation',
    description: 'Connect lead capture forms directly to WhatsApp Business API. Auto-route data, trigger SMS follow-ups, and sync CRM records instantly.',
    tags: ['WhatsApp API', 'HubSpot / Airtable', 'Auto-Replies'],
  },
  {
    icon: Target,
    title: 'Lead Generation Funnels',
    description: 'Custom landing pages, intake assessment forms, and booking paths tailored specifically to coaches, SaaS, and agency founders.',
    tags: ['Ad Landing Pages', 'Lead Magnets', 'Vetted Funnels'],
  },
  {
    icon: PenTool,
    title: 'Conversion UI/UX Design',
    description: 'High-fidelity wireframes, interactive user flows, and modern design systems engineered to optimize conversion rates.',
    tags: ['Figma Mockups', 'Interaction Flow', 'Copywriting'],
  },
  {
    icon: Search,
    title: 'SEO & Core Web Vitals',
    description: 'Perfect performance audits, fast server responses, semantic coding structure, and optimization for Google and AI engines.',
    tags: ['Core Web Vitals', 'On-Page SEO', 'AEO Readiness'],
  },
]

function Services() {
  const featured = services.find((s) => s.featured)
  const others = services.filter((s) => !s.featured)

  return (
    <section id="services" className="section-padding bg-surface">
      <div className="site-container">
        <SectionHeader
          eyebrow="Services"
          title="Everything your growth system needs."
          subtitle="From premium frontend design to reliable backend automation — one partner, one cohesive build."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {featured && (
            <motion.article
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-3xl border border-accent/20 bg-gradient-to-br from-accent-light via-white to-white p-8 shadow-glow lg:col-span-2 lg:row-span-2"
            >
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent/10 blur-2xl" />
              <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent text-white shadow-sm">
                  <Monitor size={28} />
                </div>
                <h3 className="mt-6 font-display text-2xl font-extrabold text-text-primary sm:text-3xl">
                  {featured.title}
                </h3>
                <p className="mt-4 max-w-lg text-lg leading-8 text-text-secondary">{featured.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {featured.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-accent/20 bg-white px-3 py-1 text-xs font-bold text-accent">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          )}

          {others.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.06 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-border bg-white p-7 shadow-soft transition hover:-translate-y-1 hover:shadow-card"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-light text-accent">
                  <Icon size={22} />
                </div>
                <h3 className="mt-5 font-display text-lg font-extrabold text-text-primary">{service.title}</h3>
                <p className="mt-2 text-sm leading-7 text-text-secondary">{service.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-surface-muted px-2.5 py-1 text-[11px] font-semibold text-text-muted">
                      {tag}
                    </span>
                  ))}
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
