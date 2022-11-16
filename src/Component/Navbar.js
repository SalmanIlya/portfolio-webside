import React from 'react'
import "./Style.css"
const Navbar = () => {
  return (
    <div className=' bg-dark   h3 m-0 p-0 fixed-top' >
    <div className='navbar-item container '>
<div className=' p-4 '>
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
  )
}

export default Navbar