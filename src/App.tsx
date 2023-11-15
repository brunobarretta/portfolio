
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'

function App() {
 

  return (
    <>
      <div className="text-gray-400 bg-gray-900 body-font">
        <Navbar />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </div>

    </>
  )
}

export default App
