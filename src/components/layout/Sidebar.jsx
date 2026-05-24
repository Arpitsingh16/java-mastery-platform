import { NavLink } from 'react-router-dom'

import {
  BookOpen,
  CheckCircle2,
} from 'lucide-react'

import { modules } from '../../data/modules'

import useProgress from '../../hooks/useProgress'

export default function Sidebar() {
  const { completedLessons } =
    useProgress()

  return (
    <aside
      className="
        hidden lg:flex
        h-[calc(100vh-64px)]
        w-80 flex-col
        border-r border-slate-800
        bg-slate-950/80
        backdrop-blur-xl
      "
    >
      <div className="border-b border-slate-800 p-6">
        
        <h2 className="text-lg font-bold">
          Java Roadmap
        </h2>

        <p className="mt-2 text-sm text-slate-400">
          Structured learning path
        </p>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        
        <nav className="space-y-2">
          
          {modules.map((module) => {
            const completed =
              module.lessons.filter(
                (lesson) =>
                  completedLessons.includes(
                    lesson.slug
                  )
              ).length

            return (
              <NavLink
                key={module.id}
                to={`/module/${module.id}`}
                className={({ isActive }) =>
                  `
                  group block rounded-2xl
                  border p-4 transition
                  ${
                    isActive
                      ? 'border-orange-500 bg-orange-500/10'
                      : 'border-slate-800 bg-slate-900/50 hover:border-slate-700'
                  }
                  `
                }
              >
                <div className="flex items-start justify-between">
                  
                  <div className="flex gap-3">
                    
                    <div
                      className="
                        mt-1 rounded-lg
                        bg-slate-800 p-2
                      "
                    >
                      <BookOpen size={16} />
                    </div>

                    <div>
                      <div className="font-semibold">
                        {module.title}
                      </div>

                      <div className="mt-1 text-sm text-slate-400">
                        {completed}/
                        {
                          module.lessons
                            .length
                        } lessons complete
                      </div>
                    </div>
                  </div>

                  {completed ===
                    module.lessons.length && (
                    <CheckCircle2
                      className="text-green-500"
                      size={18}
                    />
                  )}
                </div>
              </NavLink>
            )
          })}
        </nav>
      </div>
    </aside>
  )
}