import { motion } from 'framer-motion'

const steps = [
  {
    title: 'Discovery and Strategy',
    description: 'We dive deep into your business goals to create a customized strategy that guarantees results.',
  },
  {
    title: 'UI/UX Design',
    description: 'We craft stunning, user-centric interfaces that captivate your audience and drive engagement.',
  },
  {
    title: 'Custom Web Development',
    description: 'We build high-performance, scalable websites tailored to your unique brand requirements.',
  },
  {
    title: 'SEO & Performance Optimization',
    description: 'We ensure your site ranks high on search engines and loads at lightning speed.',
  },
]

function Process() {
  return (
    <section id="process" className="py-16 md:py-24 bg-darker relative">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-primary text-sm font-bold uppercase tracking-wider">Process</span>
          <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Our Comprehensive <span className="text-gradient">Process</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            We ensure your project gets handled with the utmost care from start to finish.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card rounded-3xl p-8 relative overflow-hidden group hover:glow-border border border-white/5"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                 <span className="text-8xl font-black text-primary">0{index + 1}</span>
              </div>
              <div className="relative z-10">
                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 text-primary font-bold border border-primary/30">
                  {index + 1}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-slate-400 leading-relaxed max-w-[90%]">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process
