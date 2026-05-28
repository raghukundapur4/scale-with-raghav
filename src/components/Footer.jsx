import { Github, Instagram, Linkedin, Twitter } from 'lucide-react'

const services = ['Website Dev', 'WhatsApp Automation', 'Lead Generation']
const company = [
  { label: 'About', href: '#about' },
  { label: 'Process', href: '#process' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
]

function Footer() {
  return (
    <footer className="bg-[#080d1a] py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 border-b border-white/10 pb-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold">
              <span className="text-white">Scale With </span>
              <span className="text-gradient">Raghav</span>
            </h3>
            <p className="mt-3 text-slate-400">Scale Your Business With Smart Websites & Automation</p>
            <div className="mt-4 flex gap-3 text-slate-300">
              {[Twitter, Linkedin, Instagram, Github].map((Icon, i) => (
                <a key={i} href="#" className="glass rounded-lg p-2 hover:text-white" aria-label="social">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white">Services</h4>
            <ul className="mt-3 space-y-2 text-slate-400">
              {services.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white">Company</h4>
            <ul className="mt-3 space-y-2 text-slate-400">
              {company.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="hover:text-slate-200">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white">Contact</h4>
            <ul className="mt-3 space-y-2 text-slate-400">
              <li>
                <a href="mailto:hello@scalewithraghav.com" className="hover:text-slate-200">
                  hello@scalewithraghav.com
                </a>
              </li>
              <li>
                <a href="https://wa.me/919999999999" className="hover:text-slate-200">
                  WhatsApp Chat
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="pt-6 text-center text-sm text-slate-500">© 2024 Scale With Raghav. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
