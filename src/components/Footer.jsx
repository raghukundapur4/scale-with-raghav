import { Github, Instagram, Linkedin, Twitter } from 'lucide-react'

const services = ['Custom Websites', 'UI/UX Design', 'SEO & Performance', 'Social Media Management']
const company = [
  { label: 'About', href: '#about' },
  { label: 'Process', href: '#process' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
]

function Footer() {
  return (
    <footer className="bg-darker py-10 md:py-14 relative overflow-hidden border-t border-white/5">
      <div className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 h-64 w-[800px] rounded-[100%] bg-primary/10 blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid gap-10 border-b border-white/10 pb-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <h3 className="text-2xl font-black">
              <span className="text-white">Scale With </span>
              <span className="text-primary">Raghav</span>
            </h3>
            <p className="mt-3 text-slate-400">Premium Design & Development for Growing Brands.</p>
            <div className="mt-4 flex gap-3 text-slate-300">
              {[Twitter, Linkedin, Instagram, Github].map((Icon, i) => (
                <a key={i} href="#" className="glass-card rounded-lg p-2 hover:text-primary transition-colors" aria-label="social">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white uppercase tracking-wider text-sm">Services</h4>
            <ul className="mt-4 space-y-3 text-slate-400">
              {services.map((item) => (
                <li key={item} className="hover:text-primary transition-colors cursor-pointer">{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white uppercase tracking-wider text-sm">Company</h4>
            <ul className="mt-4 space-y-3 text-slate-400">
              {company.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="hover:text-primary transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white uppercase tracking-wider text-sm">Contact</h4>
            <ul className="mt-4 space-y-3 text-slate-400">
              <li>
                <a href="mailto:hello@scalewithraghav.com" className="hover:text-primary transition-colors">
                  hello@scalewithraghav.com
                </a>
              </li>
              <li>
                <a href="https://wa.me/918971267102" className="hover:text-primary transition-colors">
                  WhatsApp Chat
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="pt-6 text-center text-sm text-slate-500 font-medium">© 2024 Scale With Raghav. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
