import Button1 from "../buttons/Button1"
import { Link, NavLink } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="section-footer">

      <div className="container">
        <h2 className='fontPlayfair'>Suscribete a Nuestra Newsletter</h2>
        <div className="form-email">
          <form action="">
            <input 
              type="email" 
              placeholder="Ingresa tu correo electronico"
              class="input-form fontCalibri"> 
            </input>
            <Button1 className='button' buttonName='Suscribirse' type='submit'/>     
          </form>
        </div>
      </div>

      <div className="">
        <div className="section">
          <div className="LinksRapidos">
            <h3>LINKS RAPIDOS</h3>
            <NavLink 
              className={ ({ isActive }) => 'link-menu fontCalibri ' + (isActive ? 'active' : '')} 
              to="/home"
            >HOME</NavLink>
            <NavLink 
              className={ ({ isActive }) => 'link-menu fontCalibri ' + (isActive ? 'active' : '')} 
              to="/nosotros"
            >NOSOTROS</NavLink>
          </div>
          <div className="LinksRapidos-dos">
            <h3>LINKS RAPIDOS</h3>
            <NavLink 
              className={ ({ isActive }) => 'link-menu fontCalibri ' + (isActive ? 'active' : '')} 
              to="/store"
            >MENU</NavLink>
            <NavLink 
              className={ ({ isActive }) => 'link-menu fontCalibri ' + (isActive ? 'active' : '')} 
              to="/login"
            >LOGIN</NavLink>
          </div>            
          <div>
            <Link 
              className="nombre-tienda" 
              to="/"
              >EVER</Link>
          </div>
        </div>

        <hr/>

        <div className="section">
          <p className="col">Link repositorio en GitHub Fuera de Serie</p>
          <p className="col">Fuera de Serie 2021</p>
        </div> 
      </div>

    </footer>            
  )
}

export default Footer

