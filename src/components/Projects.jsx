import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform, useReducedMotion } from 'framer-motion'

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
    id: 'nutricook-ai',
    label: 'Flagship',
    name: 'NutriCook AI',
    tagline:
      'An AI-powered meal planning app that generates personalized plans from user goals, dietary needs, and budget — built by integrating Claude, ChatGPT, and Base44 into one working prototype, end to end.',
    tech: ['Artificial Intelligence', 'Prompt Engineering', 'ChatGPT', 'Claude', 'Base44'],
    status: 'In Development',
    link: 'https://github.com/Saner108/nutricook-ai',
    demo: 'https://nutricook-ai-kappa.vercel.app/',
    image: '/images/nutricook-ai-screenshot.jpg',
    flagship: true,
  },
  {
    id: 'nutrition-db',
    label: 'Project',
    name: 'Animal Diet & Nutrition Tracking Database',
    tagline:
      'A relational database that replaced a fully manual tracking process — normalized schema, VBA interface, built for real aquarium staff to use.',
    tech: ['Microsoft Access', 'SQL Queries', 'VBA', 'Relational Database Design'],
    status: 'Completed',
    link: 'https://github.com/Saner108/Excel-Business-Analytics-Portfolio',
    image: null,
    flagship: false,
  },
  {
    id: 'financial-forecast',
    label: 'Project',
    name: 'Financial Forecasting Model',
    tagline:
      'A scenario-analysis tool that turns a static budget into a decision-support system — model out debt payoff vs. investing, before you commit.',
    tech: ['Microsoft Excel', 'Financial Modeling', 'Forecasting', 'Scenario Analysis'],
    status: 'Completed',
    link: 'https://github.com/Saner108/Excel-Business-Analytics-Portfolio',
    image: '/images/financial-forecasting-screenshot.jpg',
    flagship: false,
  },
  {
    id: 'inventory-tracking',
    label: 'Project',
    name: 'Inventory Tracking System',
    tagline:
      'The first structured inventory process for a weekly nutrition program that had none — built from scratch, not retrofitted.',
    tech: ['Microsoft Excel', 'Inventory Management', 'Process Improvement'],
    status: 'Completed',
    link: 'https://github.com/Saner108/Excel-Business-Analytics-Portfolio',
    image: '/images/inventory-tracker-screenshot.jpg',
    flagship: false,
  },
]

function ProjectCard({ project, index, inView }) {
  const cardRef = useRef(null)
  const reduceMotion = useReducedMotion()

  // The gleam: a single scroll-scrubbed light sweep across the flagship
  // product screenshot — the one place on the page where light moves.
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start 0.9', 'center 0.35'],
  })
  const sweepX = useTransform(scrollYProgress, [0.15, 0.95], ['-130%', '130%'])

  return (
    <motion.article
      ref={cardRef}
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

          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {project.link && (
              <a
                href={project.link}
                className="text-sm font-body text-offwhite/40 hover:text-offwhite transition-colors duration-200 tracking-wide"
              >
                {project.link} →
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                className="text-sm font-body text-offwhite/40 hover:text-offwhite transition-colors duration-200 tracking-wide"
              >
                {project.demo} →
              </a>
            )}
          </div>
        </div>

        {project.flagship && project.image && (
          <div className="mt-8 lg:mt-0 pt-8 lg:pt-0 border-t lg:border-t-0 lg:border-l border-offwhite/8 lg:pl-16 flex items-center justify-center">
            <div className="relative overflow-hidden border border-offwhite/10">
              <img
                src={project.image}
                alt={`${project.name} screenshot`}
                loading="lazy"
                className="max-h-[420px] w-auto"
              />
              {!reduceMotion && (
                <motion.div
                  aria-hidden="true"
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    x: sweepX,
                    background:
                      'linear-gradient(105deg, transparent 40%, rgba(245,243,238,0.07) 50%, transparent 60%)',
                  }}
                />
              )}
            </div>
          </div>
        )}

        {!project.flagship && project.image && (
          <img
            src={project.image}
            alt={`${project.name} screenshot`}
            loading="lazy"
            className="w-full mt-6 border border-offwhite/10"
          />
        )}

        {!project.flagship && !project.image && (
          <div className="mt-6 border border-dashed border-offwhite/10 py-10 flex items-center justify-center">
            {/* TODO: add Aquarium DB screenshot when provided */}
            <p className="text-offwhite/25 font-body text-sm tracking-wide">
              Screenshot pending
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
          Featured Projects.
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-offwhite/5">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i + 2} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}
