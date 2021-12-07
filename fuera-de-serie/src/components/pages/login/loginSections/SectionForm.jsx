import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router'
// import axios from 'axios'
import { AuthContext } from '../../../../auth/authContext'
import { types } from '../../../../types/types'
import { useForm } from '../../../../hooks/useForm'
import Button1 from '../../../buttons/Button1'

const SectionForm = () => {

  // Manejo de Form
  const [ formValues, handleInputChange ] = useForm({
    correo: '',
    password: ''
  });

  const { correo, password } = formValues;

  // Manejo de Login
  const navigate = useNavigate()
  const { user, dispatch } = useContext( AuthContext )

  const handleLogin = (e) => {

    e.preventDefault();
    const action = {
      type: types.login,
      payload: { name: 'David Fonseca' }
    };
    
    dispatch(action);

    navigate(user.lastPath, {
      replace: true
    });
  }

  //validaremos correo y contraseña, si todo es correcto lo manda a la view Admin
  // const validate =  () => {
  //   axios.post('http://localhost:5000/api/user/login',{
  //       correo: correo,
  //       password: password
  //   })
  //   .then(response =>{
  //     console.log(response.data);
  //     return response.data
  //   })
  //   .then(data => {
  //       localStorage.setItem('token', data.tokenReturn);
  //       // this.$router.push({name:'Admin'})
  //   })
  //   .catch( err =>{
  //       let message = null;
  //       console.log(err.response);
  //       if ([404,401].includes(err.response.status)) {
  //           message = "el correo o contraseña son incorrectas"
  //           console.log(message)
  //       }else{
  //           message = "ocurrio un error interno, intenta de nuevo en uno minutos"
  //           console.log(message)
  //       }
  //   })
  // }

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

        <form className='form-email' onSubmit={ handleLogin }>
          <input 
            type="email" 
            placeholder="Ingresa tu correo electronico"
            className="fontCalibri-2 input-form-login"
            name="correo"
            value={ correo }
            onChange={ handleInputChange }
          > 
          </input>
          <input 
            type="password" 
            placeholder="Ingresa tu contrasena"
            className="fontCalibri-2 input-form-login"
            name="password"
            value={ password }
            onChange={ handleInputChange }
          > 
          </input>
          <Button1
            buttonName='Suscribirse'
            type='submit'
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
