import React from 'react'
import Button1 from '../../../buttons/Button1'
import { Link, NavLink } from 'react-router-dom'

const SectionForm = ({ handleLogin }) => {
  return (
    <div className="row login-section">

      <div className="brand-name">
        <Link 
          className="fontYasevaOne" 
          to="/"
          >EVER</Link>
      </div>

      <div className="login">

        <h3 className="fontPlayfair-h3">Log in</h3>
        <p className="fontCalibri">No tienes una cuenta?  
          <NavLink 
            className='crear-cuenta fontCalibri'
            to="/create-account"
          >Crea una cuenta</NavLink>
        </p>          

        <form className='form-email' action="">
          <input 
            type="email" 
            placeholder="Ingresa tu correo electronico"
            className="fontCalibri-2 input-form-login"> 
          </input>
          <input 
            type="password" 
            placeholder="Ingresa tu contrasena"
            className="fontCalibri-2 input-form-login"> 
          </input>
          <Button1
            buttonName='Suscribirse'
            type='submit' 
            onClick={ handleLogin }
          />     
        </form> 

        <p>
          <NavLink 
            className='olvido-cuenta fontCalibri'
            to="/password-forgot"
          >Olvidaste tu contrasena?</NavLink>
        </p>
       
      </div>

    </div>
  )
}

export default SectionForm
