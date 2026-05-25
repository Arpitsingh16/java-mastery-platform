import {
  useEffect,
  useState,
  lazy,
  Suspense,
} from 'react'

import { useParams } from 'react-router-dom'

import ReactMarkdown from 'react-markdown'

import remarkGfm from 'remark-gfm'

const SyntaxHighlighter = lazy(() =>
  import('react-syntax-highlighter').then(
    (module) => ({
      default: module.Prism,
    })
  )
)

export default function LessonPage() {

  const { folder, slug } =
    useParams()

  const [content, setContent] =
    useState('')

  const [loading, setLoading] =
    useState(true)

  const [theme, setTheme] =
    useState(null)

  const lessonFiles =
    import.meta.glob(
      '../content/lessons/**/*.md',
      {
        query: '?raw',
        import: 'default',
      }
    )

  useEffect(() => {

    async function loadLesson() {

      try {

        const path =
          `../content/lessons/${folder}/${slug}.md`

        const importer =
          lessonFiles[path]

        if (!importer) {

          setContent(
            '# Lesson Not Found'
          )

          return
        }

        const markdown =
          await importer()

        setContent(markdown)

      } catch (error) {

        console.error(error)

        setContent(
          '# Lesson Not Found'
        )

      } finally {

        setLoading(false)
      }
    }

    loadLesson()

  }, [folder, slug])

  useEffect(() => {

    async function loadTheme() {

      const prismTheme =
        await import(
          'react-syntax-highlighter/dist/esm/styles/prism'
        )

      setTheme(
        prismTheme.oneDark
      )
    }

    loadTheme()

  }, [])

  if (loading) {

    return (
      <div
        className="
          py-20 text-center
          text-2xl text-slate-300
        "
      >
        Loading lesson...
      </div>
    )
  }

  return (
    <article
      className="
        prose prose-invert
        max-w-none
        prose-headings:text-white
        prose-p:text-slate-300
        prose-strong:text-white
        prose-code:text-orange-400
      "
    >

      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          code({
            inline,
            className,
            children,
            ...props
          }) {

            const match =
              /language-(\w+)/.exec(
                className || ''
              )

            return !inline && match ? (

              <Suspense
                fallback={
                  <pre
                    className="
                      overflow-x-auto
                      rounded-xl
                      bg-slate-900 p-4
                    "
                  >
                    Loading code...
                  </pre>
                }
              >

                <SyntaxHighlighter
                  style={theme || {}}
                  language={match[1]}
                  PreTag="div"
                  {...props}
                >
                  {String(children).replace(
                    /\n$/,
                    ''
                  )}
                </SyntaxHighlighter>

              </Suspense>

            ) : (

              <code
                className={className}
                {...props}
              >
                {children}
              </code>

            )
          },
        }}
      >
        {content}
      </ReactMarkdown>

    </article>
  )
}