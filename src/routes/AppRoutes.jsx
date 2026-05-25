import {
  Routes,
  Route,
} from 'react-router-dom'

import {
  lazy,
  Suspense,
} from 'react'

import MainLayout from '../layouts/MainLayout'

const HomePage = lazy(() =>
  import('../pages/HomePage')
)

const RoadmapPage = lazy(() =>
  import('../pages/RoadmapPage')
)

const ModulePage = lazy(() =>
  import('../pages/ModulePage')
)

const LessonPage = lazy(() =>
  import('../pages/LessonPage')
)

const ProjectsPage = lazy(() =>
  import('../pages/ProjectsPage')
)

const ProjectPage = lazy(() =>
  import('../pages/ProjectPage')
)

const NotesPage = lazy(() =>
  import('../pages/NotesPage')
)

const QuizPage = lazy(() =>
  import('../pages/QuizPage')
)

const ProjectDetailsPage = lazy(() =>
  import('../pages/ProjectDetailsPage')
)

const AchievementsPage = lazy(() =>
  import('../pages/AchievementsPage')
)

const NotFoundPage = lazy(() =>
  import('../pages/NotFoundPage')
)

const InterviewPrepPage = lazy(() =>
  import('../pages/InterviewPrepPage')
)

function Loader() {

  return (
    <div
      className="
        flex min-h-screen
        items-center justify-center
        bg-slate-950
      "
    >

      <div
        className="
          h-16 w-16 animate-spin
          rounded-full border-4
          border-orange-500
          border-t-transparent
        "
      />

    </div>
  )
}

function PageWrapper({ children }) {

  return (
    <MainLayout>
      {children}
    </MainLayout>
  )
}

export default function AppRoutes() {

  return (
    <Suspense fallback={<Loader />}>

      <Routes>

        <Route
          path="/"
          element={
            <PageWrapper>
              <HomePage />
            </PageWrapper>
          }
        />

        <Route
          path="/roadmap"
          element={
            <PageWrapper>
              <RoadmapPage />
            </PageWrapper>
          }
        />

        <Route
          path="/module/:id"
          element={
            <PageWrapper>
              <ModulePage />
            </PageWrapper>
          }
        />

        <Route
          path="/lesson/:folder/:slug"
          element={
            <PageWrapper>
              <LessonPage />
            </PageWrapper>
          }
        />

        <Route
          path="/projects"
          element={
            <PageWrapper>
              <ProjectsPage />
            </PageWrapper>
          }
        />

        <Route
          path="/projects/:slug"
          element={
            <PageWrapper>
              <ProjectPage />
            </PageWrapper>
          }
        />

        <Route
          path="/notes"
          element={
            <PageWrapper>
              <NotesPage />
            </PageWrapper>
          }
        />

        <Route
          path="/quiz/:moduleSlug"
          element={
            <PageWrapper>
              <QuizPage />
            </PageWrapper>
          }
        />

        <Route
          path="/project-details/:slug"
          element={
            <PageWrapper>
              <ProjectDetailsPage />
            </PageWrapper>
          }
        />

        <Route
          path="/achievements"
          element={
            <PageWrapper>
              <AchievementsPage />
            </PageWrapper>
          }
        />

        <Route
          path="/interview-prep"
          element={
            <PageWrapper>
              <InterviewPrepPage />
            </PageWrapper>
          }
        />

        <Route
          path="*"
          element={<NotFoundPage />}
        />

      </Routes>

    </Suspense>
  )
}