const roadmap = [
  'Java Introduction',
  'Variables & Data Types',
  'Operators',
  'Control Flow',
  'Methods',
  'Arrays',
  'OOP',
  'Exception Handling',
  'Collections Framework',
  'File Handling',
  'Multithreading',
  'Generics',
  'Streams API',
  'JDBC',
  'DSA in Java',
  'Mini Projects',
  'Interview Preparation',
]

export default function RoadmapPage() {
  return (
    <div className="mx-auto max-w-6xl">
      
      <h1 className="mb-10 text-4xl font-bold">
        Java Learning Roadmap
      </h1>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        
        {roadmap.map((item, index) => (
          <div
            key={item}
            className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:-translate-y-1 hover:border-orange-500"
          >
            <div className="mb-4 text-sm text-orange-400">
              Module {index + 1}
            </div>

            <h2 className="text-xl font-semibold">
              {item}
            </h2>
          </div>
        ))}
      </div>
    </div>
  )
}