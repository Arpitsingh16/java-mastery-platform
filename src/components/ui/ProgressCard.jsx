export default function ProgressCard({
  title,
  progress,
}) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      
      <div className="mb-4 flex items-center justify-between">
        
        <h3 className="font-semibold">
          {title}
        </h3>

        <span className="text-orange-400">
          {progress}%
        </span>
      </div>

      <div className="h-3 overflow-hidden rounded-full bg-slate-800">
        
        <div
          className="h-full rounded-full bg-orange-500 transition-all duration-500"
          style={{
            width: `${progress}%`,
          }}
        />
      </div>
    </div>
  )
}