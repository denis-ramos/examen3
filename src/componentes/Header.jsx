import React from 'react'
import "./Header.css"
import { NavLink } from 'react-router-dom'
function Header() {
  return (
    <div className="contenedor">    
        <ul className="lista">
            <NavLink to="/">
                <li >Home</li>
            </NavLink>
            <NavLink to="/About">
                <li >About</li>
            </NavLink>
            <NavLink to="/Dashboard">
                <li >Dashboard</li>
            </NavLink>
        </ul>
    </div>
    )
}

export default Header