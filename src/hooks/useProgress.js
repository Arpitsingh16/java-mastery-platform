import { useEffect, useState } from 'react'

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

  return {
    completedLessons,
    markLessonComplete,
  }
}