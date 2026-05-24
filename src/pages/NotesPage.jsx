export default function NotesPage() {
  const notes = [
    {
      title: 'Java Introduction Notes',
      file: '/notes/java-introduction-notes.pdf',
    },
  ]

  return (
    <div className="mx-auto max-w-5xl">
      
      <h1 className="mb-10 text-5xl font-bold">
        Download Notes
      </h1>

      <div className="grid gap-6 md:grid-cols-2">
        
        {notes.map((note) => (
          <a
            key={note.title}
            href={note.file}
            download
            className="
              rounded-2xl border border-slate-800
              bg-slate-900 p-6 transition
              hover:border-orange-500
            "
          >
            <h2 className="text-2xl font-semibold">
              {note.title}
            </h2>

            <p className="mt-4 text-orange-400">
              Download PDF
            </p>
          </a>
        ))}
      </div>
    </div>
  )
}