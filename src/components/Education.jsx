import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
}

const schools = [
  {
    name: 'Texas A&M University–Corpus Christi',
    degree: 'Dual BBA — Finance; Business Analytics & Information Systems',
    dates: 'Expected Spring 2027',
  },
  {
    name: 'Tarrant County College',
    degree: 'Associate of Arts, Management Information Systems',
    dates: 'Aug 2021 – Apr 2023',
  },
]

export default function Education() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })

  return (
    <section id="education" ref={ref} className="px-6 md:px-12 lg:px-20 py-28 md:py-36">
      <div className="max-w-5xl">
        <motion.p
          className="text-sm uppercase tracking-[0.2em] text-offwhite/60 mb-10 font-body"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={0}
        >
          Education
        </motion.p>

        <div className="space-y-12">
          {schools.map((school, i) => (
            <motion.div
              key={school.name}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              custom={i + 1}
              className="border-t border-offwhite/10 pt-8"
            >
              <h2
                className="font-display font-semibold text-offwhite leading-tight tracking-tight mb-3"
                style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)' }}
              >
                {school.name}
              </h2>
              <p className="text-offwhite/60 font-body text-base md:text-lg mb-2">
                {school.degree}
              </p>
              <p className="text-offwhite/60 font-body text-sm tracking-wide">{school.dates}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
