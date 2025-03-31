import React from 'react'
import Toggle from './components/Toggle'
import { Outlet } from 'react-router'

const GlobalLayout: React.FC = () => {
  return (
    <div className="relative min-h-screen flex flex-col bg-neutral-100 dark:bg-zinc-900 transition-colors duration-1000 ease-in-out">
      {/* Efek Glow Bergerak */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-40 h-40 lg:w-72 lg:h-72 bg-pink-600 dark:bg-pink-500 opacity-30 blur-2xl rounded-full animate-glowMove"></div>
      </div>

      {/* Toggle Dark Mode */}
      <div className="absolute top-4 right-4 z-20">
        <Toggle />
      </div>

      {/* Kontainer Utama */}
      <main className="flex flex-grow items-center justify-center container mx-auto relative z-10">
        <Outlet />
      </main>
    </div>
  )
}

export default GlobalLayout
