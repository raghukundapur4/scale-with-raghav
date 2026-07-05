import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, Star } from 'lucide-react'
import Button from './ui/Button'
import Badge from './ui/Badge'
import BrowserMockup from './ui/BrowserMockup'

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-surface pt-28 mesh-bg md:pt-36">
      <div className="absolute inset-0 bg-subtle-grid bg-[length:48px_48px] opacity-40" />

      <div className="site-container relative pb-16 md:pb-24">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Badge>Unified Lead Generation Systems</Badge>
            <h1 className="mt-6 font-display text-4xl font-extrabold tracking-tight text-text-primary sm:text-6xl lg:text-7xl lg:leading-[1.05]">
              We Build Premium Websites. <br className="hidden md:inline" />
              We Build The{' '}
              <span className="text-gradient">Automation Behind Them.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-text-secondary sm:text-xl">
              From high-trust visual design to automated WhatsApp and CRM follow-up systems—we turn your traffic into booked strategy calls on autopilot.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                href="#cta-form"
                size="lg"
                className="w-full gap-2 sm:w-auto shadow-lg shadow-emerald-500/10"
                onClick={() => {
                  if (typeof window !== 'undefined' && window.gtag) {
                    window.gtag('event', 'click_hero_primary', { destination: 'cta_form' })
                  }
                }}
              >
                Request Free Custom Roadmap <ArrowRight size={18} />
              </Button>
              <Button
                href="#work"
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto"
                onClick={() => {
                  if (typeof window !== 'undefined' && window.gtag) {
                    window.gtag('event', 'click_hero_secondary', { destination: 'portfolio' })
                  }
                }}
              >
                Explore Selected Work
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm font-semibold text-text-secondary">
              <span className="flex items-center gap-2">
                <Star className="fill-amber-400 text-amber-400" size={16} /> 50+ systems delivered
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="text-accent" size={16} /> 14-day avg. launch velocity
              </span>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative mx-auto mt-16 max-w-5xl"
        >
          <div className="absolute -inset-8 rounded-[2.5rem] bg-accent/10 blur-3xl" />
          <BrowserMockup url="growth-system.app" className="animate-float">
            <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="border-b border-border p-8 lg:border-b-0 lg:border-r">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Live Dashboard</p>
                <h2 className="mt-3 font-display text-3xl font-extrabold text-text-primary">+218 leads this month</h2>
                <p className="mt-2 text-sm text-text-secondary">Website → CRM → WhatsApp follow-up</p>
                <div className="mt-8 space-y-3">
                  {[
                    { label: 'Landing page visits', value: '4,820', pct: '82%' },
                    { label: 'Leads captured', value: '218', pct: '64%' },
                    { label: 'Auto follow-ups sent', value: '198', pct: '91%' },
                  ].map((row) => (
                    <div key={row.label} className="rounded-xl bg-surface-muted p-4">
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-semibold text-text-secondary">{row.label}</span>
                        <span className="font-bold text-text-primary">{row.value}</span>
                      </div>
                      <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-200">
                        <div className="h-full rounded-full bg-accent" style={{ width: row.pct }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-ink p-8 text-white">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-300">Automation Flow</p>
                <div className="mt-6 space-y-4">
                  {['Visitor lands on site', 'Lead saved to CRM', 'WhatsApp sequence triggered', 'Sales call booked'].map(
                    (step, i) => (
                      <div key={step} className="flex items-center gap-3">
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-400 text-xs font-extrabold text-ink">
                          {i + 1}
                        </span>
                        <span className="text-sm font-medium">{step}</span>
                      </div>
                    ),
                  )}
                </div>
                <div className="mt-8 rounded-xl border border-white/10 bg-white/5 p-4">
                  <p className="text-2xl font-extrabold text-emerald-300">3.2x</p>
                  <p className="text-sm text-slate-300">Faster lead response time</p>
                </div>
              </div>
            </div>
          </BrowserMockup>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
