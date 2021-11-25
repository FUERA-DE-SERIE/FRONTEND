import React from 'react'
import './loginPage.css'

const LoginPage = () => {
  return (
    <div className="user-card">
      < div className="user-nombre">
      <h1 class="fontPrata">NOMBRE</h1>
        <div className="log-in">
          <h1>Log in</h1>
          <h2 class="fontCalibri">No tienes una cuenta?  <a class="font-negra" href="" target="" rel="">Crea una cuenta</a></h2>          
              <br />
              <input type="email" id="email" name="email"/>
              <br />              
              <br />
              <input type="email" id="email" name="email"/>
              <br />
              <br />            
            <p><button type="submit" className="button1" color="#888469" >Suscribirse</button></p>

          <h2 class="fontCalibri">Olvidaste tu contraseña? <a class="font-negra-color" href="" target="" rel="">.    Recuperar </a></h2>          
        </div>
      </div>
    </div>
  )
}

export default LoginPage
