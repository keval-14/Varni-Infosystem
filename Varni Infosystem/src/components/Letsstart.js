import React from 'react'
import '../components/Letsstart.css'
import img from '../img/poster/letsstart.jpg'

function Letsstart() {
  return (
    <div className='letsstartmain'>
      <img src={img} className="letsstartimg"></img>
      <div className='letsstartright'>
            <h1 className='letsstarttitle'>Let's Get Started</h1>
            <p className='letsstartcontent'>Our online platform makes it easy for you to attract more customers and take your business from where it is to where you want to take it. If you want to enjoy a wide range of web development and search engine optimization services, enter your email address. Clear all your queries quickly.</p>
        
        
            <input type="text" name="email" id="email" placeholder='Enter Your Email Here'></input>
            <button className='letsstartbtn'>Subscribe Now</button>

      </div>
    </div>
  )
}

export default Letsstart
