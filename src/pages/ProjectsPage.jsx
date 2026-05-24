import { useState } from 'react'

import { projects } from '../data/projects'

import ProjectCard from '../components/projects/ProjectCard'

export default function ProjectsPage() {
  const [filter, setFilter] =
    useState('All')

  const filters = [
    'All',
    'Beginner',
    'Intermediate',
    'Advanced',
  ]

  const filteredProjects =
    filter === 'All'
      ? projects
      : projects.filter(
          (project) =>
            project.level === filter
        )

  return (
    <div className="mx-auto max-w-7xl">
      
      <div className="mb-12">
        
        <h1 className="mb-6 text-6xl font-black">
          Java Projects
        </h1>

        <p className="max-w-3xl text-xl text-slate-400">
          Build real-world Java projects to
          strengthen your programming skills.
        </p>
      </div>

      <div className="mb-10 flex flex-wrap gap-4">
        
        {filters.map((item) => (
          <button
            key={item}
            onClick={() =>
              setFilter(item)
            }
            className={`
              rounded-xl px-5 py-3
              font-medium transition
              ${
                filter === item
                  ? 'bg-orange-500 text-white'
                  : 'bg-slate-900 text-slate-300 hover:bg-slate-800'
              }
            `}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.slug}
            project={project}
          />
        ))}
      </div>
    </div>
  )
}