import { useEffect, useState } from 'react'

import { modules } from '../data/modules'

export default function useProgress() {
  const [completedLessons, setCompletedLessons] =
    useState([])

  useEffect(() => {
    const saved =
      localStorage.getItem('completedLessons')

    if (saved) {
      setCompletedLessons(JSON.parse(saved))
    }
  }, [])

  function markLessonComplete(slug) {
    if (completedLessons.includes(slug))
      return

    const updated = [
      ...completedLessons,
      slug,
    ]

    setCompletedLessons(updated)

    localStorage.setItem(
      'completedLessons',
      JSON.stringify(updated)
    )
  }

  const totalLessons = modules.reduce(
    (acc, module) =>
      acc + module.lessons.length,
    0
  )

  const completedCount =
    completedLessons.length

  const overallProgress = Math.round(
    (completedCount / totalLessons) * 100
  )

  function getModuleProgress(module) {
    const lessonSlugs =
      module.lessons.map(
        (lesson) => lesson.slug
      )

    const completed =
      lessonSlugs.filter((slug) =>
        completedLessons.includes(slug)
      ).length

    return Math.round(
      (completed / lessonSlugs.length) * 100
    )
  }

  return {
    completedLessons,
    markLessonComplete,
    totalLessons,
    completedCount,
    overallProgress,
    getModuleProgress,
  }
}