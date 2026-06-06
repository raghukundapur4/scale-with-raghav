import { useState, useEffect, useCallback } from 'react'
import { Menu, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'

const links = [
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'About', href: '#about' },
  { label: 'Process', href: '#process' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
]

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = useCallback((e, href) => {
    if (!href.startsWith('#')) return
    e.preventDefault()
    const target = document.querySelector(href)
    if (!target) return
    target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setOpen(false)
  }, [])

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${scrolled ? 'glass border-b border-white/10 bg-slate-900/70' : 'bg-transparent'
        }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="flex items-center gap-3 group">
          {/* Inline SVG — transparent background, always matches the page */}
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform group-hover:scale-110">
            <defs>
              <filter id="glow">
                <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
              </filter>
            </defs>
            {/* Bar chart steps */}
            <rect x="4" y="24" width="7" height="12" rx="2" fill="#10B981" opacity="0.6"/>
            <rect x="14" y="16" width="7" height="20" rx="2" fill="#10B981" opacity="0.8"/>
            <rect x="24" y="8" width="7" height="28" rx="2" fill="#10B981"/>
            {/* Upward arrow */}
            <path d="M29 4 L36 4 L36 11" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" filter="url(#glow)"/>
            <path d="M20 13 L36 4" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" filter="url(#glow)"/>
          </svg>
          <span className="text-lg font-black tracking-tight">
            <span className="text-white">Scale</span><span className="text-primary"> Raghav</span>
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="relative text-sm text-slate-300 transition hover:text-white after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/918971267102"
            className="rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-darker transition hover:scale-105 hover:bg-emerald-400 glow-primary"
          >
            Book Free Call
          </a>
        </div>

        <button
          className="text-white md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            className="glass border-t border-white/10 px-4 pb-4 md:hidden"
          >
            <div className="flex flex-col gap-4 pt-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-slate-200 hover:text-primary transition-colors"
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://wa.me/918971267102"
                className="rounded-xl bg-primary px-4 py-2 text-center font-semibold text-darker"
                onClick={() => setOpen(false)}
              >
                Book Free Call
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar

