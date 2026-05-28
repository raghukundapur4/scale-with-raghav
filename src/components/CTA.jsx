import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

function CTA() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-gradient-to-r from-blue-900 to-purple-700 p-10 text-center sm:p-14">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.2),transparent_45%)]" />
        <motion.div
          className="pointer-events-none absolute left-8 top-8 h-2 w-2 rounded-full bg-white"
          animate={{ scale: [1, 1.8, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2.2, repeat: Infinity }}
        />
        <motion.div
          className="pointer-events-none absolute right-10 top-16 h-2 w-2 rounded-full bg-white"
          animate={{ scale: [1, 1.8, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2.8, repeat: Infinity }}
        />
        <motion.div
          className="pointer-events-none absolute bottom-10 right-1/3 h-2 w-2 rounded-full bg-white"
          animate={{ scale: [1, 1.8, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 3, repeat: Infinity }}
        />

        <div className="relative">
          <h2 className="text-4xl font-extrabold text-white sm:text-5xl">Ready to Scale Your Business?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
            Let's build systems that generate leads and automate growth.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/919999999999"
              className="rounded-xl bg-white px-6 py-3 font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              Schedule a Call
            </a>
            <a
              href="https://wa.me/919999999999"
              className="glass inline-flex items-center gap-2 rounded-xl px-6 py-3 font-semibold text-white hover:bg-white/10"
            >
              <MessageCircle size={18} />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
