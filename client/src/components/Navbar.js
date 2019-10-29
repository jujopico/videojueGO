import React from 'react'
import {NavLink} from 'react-router-dom'

const Navbar = () => (
  <nav>
    <ul>
     <li><NavLink to="/">Home</NavLink></li>
     <li><NavLink to="/games">Games</NavLink></li>
     <li><NavLink to="/AboutUs">About Us</NavLink></li>
    </ul>
  </nav>
)

export default Navbar