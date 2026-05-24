import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="mx-auto max-w-6xl">
      
      <section className="py-24">
        
        <div className="max-w-3xl">
          
          <span className="mb-4 inline-block rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1 text-sm text-orange-400">
            Complete Java Developer Roadmap
          </span>

          <h1 className="mb-6 text-5xl font-black leading-tight lg:text-7xl">
            Master Java
            <span className="text-orange-500">
              {' '}Step by Step
            </span>
          </h1>

          <p className="mb-10 text-lg leading-relaxed text-slate-400">
            Learn Java from beginner to advanced with
            structured lessons, projects, quizzes,
            roadmap guidance, and interview preparation.
          </p>

          <div className="flex gap-4">
            
            <Link
              to="/roadmap"
              className="flex items-center gap-2 rounded-xl bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
            >
              Start Learning
              <ArrowRight size={18} />
            </Link>

            <Link
              to="/projects"
              className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:bg-slate-800"
            >
              View Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}