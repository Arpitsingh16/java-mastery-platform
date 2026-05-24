import { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'

import MarkdownRenderer from '../components/lessons/MarkdownRenderer'

import Quiz from '../components/quizzes/Quiz'

import { quizzes } from '../data/quizzes'

import useProgress from '../hooks/useProgress'

export default function LessonPage() {
  const { slug } = useParams()

  const [content, setContent] = useState('')

  const { markLessonComplete } =
    useProgress()

  useEffect(() => {
    async function loadLesson() {
      try {
        const file = await import(
          `../content/lessons/${slug}.md?raw`
        )

        setContent(file.default)
      } catch (error) {
        setContent('# Lesson not found')
      }
    }

    loadLesson()
  }, [slug])

  return (
    <div className="mx-auto max-w-4xl">
      
      <MarkdownRenderer content={content} />

      <button
        onClick={() =>
          markLessonComplete(slug)
        }
        className="mt-10 rounded-xl bg-green-600 px-6 py-3 font-semibold"
      >
        Mark as Complete
      </button>

      {quizzes[slug] && (
        <Quiz questions={quizzes[slug]} />
      )}
    </div>
  )
}