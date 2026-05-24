import AchievementCard from '../components/achievements/AchievementCard'

import { modules } from '../data/modules'

import useProgress from '../hooks/useProgress'

export default function AchievementsPage() {

  const {
    completedLessons,
  } = useProgress()

  function calculateProgress(module) {

    const completed =
      module.lessons.filter(
        (lesson) =>
          completedLessons.includes(
            lesson.slug
          )
      ).length

    return Math.round(
      (completed / module.lessons.length) * 100
    )
  }

  return (
    <div className="mx-auto max-w-7xl">

      <div className="mb-14">

        <h1 className="mb-6 text-6xl font-black">
          Achievements
        </h1>

        <p className="max-w-3xl text-xl text-slate-400">
          Track your learning progress and unlock mastery milestones.
        </p>

      </div>

      <div className="grid gap-8 lg:grid-cols-2">

        {modules.map((module) => {

          const progress =
            calculateProgress(module)

          return (
            <AchievementCard
              key={module.id}
              title={module.title}
              description={module.description}
              progress={progress}
              completed={progress === 100}
            />
          )
        })}

      </div>

    </div>
  )
}