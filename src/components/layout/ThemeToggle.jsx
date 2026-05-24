import {
  Moon,
  SunMedium,
} from 'lucide-react'

import {
  useEffect,
  useState,
} from 'react'

export default function ThemeToggle() {
  const [darkMode, setDarkMode] =
    useState(true)

  useEffect(() => {
    const savedTheme =
      localStorage.getItem('theme')

    if (savedTheme === 'light') {
      document.documentElement.classList.remove(
        'dark'
      )

      setDarkMode(false)
    } else {
      document.documentElement.classList.add(
        'dark'
      )

      setDarkMode(true)
    }
  }, [])

  function toggleTheme() {
    if (darkMode) {
      document.documentElement.classList.remove(
        'dark'
      )

      localStorage.setItem(
        'theme',
        'light'
      )
    } else {
      document.documentElement.classList.add(
        'dark'
      )

      localStorage.setItem(
        'theme',
        'dark'
      )
    }

    setDarkMode(!darkMode)
  }

  return (
    <button
      onClick={toggleTheme}
      className="
        flex h-11 w-11 items-center
        justify-center rounded-xl
        border border-slate-800
        bg-slate-900 transition
        hover:border-slate-700
        hover:bg-slate-800
      "
    >
      {darkMode ? (
        <SunMedium size={18} />
      ) : (
        <Moon size={18} />
      )}
    </button>
  )
}