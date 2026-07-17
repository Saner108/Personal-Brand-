import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export default function ThemeToggle() {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    const stored = localStorage.getItem('theme')
    const preferred =
      stored || (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark')
    setTheme(preferred)
    document.documentElement.classList.toggle('light', preferred === 'light')
  }, [])

  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    localStorage.setItem('theme', next)
    document.documentElement.classList.toggle('light', next === 'light')
  }

  const label = theme === 'dark' ? 'Light' : 'Dark'

  return (
    <button
      onClick={toggle}
      aria-label="Toggle color theme"
      className="relative text-xs uppercase tracking-[0.15em] text-offwhite/60 hover:text-offwhite transition-colors duration-200 font-body overflow-hidden inline-block h-4 w-12"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={label}
          className="absolute inset-0 flex items-center justify-end"
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.14, ease: [0.22, 1, 0.36, 1] }}
        >
          {label}
        </motion.span>
      </AnimatePresence>
    </button>
  )
}
