import { motion } from 'framer-motion'

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-dark pt-28">
      <div className="pointer-events-none absolute -left-28 top-20 h-80 w-80 rounded-full bg-blue-600/30 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-32 h-72 w-72 rounded-full bg-purple-600/30 blur-3xl" />

      <div className="mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-4 pb-20 sm:px-6 lg:grid-cols-2 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <span className="glass inline-flex rounded-full px-4 py-2 text-sm text-slate-200">
            🚀 Trusted by 50+ Businesses
          </span>
          <h1 className="text-5xl font-black leading-tight text-white sm:text-6xl lg:text-7xl">
            Build. Automate. <span className="text-gradient">Scale.</span>
          </h1>
          <p className="max-w-xl text-lg text-slate-300">
            We help coaches and businesses grow using high-converting websites, WhatsApp automation, and lead
            generation systems.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://wa.me/919999999999"
              className="glow-blue rounded-xl bg-primary px-6 py-3 font-semibold text-white transition hover:bg-blue-500"
            >
              Book Free Consultation
            </a>
            <a href="#services" className="glass rounded-xl px-6 py-3 font-semibold text-slate-100 transition hover:bg-white/10">
              View Services
            </a>
          </div>
          <div className="flex flex-wrap gap-3 text-sm text-slate-300">
            {['⚡ Fast Delivery', '📱 Mobile Optimized', '🤖 Automation Focused', '🎯 Lead Driven'].map((item) => (
              <span key={item} className="glass rounded-full px-3 py-1">
                {item}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative"
        >
          <div className="pointer-events-none absolute -right-8 -top-8 h-48 w-48 rounded-full bg-blue-500/30 blur-3xl" />
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="glass relative rounded-3xl p-6"
          >
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-lg font-semibold">Growth Dashboard</h3>
              <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs text-emerald-300">Live</span>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl bg-white/5 p-4">
                <p className="text-xs text-slate-400">Revenue</p>
                <p className="text-xl font-bold text-emerald-400">+127%</p>
              </div>
              <div className="rounded-xl bg-white/5 p-4">
                <p className="text-xs text-slate-400">Leads</p>
                <p className="text-xl font-bold text-blue-400">2,847</p>
              </div>
              <div className="rounded-xl bg-white/5 p-4">
                <p className="text-xs text-slate-400">Automation</p>
                <p className="text-xl font-bold text-purple-400">Active</p>
              </div>
            </div>

            <div className="absolute -left-10 top-16 glass rounded-xl px-4 py-2 text-sm text-slate-200">
              WhatsApp: 48 new leads today
            </div>
            <div className="absolute -right-8 -bottom-8 glass rounded-xl px-4 py-2 text-sm text-slate-200">
              Conversion +34%
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
