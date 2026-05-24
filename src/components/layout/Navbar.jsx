import { Link } from 'react-router-dom'

import {
  Menu,
  GraduationCap,
} from 'lucide-react'

import ThemeToggle from './ThemeToggle'

export default function Navbar({
  toggleSidebar,
}) {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/90 backdrop-blur-md">
      
      <div className="flex h-16 items-center justify-between px-4 lg:px-8">
        
        <div className="flex items-center gap-6">
          
          <button
            onClick={toggleSidebar}
            className="lg:hidden"
          >
            <Menu size={24} />
          </button>

          <Link
            to="/"
            className="flex items-center gap-2"
          >
            <GraduationCap className="text-orange-500" />

            <span className="text-lg font-bold">
              Java Mastery
            </span>
          </Link>

          <nav className="hidden gap-6 lg:flex">
            
            <Link
              to="/roadmap"
              className="text-slate-300 hover:text-orange-400"
            >
              Roadmap
            </Link>

            <Link
              to="/projects"
              className="text-slate-300 hover:text-orange-400"
            >
              Projects
            </Link>

            <Link
              to="/notes"
              className="text-slate-300 hover:text-orange-400"
            >
              Notes
            </Link>
          </nav>
        </div>

        <ThemeToggle />
      </div>
    </header>
  )
}