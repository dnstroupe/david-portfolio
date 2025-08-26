import ThemeToggle from './ThemeToggle'
import { motion } from 'framer-motion'
import headshot from '../assets/headshot.png'

const base = import.meta.env.BASE_URL

export default function Hero() {
  return (
    <header className="pt-10 md:pt-16 bg-gradient-to-b from-sky-50 to-transparent dark:from-slate-900">
      <div className="container-nice flex flex-col-reverse md:flex-row items-center gap-8">
        <motion.div className="flex-1" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight">David Stroupe</h1>
          <p className="mt-3 text-lg text-slate-700 dark:text-slate-300">
            Versatile, mission-driven technologist with 20+ years across the U.S. Navy and federal defense sectors.
            TS/SCI-cleared SharePoint administrator specializing in Microsoft 365 governance, workflow automation,
            and secure collaboration; DoD-experienced and bootcamp-trained in full-stack JavaScript.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a className="card !p-3" href={`${base}resume.pdf`} download>⬇️ Download Résumé</a>
            <a className="card !p-3 no-print" href="#" onClick={(e)=>{e.preventDefault(); window.print();}}>🖨️ Print as PDF</a>
            <a className="card !p-3" href="mailto:d.n.stroupe@gmail.com">✉️ Contact</a>
            <a className="card !p-3" href="https://github.com/dnstroupe" target="_blank" rel="noopener">GitHub</a>
            <a className="card !p-3" href="https://www.linkedin.com/in/david-stroupe/" target="_blank" rel="noopener">LinkedIn</a>
          </div>
        </motion.div>

        <motion.div className="flex-1 grid place-items-center" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}>
          <img src={headshot} alt="David Stroupe headshot" className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover ring-4 ring-white dark:ring-slate-700 shadow-soft" />
          <div className="mt-4"><ThemeToggle /></div>
        </motion.div>
      </div>
    </header>
  )
}
