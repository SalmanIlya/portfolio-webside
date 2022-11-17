import React from 'react'

const Navbaritem = ({contact,about}) => {
  return (
    <nav class="navbar navbar-expand-lg bg-light">

  <div class="container d-flex flex-row justify-between ">
    <div>
    <a class="navbar-brand" href="#">Navbar</a>
    </div>
<div>

 
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0  ">
        <li class="nav-item m-1 nav-link" onClick={()=>{contact()}}>
       Contact
      
        </li>
        <li class="nav-item m-1 nav-link " onClick={()=>{about()}}>
          About
        </li>
      </ul>
    </div>
</div>
<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  </div>
  
</nav>
  )
}

export default Navbaritem