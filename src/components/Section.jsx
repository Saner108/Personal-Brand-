import { useRef } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'

// Scroll-scrubbed section continuity: each section eases in as it enters the
// viewport and recedes as it leaves, so boundaries read as one continuous
// story instead of stacked blocks. Entry/exit are measured against viewport
// positions (not section height), so tall sections sit at full presence for
// their whole readable range.
export default function Section({ children }) {
  const ref = useRef(null)
  const reduceMotion = useReducedMotion()

  const { scrollYProgress: entry } = useScroll({
    target: ref,
    offset: ['start 0.98', 'start 0.55'],
  })
  const { scrollYProgress: exit } = useScroll({
    target: ref,
    offset: ['end 0.45', 'end 0.02'],
  })

  const entryOpacity = useTransform(entry, [0, 1], [0.25, 1])
  const exitOpacity = useTransform(exit, [0, 1], [1, 0.25])
  const opacity = useTransform([entryOpacity, exitOpacity], ([a, b]) => a * b)
  const y = useTransform([entry, exit], ([a, b]) => (1 - a) * 24 + b * -24)

  if (reduceMotion) {
    return <div ref={ref}>{children}</div>
  }

  return (
    <motion.div ref={ref} style={{ opacity, y }}>
      {children}
    </motion.div>
  )
}
