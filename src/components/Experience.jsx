import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  }),
}

const roles = [
  {
    title: 'Head Nutrition Coach',
    org: 'TAMUCC · Jun 2025–Present',
    description:
      'Oversee personalized nutrition coaching and cooking classes for the campus community, designing individualized guidance around sustainable, realistic habits rather than one-size-fits-all plans.',
  },
  {
    title: 'Group Fitness Instructor',
    org: 'TAMUCC · Sep 2024–Present',
    description:
      'Lead high-energy HIIT classes focused on functional movement and cardio conditioning for a recurring member base.',
  },
  {
    title: 'Personal Trainer',
    org: 'TAMUCC · Aug 2023–Present',
    description:
      'Design individualized training programs tailored to client goals — fat loss, muscle gain, and general performance — with ongoing program adjustments based on progress.',
  },
  {
    title: 'Member Ambassador',
    org: 'Orangetheory Fitness · Oct 2022–Aug 2023',
    description:
      'Managed sales transactions and class scheduling logistics, improving accuracy in a high-volume environment and contributing to fewer no-shows.',
  },
  {
    title: 'Sales and Service Expert',
    org: '24 Hour Fitness · Dec 2021–Oct 2022',
    description:
      'Advised customers on fitness products and services, supporting informed purchasing decisions in a fast-paced retail environment.',
  },
]

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })

  return (
    <section id="experience" ref={ref} className="px-6 md:px-12 lg:px-20 py-28 md:py-36">
      <div className="max-w-5xl">
        <motion.p
          className="text-sm uppercase tracking-[0.2em] text-offwhite/60 mb-10 font-body"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={0}
        >
          Experience
        </motion.p>

        <motion.h2
          className="font-display font-semibold text-offwhite leading-tight tracking-tight mb-16"
          style={{ fontSize: 'clamp(1.9rem, 4vw, 3.2rem)' }}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={1}
        >
          Where I've led.
        </motion.h2>

        <div className="space-y-0 border-t border-offwhite/10">
          {roles.map((role, i) => (
            <motion.div
              key={role.title}
              className="grid md:grid-cols-[280px_1fr] gap-4 md:gap-16 py-10 border-b border-offwhite/10"
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              custom={i + 2}
            >
              <div>
                <h3 className="font-display font-semibold text-offwhite text-lg md:text-xl mb-1">
                  {role.title}
                </h3>
                {role.org && (
                  <p className="text-offwhite/60 font-body text-sm">{role.org}</p>
                )}
              </div>
              <p className="text-offwhite/55 font-body text-sm md:text-base leading-relaxed">
                {role.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
