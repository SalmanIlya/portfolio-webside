import React from 'react'

import Typed from "typed.js";
import { useEffect, useRef } from "react";
import "./style.css"
import NavbarItem from './NavbarItem';
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
        const element = document.getElementById('about');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };
    
  return (
    <div  className='text-light  '>
      <NavbarItem 
    contact={contact} about={about}/>
      <div className=''></div>
    <img src="/image/4.jpg" alt="Snow" className='images w-100 ' />
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