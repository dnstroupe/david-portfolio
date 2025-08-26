import Section from './Section'
import { skills } from '../data/skills'
export default function Skills() {
  return (
    <Section id="skills" title="Core Skills">
      <div className="card">
        <div className="flex flex-wrap gap-2">
          {skills.map(s => (
            <span key={s} className="px-3 py-1 rounded-full bg-sky-100 text-sky-800 dark:bg-sky-900/40 dark:text-sky-200 text-sm">{s}</span>
          ))}
        </div>
      </div>
    </Section>
  )
}
