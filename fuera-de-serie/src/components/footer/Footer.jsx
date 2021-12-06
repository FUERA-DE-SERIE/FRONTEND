import Button1 from "../buttons/Button1"
import { Link, NavLink } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <footer>

      <div className="container container-1">
        <h2 className='fontPlayfair'>Suscribete a Nuestra Newsletter</h2>    
          <form className='form-email' action="">
            <input 
              type="email" 
              placeholder="Ingresa tu correo electronico"
              className="fontCalibri-2 input-form"> 
            </input>
            <Button1 buttonName='Suscribirse' type='submit'/>     
          </form>
      </div>

      <div className="container">
        <div className="section section-footer">
          <div className="col">
            <ul className="links-list">
              <h3 className="fontCalibri-2 links-title">LINKS RAPIDOS</h3>
              <li className="link-item">
                <NavLink 
                  className='fontCalibri-2' 
                  to="/home"
                  >HOME</NavLink>
              </li>
              <li className="link-item">
                <NavLink 
                  className='fontCalibri-2' 
                  to="/nosotros"
                >NOSOTROS</NavLink>
              </li>
            </ul>
            <ul className="links-list">
              <h3 className="fontCalibri-2 links-title">LINKS RAPIDOS</h3>
              <li className="link-item">
                <NavLink 
                  className='fontCalibri-2' 
                  to="/store"
                  >MENU</NavLink>
              </li>
              <li className="link-item">
                <NavLink 
                  className='fontCalibri-2' 
                  to="/login"
                >LOGIN</NavLink>
              </li>
            </ul>            
          </div>
          <div className="col">
            <Link 
              className="fontYasevaOne" 
              to="/"
              >EVER</Link>
          </div>
        </div>

        <hr/>

        <div className="section">
          <p className="col-iz fontCalibri-2">
            <a 
              className="fontCalibri-2" 
              href="https://github.com/FUERA-DE-SERIE" 
              target="_blank" 
              rel="noreferrer"
            >Repositorio en GitHub Fuera de Serie Equipo 8</a>
          </p>
          <p className="col-dr fontCalibri-2">
            Desarrollado por Fuera de Serie 2021 &copy;
          </p>
        </div> 
      </div>

    </footer>            
  )
}

export default Footer

