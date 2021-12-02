import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AuthContext } from '../../auth/authContext'
import './header.css'

const Header = () => {

  const { user } = useContext( AuthContext );

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
          { user.logged 
            ? <NavLink 
                className={ ({ isActive }) => 'fontCalibri-2 ' + (isActive ? 'active' : '')} 
                to="/admin"
              >{ user.name }</NavLink> 
            : <NavLink 
                className={ ({ isActive }) => 'fontCalibri-2 ' + (isActive ? 'active' : '')} 
                to="/login"
              >LOGIN</NavLink>
          }
        </div>
      </nav>  
    </header>
  )
}

export default Header
