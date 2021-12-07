import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { firebase } from '../firebase/firebase-config'
import { login } from '../actions/auth';
import DashBoardRouter from './DashboardRouter';
import FrontendRouter from './FrontendRouter';
import PrivateRouter from './PrivateRouter';
import PublicRouter from './PublicRouter';
import AuthRouter from './AuthRouter';

const AppRouter = () => {

  const dispatch = useDispatch();
  const [isNotReady, setIsNotReady] = useState(true);

  useEffect(() => {
    firebase.auth().onAuthStateChanged( (user) => {
      if( user?.uid ){
        dispatch( login( user.uid, user.displayName ) );
      }else{
      }
      setIsNotReady(false);
    })
  }, [dispatch])

  if (isNotReady) {
    <Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>
  }

  return (
    <BrowserRouter>
      <Routes>

        <Route path="/auth/*" element={
          <PublicRouter>
            <AuthRouter /> 
          </PublicRouter>
        } />

        <Route path="/admin/*" element={
          <PrivateRouter>
            <DashBoardRouter/>
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
