import Section from './Section'
import { badges } from '../data/badges'
import { useState } from 'react'

const featuredOrder = [
  'Cyber AI Foundational',
  'Gen AI and Prompting Essentials',
  'Artificial Intelligence Foundational',
  'Artificial Intelligence Enablement (AI Aware)',
  'Introduction to Cybersecurity',
  'Git Foundational',
  'JavaScript Foundational',
  'HTML Foundational',
  'CSS Foundational',
  'Critical Thinking Foundational',
]

function rankByFeatured(name: string) {
  const i = featuredOrder.indexOf(name)
  return i === -1 ? 999 : i
}

function SafeBadge({ b }: { b: (typeof badges)[number] }) {
  const [ok, setOk] = useState(true)
  return (
    <a href={b.url} target="_blank" rel="noopener" className="card hover:scale-[1.01] transition">
      <div className="flex items-center gap-4">
        {ok ? (
          <img
            src={b.image}
            alt={`${b.name} badge`}
            width={72}
            height={72}
            className="w-18 h-18 rounded-full"
            onError={() => setOk(false)}
            loading="lazy"
          />
        ) : (
          <div className="w-18 h-18 rounded-full bg-gradient-to-br from-sky-500 to-indigo-500" />
        )}
        <div>
          <div className="font-semibold">{b.name}</div>
          <div className="opacity-80 text-sm">{b.issuer}</div>
          <div className="opacity-70 text-sm mt-1">Issued {b.issued}</div>
        </div>
      </div>
    </a>
  )
}

export default function Badges() {
  const ordered = [...badges].sort((a, b) => {
    const r = rankByFeatured(a.name) - rankByFeatured(b.name)
    return r !== 0 ? r : a.name.localeCompare(b.name)
  })

  return (
    <Section id="badges" title="Credly Badges">
      <a className="underline block mb-4" href="https://www.credly.com/users/david-stroupe" target="_blank" rel="noopener">
        View all badges on Credly →
      </a>
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
        {ordered.map((b, i) => <SafeBadge key={i} b={b} />)}
      </div>
    </Section>
  )
}
