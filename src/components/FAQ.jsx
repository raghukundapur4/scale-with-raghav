import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Plus, X } from 'lucide-react'
import SectionHeader from './ui/SectionHeader'

const faqs = [
  {
    q: 'How long does a website take to build?',
    a: 'Most landing pages and business websites are completed within 7-14 days depending on the number of pages, content readiness, and automation requirements.',
  },
  {
    q: 'Can you build both the website and the automation?',
    a: 'Yes. The site can be built together with WhatsApp follow-up, CRM routing, forms, reminders, and lead capture workflows so the full system works from day one.',
  },
  {
    q: 'Do you provide WhatsApp API integration?',
    a: 'Yes. We can set up WhatsApp Business API flows for automated replies, lead follow-up sequences, broadcast campaigns, and CRM handoff.',
  },
  {
    q: 'Can you help us generate leads?',
    a: 'Yes. We build landing pages, lead capture forms, Meta Ads-ready funnels, and automated follow-up sequences that help turn traffic into qualified conversations.',
  },
  {
    q: 'Do you provide ongoing support?',
    a: 'Yes. Monthly support packages are available for website updates, performance checks, automation changes, and technical maintenance.',
  },
]

function FAQ() {
  const [active, setActive] = useState(null)

  return (
    <section id="faq" className="section-padding bg-surface">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="FAQ"
          title="Common questions before we build."
          subtitle="A quick overview of timelines, automation support, and what happens after launch."
        />

        <div className="mt-12 divide-y divide-border rounded-2xl border border-border bg-white shadow-sm">
          {faqs.map((item, index) => {
            const open = active === index
            return (
              <div key={item.q} className="px-5 py-5 sm:px-7">
                <button
                  className="flex w-full items-center justify-between gap-4 text-left"
                  onClick={() => setActive(open ? null : index)}
                  aria-expanded={open}
                >
                  <span className="font-display text-lg font-bold text-text-primary">{item.q}</span>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent-light text-accent">
                    {open ? <X size={18} /> : <Plus size={18} />}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-3xl pt-4 leading-7 text-text-secondary">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FAQ
