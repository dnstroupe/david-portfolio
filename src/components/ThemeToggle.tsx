import { useEffect, useState } from 'react'
export default function ThemeToggle() {
  const [dark, setDark] = useState(false)
  useEffect(() => {
    const isDark = localStorage.getItem('theme') === 'dark'
      || (window.matchMedia('(prefers-color-scheme: dark)').matches && !localStorage.getItem('theme'))
    setDark(isDark)
    document.documentElement.classList.toggle('dark', isDark)
  }, [])
  const toggle = () => {
    const next = !dark
    setDark(next)
    document.documentElement.classList.toggle('dark', next)
    localStorage.setItem('theme', next ? 'dark' : 'light')
  }
  return <button onClick={toggle} className="rounded-full border px-3 py-1 text-sm">{dark ? '🌙 Dark' : '☀️ Light'}</button>
}
