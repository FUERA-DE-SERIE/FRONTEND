import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../auth/authContext'
import { types } from '../types/types'
import { Routes, Route } from "react-router-dom";
import Sidebar from '../components/pages/dashboard/dashboardSections/Sidebar';
import DishesPage from '../components/pages/dashboard/DishesPage';
import LostPage from '../components/pages/404/LostPage';
import HeaderDashboard from '../components/pages/dashboard/dashboardSections/HeaderDashboard';
import '../components/pages/dashboard/dashboardPage.css'


const DashBoardRouter = () => {

  // handeling logout
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
    <div className="section-up">
      <Sidebar handleLogout={handleLogout}/>
      <div className="row dashboard">
        <HeaderDashboard handleLogout={handleLogout} user={user}/>
        <Routes>
          <Route path="/dishes" element={<DishesPage />} />
          <Route path="/*" element={<LostPage />} />
        </Routes>
      </div>
    </div>
  )
}

export default DashBoardRouter
