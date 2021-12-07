import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Alert from '@mui/material/Alert';
import validator from 'validator'
// import axios from 'axios'
import { useForm } from '../../../../hooks/useForm'
import { startRegisterWithEmailPassword } from '../../../../actions/auth'
import Button1 from '../../../buttons/Button1'
import { removeError, setError } from '../../../../actions/ui';


const SectionFormRegister = () => {

  const dispatch = useDispatch()
  const { msgError } = useSelector(state => state.ui)

  // Manejo de Form
  const [ formValues, handleInputChange ] = useForm({
    nombre: '',
    correo: '',
    password: '',
    password2: '',
  });

  const { nombre, correo, password, password2 } = formValues;

  const isFormValid = () => {
    if ( nombre.trim().length < 2 ) {
      dispatch( setError('El nombre debe ser de 2 o mas caracteres') )
      return false;
    }
    if ( (password.length < 6) ) {
      dispatch( setError('La contrasenas debe ser de 6 o mas caracterers') )
      return false;
    }
    if ( (password !== password2) ) {
      dispatch( setError('Las contrasenas deben ser iguales') )
      return false;
    }
    if ( !validator.isEmail(correo) ) {
      dispatch( setError('El correo no es valido') )
      return false;
    }
    dispatch( removeError() );
    return true
  }

  // Manejo de Registro
  const handleRegister = (e) => {
    e.preventDefault();
    if ( isFormValid() ) {
      dispatch( startRegisterWithEmailPassword(correo, password, nombre) );
      // console.log(nombre, correo, password, password2)
    }
  }

  return (
    <div className="row login-section">

      <div className="brand-name">
        <Link 
          className="fontYasevaOne" 
          to="/"
          >EVER</Link>
      </div>

      <div className="register">

        <h3 className="fontPlayfair-h3">Sign Up</h3>
        <p className="fontCalibri ya-tienes-cuenta">Ya tienes una cuenta?  
          <Link 
            className='crear-cuenta fontCalibri'
            to="/login"
          >Sign In</Link>
        </p> 

        {
          msgError && (
            <Alert severity="error">{ msgError }</Alert>
          )  
        }       

        <form className='form-email' onSubmit={ handleRegister }>
          <input 
            type="text" 
            placeholder="Ingresa tu Nombre y Apellido"
            className="fontCalibri-2 input-form-login"
            name="nombre"
            value={ nombre }
            onChange={ handleInputChange }
            required
          />
          <input 
            type="email" 
            placeholder="Ingresa tu correo electronico"
            className="fontCalibri-2 input-form-login"
            name="correo"
            value={ correo }
            onChange={ handleInputChange }
            required
          /> 
          <input 
            type="password" 
            placeholder="Ingresa tu contrasena"
            className="fontCalibri-2 input-form-login"
            name="password"
            value={ password }
            onChange={ handleInputChange }
            required
          />
          <input 
            type="password" 
            placeholder="Verifica tu contrasena"
            className="fontCalibri-2 input-form-login"
            name="password2"
            value={ password2 }
            onChange={ handleInputChange }
            required
          /> 
          <Button1
            buttonName='Suscribirse'
            type='submit'
          />     
        </form>
       
      </div>

    </div>
  )
}

export default SectionFormRegister
