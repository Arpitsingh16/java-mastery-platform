export default function ProjectDetails({
  title,
  items,
}) {
  return (
    <div
      className="
        rounded-3xl border
        border-slate-800
        bg-slate-900/70 p-8
      "
    >
      <h2 className="mb-6 text-3xl font-bold">
        {title}
      </h2>

      <ul className="space-y-4">
        
        {items.map((item) => (
          <li
            key={item}
            className="
              flex items-start gap-3
              text-slate-300
            "
          >
            <div
              className="
                mt-2 h-2 w-2
                rounded-full bg-orange-500
              "
            />

            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}