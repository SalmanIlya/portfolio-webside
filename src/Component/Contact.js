import React from 'react'
import {GoLocation} from "react-icons/go"
import {AiOutlineMail,AiFillPhone} from "react-icons/ai"
import "./Style.css"
const Contact = () => {
  return (
    <div>
<h2 className='text-center'><strong>Contact</strong>
<div className='h3-div'></div></h2>
<div className="d-flex flex-row justify-around container">

<div>
  <div>
<div className='d-flex m-2'> <GoLocation className='h2 bg-warning rounded-circle p-1 text-light' /><h3>Location:</h3></div>  
<p className=''> loremfvsetb</p>
  </div>
  <div>
<div className='d-flex m-2'> <AiOutlineMail className='h2 bg-warning rounded-circle p-1 text-light' /><h3>Email:</h3></div>  
<p className=''> loremfvsetb</p>
  </div>
  <div>
<div className='d-flex m-2'> <AiFillPhone className='h2 bg-warning rounded-circle p-1 text-light' /><h3>Email:</h3></div>  
<p className=''> loremfvsetb</p>
  </div>
</div>
<div className='w-25'></div>
<div>
<div className='d-flex m-3'>
  <input type="text" placeholder="name" className='m-1 w-75'/>
  <input type="text" placeholder="Email" className='m-1 w-75'/>
</div>
<input type="text" placeholder="Subject" className="w-100 m-3"/>
<textarea rows={10} cols={100} className="m-3"/>
</div>
</div>


    </div>
  )
}

export default Contact