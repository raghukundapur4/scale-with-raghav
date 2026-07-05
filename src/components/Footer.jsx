const services = ['Websites & Shopify', 'UI/UX Design', 'WhatsApp Automation', 'SEO & Performance', 'Lead Funnels']
const company = [
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Process', href: '#process' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
]

function Footer() {
  return (
    <footer className="bg-ink py-12 text-white md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 border-b border-white/10 pb-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-white">
                <svg width="24" height="24" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <rect x="5" y="23" width="7" height="12" rx="2" fill="currentColor" opacity="0.55" />
                  <rect x="16" y="16" width="7" height="19" rx="2" fill="currentColor" opacity="0.75" />
                  <rect x="27" y="8" width="7" height="27" rx="2" fill="currentColor" />
                  <path d="M8 20L20 10L32 20" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <h3 className="font-display text-xl font-extrabold">Scale With Raghav</h3>
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-300">
              Premium websites and automation systems for businesses that want to look better, respond faster, and scale smarter.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">Services</h4>
            <ul className="mt-4 space-y-3 text-slate-400">
              {services.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">Company</h4>
            <ul className="mt-4 space-y-3 text-slate-400">
              {company.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="transition-colors hover:text-emerald-300">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">Contact</h4>
            <ul className="mt-4 space-y-3 text-slate-400">
              <li>
                <a href="mailto:hello@scalewithraghav.com" className="transition-colors hover:text-emerald-300">
                  hello@scalewithraghav.com
                </a>
              </li>
              <li>
                <a href="https://wa.me/918722947700" className="transition-colors hover:text-emerald-300">
                  WhatsApp Chat
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="pt-6 text-center text-sm font-medium text-slate-500">© 2026 Scale With Raghav. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
