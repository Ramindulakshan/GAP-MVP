import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import LoginPage from "./components/LoginPage/LoginPage";
import LandingPage from "./components//LandingPage/Landing";
import HomePage from "./components/HomePage/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import ProLogin from "./components/Register/Register";
import SettingPage from "./components/SettingPage/SettingPage";
import WeeklySchedulePage from "./components/WeeklySchedulePage/WeeklySchedulePage"

const App = () => {
  return (
    //  <LoginPage />
    //  <ForgotPassword />
    //  <VerifyMN />
    //  <VerifyE />
    //  <ResetPassword />
    // <MobileAuthentication />
    //  <VerificationPage />
    // <HomePage />
    //
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<ProLogin />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/settings" element={<SettingPage />} />
        <Route path="/WeeklySchedulePage" element={<WeeklySchedulePage />} />
      </Routes>

    </BrowserRouter>

  );
};

export default App;
