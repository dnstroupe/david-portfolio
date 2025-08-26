import Section from './Section'
import { experience } from '../data/experience'
import { motion } from 'framer-motion'

export default function Timeline() {
  return (
    <Section id="experience" title="Professional Experience">
      <ol className="relative border-l ml-2 pl-6 border-slate-200 dark:border-slate-700">
        {experience.map((role, i) => (
          <li key={i} className="mb-10">
            <span className="absolute -left-2 mt-1 h-4 w-4 rounded-full bg-sky-500"></span>
            <motion.div
              className="card"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ scale: 1.01 }}
            >
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <div>
                  <h3 className="text-xl font-semibold">{role.role}</h3>
                  <p className="text-slate-600 dark:text-slate-300">{role.company} • {role.location}</p>
                </div>
                <p className="text-sm opacity-80">{role.dates}</p>
              </div>
              <ul className="mt-3 space-y-2 list-disc pl-5">
                {role.bullets.map((b, j) => <li key={j}>{b}</li>)}
              </ul>
              {role.tools?.length ? (
                <>
                  <div className="mt-4 text-sm font-medium opacity-80">Tools & Tech</div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {role.tools.map(t => <span key={t} className="text-xs px-2 py-1 rounded bg-slate-100 dark:bg-slate-700">{t}</span>)}
                  </div>
                </>
              ) : null}
            </motion.div>
          </li>
        ))}
      </ol>
    </Section>
  )
}
