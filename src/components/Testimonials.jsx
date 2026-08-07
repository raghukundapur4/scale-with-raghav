import { motion } from 'framer-motion'
import { Quote, Star } from 'lucide-react'
import SectionHeader from './ui/SectionHeader'

const featured = {
  text: 'Raghav built our entire lead gen funnel in two weeks. The design looks premium and the WhatsApp follow-up helped us respond to every new lead quickly. We went from scattered inquiries to a predictable pipeline.',
  name: 'Arjun Mehta',
  role: 'Founder · Peak Performance Academy',
  metric: '+242 Leads in 30 Days',
  id: 'arjun'
}

const others = [
  {
    text: 'The site feels much more trustworthy now, and the custom CRM automations removed all manual follow-up. Our average lead response time dropped from 3 hours to under 2 minutes.',
    name: 'Vikram Nair',
    role: 'CEO · LeadFlow AI (SaaS)',
    metric: '1.8 Min Response Velocity',
    id: 'vikram'
  },
  {
    text: 'Our customers immediately noticed the cleaner interface and faster product loading times. The redesign improved our Shopify checkouts by 40% in the first week.',
    name: 'Priya Sharma',
    role: 'Founder · Glow Cosmetics',
    metric: '+40% Checkout Conversion',
    id: 'priya'
  },
]

// Custom geometric SVG face avatar renderer to replace simple initials
function ClientAvatar({ clientId, className = 'h-14 w-14' }) {
  if (clientId === 'arjun') {
    return (
      <svg viewBox="0 0 100 100" className={`${className} rounded-full bg-gradient-to-br from-amber-400 to-orange-500 p-0.5 text-white`} aria-hidden="true">
        <circle cx="50" cy="45" r="22" fill="#FFEFE6" />
        <path d="M32 38c0-10 8-18 18-18s18 8 18 18c-3-6-9-8-18-8s-15 2-18 8z" fill="#334155" />
        <circle cx="42" cy="44" r="2.5" fill="#334155" />
        <circle cx="58" cy="44" r="2.5" fill="#334155" />
        <path d="M45 56c2 2 4 2.5 5 2.5s3-.5 5-2.5" fill="none" stroke="#334155" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M22 84c0-7 8-13 18-15l10 4 10-4c10 2 18 8 18 15H22z" fill="#FFEFE6" opacity="0.9" />
      </svg>
    )
  }

  if (clientId === 'vikram') {
    return (
      <svg viewBox="0 0 100 100" className={`${className} rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 p-0.5 text-white`} aria-hidden="true">
        <circle cx="50" cy="45" r="22" fill="#EEF2FF" />
        <path d="M28 35c2-12 10-15 22-15s20 3 22 15c-4-5-10-7-22-7s-18 2-22 7z" fill="#1E293B" />
        <rect x="36" y="39" width="10" height="7" rx="1.5" fill="none" stroke="#1E293B" strokeWidth="2" />
        <rect x="54" y="39" width="10" height="7" rx="1.5" fill="none" stroke="#1E293B" strokeWidth="2" />
        <line x1="46" y1="42" x2="54" y2="42" stroke="#1E293B" strokeWidth="2" />
        <path d="M44 55c2 2 4 2.5 6 2.5s4-.5 6-2.5" fill="none" stroke="#1E293B" strokeWidth="2" strokeLinecap="round" />
        <path d="M22 84c0-7 8-13 18-15l10 4 10-4c10 2 18 8 18 15H22z" fill="#EEF2FF" opacity="0.9" />
      </svg>
    )
  }

  if (clientId === 'priya') {
    return (
      <svg viewBox="0 0 100 100" className={`${className} rounded-full bg-gradient-to-br from-fuchsia-400 to-purple-500 p-0.5 text-white`} aria-hidden="true">
        <circle cx="50" cy="45" r="22" fill="#FDF4FF" />
        {/* Hair shape */}
        <path d="M28 42c-2-12 6-20 22-20s24 8 22 20c-1 12-4 15-4 15s-2-8-6-8-6 4-12 4-6-6-6-6-3 3-4 10z" fill="#4A044E" />
        <circle cx="43" cy="43" r="2.5" fill="#4A044E" />
        <circle cx="57" cy="43" r="2.5" fill="#4A044E" />
        <path d="M45 56c2 2.5 4 3 5 3s3-.5 5-3" fill="none" stroke="#4A044E" strokeWidth="2" strokeLinecap="round" />
        <path d="M22 84c0-7 8-13 18-15l10 4 10-4c10 2 18 8 18 15H22z" fill="#FDF4FF" opacity="0.9" />
      </svg>
    )
  }

  return null
}

function Testimonials() {
  return (
    <section id="testimonials" aria-label="Client Testimonials" className="section-padding bg-surface-muted">
      <div className="site-container">
        <SectionHeader
          eyebrow="Reviews"
          title="Trusted by founders, coaches, and brands."
          subtitle="The result is always the same: a premium online presence and a direct pipeline from visitor to customer."
        />

        {/* Featured Testimonial Card */}
        <motion.article
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mt-16 overflow-hidden rounded-3xl border border-border bg-white p-8 sm:p-12 lg:p-14 shadow-card"
        >
          <div className="absolute right-0 top-0 -mr-6 -mt-6 h-36 w-36 rounded-full bg-accent/5 blur-2xl" />
          
          <div className="flex flex-wrap items-center justify-between gap-4">
            <Quote className="text-accent/20 shrink-0" size={44} />
            <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700 border border-emerald-100">
              {featured.metric}
            </span>
          </div>

          <div className="mt-4 flex gap-1 text-amber-400">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={18} fill="currentColor" className="stroke-none" />
            ))}
          </div>

          <p className="mt-6 max-w-4xl font-display text-xl font-bold leading-9 text-text-primary md:text-2xl md:leading-10">
            "{featured.text}"
          </p>

          <div className="mt-8 flex items-center gap-4">
            <ClientAvatar clientId={featured.id} className="h-14 w-14 shadow-sm" />
            <div>
              <p className="font-extrabold text-text-primary text-base">{featured.name}</p>
              <p className="text-xs font-semibold text-text-secondary mt-0.5">{featured.role}</p>
            </div>
          </div>
        </motion.article>

        {/* Grid Testimonials */}
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {others.map((item, index) => (
            <motion.article
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-border border-l-4 border-l-accent bg-white p-7 shadow-soft flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex gap-0.5 text-amber-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" className="stroke-none" />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold text-accent bg-accent-light px-2.5 py-0.5 rounded-full">
                    {item.metric}
                  </span>
                </div>
                <p className="leading-7 text-text-secondary text-sm">"{item.text}"</p>
              </div>

              <div className="mt-6 flex items-center gap-3 pt-4 border-t border-slate-50">
                <ClientAvatar clientId={item.id} className="h-11 w-11 shadow-sm" />
                <div>
                  <p className="font-bold text-text-primary text-sm">{item.name}</p>
                  <p className="text-[11px] font-semibold text-text-muted mt-0.5">{item.role}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
