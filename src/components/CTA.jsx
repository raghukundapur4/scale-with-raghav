import { motion } from 'framer-motion'
import { BookOpen, Check } from 'lucide-react'

function CTA() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8 md:py-24">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-gradient-to-br from-dark to-grayCustom border border-white/10 p-8 sm:p-14 lg:p-20 glow-border">
        {/* Glow effect */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-full w-full bg-primary/5 blur-[100px]" />
        
        <div className="relative z-10 grid gap-12 lg:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-extrabold text-white md:text-4xl lg:text-5xl leading-tight">
              Say Hello to Guaranteed Clients Every Month By Designing A <span className="text-gradient">Premium Website</span>
            </h2>
            <p className="mt-6 text-lg text-slate-400 leading-relaxed">
              Download our free eBook, "The Web Design Magic", to learn how to turn clicks into clients. Includes checklists, proven frameworks, and actionable strategies.
            </p>
            
            <ul className="mt-8 space-y-3">
              {[
                'Proven layout frameworks',
                'High-converting copy formulas',
                'Step-by-step launch checklist'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-300">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/20 text-primary">
                    <Check size={14} />
                  </div>
                  {item}
                </li>
              ))}
            </ul>

            <form className="mt-10 flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="w-full flex-1 rounded-xl bg-darker/50 px-4 py-4 text-white border border-white/10 focus:outline-none focus:border-primary transition-colors"
                required
              />
              <button 
                type="submit" 
                className="glow-primary whitespace-nowrap rounded-xl bg-primary px-8 py-4 font-bold text-darker transition hover:bg-emerald-400"
              >
                Get Free E-Book
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:flex justify-center"
          >
            {/* CSS eBook Cover Mockup */}
            <div className="relative h-[500px] w-[350px] rounded-r-2xl rounded-l-md bg-gradient-to-tr from-grayCustom to-darker border border-white/10 shadow-2xl overflow-hidden flex flex-col justify-between p-8">
              <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-black/60 to-transparent z-10" />
              <div className="relative z-20">
                <p className="text-primary font-bold tracking-widest text-sm uppercase mb-2">Free Guide</p>
                <h3 className="text-4xl font-black text-white leading-tight">The Web Design <br/><span className="text-gradient">Magic</span></h3>
              </div>
              <div className="relative z-20 text-right mt-auto">
                <BookOpen size={48} className="text-primary/30 ml-auto mb-4" />
                <p className="text-slate-400 font-medium">Scale With Raghav</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CTA
