import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import LoginPage from "./components/LoginPage/LoginPage";
import LandingPage from "./components/LandingPage/Landing";
import ProLogin from "./components/ProLogin/Prologin";
import HomePage from "./components/HomePage/HomePage";

const App = () => {
  return (
    //  <LoginPage />
    //  <FogotPassword />
    //  <VerifyMN />
    //  <VerifyE />
    //  <ResetPassword />
    // <MobileAuthentication />
    //  <VerificationPage />
    // <HomePage />
    // <LandingPage />

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<ProLogin />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
