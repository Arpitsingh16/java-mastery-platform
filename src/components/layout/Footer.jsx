export default function Footer() {
  return (
    <footer
      className="
        border-t border-slate-800
        bg-slate-950/80
      "
    >
      <div
        className="
          mx-auto flex max-w-7xl
          flex-col gap-4 px-6 py-10
          text-sm text-slate-400
          lg:flex-row lg:items-center
          lg:justify-between
        "
      >
        <div>
          © 2026 Java Mastery Platform
        </div>

        <div className="flex gap-6">
          <span>React</span>
          <span>Vite</span>
          <span>TailwindCSS</span>
        </div>
      </div>
    </footer>
  )
}