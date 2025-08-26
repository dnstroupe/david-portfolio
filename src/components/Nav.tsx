import { useEffect, useState } from 'react'

export default function Nav() {
  const links = [
    { href: '#wins', label: 'Wins' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#badges', label: 'Badges' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' }
  ]

  const [active, setActive] = useState<string>('wins')

  useEffect(() => {
    const ids = links.map(l => l.href.slice(1))
    const els = ids
      .map(id => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el)

    const observer = new IntersectionObserver(
      entries => {
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]) setActive(visible[0].target.id)
      },
      { root: null, rootMargin: '-35% 0px -55% 0px', threshold: [0.1, 0.25, 0.5, 0.75, 1] }
    )

    els.forEach(el => observer.observe(el))
    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // reflect active in URL hash without jumping
  useEffect(() => {
    if (!active) return
    const newHash = `#${active}`
    if (location.hash !== newHash) history.replaceState(null, '', newHash)
  }, [active])

  return (
    <>
      <a href="#wins" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-sky-600 text-white px-3 py-1 rounded">
        Skip to content
      </a>
      <nav className="sticky top-0 z-50 backdrop-blur bg-white/60 dark:bg-slate-900/50 border-b border-white/40 dark:border-slate-800">
        <div className="container-nice flex items-center justify-between py-3">
          <a href="#top" className="font-semibold">David Stroupe</a>
          <div className="flex flex-wrap gap-3 text-sm">
            {links.map(l => {
              const id = l.href.slice(1)
              const isActive = active === id
              return (
                <a
                  key={l.href}
                  href={l.href}
                  aria-current={isActive ? 'page' : undefined}
                  className={`relative pb-1 transition-colors
                    after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-[6px]
                    after:h-1.5 after:w-1.5 after:rounded-full after:transition-opacity
                    ${isActive
                      ? 'text-sky-600 dark:text-sky-300 font-semibold after:bg-sky-600 after:opacity-100'
                      : 'opacity-80 hover:opacity-100 hover:underline after:bg-sky-600 after:opacity-0'}`}
                >
                  {l.label}
                </a>
              )
            })}
          </div>
        </div>
      </nav>
    </>
  )
}
