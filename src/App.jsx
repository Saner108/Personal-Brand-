import { LazyMotion, domAnimation, MotionConfig } from 'framer-motion'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import GradientThread from './components/GradientThread'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

export default function App() {
  return (
    <LazyMotion features={domAnimation}>
      <MotionConfig reducedMotion="user">
        <div className="bg-graphite text-offwhite min-h-screen">
          <Nav />
          <main>
            <Hero />
            <About />
            <GradientThread />
            <Projects />
            <Skills />
            <Contact />
          </main>
        </div>
      </MotionConfig>
    </LazyMotion>
  )
}
