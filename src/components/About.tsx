import Section from './Section'
import { education } from '../data/education'
import { awards } from '../data/awards'

export default function About() {
  return (
    <Section id="about" title="About • Education • Certifications • Awards">
      <div className="grid md:grid-cols-3 gap-6">
        <div className="card md:col-span-1">
          <h3 className="font-semibold mb-2">About Me</h3>
          <p className="text-slate-700 dark:text-slate-300">
            Versatile, mission-driven technologist with 20+ years across the U.S. Navy and federal defense sectors.
            I specialize in SharePoint administration, Microsoft 365 automation, and building user-centered portals
            that improve collaboration and compliance in high-stakes environments. TS/SCI cleared and bootcamp-trained
            in full-stack JavaScript. I enjoy turning messy processes into simple, repeatable systems that scale. 
          </p>
        </div>
        <div className="card">
          <h3 className="font-semibold mb-2">Education & Certifications</h3>
          <ul className="list-disc pl-5 space-y-2">
            {education.map((e, i)=>(
              <li key={i}><strong>{e.title}</strong> — {e.org} <span className="opacity-70">({e.year})</span></li>
            ))}
          </ul>
        </div>
        <div className="card">
          <h3 className="font-semibold mb-2">Awards & Honors</h3>
          <ul className="list-disc pl-5 space-y-1">
            {awards.map((a,i)=>(<li key={i}>{a}</li>))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
