import { useState } from 'react'

export default function Quiz({ questions }) {
  const [score, setScore] = useState(null)

  function handleSubmit(event) {
    event.preventDefault()

    const formData = new FormData(
      event.target
    )

    let correct = 0

    questions.forEach((question, index) => {
      const answer =
        formData.get(`question-${index}`)

      if (answer === question.answer) {
        correct++
      }
    })

    setScore(correct)
  }

  return (
    <div className="mt-16 rounded-2xl border border-slate-800 bg-slate-900 p-8">
      
      <h2 className="mb-8 text-3xl font-bold">
        Quiz
      </h2>

      <form onSubmit={handleSubmit}>
        
        <div className="space-y-8">
          
          {questions.map((question, index) => (
            <div key={index}>
              
              <h3 className="mb-4 text-lg font-semibold">
                {question.question}
              </h3>

              <div className="space-y-2">
                
                {question.options.map(
                  (option) => (
                    <label
                      key={option}
                      className="flex items-center gap-3"
                    >
                      <input
                        type="radio"
                        name={`question-${index}`}
                        value={option}
                      />

                      {option}
                    </label>
                  )
                )}
              </div>
            </div>
          ))}
        </div>

        <button
          type="submit"
          className="mt-8 rounded-xl bg-orange-500 px-6 py-3 font-semibold"
        >
          Submit Quiz
        </button>

        {score !== null && (
          <div className="mt-6 text-xl font-bold text-orange-400">
            Score: {score} / {questions.length}
          </div>
        )}
      </form>
    </div>
  )
}