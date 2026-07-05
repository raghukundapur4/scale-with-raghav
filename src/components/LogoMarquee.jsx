import React from 'react'

const brands = [
  {
    name: 'Apex Academy',
    icon: (
      <svg className="h-5 w-5 text-slate-400 group-hover:text-emerald-500 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    )
  },
  {
    name: 'Velo SaaS',
    icon: (
      <svg className="h-5 w-5 text-slate-400 group-hover:text-emerald-500 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    )
  },
  {
    name: 'Glow Ecom',
    icon: (
      <svg className="h-5 w-5 text-slate-400 group-hover:text-emerald-500 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    )
  },
  {
    name: 'Pulse Media',
    icon: (
      <svg className="h-5 w-5 text-slate-400 group-hover:text-emerald-500 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    )
  },
  {
    name: 'Nova Analytics',
    icon: (
      <svg className="h-5 w-5 text-slate-400 group-hover:text-emerald-500 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
        <path d="M22 12A10 10 0 0 0 12 2v10z" />
      </svg>
    )
  },
  {
    name: 'LogiTech Solutions',
    icon: (
      <svg className="h-5 w-5 text-slate-400 group-hover:text-emerald-500 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    )
  }
]

function LogoMarquee() {
  // Duplicate list to achieve continuous infinite scroll effect
  const marqueeItems = [...brands, ...brands, ...brands]

  return (
    <section className="border-y border-border bg-white py-8 overflow-hidden select-none">
      <div className="site-container mb-6">
        <p className="text-center text-xs font-bold uppercase tracking-[0.22em] text-text-muted">
          Trusted by fast-growing brands & coaches worldwide
        </p>
      </div>
      <div className="relative w-full">
        {/* Soft edge masking gradients */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent" />
        
        {/* Animated conveyor marquee */}
        <div className="flex w-max animate-marquee gap-8 items-center">
          {marqueeItems.map((brand, i) => (
            <div
              key={`${brand.name}-${i}`}
              className="group flex items-center gap-2.5 rounded-xl border border-slate-100 bg-slate-50/50 px-5 py-3 transition hover:bg-emerald-50/20 hover:border-emerald-200/50"
            >
              {brand.icon}
              <span className="whitespace-nowrap font-display text-sm font-extrabold text-text-secondary group-hover:text-text-primary transition-colors">
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LogoMarquee
