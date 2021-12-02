import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../../auth/authContext'
import { types } from '../../../types/types'
import Button1 from '../../buttons/Button1'

const DashboardPage = () => {

  const navigate = useNavigate()

  const { user, dispatch } = useContext( AuthContext )

  const handleLogout = () => {

    const action = {
      type: types.logout
    }

    dispatch(action);

    navigate('/', {
      replace: true
    });
  }

  return (
    <div>
      <h1>Dashboard Page | Hi { user.name }</h1>
      <Button1
        buttonName='Log Out' 
        onClick={ handleLogout }
      />
    </div>
  )
}

export default DashboardPage
