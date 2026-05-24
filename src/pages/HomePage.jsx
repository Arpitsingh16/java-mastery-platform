import { Link } from 'react-router-dom'

import {
  ArrowRight,
  Code2,
  BookOpen,
  Trophy,
} from 'lucide-react'

import { motion } from 'framer-motion'

export default function HomePage() {
  const features = [
    {
      icon: <BookOpen />,
      title: 'Structured Roadmap',
      description:
        'Step-by-step Java curriculum.',
    },

    {
      icon: <Code2 />,
      title: 'Real Projects',
      description:
        'Build portfolio-ready applications.',
    },

    {
      icon: <Trophy />,
      title: 'Interview Prep',
      description:
        'Prepare for Java developer roles.',
    },
  ]

  return (
    <div className="relative overflow-hidden">
      
      <div
        className="
          absolute inset-0
          bg-[radial-gradient(circle_at_top_right,#ea580c22,transparent_30%)]
        "
      />

      <section className="relative py-24 lg:py-32">
        
        <div className="max-w-5xl">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span
              className="
                mb-6 inline-flex items-center
                rounded-full border
                border-orange-500/20
                bg-orange-500/10
                px-5 py-2 text-sm
                text-orange-400
              "
            >
              Complete Java Developer Platform
            </span>

            <h1
              className="
                mb-8 text-6xl
                font-black leading-tight
                tracking-tight
                lg:text-8xl
              "
            >
              Learn Java
              <span className="block text-orange-500">
                Professionally
              </span>
            </h1>

            <p
              className="
                mb-10 max-w-3xl
                text-xl leading-relaxed
                text-slate-400
              "
            >
              Master Java from beginner to
              advanced with structured lessons,
              quizzes, projects, roadmap guidance,
              and interview preparation.
            </p>

            <div className="flex flex-wrap gap-4">
              
              <Link
                to="/roadmap"
                className="
                  flex items-center gap-2
                  rounded-2xl bg-orange-500
                  px-8 py-4 font-semibold
                  text-white transition
                  hover:bg-orange-600
                "
              >
                Start Learning

                <ArrowRight size={18} />
              </Link>

              <Link
                to="/projects"
                className="
                  rounded-2xl border
                  border-slate-700
                  bg-slate-900/70
                  px-8 py-4 font-semibold
                  transition hover:bg-slate-800
                "
              >
                Explore Projects
              </Link>
            </div>
          </motion.div>

          <div
            className="
              mt-20 grid gap-6
              md:grid-cols-3
            "
          >
            {features.map((feature) => (
              <div
                key={feature.title}
                className="
                  rounded-3xl border
                  border-slate-800
                  bg-slate-900/60
                  p-8 backdrop-blur-sm
                "
              >
                <div
                  className="
                    mb-5 inline-flex
                    rounded-2xl bg-orange-500/10
                    p-4 text-orange-400
                  "
                >
                  {feature.icon}
                </div>

                <h3 className="mb-3 text-2xl font-bold">
                  {feature.title}
                </h3>

                <p className="text-slate-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}