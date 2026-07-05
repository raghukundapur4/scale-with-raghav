import { motion } from 'framer-motion'
import { XCircle, CheckCircle2, AlertCircle, Clock, Zap, ArrowRight } from 'lucide-react'
import Button from './ui/Button'
import SectionHeader from './ui/SectionHeader'

export default function ProblemHook() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  }

  return (
    <section id="problem-hook" className="section-padding bg-white border-y border-border">
      <div className="site-container">
        <SectionHeader
          eyebrow="The Leaky Funnel Problem"
          title="A beautiful website is useless if it leaks leads."
          subtitle="Most businesses spend weeks and thousands of dollars designing pretty websites, only to lose 80% of their hot traffic due to slow follow-ups. Here is why the traditional approach is broken:"
        />

        {/* Diagnostic Stats Bar */}
        <div className="mt-12 grid gap-6 sm:grid-cols-3 max-w-4xl mx-auto">
          {[
            {
              icon: AlertCircle,
              title: '80% Traffic Lost',
              description: 'Drop off on static pages without clear lead magnets or direct WhatsApp actions.'
            },
            {
              icon: Clock,
              title: '4+ Hour Wait Time',
              description: 'The average business takes hours to reply. By then, the client has contacted a competitor.'
            },
            {
              icon: Zap,
              title: 'The 5-Min Rule',
              description: 'Responding within 5 minutes increases lead qualification rates by over 391%.'
            }
          ].map((stat, i) => (
            <div key={i} className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-slate-50/50 p-4">
              <stat.icon className="mt-1 shrink-0 text-accent" size={20} />
              <div>
                <h4 className="font-display text-sm font-extrabold text-text-primary">{stat.title}</h4>
                <p className="mt-1 text-xs text-text-secondary leading-relaxed">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Side-by-side Comparison */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="mt-16 grid gap-8 lg:grid-cols-2 max-w-5xl mx-auto"
        >
          {/* Broken Traditional Card */}
          <motion.div
            variants={cardVariants}
            className="relative rounded-3xl border border-red-100 bg-red-50/10 p-8 sm:p-10 flex flex-col justify-between overflow-hidden"
          >
            <div className="absolute right-0 top-0 -mr-6 -mt-6 h-24 w-24 rounded-full bg-red-500/5 blur-xl" />
            
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-red-50 px-3 py-1 text-xs font-bold text-red-600 uppercase tracking-wider">
                <XCircle size={14} /> The Traditional Approach
              </div>
              <h3 className="mt-6 font-display text-2xl font-extrabold text-text-primary">The Leaky Bucket</h3>
              <p className="mt-3 text-sm text-text-secondary leading-relaxed">
                Paying for ads or SEO to send traffic to a generic, static page with hidden forms and manual follow-up processes.
              </p>

              <ul className="mt-8 space-y-4">
                {[
                  'Static form triggers standard system emails that end up in spam.',
                  'No immediate confirmation or SMS/WhatsApp alert sent to the lead.',
                  'Founder/staff has to manually check dashboards to see new enquiries.',
                  'Leads wait hours or days, completely cooling off and losing interest.',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm text-text-secondary">
                    <XCircle className="mt-0.5 shrink-0 text-red-500" size={16} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-red-100 flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-red-600">Typical Result:</span>
              <span className="font-display font-extrabold text-red-700 text-lg">&lt; 2% Conversion Rate</span>
            </div>
          </motion.div>

          {/* Scale Engine Card */}
          <motion.div
            variants={cardVariants}
            className="relative rounded-3xl border border-emerald-200 bg-emerald-50/10 p-8 sm:p-10 flex flex-col justify-between overflow-hidden shadow-glow"
          >
            <div className="absolute right-0 top-0 -mr-6 -mt-6 h-24 w-24 rounded-full bg-emerald-500/10 blur-xl" />

            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-600 uppercase tracking-wider">
                <CheckCircle2 size={14} /> The Scale Engine System
              </div>
              <h3 className="mt-6 font-display text-2xl font-extrabold text-text-primary">The Connected Engine</h3>
              <p className="mt-3 text-sm text-text-secondary leading-relaxed">
                A premium, fast-loading frontend paired with active automation that captures, logs, and replies to leads instantly.
              </p>

              <ul className="mt-8 space-y-4">
                {[
                  'Conversion-focused forms with instant calendar booking options.',
                  'Immediate WhatsApp auto-reply sequence sent to lead automatically.',
                  'Lead automatically synced to your CRM with real-time push alerts.',
                  'System schedules follow-up calls and reminders without manual effort.',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm text-text-secondary">
                    <CheckCircle2 className="mt-0.5 shrink-0 text-emerald-500" size={16} />
                    <span className="font-medium text-text-primary">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-emerald-100 flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">Typical Result:</span>
              <span className="font-display font-extrabold text-emerald-700 text-lg">3.2x Faster Response & +40% Booked Calls</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom CTA to hook section */}
        <div className="mt-16 text-center">
          <Button href="#cta-form" className="gap-2" size="md">
            Fix Your Leaky Funnel Now <ArrowRight size={16} />
          </Button>
        </div>
      </div>
    </section>
  )
}
