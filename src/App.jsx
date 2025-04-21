import React from 'react'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Education from './components/Education/Education'
import Experience from './components/Experience/Experience'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Skills from './components/Skills/Skills'
import Work from './components/Work/Work'
import bg from './assets/bg.avif'
import './index.css'
import './App.css'

function App() {
 

  return (
   <div className='bg-[#FAF9F6]'>
    <div className=" bg-repeat bg-cover min-h-screen"  style={{ backgroundImage: `url(${bg})` }} >
      <Navbar/>
      <About/>
      <Skills/>
      <Experience/>
      <Work/>
      <Education/>
      <Contact/>
      <Footer/>
    </div>
    </div>
    
   
  )
}

export default App
