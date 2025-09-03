import Nav from './components/Nav'
import Hero from './components/Hero'
import Wins from './components/Wins'
import Skills from './components/Skills'
import Timeline from './components/Timeline'
import Projects from './components/Projects'
import Badges from './components/Badges'
import CredlyEmbeds from './components/CredlyEmbeds'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div id="top" className="min-h-dvh bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-950 text-slate-900 dark:text-slate-100">
      <Nav />
      <Hero />
      <Wins />
      <Skills />
      <Timeline />
      <Projects />
      <Badges />
      <CredlyEmbeds />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}
