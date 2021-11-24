import React from 'react'
import Logo from '../components/headerSection/Logo'
import Menu from '../components/headerSection/Menu'
import './header.css'

const Header = () => {
    const menu1 = ["Home", "Nosotros", "Reservaciones" ]
    const menu2 = ["Menú", "Carrito", "Login" ]
    return (
        <header className="header">
          <Menu nombreslinks={menu1}/> 
          <Logo/>
          <Menu nombreslinks={menu2}/>
        </header>
    )
}

export default Header
