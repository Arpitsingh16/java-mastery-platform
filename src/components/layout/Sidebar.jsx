import { NavLink } from 'react-router-dom'

import { modules } from '../../data/modules'

export default function Sidebar() {
  return (
    <aside className="hidden lg:flex w-72 flex-col border-r border-slate-800 bg-slate-950">
      
      <div className="p-6">
        
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-400">
          Java Roadmap
        </h2>

        <nav className="space-y-2">
          
          {modules.map((module) => (
            <NavLink
              key={module.id}
              to={`/module/${module.id}`}
              className={({ isActive }) =>
                `
                block rounded-lg px-4 py-3 text-sm transition
                ${
                  isActive
                    ? 'bg-orange-500 text-white'
                    : 'text-slate-300 hover:bg-slate-800'
                }
                `
              }
            >
              {module.id}. {module.title}
            </NavLink>
          ))}
        </nav>
      </div>
    </aside>
  )
}