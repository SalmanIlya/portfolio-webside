import React from 'react'
import About from './Component/About'
import Contact from './Component/Contact'
import Footer from './Component/Footer'
import HeroSection from './Component/HeroSection'
import Websides from './Component/Websides'

const App = () => {
  return (
    <div>
      <HeroSection/>
      <div className='h-100'></div>
      <Websides/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App