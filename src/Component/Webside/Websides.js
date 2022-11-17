import React from 'react'
import "./style.css"
import web from './Data'
const Websides = () => {
  return (
    <div className=' Webside ' id='web'>
        <h3 className="text-center "><strong>Our Webside </strong><div className='border-3  border-bottom border-warning  h3-div'></div></h3>

<div className='card-parent'>

{web.map((item)=>{

return <div className="card shadow m-5 " key={item.id}>
  <img className="card-img-top w-100 h-75 rounded-2" src={item.image} alt="Card image cap"/>
  <div className="card-body text-center">
<button className='btn'>visit now</button>
<button className='btn '>visit gitHub</button>
  </div>
</div>
})
}</div>
    </div>

  )
}

export default Websides