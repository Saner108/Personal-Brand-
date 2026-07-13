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
    id: 'nutricook-ai',
    label: 'Flagship',
    name: 'NutriCook AI',
    tagline:
      'An AI-powered meal planning platform that generates personalized meal recommendations based on nutrition goals, available ingredients, dietary preferences, and budget constraints.',
    description:
      'Designed the application using modern AI workflows, integrating ChatGPT, Claude, and Base44 to power prompt engineering, recommendation logic, and iterative product development. Building a scalable MVP that combines AI-assisted decision making, nutrition optimization, and budget tracking while following an end-to-end product development process from concept to deployment.',
    tech: ['Artificial Intelligence', 'Prompt Engineering', 'ChatGPT', 'Claude', 'Base44'],
    status: 'In Development',
    link: 'https://github.com/Saner108/nutricook-ai',
    demo: '[Live Demo URL]',
    flagship: true,
  },
  {
    id: 'nutrition-db',
    label: 'Project',
    name: 'Animal Diet & Nutrition Tracking Database',
    tagline:
      'A relational database built in Microsoft Access to organize and manage animal diet and nutrition records for operational tracking.',
    description:
      'Created normalized tables, relationships, queries, forms, and VBA-driven interface components to improve data accuracy, simplify record management, and streamline reporting. Applied database design principles to replace manual workflows with a structured information system that supports faster data retrieval and improved operational efficiency.',
    tech: ['Microsoft Access', 'SQL Queries', 'VBA', 'Relational Database Design', 'Database Normalization'],
    status: 'Completed',
    link: 'https://github.com/Saner108/Excel-Business-Analytics-Portfolio',
    flagship: false,
  },
  {
    id: 'financial-forecast',
    label: 'Project',
    name: 'Financial Forecasting Model',
    tagline:
      'A dynamic financial forecasting model in Microsoft Excel to analyze cash flow, income, expenses, debt, savings, and investment growth within a single decision-support dashboard.',
    description:
      'Implemented scenario analysis to evaluate the long-term financial impact of different spending, saving, and investment strategies, transforming a traditional budget into an interactive forecasting and planning tool.',
    tech: ['Microsoft Excel', 'Financial Modeling', 'Forecasting', 'Scenario Analysis'],
    status: 'Completed',
    link: 'https://github.com/Saner108/Excel-Business-Analytics-Portfolio',
    flagship: false,
  },
  {
    id: 'inventory-tracking',
    label: 'Project',
    name: 'Inventory Tracking System',
    tagline:
      'An Excel-based inventory management system to monitor ingredients and supplies for recurring nutrition program classes.',
    description:
      'Automated inventory tracking with structured data entry, improving stock visibility, reducing manual errors, and supporting more efficient weekly meal-preparation planning. The system streamlined inventory management and provided a repeatable process for operational decision-making.',
    tech: ['Microsoft Excel', 'Inventory Management', 'Process Improvement', 'Data Organization'],
    status: 'Completed',
    link: 'https://github.com/Saner108/Excel-Business-Analytics-Portfolio',
    flagship: false,
  },
]

function ProjectCard({ project, index, inView }) {
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
