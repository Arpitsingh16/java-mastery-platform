import { Link, useParams } from 'react-router-dom'

import { CheckCircle } from 'lucide-react'

import { modules } from '../data/modules'

import useProgress from '../hooks/useProgress'

export default function ModulePage() {
  const { id } = useParams()

  const module = modules.find(
    (m) => m.id === Number(id)
  )

  const {
    completedLessons,
    getModuleProgress,
  } = useProgress()

  if (!module) {
    return <h1>Module not found</h1>
  }

  return (
    <div className="mx-auto max-w-5xl">
      
      <div className="mb-10">
        
        <div className="mb-4 flex items-center justify-between">
          
          <h1 className="text-5xl font-bold">
            {module.title}
          </h1>

          <div className="rounded-xl bg-orange-500 px-4 py-2 text-sm font-semibold">
            {getModuleProgress(module)}%
          </div>
        </div>

        <p className="text-lg text-slate-400">
          {module.description}
        </p>
      </div>

      <div className="space-y-4">
        
        {module.lessons.map((lesson) => {
          const completed =
            completedLessons.includes(
              lesson.slug
            )

          return (
            <Link
              key={lesson.slug}
              to={`/lesson/${lesson.slug}`}
              className="
                flex items-center justify-between
                rounded-2xl border border-slate-800
                bg-slate-900 p-6 transition
                hover:border-orange-500
              "
            >
              <div>
                <h2 className="text-2xl font-semibold">
                  {lesson.title}
                </h2>
              </div>

              {completed && (
                <CheckCircle className="text-green-500" />
              )}
            </Link>
          )
        })}
      </div>

      <div className="mt-12 rounded-3xl border border-orange-500/30 bg-orange-500/10 p-8">
        
        <h2 className="mb-4 text-3xl font-bold text-orange-400">
          Final Module Project
        </h2>

        <p className="mb-6 text-xl">
          {module.project.title}
        </p>

        <button className="rounded-xl bg-orange-500 px-6 py-3 font-semibold">
          View Project
        </button>
      </div>
    </div>
  )
}