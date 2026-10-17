import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Shell from './components/Shell'
import ArticlePage from './pages/ArticlePage'
import CaseStudyPage from './pages/CaseStudyPage'
import ContactPage from './pages/ContactPage'
import HomePage from './pages/HomePage'

const basename = import.meta.env.BASE_URL.replace(/\/$/, '')

export default function App() {
  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route element={<Shell />}>
          <Route index element={<HomePage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="works/nexusagent" element={<CaseStudyPage />} />
          <Route path="articles/system-eval" element={<ArticlePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
