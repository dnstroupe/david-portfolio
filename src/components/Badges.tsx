import Section from './Section'
import { badges, CREDLY_PROFILE } from '../data/badges'

const iconFor = (name: string) => {
  if (/HTML/i.test(name)) return '💻'
  if (/CSS/i.test(name)) return '🎨'
  if (/JavaScript/i.test(name)) return '🧩'
  if (/Git/i.test(name)) return '🔧'
  if (/AI|Artificial Intelligence/i.test(name)) return '🧠'
  if (/Cybersecurity/i.test(name)) return '🛡️'
  if (/Critical Thinking/i.test(name)) return '🧭'
  return '🏅'
}

export default function Badges() {
  return (
    <Section id="badges" title="Credly Badges">
      <div className="mb-4">
        <a className="underline" href={CREDLY_PROFILE} target="_blank" rel="noopener">
          View all badges on Credly →
        </a>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {badges.map((b,i)=> {
          const content = (
            <div className="card flex items-center gap-3">
              {b.image
                ? <img src={b.image} alt={b.name} className="w-10 h-10 rounded" />
                : <div className="text-2xl">{iconFor(b.name)}</div>}
              <div className="flex-1">
                <div className="font-medium">{b.name}</div>
                <div className="text-sm opacity-70">{b.issuer} • {b.issued}</div>
              </div>
            </div>
          )
          return b.url
            ? <a key={i} href={b.url} target="_blank" rel="noopener">{content}</a>
            : <div key={i}>{content}</div>
        })}
      </div>
    </Section>
  )
}
