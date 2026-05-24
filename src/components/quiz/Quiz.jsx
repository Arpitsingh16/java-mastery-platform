import { useState } from 'react'

export default function Quiz({
  questions,
  moduleSlug,
}) {
  const [currentQuestion, setCurrentQuestion] =
    useState(0)

  const [score, setScore] = useState(0)

  const [selectedAnswer, setSelectedAnswer] =
    useState(null)

  const [showExplanation, setShowExplanation] =
    useState(false)

  const [quizFinished, setQuizFinished] =
    useState(false)

  const question =
    questions[currentQuestion]

  function handleAnswer(option) {
    if(selectedAnswer) return

    setSelectedAnswer(option)

    setShowExplanation(true)

    if(option === question.correctAnswer) {
      setScore((prev) => prev + 1)
    }
  }

  function nextQuestion() {
    setSelectedAnswer(null)

    setShowExplanation(false)

    if(
      currentQuestion ===
      questions.length - 1
    ) {
      setQuizFinished(true)

      localStorage.setItem(
        `${moduleSlug}-quiz-score`,
        score +
          (selectedAnswer ===
          question.correctAnswer
            ? 1
            : 0)
      )

      return
    }

    setCurrentQuestion((prev) => prev + 1)
  }

  function retryQuiz() {
    setCurrentQuestion(0)

    setScore(0)

    setSelectedAnswer(null)

    setShowExplanation(false)

    setQuizFinished(false)
  }

  if(quizFinished) {
    const finalScore =
      score +
      (selectedAnswer ===
      question.correctAnswer
        ? 1
        : 0)

    return (
      <div
        className="
          rounded-3xl border
          border-slate-800
          bg-slate-900/60 p-10
        "
      >
        <h2 className="mb-4 text-4xl font-black">
          Quiz Complete
        </h2>

        <p className="mb-8 text-2xl text-slate-300">
          Your Score:
          <span className="ml-3 text-orange-400">
            {finalScore} / {questions.length}
          </span>
        </p>

        <button
          onClick={retryQuiz}
          className="
            rounded-2xl bg-orange-500
            px-6 py-3 font-semibold
            text-white transition
            hover:bg-orange-600
          "
        >
          Retry Quiz
        </button>
      </div>
    )
  }

  return (
    <div
      className="
        rounded-3xl border
        border-slate-800
        bg-slate-900/60 p-10
      "
    >
      <div className="mb-6 text-sm text-slate-400">
        Question {currentQuestion + 1} of{' '}
        {questions.length}
      </div>

      <h2 className="mb-8 text-3xl font-bold">
        {question.question}
      </h2>

      <div className="space-y-4">
        
        {question.options.map((option) => {
          const isCorrect =
            option === question.correctAnswer

          const isSelected =
            option === selectedAnswer

          return (
            <button
              key={option}
              onClick={() =>
                handleAnswer(option)
              }
              className={`
                w-full rounded-2xl
                border p-5 text-left
                transition

                ${
                  selectedAnswer
                    ? isCorrect
                      ? 'border-green-500 bg-green-500/10'
                      : isSelected
                      ? 'border-red-500 bg-red-500/10'
                      : 'border-slate-700'
                    : 'border-slate-700 hover:border-orange-500'
                }
              `}
            >
              {option}
            </button>
          )
        })}
      </div>

      {showExplanation && (
        <div
          className="
            mt-8 rounded-2xl
            bg-slate-800/70 p-6
          "
        >
          <h3 className="mb-3 text-xl font-bold">
            Explanation
          </h3>

          <p className="text-slate-300">
            {question.explanation}
          </p>

          <button
            onClick={nextQuestion}
            className="
              mt-6 rounded-xl
              bg-orange-500 px-5 py-3
              font-semibold text-white
              transition hover:bg-orange-600
            "
          >
            Next Question
          </button>
        </div>
      )}
    </div>
  )
}