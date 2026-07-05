import { motion } from 'framer-motion'
import { Clock, Layers, Shield, Sparkles } from 'lucide-react'
import SectionHeader from './ui/SectionHeader'

const reasons = [
  {
    icon: Sparkles,
    title: 'Premium-first design',
    description: 'Every layout is built to feel trustworthy, modern, and conversion-focused — not like a generic template.',
  },
  {
    icon: Layers,
    title: 'Design + automation together',
    description: 'Your website and follow-up systems are planned as one growth engine, not two separate projects.',
  },
  {
    icon: Clock,
    title: 'Fast, reliable delivery',
    description: 'Clear timelines, structured process, and launch-ready builds that do not drag on for months.',
  },
  {
    icon: Shield,
    title: 'Built to perform',
    description: 'Speed, SEO fundamentals, responsive layouts, and clean technical execution from day one.',
  },
]

function WhyChoose() {
  return (
    <section className="section-padding bg-ink text-white">
      <div className="site-container">
        <SectionHeader
          eyebrow="Why Choose Us"
          title="More than a website. A complete growth system."
          subtitle="We combine premium design with practical automation so your business looks sharp and operates smarter."
          className="[&_h2]:text-white [&_p]:text-slate-300 [&_span]:bg-white/10 [&_span]:text-emerald-300"
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur transition hover:border-emerald-400/30 hover:bg-white/10"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-400/15 text-emerald-300">
                  <Icon size={22} />
                </div>
                <h3 className="font-display text-lg font-extrabold">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{item.description}</p>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default WhyChoose
