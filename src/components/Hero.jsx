import { useRef } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Hero() {
  const ref = useRef(null)
  const reduceMotion = useReducedMotion()

  // As the user scrolls past, the hero settles back and dims behind the
  // incoming About section rather than sliding away as a static block.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.96])
  const y = useTransform(scrollYProgress, [0, 1], [0, -40])
  const recede = reduceMotion ? {} : { opacity, scale, y }

  return (
    <section
      ref={ref}
      id="hero"
      className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-20 pt-24 pb-16"
    >
      <motion.div
        style={recede}
        className="max-w-6xl grid lg:grid-cols-[1fr_320px] gap-16 items-center"
      >
        <div className="max-w-2xl">
          <motion.p
            className="text-sm uppercase tracking-[0.2em] text-offwhite/60 mb-8 font-body"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            Cesar Sanchez
          </motion.p>

          <motion.h1
            className="font-display font-semibold text-offwhite leading-[1.02] tracking-tight mb-8"
            style={{ fontSize: 'clamp(2.8rem, 6vw, 5.5rem)' }}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            Finance.
            <br />
            Business Analytics.
            <br />
            <span className="text-offwhite/50">AI.</span>
          </motion.h1>

          <motion.p
            className="font-body text-offwhite/60 text-lg md:text-xl max-w-xl leading-relaxed mb-12"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
          >
            Building data-driven applications that combine finance, analytics, and AI.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
          >
            <a
              href="#projects"
              className="inline-block border border-offwhite/20 px-8 py-3.5 text-sm font-body font-medium tracking-wide text-offwhite hover:border-offwhite/50 active:scale-[0.98] transition duration-200"
            >
              See the work
            </a>
            <a
              href="#contact"
              className="inline-block px-8 py-3.5 text-sm font-body font-medium tracking-wide text-offwhite/60 hover:text-offwhite active:scale-[0.98] transition duration-200"
            >
              Get in touch →
            </a>
          </motion.div>
        </div>

        <motion.div
          className="hidden lg:block"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1.5}
        >
          <img
            src="/images/headshot.jpg"
            alt="Cesar Sanchez"
            className="w-full max-w-xs mx-auto border border-offwhite/10 grayscale-0"
          />
        </motion.div>
      </motion.div>

      {/* Subtle scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-6 md:left-12 lg:left-20 flex items-center gap-3 text-offwhite/60 text-xs tracking-widest uppercase font-body"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
      >
        <motion.div
          className="w-px h-8 bg-offwhite/20"
          animate={{ scaleY: [1, 0.4, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          style={{ originY: 0 }}
        />
        Scroll
      </motion.div>
    </section>
  )
}
