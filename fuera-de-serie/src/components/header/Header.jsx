import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux';
// import AvatarComponent from '../avatar/AvatarComponent'
import './header.css'

const Header = () => {

  const { name } = useSelector(state => state.auth)

  return (
    <header className="header">
      <nav className="header-wrapper">
        <div className="link-wrapper">
          <NavLink 
            className={ ({ isActive }) => 'fontCalibri-2 ' + (isActive ? 'active' : '')} 
            to="/home"
            >HOME</NavLink>
          <NavLink 
            className={ ({ isActive }) => 'fontCalibri-2 ' + (isActive ? 'active' : '')} 
            to="/nosotros"
            >NOSOTROS</NavLink>
        </div>
        <div>
          <Link 
            className="fontYasevaOne" 
            to="/"
            >EVER</Link>
        </div>
        <div className="link-wrapper">
          <NavLink 
            className={ ({ isActive }) => 'fontCalibri-2 ' + (isActive ? 'active' : '')} 
            to="/store"
          >MENU</NavLink>
          { name 
            ? <NavLink 
                className={ ({ isActive }) => 'fontCalibri-2 ' + (isActive ? 'active' : '')} 
                to="/admin/dashboard"
              >{ name }</NavLink> 
            : <NavLink 
                className={ ({ isActive }) => 'fontCalibri-2 ' + (isActive ? 'active' : '')} 
                to="/auth/login"
              >LOGIN</NavLink>
          }
        </div>
      </nav>  
    </header>
  )
}

export default Header
