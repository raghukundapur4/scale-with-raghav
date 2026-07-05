import { useState, useEffect, useCallback } from 'react'
import { Menu, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import Button from './ui/Button'

const links = [
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'About', href: '#about' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
]

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = ['home', 'work', 'services', 'process', 'about', 'testimonials', 'faq']
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting)
        if (visible) setActiveSection(visible.target.id)
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: 0.01 },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
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
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? 'border-b border-border bg-white/95 shadow-sm backdrop-blur' : 'bg-white/80 backdrop-blur'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="flex items-center gap-3 group">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-white shadow-sm transition-transform group-hover:scale-105">
            <svg width="24" height="24" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <rect x="5" y="23" width="7" height="12" rx="2" fill="currentColor" opacity="0.55" />
              <rect x="16" y="16" width="7" height="19" rx="2" fill="currentColor" opacity="0.75" />
              <rect x="27" y="8" width="7" height="27" rx="2" fill="currentColor" />
              <path d="M8 20L20 10L32 20" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <span className="font-display text-lg font-extrabold tracking-tight text-text-primary">
            Scale With <span className="text-accent">Raghav</span>
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`text-sm font-semibold transition ${
                activeSection === link.href.slice(1) ? 'text-accent' : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              {link.label}
            </a>
          ))}
          <Button
            href="#cta-form"
            size="sm"
            onClick={(e) => {
              handleNavClick(e, '#cta-form');
              if (typeof window !== 'undefined' && window.gtag) {
                window.gtag('event', 'click_nav_cta', { destination: 'cta_form' });
              }
            }}
          >
            Book Free Call
          </Button>
        </div>

        <button
          className="rounded-xl p-2 text-text-primary transition hover:bg-slate-100 md:hidden"
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
            className="border-t border-border bg-white px-4 pb-4 shadow-lg md:hidden"
          >
            <div className="flex flex-col gap-4 pt-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`rounded-xl px-3 py-2 font-semibold transition ${
                    activeSection === link.href.slice(1)
                      ? 'bg-accent-light text-accent'
                      : 'text-text-secondary hover:bg-slate-100 hover:text-text-primary'
                  }`}
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.label}
                </a>
              ))}
              <Button
                href="#cta-form"
                onClick={(e) => {
                  handleNavClick(e, '#cta-form');
                  if (typeof window !== 'undefined' && window.gtag) {
                    window.gtag('event', 'click_nav_mobile_cta', { destination: 'cta_form' });
                  }
                }}
              >
                Book Free Call
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar

