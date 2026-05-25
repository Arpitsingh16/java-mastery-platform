import { Link, useParams } from 'react-router-dom'

import {
  CheckCircle,
  Clock3,
  Target,
} from 'lucide-react'

import { modules } from '../data/modules'

import useProgress from '../hooks/useProgress'

export default function ModulePage() {

  const { id } = useParams()

  const module = modules.find(
    (m) => m.id === Number(id)
  )

  const {
    completedLessons,
  } = useProgress()

  if (!module) {
    return (
      <h1 className="text-4xl font-bold">
        Module not found
      </h1>
    )
  }

  return (
    <div className="mx-auto max-w-6xl">

      {/* HERO */}

      <div className="mb-12">

        <div className="mb-5 flex flex-wrap items-center gap-4">

          <span
            className="
              rounded-full bg-orange-500/10
              px-4 py-2 text-sm
              text-orange-400
            "
          >
            {module.level}
          </span>

          <div className="flex items-center gap-2 text-slate-400">

            <Clock3 size={18} />

            {module.duration}

          </div>

        </div>

        <h1 className="mb-6 text-6xl font-black">
          {module.title}
        </h1>

        <p className="max-w-3xl text-xl text-slate-400">
          {module.description}
        </p>

      </div>

      {/* OBJECTIVES */}

      <div
        className="
          mb-12 rounded-3xl border
          border-slate-800
          bg-slate-900/60 p-8
        "
      >

        <div className="mb-6 flex items-center gap-3">

          <Target className="text-orange-400" />

          <h2 className="text-3xl font-bold">
            Learning Objectives
          </h2>

        </div>

        <ul className="space-y-4">

          {module.objectives.map(
            (objective) => (
              <li
                key={objective}
                className="
                  flex gap-3 text-slate-300
                "
              >

                <div
                  className="
                    mt-2 h-2 w-2
                    rounded-full bg-orange-500
                  "
                />

                {objective}

              </li>
            )
          )}

        </ul>

      </div>

      {/* LESSONS */}

      <div className="mb-12 space-y-4">

        {module.lessons.map((lesson) => {

          const completed =
            completedLessons.includes(
              lesson.slug
            )

          return (
            <Link
              key={lesson.slug}
              to={`/lesson/${module.slug}/${lesson.slug}`}
              className="
                block rounded-3xl border
                border-slate-800
                bg-slate-900/60 p-8
                transition hover:border-orange-500
              "
            >

              <div
                className="
                  flex items-start
                  justify-between gap-6
                "
              >

                <div>

                  <div
                    className="
                      mb-4 flex flex-wrap gap-3
                    "
                  >

                    <span
                      className="
                        rounded-full bg-slate-800
                        px-3 py-1 text-sm
                      "
                    >
                      {lesson.difficulty}
                    </span>

                    <span
                      className="
                        rounded-full bg-slate-800
                        px-3 py-1 text-sm
                      "
                    >
                      {lesson.readingTime}
                    </span>

                  </div>

                  <h2 className="mb-3 text-3xl font-bold">
                    {lesson.title}
                  </h2>

                  <div className="flex flex-wrap gap-2">

                    {lesson.tags.map((tag) => (
                      <span
                        key={tag}
                        className="
                          rounded-lg bg-orange-500/10
                          px-3 py-1 text-sm
                          text-orange-300
                        "
                      >
                        {tag}
                      </span>
                    ))}

                  </div>

                </div>

                {completed && (
                  <CheckCircle
                    className="text-green-500"
                  />
                )}

              </div>

            </Link>
          )
        })}

      </div>

      {/* EXERCISES + TASKS */}

      <div className="grid gap-8 lg:grid-cols-2">

        <div
          className="
            rounded-3xl border
            border-slate-800
            bg-slate-900/60 p-8
          "
        >

          <h2 className="mb-6 text-3xl font-bold">
            Exercises
          </h2>

          <ul className="space-y-4">

            {module.exercises.map(
              (exercise) => (
                <li
                  key={exercise}
                  className="text-slate-300"
                >
                  • {exercise}
                </li>
              )
            )}

          </ul>

        </div>

        <div
          className="
            rounded-3xl border
            border-slate-800
            bg-slate-900/60 p-8
          "
        >

          <h2 className="mb-6 text-3xl font-bold">
            Mini Tasks
          </h2>

          <ul className="space-y-4">

            {module.miniTasks.map((task) => (
              <li
                key={task}
                className="text-slate-300"
              >
                • {task}
              </li>
            ))}

          </ul>

        </div>

      </div>

      {/* ACTION BUTTONS */}

      <div className="mt-12 flex flex-wrap gap-4">

        <Link
          to={`/quiz/${module.slug}`}
          className="
            inline-flex rounded-2xl
            bg-orange-500 px-6 py-4
            font-semibold text-white
            transition hover:bg-orange-600
          "
        >
          Take Module Quiz
        </Link>

        <Link
          to="/project-details/atm-simulation-system"
          className="
            inline-flex rounded-2xl
            border border-orange-500/30
            bg-orange-500/10 px-6 py-4
            font-semibold text-orange-300
            transition hover:bg-orange-500/20
          "
        >
          View Final Project
        </Link>

      </div>

      {/* FINAL PROJECT */}

      <div
        className="
          mt-12 rounded-3xl border
          border-orange-500/20
          bg-orange-500/5 p-8
        "
      >

        <h2
          className="
            mb-4 text-4xl font-bold
            text-orange-400
          "
        >
          Final Module Project
        </h2>

        <h3 className="mb-4 text-2xl font-semibold">
          {module.project.title}
        </h3>

        <p className="mb-6 text-slate-300">
          {module.project.description}
        </p>

        <div className="mb-6 text-sm text-orange-300">
          Difficulty:
          {' '}
          {module.project.difficulty}
        </div>

      </div>

    </div>
  )
}