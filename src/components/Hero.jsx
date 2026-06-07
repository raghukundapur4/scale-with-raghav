import { motion } from 'framer-motion'

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-dark pt-28 pb-16 md:pt-32 md:pb-20 min-h-screen flex items-center">
      {/* Abstract Glowing Background */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-primary/20 blur-[120px]" />

      <div className="relative mx-auto flex max-w-5xl flex-col items-center justify-center px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-8 flex flex-col items-center"
        >
          <span className="glass glow-border inline-flex rounded-full px-4 py-2 text-sm text-primary uppercase tracking-wider font-semibold">
            Scale With Raghav
          </span>
          <h1 className="text-4xl font-black leading-tight text-white sm:text-6xl lg:text-7xl">
            High-Converting Websites & Shopify Stores Built for <span className="text-gradient">Growth.</span>
          </h1>
          <p className="max-w-2xl text-base sm:text-lg text-slate-400">
            Scale With Raghav is a premium design & development agency focused on maximizing your online revenue through stunning websites and strategic digital solutions.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-6 pt-4 w-full sm:w-auto">
            <a
              href="#work"
              className="w-full sm:w-auto glow-primary rounded-full bg-primary px-8 py-4 font-bold text-darker transition hover:scale-105"
            >
              See Our Work
            </a>
            <a
              href="https://wa.me/918722947700"
              className="w-full sm:w-auto glass rounded-full px-8 py-4 font-bold text-white transition hover:bg-white/10 hover:glow-border"
            >
              Book A Call
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
