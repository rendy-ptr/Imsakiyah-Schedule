import { createRoutesFromElements, Route } from 'react-router-dom'
import GlobalLayout from './GlobalLayouts'
import HomePages from './pages/HomePages'
import ContentPages from './pages/ContentPages'

const routes = createRoutesFromElements(
  <Route path="/" element={<GlobalLayout />}>
    <Route index element={<HomePages />} />
    <Route path="content" element={<ContentPages />} />
  </Route>,
)

export default routes
