import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './header.css'

const Header = () => {
  return (
    <header className="header">
      <div className="header-wrapper">
        <div className="wrapper">
          <NavLink 
            className={ ({ isActive }) => 'link-menu fontCalibri ' + (isActive ? 'active' : '')} 
            to="/home"
            >HOME</NavLink>
          <NavLink 
            className={ ({ isActive }) => 'link-menu fontCalibri ' + (isActive ? 'active' : '')} 
            to="/nosotros"
            >NOSOTROS</NavLink>
        </div>
        <div>
          <Link 
            className="nombre-tienda" 
            to="/"
            >EVER</Link>
        </div>
        <div className="wrapper">
        <NavLink 
          className={ ({ isActive }) => 'link-menu fontCalibri ' + (isActive ? 'active' : '')} 
          to="/store"
        >MENU</NavLink>
        <NavLink 
          className={ ({ isActive }) => 'link-menu fontCalibri ' + (isActive ? 'active' : '')} 
          to="/login"
        >LOGIN</NavLink>
        </div>
      </div>  
    </header>
  )
}

export default Header
