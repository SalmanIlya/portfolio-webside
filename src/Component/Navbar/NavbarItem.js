import React from 'react'
const Navbaritem = ({contact,about}) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className='container'>

    <a className="navbar-brand text-light ms-5" href="#">Navbar</a>
    <button className="navbar-toggler  bg-light me-5" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav    ms-auto   ">
        <li className="nav-item active nav-link btn    m-3 text-light" onClick={()=>{about()}}>
        About
        </li>
        <li className="nav-item active nav-link btn   m-3 text-light" onClick={()=>{contact()}}>
         Contact
        </li>
      </ul>
    </div>
    </div>
  </nav>
  )
}

export default Navbaritem