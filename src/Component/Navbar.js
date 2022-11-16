import React from 'react'
import "./Style.css"
const Navbar = ({contact,about}) => {
  return (
    <nav className=' bg-dark nav h2  ' >
    <div className='navbar-item container '>
<div className=' p-4 '>
Navbar
</div>
<div>
<ul className='navbar-nav  mt-4 d-flex'>
<li className='nav-item p-2 btn 'onClick={()=>{about()}}>About</li>
<li className='nav-item p-2 btn'onClick={()=>{contact()}}>Contact</li>
</ul>
</div>
</div>
<div className='w-100 h-100'>

</div>
</nav>
  )
}

export default Navbar