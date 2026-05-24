import {
  Trophy,
  Star,
  CheckCircle2,
} from 'lucide-react'

export default function AchievementCard({
  title,
  description,
  completed,
  progress,
}) {

  return (
    <div
      className={`
        rounded-3xl border p-8 transition

        ${
          completed
            ? 'border-green-500/30 bg-green-500/10'
            : 'border-slate-800 bg-slate-900/60'
        }
      `}
    >

      <div className="mb-6 flex items-center gap-4">

        <div
          className={`
            flex h-14 w-14
            items-center justify-center
            rounded-2xl

            ${
              completed
                ? 'bg-green-500'
                : 'bg-orange-500'
            }
          `}
        >

          {completed ? (
            <CheckCircle2 className="text-white" />
          ) : (
            <Trophy className="text-white" />
          )}

        </div>

        <div>

          <h3 className="text-2xl font-bold">
            {title}
          </h3>

          <p className="text-slate-400">
            {description}
          </p>

        </div>

      </div>

      <div className="mb-3 flex items-center justify-between">

        <span className="text-sm text-slate-400">
          Progress
        </span>

        <span className="text-sm font-semibold text-orange-400">
          {progress}%
        </span>

      </div>

      <div
        className="
          h-3 overflow-hidden rounded-full
          bg-slate-800
        "
      >

        <div
          className="
            h-full rounded-full
            bg-orange-500 transition-all
          "
          style={{
            width: `${progress}%`,
          }}
        />

      </div>

      {completed && (
        <div
          className="
            mt-6 inline-flex items-center
            gap-2 rounded-full
            bg-green-500/20 px-4 py-2
            text-sm text-green-400
          "
        >

          <Star size={16} />

          Module Completed

        </div>
      )}

    </div>
  )
}