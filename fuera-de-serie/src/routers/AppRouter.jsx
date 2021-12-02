import React from 'react'
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import LoginPage from '../components/pages/login/LoginPage';
import DashboardPage from '../components/pages/dashboard/DashboardPage';
import FrontendRouter from './FrontendRouter';
import PrivateRouter from './PrivateRouter';
import PublicRouter from './PublicRouter';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/login" element={
          <PublicRouter>
            <LoginPage /> 
          </PublicRouter>
        } />

        <Route path="/admin" element={
          <PrivateRouter>
            <DashboardPage />
          </PrivateRouter>
        } />

        <Route path="/*" element={
          <PublicRouter>
            <FrontendRouter />
          </PublicRouter>
        } />

      </Routes> 
    </BrowserRouter>
  )
}

export default AppRouter
