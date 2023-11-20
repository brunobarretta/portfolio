
import { Suspense } from 'react'
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'
import './i18n'
import { LocaleProvider } from './contexts/LocaleContext'

function App() {
 
  return (
    <>
      <div className="text-gray-400 bg-gray-900 body-font">
        <LocaleProvider>
          <Suspense fallback="...loading">
            <Navbar />
            <About />
            <Experience />
            <Projects />
            <Skills />
            <Contact />
          </Suspense>
        </LocaleProvider>
      </div>

    </>
  )
}

export default App
