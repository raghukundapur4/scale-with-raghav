import { motion } from 'framer-motion'
import { CheckCircle2, Linkedin, Twitter, MessageSquare } from 'lucide-react'
import Button from './ui/Button'
import SectionHeader from './ui/SectionHeader'

const strengths = [
  'Conversion-first architecture',
  'Robust CRM & WhatsApp pipelines',
  'Lightning-fast page speeds (SEO-ready)',
  'Direct engineer-to-founder communication',
]

const stack = ['React', 'Shopify', 'WhatsApp API', 'CRM Automations', 'SEO Optimization', 'Vite']

function About() {
  return (
    <section id="about" className="section-padding bg-surface">
      <div className="site-container">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          
          {/* Bio card */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-6 rounded-[2rem] bg-accent/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-border bg-white p-8 shadow-elevated">
              <div className="flex items-center gap-5">
                {/* Sleek vector tech avatar of Raghav */}
                <div className="relative h-20 w-20 shrink-0">
                  <svg viewBox="0 0 100 100" className="h-full w-full rounded-2xl bg-gradient-to-br from-accent to-emerald-600 p-1 shadow-inner text-white" aria-hidden="true">
                    <defs>
                      <linearGradient id="avatarGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#ecfdf5" />
                        <stop offset="100%" stopColor="#a7f3d0" />
                      </linearGradient>
                    </defs>
                    <circle cx="50" cy="45" r="22" fill="url(#avatarGrad)" />
                    <path d="M30 40c0-15 10-22 20-22s20 7 20 22c-5-8-12-10-20-10s-15 2-20 10z" fill="#0f172a" />
                    <rect x="35" y="39" width="13" height="9" rx="2" fill="none" stroke="#0f172a" strokeWidth="2.5" />
                    <rect x="52" y="39" width="13" height="9" rx="2" fill="none" stroke="#0f172a" strokeWidth="2.5" />
                    <line x1="48" y1="43" x2="52" y2="43" stroke="#0f172a" strokeWidth="2.5" />
                    <path d="M43 57c2 3 5 4 7 4s5-1 7-4" fill="none" stroke="#0f172a" strokeWidth="2" strokeLinecap="round" />
                    <path d="M20 84c0-8 8-15 18-17l12 5 12-5c10 2 18 9 18 17H20z" fill="url(#avatarGrad)" opacity="0.9" />
                  </svg>
                  <span className="absolute bottom-0 right-0 h-4.5 w-4.5 rounded-full border-2 border-white bg-emerald-400" title="Online for strategy sessions" />
                </div>
                <div>
                  <p className="font-display text-2xl font-extrabold text-text-primary">Raghav</p>
                  <p className="text-sm font-semibold text-accent">Founder · Systems Architect</p>
                </div>
              </div>

              <p className="mt-6 leading-8 text-text-secondary">
                I am a backend engineer turned growth developer. I noticed businesses waste thousands of dollars on visually pretty websites that fail to capture leads, leak data, and ignore follow-up opportunities. I build unified systems that align your premium frontend with your lead databases and WhatsApp API lines—delivering high-performing machines in weeks, not months.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {stack.map((tech) => (
                  <span key={tech} className="rounded-full border border-border bg-surface-muted px-3 py-1.5 text-xs font-bold text-text-secondary">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Social profiles & contact channels */}
              <div className="mt-8 pt-6 border-t border-border flex items-center gap-4">
                <span className="text-xs font-bold uppercase tracking-wider text-text-muted">Connect:</span>
                <a
                  href="https://linkedin.com/in/scalewithraghav"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-50 text-text-secondary hover:bg-accent-light hover:text-accent transition"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="https://twitter.com/scalewithraghav"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-50 text-text-secondary hover:bg-accent-light hover:text-accent transition"
                  aria-label="Twitter Profile"
                >
                  <Twitter size={18} />
                </a>
                <a
                  href="https://wa.me/918722947700"
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-50 text-text-secondary hover:bg-accent-light hover:text-accent transition"
                  aria-label="Chat directly"
                >
                  <MessageSquare size={18} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Copy and details */}
          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <SectionHeader
              eyebrow="Founder & Tech Partner"
              title="A developer who understands conversion and systems."
              subtitle="I combine custom react development with backend APIs so that your tech stack behaves as a single cohesive unit. You get agency-level output without the agency markup, miscommunications, or missed deadlines."
              align="left"
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {strengths.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-xl border border-border bg-surface-muted p-4">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-accent" size={20} />
                  <span className="text-sm font-semibold leading-6 text-text-secondary">{item}</span>
                </div>
              ))}
            </div>
            <Button
              href="#cta-form"
              className="mt-10 gap-2"
              size="lg"
              onClick={() => {
                if (typeof window !== 'undefined' && window.gtag) {
                  window.gtag('event', 'click_about_cta', { destination: 'cta_form' })
                }
              }}
            >
              Book a Free Audit Call
            </Button>
          </motion.div>
          
        </div>
      </div>
    </section>
  )
}

export default About
