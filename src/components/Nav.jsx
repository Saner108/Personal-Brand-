import { useState, useEffect } from 'react'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav() {
  const [hidden, setHidden] = useState(false)
  const [atTop, setAtTop] = useState(true)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const prev = scrollY.getPrevious()
    setHidden(latest > prev && latest > 80)
    setAtTop(latest < 40)
  })

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50"
      animate={hidden ? { y: -100, opacity: 0 } : { y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        className={`px-6 md:px-12 lg:px-20 h-16 flex items-center justify-between transition-colors duration-500 ${
          atTop ? 'bg-transparent' : 'bg-graphite/90 backdrop-blur-sm border-b border-offwhite/5'
        }`}
      >
        <a
          href="#hero"
          className="font-display font-semibold text-offwhite text-sm tracking-wide"
        >
          [Your Name]
        </a>

        <nav className="hidden sm:flex items-center gap-8">
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-xs uppercase tracking-[0.15em] text-offwhite/45 hover:text-offwhite transition-colors duration-200 font-body"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </motion.header>
  )
}
