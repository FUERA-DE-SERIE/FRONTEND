import React from 'react'
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Header from '../components/header/Header';
import HomePage from '../components/pages/home/HomePage';
import LoginPage from '../components/pages/login/LoginPage';
import NosotrosPage from '../components/pages/nosotros/NosotrosPage';
import StorePage from '../components/pages/store/StorePage';
import Footer from '../components/footer/Footer';
// import LoginRouter from './LoginRouter';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/nosotros" element={<NosotrosPage />} />
        <Route path="/store" element={<StorePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default AppRouter
