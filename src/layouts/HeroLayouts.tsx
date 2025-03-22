import React from 'react'
import Toggle from '../components/Toggle'

const HeroLayouts: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-neutral-100 dark:bg-[oklch(0.21_0.006_285.885)] transition-colors duration-500 relative">
      <Toggle />
      <div className="text-center text-neutral-900 dark:text-neutral-100"></div>
    </div>
  )
}

export default HeroLayouts
