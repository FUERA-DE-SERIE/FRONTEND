import React, { useContext } from 'react'
import { useNavigate } from 'react-router'
import { AuthContext } from '../../../auth/authContext'
import { types } from '../../../types/types'
import Button1 from '../../buttons/Button1'
import Button2 from '../../buttons/Button2'
import { Link, NavLink } from 'react-router-dom'
import './loginPage.css'

const LoginPage = () => {

  const navigate = useNavigate()
  const { dispatch } = useContext( AuthContext )

  const handleLogin = () => {

    const action = {
      type: types.login,
      payload: { name: 'DAVID FONSECA' }
    };

    dispatch(action);

    // const lastPath = localStorage.getItem('lastPath');

    navigate('/admin', {
      replace: true
    });
  }

  return (
    <div className="section login-section">
      <div className="col">
        <Link 
          className="nombre-tienda" 
          to="/"
        >EVER</Link>
        <div className="log-in">
          <h2>Log in</h2>
          <p className="fontCalibri">No tienes una cuenta?  
          <NavLink 
              className={ ({ isActive }) => 'link-menu fontCalibri ' + (isActive ? 'active' : '')} 
              to="/create-account"
            >Crea una cuenta</NavLink>
          </p>          
          <br />
          <input type="email" id="email" name="email"/>
          <br />              
          <br />
          <input type="email" id="email" name="email"/>
          <br />
          <br />            
          <p>
            <Button1
              buttonName='Suscribirse' 
              onClick={ handleLogin }
            />
          </p>     
          <p className="fontCalibri">Olvidaste tu contrasena?   
            <Button2
              buttonName='Suscribirse' 
              onClick={ handleLogin }
            />
          </p> 
        </div>
      </div>
      <div className="col">

      </div>
    </div>
  )
}

export default LoginPage
