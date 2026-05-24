import { Link, useParams } from 'react-router-dom'

import { modules } from '../data/modules'

export default function ModulePage() {
  const { id } = useParams()

  const module = modules.find(
    (m) => m.id === Number(id)
  )

  if (!module) {
    return <h1>Module not found</h1>
  }

  return (
    <div className="mx-auto max-w-5xl">
      
      <div className="mb-10">
        
        <h1 className="mb-4 text-5xl font-bold">
          {module.title}
        </h1>

        <p className="text-lg text-slate-400">
          {module.description}
        </p>
      </div>

      <div className="space-y-4">
        
        {module.lessons.map((lesson) => (
          <Link
            key={lesson.slug}
            to={`/lesson/${lesson.slug}`}
            className="block rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:border-orange-500"
          >
            <h2 className="text-2xl font-semibold">
              {lesson.title}
            </h2>
          </Link>
        ))}
      </div>

      <div className="mt-12 rounded-2xl border border-orange-500/30 bg-orange-500/10 p-8">
        
        <h2 className="mb-4 text-3xl font-bold text-orange-400">
          Module Project
        </h2>

        <p className="text-xl">
          {module.project.title}
        </p>
      </div>
    </div>
  )
}