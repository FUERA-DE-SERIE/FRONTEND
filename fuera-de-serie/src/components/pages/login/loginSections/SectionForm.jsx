// import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
// import { useNavigate } from 'react-router'
import GoogleButton from 'react-google-button'
import { useDispatch, useSelector } from 'react-redux'
// import axios from 'axios'
import { useForm } from '../../../../hooks/useForm'
import { startGoogleLogin, startLoginWithEmailPassword } from '../../../../actions/auth'
import Button1 from '../../../buttons/Button1'

const SectionForm = () => {

  // const navigate = useNavigate()
  const dispatch = useDispatch()
  const { loading } = useSelector(state => state.ui)

  // Manejo de Form
  const [ formValues, handleInputChange ] = useForm({
    correo: '',
    password: ''
  });

  const { correo, password } = formValues;

  // Manejo de Logins
  const handleGoogleLogin = () => {
    // console.log('Google Login');
    dispatch( startGoogleLogin() );
  }

  const handleLogin = (e) => {
    e.preventDefault();
    // dispatch(login('jh34g5j34hg53', 'David Fonseca'));
    dispatch( startLoginWithEmailPassword(correo, password) );
  }

  // // validaremos correo y contraseña, si todo es correcto lo manda a la view Admin
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
          <Link 
            className='crear-cuenta fontCalibri'
            to="/auth/create-account"
          >Crea una cuenta</Link>
        </p>          

        <form className='form-email' onSubmit={ handleLogin }>
          <input 
            type="email" 
            placeholder="Ingresa tu correo electronico"
            className="fontCalibri-2 input-form-login"
            name="correo"
            value={ correo }
            onChange={ handleInputChange }
            required
          > 
          </input>
          <input 
            type="password" 
            placeholder="Ingresa tu contrasena"
            className="fontCalibri-2 input-form-login"
            name="password"
            value={ password }
            onChange={ handleInputChange }
            required
          > 
          </input>
          <Button1
            buttonName='Login con email y password'
            type='submit'
            disabled={ loading }
          />     
        </form>

        <GoogleButton
          onClick={ handleGoogleLogin }
          type='light'
        /> 

        <p>
          <Link 
            className='olvido-cuenta fontCalibri'
            to="/password-forgot"
          >Olvidaste tu contrasena?</Link>
        </p>
       
      </div>

    </div>
  )
}

export default SectionForm
