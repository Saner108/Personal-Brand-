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

const stats = [
  { label: 'Years Coaching/Training Experience', value: '3+' },
  { label: 'Built Systems, Zero to Production', value: '4' },
  { label: 'Business Degrees (Finance + Business Analytics)', value: '2' },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-15% 0px' })

  return (
    <section id="about" ref={ref} className="px-6 md:px-12 lg:px-20 py-28 md:py-36">
      <div className="max-w-5xl">
        <motion.p
          className="text-sm uppercase tracking-[0.2em] text-offwhite/60 mb-10 font-body"
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
              className="space-y-5 text-offwhite/65 font-body leading-relaxed text-base md:text-lg mb-10"
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              custom={2}
            >
              <p>
                I'm a double major in Finance and Business Analytics at Texas A&M
                University–Corpus Christi — and outside of that, fitness has always been a
                genuine hobby, not just a resume line. That hobby turned into real jobs: three
                years as a personal trainer, group fitness instructor, and now Head Nutrition
                Coach, designing individualized programs and coaching clients through nutrition
                change.
              </p>
              <p>
                As I've continued through school, I've gotten to develop the nutrition coaching
                program at TAMUCC, build a database for the Texas State Aquarium as a business
                project, earn certifications along the way, and build working Excel systems for
                my everyday job.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              custom={3}
            >
              <img
                src="/images/team-photo.jpg"
                alt="TAMUCC Recreational Sports staff team"
                loading="lazy"
                className="w-full border border-offwhite/10"
              />
            </motion.div>
          </div>

          <motion.div
            className="space-y-8 pt-2"
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            custom={4}
          >
            {stats.map(({ label, value }) => (
              <div key={label} className="border-t border-offwhite/10 pt-6">
                <div
                  className="font-display font-semibold text-offwhite mb-1"
                  style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)' }}
                >
                  {value}
                </div>
                <div className="text-sm text-offwhite/60 font-body tracking-wide">{label}</div>
              </div>
            ))}

            <div className="border-t border-offwhite/10 pt-6">
              <div className="text-sm text-offwhite/60 font-body tracking-wide mb-3">Currently</div>
              <div className="text-offwhite/70 font-body text-sm leading-relaxed">
                Texas A&M University–Corpus Christi
                <br />
                Expected graduation: Spring 2027
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
