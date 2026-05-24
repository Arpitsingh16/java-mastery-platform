import { useState } from 'react'

import { Link } from 'react-router-dom'

import { motion } from 'framer-motion'

import { modules } from '../data/modules'

import SearchBar from '../components/ui/SearchBar'

import ProgressCard from '../components/ui/ProgressCard'

import StatCard from '../components/ui/StatCard'

import useProgress from '../hooks/useProgress'

export default function RoadmapPage() {
  const [search, setSearch] = useState('')

  const {
    completedCount,
    totalLessons,
    overallProgress,
    getModuleProgress,
  } = useProgress()

  const filteredModules = modules.filter(
    (module) =>
      module.title
        .toLowerCase()
        .includes(search.toLowerCase())
  )

  return (
    <div className="mx-auto max-w-7xl">
      
      <div className="mb-12">
        
        <h1 className="mb-4 text-5xl font-black">
          Java Roadmap
        </h1>

        <p className="max-w-2xl text-lg text-slate-400">
          Track your progress from beginner
          to advanced Java developer.
        </p>
      </div>

      <div className="mb-10">
        <SearchBar
          search={search}
          setSearch={setSearch}
        />
      </div>

      <div className="mb-12 grid gap-6 md:grid-cols-3">
        
        <StatCard
          title="Completed Lessons"
          value={completedCount}
        />

        <StatCard
          title="Total Lessons"
          value={totalLessons}
        />

        <StatCard
          title="Overall Progress"
          value={`${overallProgress}%`}
        />
      </div>

      <div className="mb-16">
        
        <ProgressCard
          title="Java Mastery Progress"
          progress={overallProgress}
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        
        {filteredModules.map((module) => (
          <motion.div
            key={module.id}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <Link
              to={`/module/${module.id}`}
              className="
                block rounded-3xl border border-slate-800
                bg-slate-900 p-8 transition
                hover:border-orange-500
              "
            >
              <div className="mb-4 text-sm text-orange-400">
                Module {module.id}
              </div>

              <h2 className="mb-4 text-2xl font-bold">
                {module.title}
              </h2>

              <p className="mb-6 text-slate-400">
                {module.description}
              </p>

              <div className="mb-2 flex justify-between text-sm">
                
                <span>Progress</span>

                <span>
                  {getModuleProgress(module)}%
                </span>
              </div>

              <div className="h-2 overflow-hidden rounded-full bg-slate-800">
                
                <div
                  className="h-full rounded-full bg-orange-500"
                  style={{
                    width: `${getModuleProgress(
                      module
                    )}%`,
                  }}
                />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  )
}