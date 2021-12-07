import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivateRouter = ({ children }) => {
  
  const { uid } = useSelector(state => state.auth)

  return uid
    ? children
    : <Navigate to='/auth/login'/>
}

export default PrivateRouter
