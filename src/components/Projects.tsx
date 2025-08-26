import Section from './Section'
import { projects } from '../data/projects'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const palette = [
  'from-sky-500 to-indigo-500',
  'from-emerald-600 to-lime-500',
  'from-rose-500 to-orange-500',
  'from-purple-700 to-sky-500',
  'from-amber-500 to-pink-600',
  'from-blue-600 to-cyan-500',
  'from-teal-600 to-green-500',
  'from-red-600 to-amber-500',
  'from-indigo-600 to-violet-600',
  'from-lime-600 to-emerald-500',
  'from-cyan-600 to-blue-500',
  'from-fuchsia-600 to-rose-500',
]

// Ensure unique looks for specific titles
const customGrad: Record<string, string> = {
  'Puppy Bowl Management': 'from-emerald-600 to-lime-500',
  'Simple Bank Account App': 'from-purple-700 to-sky-500',
}
const pickGrad = (title: string, i: number) => customGrad[title] ?? palette[i % palette.length]

function SmartThumb({ title, thumb, i }: { title: string; thumb?: string; i: number }) {
  const [loaded, setLoaded] = useState(false)
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    if (!thumb) return
    const img = new Image()
    img.src = thumb
    const to = setTimeout(() => setFailed(true), 2500) // fallback if provider is slow
    img.onload = () => { setLoaded(true); clearTimeout(to) }
    img.onerror = () => { setFailed(true); clearTimeout(to) }
    return () => clearTimeout(to)
  }, [thumb])

  const grad = pickGrad(title, i)

  return (
    <div className="w-full h-40 rounded-xl mb-4 relative overflow-hidden">
      {/* Gradient/title is always visible */}
      <div className={`absolute inset-0 bg-gradient-to-br ${grad} grid place-items-center`}>
        <div className="text-white/95 font-semibold text-lg px-4 text-center drop-shadow">{title}</div>
      </div>
      {/* Real screenshot fades in if/when it loads */}
      {thumb && !failed && (
        <img
          src={thumb}
          alt={`${title} thumbnail`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${loaded ? 'opacity-100' : 'opacity-0'}`}
          loading="lazy"
        />
      )}
    </div>
  )
}

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            className="card overflow-hidden"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            whileHover={{ scale: 1.01 }}
          >
            <SmartThumb title={p.title} thumb={p.thumb} i={i} />

            <h3 className="text-lg font-semibold">{p.title}</h3>
            <p className="mt-2">{p.description}</p>

            <div className="mt-3 flex flex-wrap gap-2">
              {p.tags.map(t => <span key={t} className="text-xs px-2 py-1 rounded bg-slate-100 dark:bg-slate-700">{t}</span>)}
            </div>

            <div className="mt-4 flex gap-3">
              <a className="underline" href={p.live} target="_blank" rel="noopener">Live Demo</a>
              {p.code && <a className="underline" href={p.code} target="_blank" rel="noopener">Code</a>}
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  )
}
