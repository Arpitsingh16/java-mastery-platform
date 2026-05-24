export default function StatCard({
  title,
  value,
}) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      
      <div className="text-sm text-slate-400">
        {title}
      </div>

      <div className="mt-3 text-4xl font-black text-orange-400">
        {value}
      </div>
    </div>
  )
}