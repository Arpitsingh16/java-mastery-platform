import { Search } from 'lucide-react'

export default function SearchBar({
  search,
  setSearch,
}) {
  return (
    <div className="relative w-full max-w-xl">
      
      <Search
        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
        size={18}
      />

      <input
        type="text"
        placeholder="Search lessons..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        className="
          w-full rounded-2xl border border-slate-700
          bg-slate-900 py-4 pl-12 pr-4
          text-white outline-none
          transition focus:border-orange-500
        "
      />
    </div>
  )
}