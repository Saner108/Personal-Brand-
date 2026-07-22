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
    problem:
      'Meal planning that actually accounts for a person\'s goals, dietary constraints, and budget takes real time and expertise most people don\'t have.',
    method:
      'Built an AI-powered meal planning app integrating Claude, ChatGPT, and Base44 — end-to-end prototype from concept to working product, generating personalized plans with real macro/nutrition tracking.',
    value:
      'Demonstrates full-stack AI product development — prompt engineering, workflow design, and shipping a usable tool, not just a proof-of-concept.',
    tech: ['Claude API', 'ChatGPT', 'Base44', 'Prompt Engineering', 'Product Development'],
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
    problem:
      'Aquarium staff needed to track animal diet and nutrition data with no formal system in place — informal tracking risked errors and slow retrieval.',
    method:
      'Designed and built a normalized Microsoft Access relational database with VBA interface elements, applying proper database design principles for a real institutional client.',
    value:
      'Shows database design fundamentals (normalization, relationships, queries) applied to a real operational need, not a classroom exercise.',
    tech: ['Microsoft Access', 'VBA', 'Relational Database Design', 'Data Normalization'],
    status: 'Completed',
    // No public repo for this institutional client project — omit link per spec.
    link: null,
    image: null,
    flagship: false,
  },
  {
    id: 'financial-forecast',
    label: 'Project',
    name: 'Financial Forecasting Model',
    problem:
      'A static budget can\'t show how different financial decisions — debt payoff pace, savings rate, major purchases — play out over time.',
    method:
      'Built a scenario-analysis model in Excel that projects income, expenses, and net worth under different assumptions, turning a static budget into a dynamic decision-support tool.',
    value:
      'Demonstrates forecasting, sensitivity analysis, and financial modeling — core analyst skills applied to a real, ongoing personal use case.',
    tech: ['Excel', 'Scenario Modeling', 'Sensitivity Analysis', 'Financial Forecasting'],
    status: 'Completed',
    link: 'https://github.com/Saner108/Excel-Business-Analytics-Portfolio',
    image: '/images/financial-forecasting-screenshot.jpg',
    flagship: false,
  },
  {
    id: 'inventory-tracking',
    label: 'Project',
    name: 'Inventory Tracking System',
    problem:
      'A weekly nutrition program had no formal inventory process — ingredients and supplies were tracked by memory, risking shortages mid-session.',
    method:
      'Built the first structured inventory tracking system from scratch, with category organization, variance tracking, and stock-level visibility.',
    value:
      'Shows the ability to design a system where none existed — structuring ambiguous, ad hoc processes into repeatable operations.',
    tech: ['Excel', 'Pivot Tables', 'Variance Analysis', 'Process Design'],
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
            <span className="text-xs uppercase tracking-[0.18em] text-offwhite/60 font-body">
              {project.label}
            </span>
            <span className="text-xs text-offwhite/60 font-body">·</span>
            <span className="text-xs text-offwhite/60 font-body">{project.status}</span>
          </div>

          <h3
            className="font-display font-semibold text-offwhite mb-6 tracking-tight"
            style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)' }}
          >
            {project.name}
          </h3>

          <dl className="mb-8 space-y-5">
            {[
              ['Problem', project.problem],
              ['Method', project.method],
              ['Value', project.value],
            ].map(([term, description]) => (
              <div key={term}>
                <dt className="text-[11px] uppercase tracking-[0.18em] text-offwhite/45 font-body mb-1.5">
                  {term}
                </dt>
                <dd className="text-offwhite/70 font-body text-sm md:text-[15px] leading-relaxed">
                  {description}
                </dd>
              </div>
            ))}
          </dl>

          {project.tech.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs font-body text-offwhite/60 border border-offwhite/10 px-3 py-1"
                >
                  {t}
                </span>
              ))}
            </div>
          )}

          {(project.link || project.demo) && (
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {project.link && (
                <a
                  href={project.link}
                  className="text-sm font-body text-offwhite/60 hover:text-offwhite transition-colors duration-200 tracking-wide"
                >
                  {project.link} →
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  className="text-sm font-body text-offwhite/60 hover:text-offwhite transition-colors duration-200 tracking-wide"
                >
                  {project.demo} →
                </a>
              )}
            </div>
          )}
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
            <p className="text-offwhite/60 font-body text-sm tracking-wide">
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
          className="text-sm uppercase tracking-[0.2em] text-offwhite/60 mb-10 font-body"
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
