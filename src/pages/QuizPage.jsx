import { useParams } from 'react-router-dom'

import Quiz from '../components/quiz/Quiz'

import { quizzes } from '../data/quizzes/index.js'

export default function QuizPage() {

  const { moduleSlug } = useParams()

  const questions = quizzes[moduleSlug]

  console.log('QUIZZES:', quizzes)

  console.log('QUESTIONS:', questions)

  if (!questions) {
    return (
      <div className="p-10">
        <h1 className="text-5xl font-black text-red-500">
          Quiz not found
        </h1>

        <p className="mt-4 text-xl text-slate-300">
          Requested slug:
          <span className="ml-2 text-orange-400">
            {moduleSlug}
          </span>
        </p>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-4xl">

      <h1 className="mb-10 text-5xl font-black">
        Module Quiz
      </h1>

      <Quiz
        questions={questions}
        moduleSlug={moduleSlug}
      />
    </div>
  )
}