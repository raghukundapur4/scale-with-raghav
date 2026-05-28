import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Plus, X } from 'lucide-react'

const faqs = [
  {
    q: 'How long does a website take to build?',
    a: 'Most websites are completed within 7–14 days depending on complexity. Simple landing pages take 3–5 days, while full business websites take 10–14 days.',
  },
  {
    q: 'Do you provide WhatsApp API integration?',
    a: 'Yes! We provide complete WhatsApp Business API integration including automated replies, broadcast messages, lead follow-up sequences, and CRM integration.',
  },
  {
    q: 'Can you help us generate leads?',
    a: 'Absolutely! We set up complete lead generation systems including Meta Ads funnels, optimized landing pages, lead capture forms, and automated follow-up sequences.',
  },
  {
    q: 'Do you provide ongoing support?',
    a: 'Yes, we provide ongoing support and maintenance for all our clients. We offer monthly support packages to keep your systems running smoothly and up to date.',
  },
]

function FAQ() {
  const [active, setActive] = useState(null)

  return (
    <section id="faq" className="py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center text-4xl font-bold"
        >
          <span className="text-gradient">Frequently Asked Questions</span>
        </motion.h2>

        <div className="space-y-4">
          {faqs.map((item, index) => {
            const open = active === index
            return (
              <div key={item.q} className="glass rounded-xl p-5">
                <button
                  className="flex w-full items-center justify-between gap-4 text-left"
                  onClick={() => setActive(open ? null : index)}
                >
                  <span className="font-semibold">{item.q}</span>
                  {open ? <X size={20} className="text-blue-300" /> : <Plus size={20} className="text-blue-300" />}
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
                      <p className="pt-4 text-slate-300">{item.a}</p>
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
