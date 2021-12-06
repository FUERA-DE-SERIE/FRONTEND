import React from 'react'
import { Routes, Route } from "react-router-dom";
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import HomePage from '../components/pages/home/HomePage';
import NosotrosPage from '../components/pages/nosotros/NosotrosPage';
import StorePage from '../components/pages/store/StorePage';
import LostPage from '../components/pages/404/LostPage';


const FrontendRouter = () => {
  return (
    <>
      <Header/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/nosotros" element={<NosotrosPage />} />
          <Route path="/store" element={<StorePage />} />
          <Route path="/*" element={<LostPage />} />
        </Routes>
      <Footer/>
    </>
  )
}

export default FrontendRouter
