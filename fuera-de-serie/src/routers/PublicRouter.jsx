import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../auth/authContext'

const PublicRouter = ({ children }) => {
  
  const { user } = useContext( AuthContext );

  const { pathname } = useLocation();

  return user.logged && pathname === '/login'
    ? <Navigate to='/'/>
    : children
}

export default PublicRouter
