import { useState, useEffect } from 'react'
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

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? 'glass border-b border-white/10 bg-slate-900/70' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#home" className="text-xl font-bold">
          <span className="text-white">Scale With </span>
          <span className="text-gradient">Raghav</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="text-sm text-slate-300 transition hover:text-white">
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/919999999999"
            className="rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-500"
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
                  className="text-slate-200"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://wa.me/919999999999"
                className="rounded-xl bg-primary px-4 py-2 text-center font-semibold text-white"
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
