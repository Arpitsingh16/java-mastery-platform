import { X } from 'lucide-react'
import Sidebar from './Sidebar'

export default function MobileSidebar({
  isOpen,
  onClose,
}) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      />

      <div className="absolute left-0 top-0 h-full w-72 bg-slate-950">
        
        <div className="flex justify-end p-4">
          <button onClick={onClose}>
            <X />
          </button>
        </div>

        <Sidebar />
      </div>
    </div>
  )
}