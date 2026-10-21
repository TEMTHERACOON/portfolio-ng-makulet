import { useEffect } from "react"
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom"
import { PortfolioLayout } from "@/components/layout/portfolio-layout"
import { AboutPage } from "@/components/pages/about-page"
import { ContactPage } from "@/components/pages/contact-page"
import { ExperiencePage } from "@/components/pages/experience-page"
import { HobbiesPage } from "@/components/pages/hobbies-page"
import { TitlePage } from "@/components/pages/title-page"

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" })
  }, [pathname])

  return null
}

export function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<PortfolioLayout />}>
          <Route index element={<TitlePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="about/hobbies" element={<HobbiesPage />} />
          <Route path="about/experience" element={<ExperiencePage />} />
          <Route path="about/contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
