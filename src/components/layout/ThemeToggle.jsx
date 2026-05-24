import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')

    if (savedTheme === 'light') {
      document.documentElement.classList.remove('dark')
      setDarkMode(false)
    } else {
      document.documentElement.classList.add('dark')
      setDarkMode(true)
    }
  }, [])

  function toggleTheme() {
    if (darkMode) {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    } else {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    }

    setDarkMode(!darkMode)
  }

  return (
    <button
      onClick={toggleTheme}
      className="rounded-lg border border-slate-700 p-2 hover:bg-slate-800 transition"
    >
      {darkMode ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  )
}