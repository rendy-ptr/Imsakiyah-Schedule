import React, { useState, useEffect } from 'react'
import { LucideIcons } from '../icons/lucide-icons'

const Toggle: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false)
  const { Moon } = LucideIcons

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <button
      onClick={toggleDarkMode}
      className="fixed top-3 right-3 lg:top-4 lg:right-4 w-9 h-9 lg:w-10 lg:h-10 flex justify-center items-center rounded-full bg-amber-500 text-neutral-950 shadow-lg hover:bg-amber-600 transition-colors cursor-pointer"
    >
      <Moon className="w-5 h-5 lg:w-6 lg:h-6" />
    </button>
  )
}

export default Toggle
