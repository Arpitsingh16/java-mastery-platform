import { useParams } from 'react-router-dom'

import { projectDetails } from '../data/projectDetails'

export default function ProjectDetailsPage() {

  const { slug } = useParams()

  const project = projectDetails[slug]

  if (!project) {
    return (
      <div className="p-10 text-4xl font-bold text-red-500">
        Project not found
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-6xl">

      <div
        className="
          rounded-3xl border
          border-slate-800
          bg-slate-900/60 p-10
        "
      >

        <div className="mb-6 flex flex-wrap gap-4">

          <span
            className="
              rounded-full bg-orange-500/10
              px-4 py-2 text-sm
              font-medium text-orange-400
            "
          >
            {project.category}
          </span>

          <span
            className="
              rounded-full bg-slate-800
              px-4 py-2 text-sm
              text-slate-300
            "
          >
            {project.difficulty}
          </span>

        </div>

        <h1 className="text-5xl font-black">
          {project.title}
        </h1>

        <p className="mt-6 max-w-3xl text-xl leading-relaxed text-slate-300">
          {project.description}
        </p>

      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-2">

        <div
          className="
            rounded-3xl border border-slate-800
            bg-slate-900/60 p-8
          "
        >
          <h2 className="mb-6 text-3xl font-bold">
            Objective
          </h2>

          <p className="text-slate-300">
            {project.objective}
          </p>
        </div>

        <div
          className="
            rounded-3xl border border-slate-800
            bg-slate-900/60 p-8
          "
        >
          <h2 className="mb-6 text-3xl font-bold">
            Features
          </h2>

          <ul className="space-y-4">
            {project.features.map((feature) => (
              <li
                key={feature}
                className="text-slate-300"
              >
                • {feature}
              </li>
            ))}
          </ul>
        </div>

      </div>

      <div
        className="
          mt-10 rounded-3xl border
          border-slate-800
          bg-slate-900/60 p-8
        "
      >
        <h2 className="mb-6 text-3xl font-bold">
          Concepts Used
        </h2>

        <div className="flex flex-wrap gap-4">
          {project.conceptsUsed.map((concept) => (
            <span
              key={concept}
              className="
                rounded-full bg-slate-800
                px-4 py-2 text-sm
                text-slate-300
              "
            >
              {concept}
            </span>
          ))}
        </div>
      </div>

      <div
        className="
          mt-10 rounded-3xl border
          border-slate-800
          bg-slate-900/60 p-8
        "
      >
        <h2 className="mb-6 text-3xl font-bold">
          Folder Structure
        </h2>

        <pre
          className="
            overflow-x-auto rounded-2xl
            bg-slate-950 p-6 text-sm
            text-orange-400
          "
        >
          {project.folderStructure}
        </pre>
      </div>

      <div
        className="
          mt-10 rounded-3xl border
          border-slate-800
          bg-slate-900/60 p-8
        "
      >
        <h2 className="mb-8 text-3xl font-bold">
          Step-by-Step Build Plan
        </h2>

        <div className="space-y-8">

          {project.implementationSteps.map(
            (item) => (
              <div
                key={item.step}
                className="
                  rounded-2xl border
                  border-slate-800
                  bg-slate-950/60 p-6
                "
              >
                <div
                  className="
                    mb-4 inline-flex h-10 w-10
                    items-center justify-center
                    rounded-full bg-orange-500
                    font-bold text-white
                  "
                >
                  {item.step}
                </div>

                <h3 className="text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-4 text-slate-300">
                  {item.description}
                </p>
              </div>
            )
          )}

        </div>
      </div>

      <div
        className="
          mt-10 rounded-3xl border
          border-slate-800
          bg-slate-900/60 p-8
        "
      >
        <h2 className="mb-6 text-3xl font-bold">
          Bonus Challenges
        </h2>

        <ul className="space-y-4">
          {project.bonusChallenges.map(
            (challenge) => (
              <li
                key={challenge}
                className="text-slate-300"
              >
                • {challenge}
              </li>
            )
          )}
        </ul>
      </div>

      <div
        className="
          mt-10 rounded-3xl border
          border-slate-800
          bg-slate-900/60 p-8
        "
      >
        <h2 className="mb-6 text-3xl font-bold">
          Expected Output
        </h2>

        <pre
          className="
            overflow-x-auto rounded-2xl
            bg-slate-950 p-6 text-sm
            text-green-400
          "
        >
          {project.expectedOutput}
        </pre>
      </div>

    </div>
  )
}