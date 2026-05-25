import { useState } from 'react'

import javaInterviewQuestions
  from '../data/interview/javaInterviewQuestions'

export default function InterviewPrepPage() {

  const [openId, setOpenId] =
    useState(null)

  function toggleQuestion(id) {

    setOpenId((prev) =>
      prev === id ? null : id
    )
  }

  return (
    <div className="mx-auto max-w-5xl">

      <div className="mb-14">

        <h1 className="mb-6 text-6xl font-black">
          Java Interview Preparation
        </h1>

        <p className="max-w-3xl text-xl text-slate-400">
          Prepare for Java interviews with categorized technical questions and answers.
        </p>

      </div>

      <div className="space-y-6">

        {javaInterviewQuestions.map(
          (item) => (

            <div
              key={item.id}
              className="
                rounded-3xl border
                border-slate-800
                bg-slate-900/60
                overflow-hidden
              "
            >

              <button
                onClick={() =>
                  toggleQuestion(item.id)
                }
                className="
                  flex w-full items-center
                  justify-between gap-6
                  p-8 text-left
                "
              >

                <div>

                  <div
                    className="
                      mb-3 inline-flex rounded-full
                      bg-orange-500/10
                      px-3 py-1 text-sm
                      text-orange-400
                    "
                  >
                    {item.level}
                  </div>

                  <h2 className="text-2xl font-bold">
                    {item.question}
                  </h2>

                </div>

                <div className="text-3xl text-orange-400">
                  {openId === item.id
                    ? '-'
                    : '+'}
                </div>

              </button>

              {openId === item.id && (

                <div
                  className="
                    border-t border-slate-800
                    px-8 py-6 text-slate-300
                  "
                >
                  {item.answer}
                </div>

              )}

            </div>
          )
        )}

      </div>

    </div>
  )
}