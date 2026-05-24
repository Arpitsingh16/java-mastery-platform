export default function StatCard({
  title,
  value,
}) {
  return (
    <div
      className="
        rounded-3xl border
        border-slate-800
        bg-gradient-to-br
        from-slate-900
        to-slate-950
        p-8
      "
    >
      <div className="text-sm uppercase tracking-wide text-slate-500">
        {title}
      </div>

      <div className="mt-4 text-5xl font-black text-orange-400">
        {value}
      </div>
    </div>
  )
}