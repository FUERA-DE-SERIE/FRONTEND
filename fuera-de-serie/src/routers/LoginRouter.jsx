import React from 'react'
import { Routes, Route } from "react-router-dom";
import LoginPage from '../components/pages/login/LoginPage';

const LoginRouter = () => {
  return (
    <>
      <Routes>
          <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  )
}

export default LoginRouter
