import React from 'react'

import Typed from "typed.js";
import { useEffect, useRef } from "react";
import "./Style.css"
import Navbar from './Navbar';
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
        return () => {
          typed.destroy();
        };
      }, []);
      const contact = () => {
        const element = document.getElementById('contact');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };
      const webside = () => {
        const element = document.getElementById('web');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };
      const about = () => {
       const item= document.getElementById('about')
      //  item.style.marginTop="20rem";
        const element = document.getElementById('about');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };
    
  return (
    <div  className='text-light  '>
      <Navbar contact={contact} about={about}/>
      <div className='h-100 w-50'></div>
    <img src="/image/1.jpg" alt="Snow" className='images' />
    <div className='container data-item  h1 '>
      <h3 >Hi, I,m Salman Ilyas</h3>
   <div>  I,m using {} <span ref={el}></span></div>
      <div>
        <button className='btn btn-warning m-3'onClick={()=>{webside()}}>Websides</button>
        <button className='btn btn-warning m-3'onClick={()=>{contact()}}>Contact us</button>
      </div>
    </div>

  </div>
  )
}

export default HeroSection