import React from 'react'
import About from './Component/About'
import Contact from './Component/Contact'
import HeroSection from './Component/HeroSection'
import Websides from './Component/Websides'

const App = () => {
  return (
    <div>
      <HeroSection/>
      <div className='h-100'></div>
      <Websides/>
      <Contact/>
      <About/>
    </div>
  )
}

export default App