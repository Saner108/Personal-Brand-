import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  }),
}

const links = [
  { label: 'Email', value: '[your@email.com]', href: 'mailto:[your@email.com]' },
  { label: 'LinkedIn', value: 'linkedin.com/in/[handle]', href: '[LinkedIn URL]' },
  { label: 'GitHub', value: 'github.com/[handle]', href: '[GitHub URL]' },
]

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })

  return (
    <section id="contact" ref={ref} className="px-6 md:px-12 lg:px-20 py-28 md:py-36 border-t border-offwhite/8">
      <div className="max-w-5xl">
        <motion.p
          className="text-sm uppercase tracking-[0.2em] text-offwhite/30 mb-10 font-body"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={0}
        >
          Contact
        </motion.p>

        <div className="grid lg:grid-cols-[1fr_auto] gap-16 items-start">
          <div>
            <motion.h2
              className="font-display font-semibold text-offwhite leading-tight tracking-tight mb-6"
              style={{ fontSize: 'clamp(1.9rem, 4vw, 3.2rem)' }}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              custom={1}
            >
              Let's talk.
            </motion.h2>

            <motion.p
              className="font-body text-offwhite/50 text-base md:text-lg max-w-md leading-relaxed mb-12"
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              custom={2}
            >
              Open to internships, freelance analytics work, and conversations about AI, data,
              or anything at the intersection of health and tech.
            </motion.p>

            <motion.div
              className="space-y-6"
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              custom={3}
            >
              {links.map(({ label, value, href }) => (
                <div key={label} className="flex items-baseline gap-6 border-t border-offwhite/8 pt-5">
                  <span className="text-xs uppercase tracking-[0.15em] text-offwhite/25 font-body w-16 shrink-0">
                    {label}
                  </span>
                  <a
                    href={href}
                    className="font-body text-offwhite/60 hover:text-offwhite transition-colors duration-200 text-sm"
                  >
                    {value}
                  </a>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            className="lg:pt-16"
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            custom={4}
          >
            <a
              href="[/resume.pdf]"
              download
              className="inline-flex items-center gap-3 border border-offwhite/20 px-7 py-4 text-sm font-body font-medium text-offwhite hover:border-offwhite/40 transition-colors duration-300 group"
            >
              <span>Download Resume</span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                className="group-hover:translate-y-0.5 transition-transform duration-200"
              >
                <path
                  d="M7 1v8M3 9l4 4 4-4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </motion.div>
        </div>

        <motion.div
          className="mt-24 border-t border-offwhite/8 pt-8 flex flex-col sm:flex-row justify-between gap-4 text-xs text-offwhite/20 font-body"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={5}
        >
          <span>[Your Name] © {new Date().getFullYear()}</span>
          <span>Built with React + Vite + Framer Motion</span>
        </motion.div>
      </div>
    </section>
  )
}
