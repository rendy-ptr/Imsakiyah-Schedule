import React from 'react'
import LayoutWrapper from './LayoutsWrapper'
import HomePages from './pages/HomePages'

const App: React.FC = () => {
  return (
    <LayoutWrapper>
      <HomePages />
    </LayoutWrapper>
  )
}

export default App
