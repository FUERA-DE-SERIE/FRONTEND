import React, { useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../auth/authContext'
import { types } from '../types/types'
import { Routes, Route } from "react-router-dom";
import Sidebar from '../components/pages/dashboard/dashboardSections/Sidebar';
import DashboardPage from '../components/pages/dashboard/DashboardPage';
import DishesPage from '../components/pages/dashboard/DishesPage';
import CategoriasPage from '../components/pages/dashboard/CategoriasPage';
import UsersPage from '../components/pages/dashboard/UsersPage';
import LostPage from '../components/pages/404/LostPage';
import HeaderDashboard from '../components/pages/dashboard/dashboardSections/HeaderDashboard';
import '../components/pages/dashboard/dashboardPage.css'


const DashBoardRouter = () => {

  // handeling logout
  const { pathname, search } = useLocation();
  const { user, dispatch } = useContext( AuthContext )
  const navigate = useNavigate()

  const handleLogout = () => {
    
    const action = {
      type: types.logout,
      payload: { lastPath: pathname + search }
    }

    dispatch(action);

    navigate('/', {
      replace: true
    });
  }

  return (
    <div className="section-up">
      <Sidebar handleLogout={handleLogout}/>
      <div className="row dashboard">
        <HeaderDashboard handleLogout={handleLogout} user={user}/>
        <Routes>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/categorias" element={<CategoriasPage />} />
          <Route path="/dishes" element={<DishesPage />} />
          <Route path="/usuarios" element={<UsersPage />} />
          <Route path="/*" element={<LostPage />} />
        </Routes>
      </div>
    </div>
  )
}

export default DashBoardRouter
