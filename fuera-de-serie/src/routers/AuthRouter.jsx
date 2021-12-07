import React from 'react';
import { Routes, Route } from "react-router-dom";
import CreateAccountPage from '../components/pages/login/CreateAccountPage';
import LoginPage from '../components/pages/login/LoginPage';
import LostPage from '../components/pages/404/LostPage';
import '../components/pages/dashboard/dashboardPage.css'


const AuthRouter = () => {

  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/create-account" element={<CreateAccountPage />} />
      <Route path="/*" element={<LostPage />} />
    </Routes>
  )
}

export default AuthRouter
