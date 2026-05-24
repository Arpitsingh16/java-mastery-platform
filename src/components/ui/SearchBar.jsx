import { Search } from 'lucide-react'

export default function SearchBar({
  search,
  setSearch,
}) {
  return (
    <div className="relative w-full max-w-2xl">
      
      <Search
        className="
          absolute left-5 top-1/2
          -translate-y-1/2
          text-slate-500
        "
        size={20}
      />

      <input
        type="text"
        placeholder="Search modules..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        className="
          h-16 w-full rounded-2xl
          border border-slate-800
          bg-slate-900/80
          pl-14 pr-6 text-lg
          outline-none transition
          focus:border-orange-500
        "
      />
    </div>
  )
}