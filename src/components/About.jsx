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

const stat = (label, value) => ({ label, value })
const stats = [
  stat('Years coaching', '[X+]'),
  stat('Clients trained', '[X+]'),
  stat('Current GPA', '[X.X]'),
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-15% 0px' })

  return (
    <section id="about" ref={ref} className="px-6 md:px-12 lg:px-20 py-28 md:py-36">
      <div className="max-w-5xl">
        <motion.p
          className="text-sm uppercase tracking-[0.2em] text-offwhite/30 mb-10 font-body"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={0}
        >
          About
        </motion.p>

        <div className="grid lg:grid-cols-[1fr_340px] gap-16 lg:gap-24">
          <div>
            <motion.h2
              className="font-display font-semibold text-offwhite leading-tight tracking-tight mb-8"
              style={{ fontSize: 'clamp(1.9rem, 4vw, 3.2rem)' }}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              custom={1}
            >
              The through-line is
              <br />
              always optimization.
            </motion.h2>

            <motion.div
              className="space-y-5 text-offwhite/65 font-body leading-relaxed text-base md:text-lg"
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              custom={2}
            >
              <p>
                I spent [X] years in personal training and nutrition coaching because I was obsessed
                with one problem: how do you get the most out of a human system? Macro splits,
                progressive overload, recovery windows — it's all just applied data science before
                anyone calls it that.
              </p>
              <p>
                Somewhere along the way I realized the tools I was building in my head — meal
                plan generators, intake trackers, performance models — were software problems. So I
                started learning to build them.
              </p>
              <p>
                Now I'm a Business Analytics & Finance student who codes on the side and uses AI
                as a co-pilot, not a shortcut. I'm interested in the space where domain expertise
                meets intelligent systems — places where knowing the problem deeply is still the
                hardest part.
              </p>
            </motion.div>
          </div>

          <motion.div
            className="space-y-8 pt-2"
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            custom={3}
          >
            {stats.map(({ label, value }) => (
              <div key={label} className="border-t border-offwhite/10 pt-6">
                <div
                  className="font-display font-semibold text-offwhite mb-1"
                  style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)' }}
                >
                  {value}
                </div>
                <div className="text-sm text-offwhite/40 font-body tracking-wide">{label}</div>
              </div>
            ))}

            <div className="border-t border-offwhite/10 pt-6">
              <div className="text-sm text-offwhite/40 font-body tracking-wide mb-3">Currently</div>
              <div className="text-offwhite/70 font-body text-sm leading-relaxed">
                [University Name] — Business Analytics & Finance
                <br />
                Expected graduation: [Month Year]
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
