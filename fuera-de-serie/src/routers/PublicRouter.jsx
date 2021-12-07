import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

const PublicRouter = ({ children }) => {
  
  const { uid } = useSelector(state => state.auth)

  const { pathname } = useLocation();

  return uid && (pathname === '/auth/login' || pathname === '/auth/create-account')
    ? <Navigate to='/admin/dashboard'/>
    : children
}

export default PublicRouter
