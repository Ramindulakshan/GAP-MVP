import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import Navbar from './components/Navbar/Navbar';
// import HomePage from './components/HomePage/HomePage';
// import Footer from './components/Footer/Footer';
import LoginPage from "./components/LoginPage/LoginPage";
import LandingPage from "./components//LandingPage/Landing";
import ResetPassword from "./components/FogotPassword/ResetPassword";
import EmailVerify from "./components/EmailVerify/EmailVerify";
import MobileAuthentication from "./components/MobileAuthentication/MobileAuthentication";
import FogotPassword from "./components/FogotPassword/FogotPassword";
import VerifyMN from "./components/FogotPassword/VerifyMN";
import VerifyE from "./components/FogotPassword/VerifyE";
import VerificationPage from "./components/Verification/VerificationPage";
// import LoginPageS from './components/Student/LoginPageS';
import HomePage from "./components/HomePage/HomePage";
import BeAMentor from "./components/BeAMentor/BeAMentor";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import ProLogin from "./components/Register/Register";
import Example from "./components/UserProfile/UserProfile";

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
    //
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<LandingPage />} />
    //     <Route path="/login" element={<LoginPage />} />
    //     <Route path="/register" element={<ProLogin />} />
    //     <Route path="/home" element={<HomePage />} />
    //   </Routes>
    // </BrowserRouter>

    <div>
      <Example />
    </div>
  );
};

export default App;
