import { motion } from 'framer-motion'
import { ArrowUpRight, MessageSquare, ShoppingCart, BarChart3, Users, Star, ArrowRight } from 'lucide-react'
import SectionHeader from './ui/SectionHeader'
import BrowserMockup from './ui/BrowserMockup'

const projects = [
  {
    id: 'coach',
    title: 'Coach Growth Funnel',
    category: 'Website + Automation',
    metric: '+200 qualified leads in 30 days',
    summary: 'Custom landing page, integrated Intake assessment form, and instant WhatsApp follow-up sequence built for high-ticket coaching programs.',
    url: 'coachfunnel.io',
    theme: 'from-emerald-50 to-teal-100',
    featured: true,
  },
  {
    id: 'shopify',
    title: 'Premium Shopify Launch',
    category: 'Shopify Store',
    metric: '+40% Checkout Conversion',
    summary: 'A fast-loading, highly branded store with customizable product sheets, simplified checkout routes, and post-purchase email integrations.',
    url: 'shop.brand.co',
    theme: 'from-slate-100 to-slate-200',
  },
  {
    id: 'saas',
    title: 'SaaS Lead Engine',
    category: 'UI/UX + CRM Sync',
    metric: '3x Faster Response Rate',
    summary: 'A high-converting SaaS landing page synced directly with CRM systems to route fresh leads to appropriate sales reps in real time.',
    url: 'saaslaunch.app',
    theme: 'from-blue-50 to-indigo-100',
  },
  {
    id: 'automation',
    title: 'WhatsApp CRM Flow',
    category: 'WhatsApp API Automation',
    metric: '91% Auto Follow-up Rate',
    summary: 'Multi-stage WhatsApp automation flow for instant lead validation, scheduling support, and broadcast campaigns.',
    url: 'crmflow.app',
    theme: 'from-amber-50 to-orange-100',
  },
]

// Render specific mockups for each case study to replace generic layout lines
function ProjectPreview({ projectId, theme }) {
  if (projectId === 'coach') {
    return (
      <div className={`bg-gradient-to-br ${theme} p-6 h-64 flex items-center justify-center`}>
        <div className="w-full max-w-sm rounded-xl border border-white/60 bg-white/95 p-4 shadow-md backdrop-blur">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-emerald-500/20 flex items-center justify-center">
              <Users size={16} className="text-emerald-600" />
            </div>
            <div>
              <div className="h-2 w-16 rounded bg-slate-200" />
              <div className="h-1.5 w-24 rounded bg-slate-100 mt-1.5" />
            </div>
          </div>
          <p className="mt-3 text-xs font-bold text-slate-800 leading-tight">"Double Your High-Ticket Consulting Sales"</p>
          <div className="mt-3 rounded-lg bg-emerald-50 p-2 border border-emerald-100 flex items-center justify-between">
            <span className="text-[10px] font-bold text-emerald-800">🎉 Strategy Call Requested</span>
            <span className="text-[9px] font-bold bg-emerald-500 text-white px-2 py-0.5 rounded-full">Active</span>
          </div>
          <div className="mt-3 flex gap-2">
            <div className="h-1.5 w-1/3 rounded bg-slate-200" />
            <div className="h-1.5 w-1/4 rounded bg-slate-200" />
          </div>
        </div>
      </div>
    )
  }

  if (projectId === 'shopify') {
    return (
      <div className={`bg-gradient-to-br ${theme} p-6 h-64 flex items-center justify-center`}>
        <div className="w-full max-w-xs rounded-xl border border-white bg-white p-4 shadow-md">
          <div className="aspect-video w-full rounded-lg bg-slate-100 flex items-center justify-center relative overflow-hidden">
            <span className="text-[10px] font-extrabold tracking-wider text-slate-400 uppercase">Product Preview</span>
            <div className="absolute top-2 right-2 flex items-center gap-1 rounded bg-white px-1.5 py-0.5 text-[8px] font-bold text-amber-500 shadow-sm">
              <Star size={8} fill="currentColor" /> 4.9
            </div>
          </div>
          <div className="mt-3 flex items-center justify-between">
            <span className="text-xs font-bold text-slate-800">Premium Water Bottle</span>
            <span className="text-xs font-extrabold text-emerald-600">$39.00</span>
          </div>
          <button className="mt-3 w-full flex items-center justify-center gap-1.5 rounded-lg bg-slate-900 py-2 text-[10px] font-bold text-white transition hover:bg-slate-800">
            <ShoppingCart size={12} /> Add to Cart
          </button>
        </div>
      </div>
    )
  }

  if (projectId === 'saas') {
    return (
      <div className={`bg-gradient-to-br ${theme} p-6 h-64 flex items-center justify-center`}>
        <div className="w-full max-w-sm rounded-xl border border-white/60 bg-white/95 p-4 shadow-md backdrop-blur">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2 mb-2">
            <span className="text-[9px] font-bold text-slate-500">Live Dashboard</span>
            <span className="text-[9px] font-bold bg-indigo-50 text-indigo-600 px-1.5 py-0.5 rounded">Synced</span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="rounded-lg bg-slate-50 p-2.5">
              <span className="text-[8px] font-bold text-slate-400 block">Lead Conversion</span>
              <span className="font-display font-extrabold text-slate-800 text-sm mt-0.5 block">24.5%</span>
            </div>
            <div className="rounded-lg bg-slate-50 p-2.5">
              <span className="text-[8px] font-bold text-slate-400 block">Response Time</span>
              <span className="font-display font-extrabold text-emerald-600 text-sm mt-0.5 block">1.8 Mins</span>
            </div>
          </div>
          <div className="mt-3 h-14 w-full rounded-lg bg-slate-50 p-2 flex items-end justify-between">
            {/* Simple simulated SVG bar chart */}
            <div className="h-6 w-3 bg-indigo-200 rounded-sm" />
            <div className="h-8 w-3 bg-indigo-300 rounded-sm" />
            <div className="h-5 w-3 bg-indigo-200 rounded-sm" />
            <div className="h-9 w-3 bg-indigo-500 rounded-sm" />
            <div className="h-11 w-3 bg-accent rounded-sm" />
          </div>
        </div>
      </div>
    )
  }

  if (projectId === 'automation') {
    return (
      <div className={`bg-gradient-to-br ${theme} p-6 h-64 flex items-center justify-center`}>
        <div className="w-full max-w-xs rounded-xl border border-white bg-slate-50 p-3 shadow-md">
          {/* Chat Window Mockup */}
          <div className="flex items-center gap-2 border-b border-slate-100 pb-2 mb-2">
            <div className="h-5 w-5 rounded-full bg-emerald-500 flex items-center justify-center text-[8px] font-bold text-white">R</div>
            <span className="text-[9px] font-bold text-slate-800">Raghav Automation Bot</span>
          </div>
          <div className="space-y-2">
            <div className="max-w-[75%] rounded-lg bg-white p-2 text-[9px] shadow-sm text-slate-700 leading-normal">
              Hi Vikram! Thanks for details. What time works best for your audit?
            </div>
            <div className="max-w-[70%] rounded-lg bg-emerald-500 text-white p-2 text-[9px] shadow-sm self-end ml-auto text-right leading-normal">
              Hey, Tuesday at 2:00 PM works.
            </div>
            <div className="max-w-[75%] rounded-lg bg-white p-2 text-[9px] shadow-sm text-slate-700 leading-normal">
              Awesome. Call confirmed for Tuesday, July 7 at 2:00 PM. Invitation sent. 👍
            </div>
          </div>
        </div>
      </div>
    )
  }

  return null
}

