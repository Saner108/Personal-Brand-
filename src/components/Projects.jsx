import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  }),
}

const projects = [
  {
    id: 'meal-planner',
    label: 'Flagship',
    name: '[App Name]',
    tagline: 'An AI-powered meal planning app that generates weekly plans, adjusts macros on the fly, and learns your preferences.',
    description:
      "This started as a spreadsheet I made for my own clients. It grew into a full product idea when I realized how much time coaches spend doing what a model could do in seconds. I built the MVP using Base44 for the backend, wired in the Claude API for meal generation, and iterated with ChatGPT as a rubber duck. It's not perfect — the UX still needs work — but the core logic is solid and clients who've used it actually stick to their plans.",
    tech: ['Base44', 'Claude API', 'ChatGPT', 'React'],
    status: 'In Development',
    link: '[GitHub / Live URL]',
    flagship: true,
  },
  {
    id: 'excel-models',
    label: 'Project',
    name: 'Excel/VBA Financial Models',
    tagline: 'Inventory tracking system and financial models built in Excel with custom VBA automation.',
    description:
      "Built to solve real operational problems — one model tracks inventory with automatic reorder alerts and variance reporting, another handles budget-vs-actual analysis with dynamic visualizations. The VBA scripts cut manual update time from [X hours] to [X minutes] per week.",
    tech: ['Excel', 'VBA', 'Financial Modeling', 'Data Visualization'],
    status: 'Completed',
    link: '[GitHub / Portfolio Link]',
    flagship: false,
  },
  {
    id: 'placeholder',
    label: 'Coming Soon',
    name: '[Next Project]',
    tagline: 'Placeholder for the next thing I build. Check back.',
    description: '',
    tech: [],
    status: 'Planned',
    link: null,
    flagship: false,
    placeholder: true,
  },
]

function ProjectCard({ project, index, inView }) {
  if (project.placeholder) {
    return (
      <motion.div
        className="border border-dashed border-offwhite/10 p-8 flex items-center justify-center min-h-[200px]"
        variants={fadeUp}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        custom={index}
      >
        <p className="text-offwhite/25 font-body text-sm tracking-wide">[Next project — TBD]</p>
      </motion.div>
    )
  }

  return (
    <motion.article
      className={`border border-offwhite/10 hover:border-offwhite/20 transition-colors duration-500 ${
        project.flagship ? 'lg:col-span-2' : ''
      }`}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      custom={index}
    >
      <div className={`p-8 md:p-10 ${project.flagship ? 'lg:grid lg:grid-cols-[1fr_1fr] lg:gap-16' : ''}`}>
        <div>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs uppercase tracking-[0.18em] text-offwhite/30 font-body">
              {project.label}
            </span>
            <span className="text-xs text-offwhite/20 font-body">·</span>
            <span className="text-xs text-offwhite/30 font-body">{project.status}</span>
          </div>

          <h3
            className="font-display font-semibold text-offwhite mb-3 tracking-tight"
            style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)' }}
          >
            {project.name}
          </h3>

          <p className="text-offwhite/50 font-body text-base mb-6 leading-relaxed">
            {project.tagline}
          </p>

          {project.tech.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs font-body text-offwhite/40 border border-offwhite/10 px-3 py-1"
                >
                  {t}
                </span>
              ))}
            </div>
          )}

          {project.link && (
            <a
              href={project.link}
              className="text-sm font-body text-offwhite/40 hover:text-offwhite transition-colors duration-200 tracking-wide"
            >
              {project.link} →
            </a>
          )}
        </div>

        {project.flagship && project.description && (
          <div className="mt-8 lg:mt-0 pt-8 lg:pt-0 border-t lg:border-t-0 lg:border-l border-offwhite/8 lg:pl-16">
            <p className="text-offwhite/45 font-body text-sm leading-relaxed">
              {project.description}
            </p>
          </div>
        )}
      </div>
    </motion.article>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })

  return (
    <section id="projects" ref={ref} className="px-6 md:px-12 lg:px-20 py-28 md:py-36">
      <div className="max-w-5xl">
        <motion.p
          className="text-sm uppercase tracking-[0.2em] text-offwhite/30 mb-10 font-body"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={0}
        >
          Projects
        </motion.p>

        <motion.h2
          className="font-display font-semibold text-offwhite leading-tight tracking-tight mb-16"
          style={{ fontSize: 'clamp(1.9rem, 4vw, 3.2rem)' }}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={1}
        >
          Things I've built.
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-offwhite/5">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i + 2}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
