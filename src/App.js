import React from 'react'
import About from './Component/about/About'
import Contact from './Component/Contact/Contact'
import Footer from './Component/Footer/Footer'
import HeroSection from './Component/Navbar/HeroSection'
import Websides from './Component/Webside/Websides'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "./App.css"
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