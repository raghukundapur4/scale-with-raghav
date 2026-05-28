import { motion } from 'framer-motion'

const stats = [
  { label: 'Clients', value: '50+' },
  { label: 'Years', value: '3+' },
  { label: 'Satisfaction', value: '100%' },
]

function About() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-bold text-gradient">About Me</h2>
          <p className="text-slate-300">
            Hi, I'm Raghav — a backend engineer and automation specialist focused on helping businesses build reliable
            websites, streamline operations, and scale lead generation with practical systems.
          </p>
          <div className="flex flex-wrap gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="glass rounded-xl px-5 py-3">
                <p className="text-2xl font-bold text-blue-300">{stat.value}</p>
                <p className="text-sm text-slate-300">{stat.label}</p>
              </div>
            ))}
          </div>
          <a
            href="https://wa.me/919999999999"
            className="inline-block rounded-xl bg-primary px-5 py-3 font-semibold text-white transition hover:bg-blue-500"
          >
            Let's Connect
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-6"
        >
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-500 font-bold text-white">
              R
            </div>
            <p className="font-semibold">raghav@automation-terminal</p>
          </div>
          <pre className="overflow-x-auto rounded-xl bg-slate-950/60 p-4 text-sm text-slate-200">
{`const growthSystem = {
  website: 'High-converting & fast',
  automation: 'WhatsApp + CRM workflows',
  leadGen: 'Funnels that scale',
}

deploy(growthSystem)`}
          </pre>
        </motion.div>
      </div>
    </section>
  )
}

export default About
