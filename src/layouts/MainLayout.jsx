import { useState } from 'react'

import Navbar from '../components/layout/Navbar'
import Sidebar from '../components/layout/Sidebar'
import MobileSidebar from '../components/layout/MobileSidebar'

export default function MainLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      
      <Navbar
        toggleSidebar={() =>
          setSidebarOpen(true)
        }
      />

      <MobileSidebar
        isOpen={sidebarOpen}
        onClose={() =>
          setSidebarOpen(false)
        }
      />

      <div className="flex">
        
        <Sidebar />

        <main className="flex-1 p-6 lg:p-10">
          {children}
        </main>
      </div>
    </div>
  )
}