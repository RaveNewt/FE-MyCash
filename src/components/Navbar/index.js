import React from 'react'
import './index.css'
const Navbar = () => {
  return (
    <div>
       <nav>
       
        <label class= "logo">MyCash</label>
        <ul>
          <li><a href="#home" class="active">Home</a></li>
          <li><a href="#news">News</a></li>
          <li><a href="#info">Info</a></li>
          <li><a href="#services">Services</a></li>
         </ul>

      </nav>
    </div>
  )
}

export default Navbar