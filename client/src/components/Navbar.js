import React from 'react'
import {NavLink} from 'react-router-dom'
import homeLogo from '../images/logo.png'
import { withRouter } from "react-router";

const Navbar = props => {
  return(
    <nav>
      <NavLink to="/">
        <img className="LOGO" src={homeLogo} alt="videojueGO" />
      </NavLink>
      <NavLink className={props.location.pathname === "/games" ? "active" : null} to="/games">Search Games</NavLink>
      <NavLink className={props.location.pathname === "/AboutUs" ? "active" : null} to="/AboutUs">About Us</NavLink>
    </nav>
  )
}

export default withRouter(Navbar)