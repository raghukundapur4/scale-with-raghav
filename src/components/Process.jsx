import { motion } from 'framer-motion'

const steps = [
  {
    title: 'Consultation',
    description: 'We understand your business goals and requirements',
  },
  {
    title: 'Strategy Planning',
    description: 'We create a detailed roadmap and strategy for your project',
  },
  {
    title: 'Development & Automation',
    description: 'We build your website and set up automation systems',
  },
  {
    title: 'Launch & Scale',
    description: 'We launch your project and help you scale your business',
  },
]

function Process() {
  return (
    <section id="process" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center text-4xl font-bold"
        >
          <span className="text-gradient">How We Work</span>
        </motion.h2>

        <div className="relative grid gap-6 md:grid-cols-4">
          <div className="absolute left-0 right-0 top-8 hidden border-t border-dashed border-white/20 md:block" />
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative z-10 glass rounded-2xl p-6"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-lg font-bold">
                {index + 1}
              </div>
              <h3 className="text-xl font-semibold">{step.title}</h3>
              <p className="mt-2 text-slate-300">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process
