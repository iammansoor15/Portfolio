import { useState } from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Tech from './Components/Tech'
import Projects from './Components/Projects'
import Contact from './Components/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='relative z-0 bg-primary'>
      <div className='bg-hero-pattern bg-over bg-no-repeat bg-center h-screen'>
      <Navbar />
      <Hero/>
      <About/>
      <Tech/>
      <Projects/>
      <Contact/>

      </div>
    </div>
  )
}

export default App
