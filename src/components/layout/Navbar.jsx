import { Link, NavLink } from 'react-router-dom'

import {
  Menu,
  GraduationCap,
} from 'lucide-react'

import ThemeToggle from './ThemeToggle'

export default function Navbar({
  toggleSidebar,
}) {
  const navItems = [
    {
      name: 'Roadmap',
      path: '/roadmap',
    },

    {
      name: 'Projects',
      path: '/projects',
    },

    {
      name: 'Notes',
      path: '/notes',
    },
  ]

  return (
    <header
      className="
        sticky top-0 z-50
        border-b border-slate-800/80
        bg-slate-950/80
        backdrop-blur-xl
      "
    >
      <div className="mx-auto flex h-16 max-w-[1600px] items-center justify-between px-4 lg:px-8">
        
        <div className="flex items-center gap-8">
          
          <button
            onClick={toggleSidebar}
            className="
              rounded-lg p-2 transition
              hover:bg-slate-800 lg:hidden
            "
          >
            <Menu size={22} />
          </button>

          <Link
            to="/"
            className="flex items-center gap-3"
          >
            <div
              className="
                flex h-10 w-10 items-center
                justify-center rounded-xl
                bg-orange-500/10
              "
            >
              <GraduationCap
                className="text-orange-500"
                size={22}
              />
            </div>

            <div>
              <div className="text-lg font-bold">
                Java Mastery
              </div>

              <div className="text-xs text-slate-400">
                Learn Java professionally
              </div>
            </div>
          </Link>

          <nav className="hidden items-center gap-2 lg:flex">
            
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `
                  rounded-xl px-4 py-2
                  text-sm font-medium transition
                  ${
                    isActive
                      ? 'bg-slate-800 text-white'
                      : 'text-slate-400 hover:bg-slate-900 hover:text-white'
                  }
                  `
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>
        </div>

        <ThemeToggle />
      </div>
    </header>
  )
}