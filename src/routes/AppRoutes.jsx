import { Routes, Route } from 'react-router-dom'

import MainLayout from '../layouts/MainLayout'

import HomePage from '../pages/HomePage'
import RoadmapPage from '../pages/RoadmapPage'
import ModulePage from '../pages/ModulePage'
import LessonPage from '../pages/LessonPage'
import ProjectsPage from '../pages/ProjectsPage'
import NotesPage from '../pages/NotesPage'
import NotFoundPage from '../pages/NotFoundPage'

export default function AppRoutes() {
  return (
    <Routes>
      
      <Route
        path="/"
        element={
          <MainLayout>
            <HomePage />
          </MainLayout>
        }
      />

      <Route
        path="/roadmap"
        element={
          <MainLayout>
            <RoadmapPage />
          </MainLayout>
        }
      />

      <Route
        path="/module/:id"
        element={
          <MainLayout>
            <ModulePage />
          </MainLayout>
        }
      />

      <Route
        path="/lesson/:slug"
        element={
          <MainLayout>
            <LessonPage />
          </MainLayout>
        }
      />

      <Route
        path="/projects"
        element={
          <MainLayout>
            <ProjectsPage />
          </MainLayout>
        }
      />

      <Route
        path="/notes"
        element={
          <MainLayout>
            <NotesPage />
          </MainLayout>
        }
      />

      <Route
        path="*"
        element={<NotFoundPage />}
      />
    </Routes>
  )
}