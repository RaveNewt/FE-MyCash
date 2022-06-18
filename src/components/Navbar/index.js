import React from 'react'
import './index.css'
const Navbar = () => {
  return (
    <div>
       <nav>
       
        <label class= "logo">MyCash</label>
        <ul class="nav__links">
          <li><a href="#howitwork">How it Work</a></li>
          <li><a href="#webinar">Webinar</a></li>
          <li><a href="#product">Product</a></li>
        
           
         </ul>
         
         <a class="login" href="#">Login</a>
         <button class="navbtn"><a href="#">Start Free </a></button>
         
      </nav>
    </div>
  )
}

export default Navbar