function Portfolio() {
  const [featured, ...rest] = projects

  return (
    <section id="work" className="section-padding bg-surface-muted">
      <div className="site-container">
        <SectionHeader
          eyebrow="Selected Work"
          title="Real setups. Proven outcomes."
          subtitle="Every project pairs visually stunning design with the underlying automation system that turns clicks into conversations."
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid gap-8 lg:grid-cols-2"
        >
          {/* Featured Project */}
          <div className="group overflow-hidden rounded-3xl border border-border bg-white shadow-card transition hover:shadow-elevated">
            <BrowserMockup url={featured.url}>
              <ProjectPreview projectId={featured.id} theme={featured.theme} />
            </BrowserMockup>
            <div className="p-8">
              <span className="rounded-full bg-accent-light px-3 py-1 text-xs font-bold uppercase tracking-wider text-accent">
                {featured.category}
              </span>
              <h3 className="mt-4 font-display text-2xl font-extrabold text-text-primary">{featured.title}</h3>
              <p className="mt-2 text-lg font-bold text-accent">{featured.metric}</p>
              <p className="mt-3 leading-7 text-text-secondary">{featured.summary}</p>
              <div className="mt-6">
                <a
                  href="#cta-form"
                  className="inline-flex items-center gap-2 text-sm font-bold text-accent hover:text-accent-dark transition-colors"
                >
                  Request Similar Setup <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </div>

          {/* Three Grid Projects */}
          <div className="grid gap-6 sm:grid-cols-2">
            {rest.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
                className="group overflow-hidden rounded-2xl border border-border bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-card flex flex-col justify-between"
              >
                <div>
                  <BrowserMockup url={project.url} className="border-none shadow-none rounded-none">
                    <ProjectPreview projectId={project.id} theme={project.theme} />
                  </BrowserMockup>
                  <div className="p-5 pt-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-accent">{project.category}</span>
                    <h3 className="mt-1 font-display text-lg font-extrabold text-text-primary group-hover:text-accent transition-colors flex items-center gap-1.5 justify-between">
                      {project.title}
                      <ArrowUpRight className="shrink-0 text-text-muted group-hover:text-accent transition-colors" size={16} />
                    </h3>
                    <p className="mt-2 text-xs font-bold text-accent">{project.metric}</p>
                    <p className="mt-2 text-xs leading-normal text-text-secondary">{project.summary}</p>
                  </div>
                </div>
                <div className="px-5 pb-5 pt-2">
                  <a
                    href="#cta-form"
                    className="text-[11px] font-bold text-text-secondary hover:text-accent transition-colors flex items-center gap-1"
                  >
                    View System Specs <ArrowRight size={10} />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Portfolio
