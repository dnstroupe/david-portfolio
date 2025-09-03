import Section from './Section'
import { embeds } from '../data/credlyEmbeds'
import { useEffect } from 'react'

export default function CredlyEmbeds() {
  useEffect(() => {
    const src = 'https://cdn.credly.com/assets/utilities/embed.js'
    if (!document.querySelector(`script[src="${src}"]`)) {
      const s = document.createElement('script')
      s.src = src
      s.async = true
      document.body.appendChild(s)
    }
  }, [])
  if (!embeds.length) return null
  return (
    <Section id="featured-badges" title="Featured Badges (Embedded)">
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
        {embeds.map((html, i) => (
          <div key={i} className="card" dangerouslySetInnerHTML={{ __html: html }} />
        ))}
      </div>
    </Section>
  )
}
