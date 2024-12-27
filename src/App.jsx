import React from 'react'
import Navbar from './components/Navbar'
import { Route,Routes } from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import Courses from './pages/Courses'
import Services from './pages/Services'
import Home from './pages/Home'
import Reactcourse from './pages/Reactcourse'
import Backend from './pages/Backend'
import Frontend from './pages/Frontend'
import Details from './pages/Details'

const App = () => {
  return (
    <div className='h-screen w-full'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/courses" element={<Courses />} />
        <Route path='/courses/reactcourse' element={ <Reactcourse/>} />
        <Route path='/courses/reactcourse/details' element={ <Details/>} />

        <Route path='/courses/backendcourse' element={ <Backend/>} />
        <Route path='/courses/frontendcourse' element={ <Frontend/>} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}

export default App