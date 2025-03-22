import React, { useState, useEffect } from 'react'
import { LucideIcons } from '../icons/lucide-icons'
import { motion, AnimatePresence } from 'framer-motion'
import { toggleAnimation } from '../animations'

const Toggle: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false)
  const { Moon, Sun } = LucideIcons

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
      className="fixed top-3 right-3 lg:top-4 lg:right-4 w-9 h-9 lg:w-10 lg:h-10 flex justify-center items-center rounded-full bg-gradient-to-r from-pink-500 to-fuchsia-500 shadow-lg hover:from-fuchsia-500 hover:to-purple-500 transition-colors cursor-pointer"
    >
      <AnimatePresence mode="wait">
        {darkMode ? (
          <motion.div key="sun" {...toggleAnimation('in')}>
            <Sun className="w-5 h-5 lg:w-6 lg:h-6" />
          </motion.div>
        ) : (
          <motion.div key="moon" {...toggleAnimation('out')}>
            <Moon className="w-5 h-5 lg:w-6 lg:h-6" />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  )
}

export default Toggle
