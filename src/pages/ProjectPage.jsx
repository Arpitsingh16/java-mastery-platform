import { useParams } from 'react-router-dom'

import { projects } from '../data/projects'

import ProjectDetails from '../components/projects/ProjectDetails'

export default function ProjectPage() {
  const { slug } = useParams()

  const project = projects.find(
    (p) => p.slug === slug
  )

  if (!project) {
    return <h1>Project not found</h1>
  }

  return (
    <div className="mx-auto max-w-6xl">
      
      <div className="mb-12">
        
        <div className="mb-4 flex flex-wrap items-center gap-4">
          
          <span
            className="
              rounded-full bg-orange-500/10
              px-4 py-1 text-sm
              text-orange-400
            "
          >
            {project.level}
          </span>

          <span className="text-slate-400">
            {project.duration}
          </span>
        </div>

        <h1 className="mb-6 text-6xl font-black">
          {project.title}
        </h1>

        <p className="max-w-3xl text-xl text-slate-400">
          {project.description}
        </p>
      </div>

      <div className="mb-12 rounded-3xl border border-orange-500/20 bg-orange-500/5 p-8">
        
        <h2 className="mb-4 text-3xl font-bold text-orange-400">
          Project Objective
        </h2>

        <p className="text-lg">
          {project.objective}
        </p>
      </div>

      <div className="mb-12 grid gap-8 lg:grid-cols-2">
        
        <ProjectDetails
          title="Features"
          items={project.features}
        />

        <ProjectDetails
          title="Concepts Used"
          items={project.concepts}
        />
      </div>

      <div className="mb-12 rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
        
        <h2 className="mb-6 text-3xl font-bold">
          Folder Structure
        </h2>

        <pre
          className="
            overflow-x-auto rounded-2xl
            bg-slate-950 p-6 text-sm
          "
        >
          {project.folderStructure}
        </pre>
      </div>

      <div className="mb-12">
        
        <ProjectDetails
          title="Step-by-Step Build Plan"
          items={project.steps}
        />
      </div>

      <div>
        
        <ProjectDetails
          title="Bonus Challenges"
          items={project.challenges}
        />
      </div>
    </div>
  )
}