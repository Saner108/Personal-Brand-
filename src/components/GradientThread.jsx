import { useRef } from 'react'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'

export default function GradientThread() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 60, damping: 20 })
  const scaleY = useTransform(smoothProgress, [0, 1], [0, 1])
  const opacity = useTransform(smoothProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0])

  return (
    <div
      ref={ref}
      className="relative flex justify-center py-0"
      aria-hidden="true"
      style={{ height: '220px' }}
    >
      {/* Vertical thread */}
      <div className="relative w-px">
        <motion.div
          className="absolute top-0 left-0 w-full gradient-thread"
          style={{
            height: '100%',
            scaleY,
            opacity,
            originY: 0,
            transformOrigin: 'top center',
          }}
        />
        {/* Glow */}
        <motion.div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-full pointer-events-none"
          style={{
            opacity,
            background:
              'radial-gradient(ellipse at center, rgba(232,120,90,0.08) 0%, transparent 70%)',
            scaleY,
            originY: 0,
          }}
        />
      </div>

      {/* Connector dots */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-clay"
        style={{ opacity }}
      />
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-electric"
        style={{ opacity }}
      />
    </div>
  )
}
