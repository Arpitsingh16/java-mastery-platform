import { Link } from 'react-router-dom'

export default function ProjectCard({
  project,
}) {
  return (
    <Link
      to={`/projects/${project.slug}`}
      className="
        group block rounded-3xl
        border border-slate-800
        bg-slate-900/70 p-8
        transition hover:-translate-y-1
        hover:border-orange-500
      "
    >
      <div className="mb-4 flex items-center justify-between">
        
        <span
          className="
            rounded-full bg-orange-500/10
            px-4 py-1 text-sm
            text-orange-400
          "
        >
          {project.level}
        </span>

        <span className="text-sm text-slate-400">
          {project.duration}
        </span>
      </div>

      <h2
        className="
          mb-4 text-3xl font-bold
          transition group-hover:text-orange-400
        "
      >
        {project.title}
      </h2>

      <p className="mb-6 text-slate-400">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2">
        
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="
              rounded-lg bg-slate-800
              px-3 py-1 text-sm
            "
          >
            {tech}
          </span>
        ))}
      </div>
    </Link>
  )
}