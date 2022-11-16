import React from 'react'
import {GoLocation} from "react-icons/go"
import {AiOutlineMail,AiFillPhone} from "react-icons/ai"
import "./Style.css"
const Contact = () => {
  return (
    <div id='contact' >
<h2 className='text-center '><strong>Contact</strong>
<div className='h3-div'></div></h2>
<div className="d-flex flex-row justify-around container">

<div className=''>
  <div className='mt-5'>
<div className='d-flex '> <GoLocation className='h2  rounded-circle p-2 ml-2 text-dark bg-light icons' /><h3 className='-4'>Location:</h3></div>  
<p className='pragraf-tag'>Peshawar:molah:Satyan H.no:2958 </p>
  </div>
  <div>
<div className='d-flex'> <AiOutlineMail className='h2  rounded-circle p-2 ml-2 text-dark bg-light icons' /><h3>Email:</h3></div>  
<p className='pragraf-tag'>salamanilyas101@gmail.com</p>
  </div>
  <div>
<div className='d-flex'> <AiFillPhone className='h2  rounded-circle p-2 ml-2 text-dark bg-light icons' /><h3>Phone:</h3></div>  
<p className='pragraf-tag'>+92325-5539535</p>
  </div>
</div>
<div className='w-25'></div>
<div>
<div className='d-flex m-3 mt-5'>
  <input type="text" placeholder="Name" className='m-1 input1'  />
  <input type="text" placeholder="Email" className='m-1 input1'  />
</div>
<input type="text" placeholder="Subject" className=" m-3 input3"/>
<textarea rows={5} cols={10} className="m-3 p-2" placeholder='Enter Your Massage'/>
<div className='text-center btn-div my-5'>
<button className='btn p-3 w-25'>Submit</button>
</div>
</div>
</div>


    </div>
  )
}

export default Contact