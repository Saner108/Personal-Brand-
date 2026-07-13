import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
}

const groups = [
  {
    category: 'Data & Analytics',
    skills: [
      'Excel / VBA',
      'Python (pandas, NumPy)',
      'SQL',
      'Power BI / Tableau',
      'Financial Modeling',
      'Statistical Analysis',
    ],
  },
  {
    category: 'AI & Dev Tools',
    skills: [
      'Claude API',
      'ChatGPT / Prompt Engineering',
      'Base44',
      'React / Vite',
      'Framer Motion',
      'Git / GitHub',
    ],
  },
  {
    category: 'Domain Expertise',
    skills: [
      'Nutrition Science',
      'Program Design',
      'Client Behavior Change',
      'Macro / Caloric Planning',
      'Corporate Finance',
      'Business Operations',
    ],
  },
]

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })

  return (
    <section id="skills" ref={ref} className="px-6 md:px-12 lg:px-20 py-28 md:py-36">
      <div className="max-w-5xl">
        <motion.p
          className="text-sm uppercase tracking-[0.2em] text-offwhite/30 mb-10 font-body"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={0}
        >
          Skills
        </motion.p>

        <motion.h2
          className="font-display font-semibold text-offwhite leading-tight tracking-tight mb-16"
          style={{ fontSize: 'clamp(1.9rem, 4vw, 3.2rem)' }}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={1}
        >
          What I work with.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-offwhite/10">
          {groups.map((group, gi) => (
            <motion.div
              key={group.category}
              className="py-10 md:pr-12 border-b md:border-b-0 md:border-r border-offwhite/10 last:border-r-0 last:border-b-0 md:last:pr-0 md:pl-10 first:pl-0"
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              custom={gi + 2}
            >
              <h3 className="font-body font-medium text-xs uppercase tracking-[0.18em] text-offwhite/35 mb-6">
                {group.category}
              </h3>
              <ul className="space-y-3">
                {group.skills.map((skill) => (
                  <li key={skill} className="font-body text-offwhite/70 text-sm leading-snug">
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
