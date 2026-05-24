import { useState } from 'react'

import Navbar from '../components/layout/Navbar'
import Sidebar from '../components/layout/Sidebar'
import MobileSidebar from '../components/layout/MobileSidebar'
import Footer from '../components/layout/Footer'

export default function MainLayout({
  children,
}) {
  const [sidebarOpen, setSidebarOpen] =
    useState(false)

  return (
    <div className="min-h-screen bg-[#020617] text-slate-100">
      
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

        <div className="flex min-h-[calc(100vh-64px)] flex-1 flex-col">
          
          <main className="flex-1 overflow-x-hidden">
            
            <div className="mx-auto w-full max-w-7xl px-6 py-10 lg:px-10">
              {children}
            </div>
          </main>

          <Footer />
        </div>
      </div>
    </div>
  )
}