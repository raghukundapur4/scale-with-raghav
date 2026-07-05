import { motion } from 'framer-motion'
import SectionHeader from './ui/SectionHeader'
import { Search, PenTool, Cpu, Play } from 'lucide-react'

const steps = [
  {
    icon: Search,
    title: '1. Discovery & Audit',
    description: 'We analyze your website, map lead drop-off points, and plan your custom CRM/WhatsApp architecture before design starts.',
  },
  {
    icon: PenTool,
    title: '2. UX Copy & Prototypes',
    description: 'We write high-converting copy and design premium, custom wireframes—no stock templates or boilerplate themes.',
  },
  {
    icon: Cpu,
    title: '3. Technical Integration',
    description: 'We code your website in React/Vite and connect your calendar booking engines, WhatsApp APIs, and lead spreadsheets.',
  },
  {
    icon: Play,
    title: '4. Launch & Optimization',
    description: 'We execute speed enhancements, set up Google Analytics event tracking tags, perform QA, and deploy.',
  },
]

function Process() {
  return (
    <section id="process" className="section-padding bg-surface-muted border-y border-border">
      <div className="site-container">
        <SectionHeader
          eyebrow="The Method"
          title="From strategy call to launch in 14 days."
          subtitle="A velocity-driven engineering process that guarantees your design, code, and systems are aligned perfectly."
        />

        <div className="relative mt-20 max-w-5xl mx-auto">
          {/* Connector line for mobile (vertical) */}
          <div className="absolute left-[27px] top-6 bottom-6 w-0.5 border-l-2 border-dashed border-slate-200 lg:hidden" />
          
          {/* Connector line for desktop (horizontal) */}
          <div className="absolute top-[28px] left-[5%] right-[5%] h-0.5 border-t-2 border-dashed border-slate-200 hidden lg:block z-0" />

          <div className="grid gap-10 lg:grid-cols-4 lg:gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.article
                  key={step.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                  viewport={{ once: true }}
                  className="relative flex gap-6 lg:flex-col lg:gap-0 z-10 group"
                >
                  {/* Step bubble icon */}
                  <div className="shrink-0 mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent text-white shadow-glow transition group-hover:scale-105 duration-300">
                    <Icon size={22} strokeWidth={2.2} />
                  </div>

                  {/* Content details */}
                  <div className="flex flex-col pt-1.5 lg:pt-0">
                    <h3 className="font-display text-lg font-extrabold text-text-primary group-hover:text-accent transition-colors">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                      {step.description}
                    </p>
                  </div>
                </motion.article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Process
