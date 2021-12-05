import React, { useContext } from 'react'
import { useNavigate } from 'react-router'
import { AuthContext } from '../../../auth/authContext'
import { types } from '../../../types/types'
import SectionForm from './loginSections/SectionForm'
import SectionVideo from './loginSections/SectionVideo'
import './loginPage.css'

const LoginPage = () => {

  const navigate = useNavigate()
  const { dispatch } = useContext( AuthContext )

  const handleLogin = () => {

    const action = {
      type: types.login,
      payload: { name: 'David Fonseca' }
    };

    dispatch(action);

    // const lastPath = localStorage.getItem('lastPath');

    navigate('/admin/dashboard', {
      replace: true
    });
  }

  return (
    <div className="section">
      <div className="col-4">
        <SectionForm handleLogin={ handleLogin }/>
      </div>
      <div className="col-6">
        <SectionVideo />
      </div>
    </div>
  )
}

export default LoginPage
