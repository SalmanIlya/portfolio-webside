import React from 'react'

import Typed from "typed.js";
import { useEffect, useRef } from "react";
import "./Style.css"
const HeroSection = () => {
    const el = useRef(null);
    
    useEffect(() => {
        const typed = new Typed(el.current, {
          strings: ["React.js","Node.js","HTML5",
        'CSS3',"Bootstrap5","Tilwind-css","React.js"], // Strings to display
          // Speed settings, try diffrent values untill you get good results
          startDelay: 300,
          typeSpeed: 100,
          backSpeed: 100,
          backDelay: 100
        });
    
        // Destropying
        return () => {
          typed.destroy();
        };
      }, []);
    
  return (
    <div  className='text-light '>
    <img src="/image/1.jpg" alt="Snow" className='images' />
    <div className=' bg-dark  h3 '>
        <div className='navbar-item container'>
    <div className='div ml-5 p-4 '>
    Navbar
   </div>
   <div>
    <ul className='navbar-nav  mt-4 d-flex'>
<li className='nav-item p-2 btn '>Home</li>
<li className='nav-item p-2 btn '>About</li>
<li className='nav-item p-2 btn'>Contact</li>
    </ul>
   </div>
</div>
    </div>

    <div className='container data-item h1 '>
      <h3>Hi, I,m Salman Ilyas</h3>
   <div>  I,m using {} <span ref={el}></span></div>
      <div>
        <button className='btn btn-warning m-3'>Websides</button>
        <button className='btn btn-warning m-3'>Contact us</button>
      </div>
    </div>

  </div>
  )
}

export default HeroSection