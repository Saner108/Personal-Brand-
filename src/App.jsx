import { LazyMotion, domAnimation, MotionConfig } from 'framer-motion'
import { SpeedInsights } from '@vercel/speed-insights/react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import GradientThread from './components/GradientThread'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Certifications from './components/Certifications'
import Education from './components/Education'
import Contact from './components/Contact'
import Section from './components/Section'

export default function App() {
  return (
    <LazyMotion features={domAnimation}>
      <MotionConfig reducedMotion="user">
        <div className="bg-graphite text-offwhite min-h-screen">
          <Nav />
          <main>
            <Hero />
            <Section>
              <About />
            </Section>
            <GradientThread />
            <Section>
              <Projects />
            </Section>
            <Section>
              <Skills />
            </Section>
            <Section>
              <Experience />
            </Section>
            <Section>
              <Certifications />
            </Section>
            <Section>
              <Education />
            </Section>
            <Section>
              <Contact />
            </Section>
          </main>
          <SpeedInsights />
        </div>
      </MotionConfig>
    </LazyMotion>
  )
}
