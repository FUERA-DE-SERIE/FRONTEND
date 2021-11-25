import React from 'react'
import Logo from './headerSection/Logo'
import Menu from './headerSection/Menu'
import './header.css'

const Header = () => {
  const menu1 = ["Home", "Nosotros"]
  const menu2 = ["Store", "Login" ]
  return (
    <header className="header">
      <div className="header-wrapper">
        <Menu nombreslinks={menu1}/> 
        <Logo/>
        <Menu nombreslinks={menu2}/>
      </div>  
    </header>
  )
}

export default Header
