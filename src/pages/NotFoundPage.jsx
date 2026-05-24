import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <div
      className="
        flex min-h-[70vh]
        flex-col items-center
        justify-center text-center
      "
    >
      <h1 className="text-8xl font-black text-orange-500">
        404
      </h1>

      <p className="mt-4 text-xl text-slate-400">
        The page you are looking for does not exist.
      </p>

      <Link
        to="/"
        className="
          mt-8 rounded-2xl
          bg-orange-500 px-6 py-3
          font-semibold text-white
        "
      >
        Return Home
      </Link>
    </div>
  )
}