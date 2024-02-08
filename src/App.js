import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

//Pages Import Section
import BeAMentor from "./components/BeAMentor/BeAMentor";
import UnderConstructionBeAMentor from "./components/BeAMentor/UnderConstructionBeAMentor";
import EmailVerify from "./components/EmailVerify/EmailVerify";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import ResetPassword from "./components/ForgotPassword/ResetPassword";
import VerifyE from "./components/ForgotPassword/VerifyE";
import VerifyMN from "./components/ForgotPassword/VerifyMN";
import HistoryPage from "./components/HistoryPage/HistoryPage";
import HistoryPageEmpty from "./components/HistoryPage/HistoryPageEmpty";
import UnderConstructionHistoryPage from "./components/HistoryPage/UnderConstructionHistoryPage";
import HomePage from "./components/HomePage/HomePage";
import UnderConstructionHome from "./components/HomePage/UnderConstructionHome";
import LandingPage from "./components//LandingPage/Landing";
import LandingPageAbout from "./components/LandingPageAbout/LandingPageAbout";
import LandingPageContact from "./components/LandingPageContact/LandingPageContact";
import LoginPage from "./components/LoginPage/LoginPage";
import MentoringSessionPage from "./components/MentoringSession/MentoringSession";
import MentoringSessionEmpty from "./components/MentoringSession/MentoringSessionEmpty";
import UnderConstructionMentorSession from "./components/MentoringSession/UnderConstructionMentorSession";
import MentorsFilter from "./components/MentorsFilter/Filters";
import Mentors from "./components/MentorsPage/Mentors";
import UnderConstructionMentors from "./components/MentorsPage/UnderConstructionMentors";
import MobileAuthentication from "./components/MobileAuthentication/MobileAuthentication";
import Notification from "./components/Notification/Notification";
import Register from "./components/Register/Register";
import Request from "./components/Request/Request";
import SettingPage from "./components/SettingPage/SettingPage";
import UserProfile from "./components/UserProfile/UserProfile";
import UserProfileEmptyView from "./components/UserProfile/UserProfileEmptyView";
import UserProfileOtherUsers from "./components/UserProfile/UserProfileOtherUsers";
import VerificationPage from "./components/Verification/VerificationPage";
import WeeklySchedulePage from "./components/WeeklySchedulePage/WeeklySchedulePage";
import UnderConstructionWeeklySchedulePage from "./components/WeeklySchedulePage/UnderConstructionWeeklySchedulePage";
import WeeklySchedulePageNotMenter from "./components/WeeklySchedulePageNotMenter/WeeklySchedulePageNotMenter";
import PrivateRoutes from "./utils/privateRoutes";
import { AuthProvider } from "./utils/authContext";

const App = () => {
  return (
    <React.Fragment>
      <AuthProvider>
        <Routes>
          <Route path="/home" element={<HomePage />} exact />
          <Route path="/settings" element={<SettingPage />} />
          <Route path="/WeeklySchedulePage" element={<WeeklySchedulePage />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/verifyE" element={<VerifyE />} />
          <Route path="/resetPassword" element={<ResetPassword />} />
          <Route path="/mentoringSession" element={<MentoringSessionPage />} />
          <Route path="/mentoringSession " element={<MentoringSessionPage />} />
          <Route path="/beAMentor" element={<BeAMentor />} />
          <Route
            path="/underConstructionBeAMentor"
            element={<UnderConstructionBeAMentor />}
          />
          <Route path="/emailVerify" element={<EmailVerify />} />
          <Route path="/verifyMN" element={<VerifyMN />} />
          <Route path="/historyPage" element={<HistoryPage />} />
          <Route path="/historyPageEmpty" element={<HistoryPageEmpty />} />
          <Route
            path="/underConstructionHistoryPage"
            element={<UnderConstructionHistoryPage />}
          />
            <Route
            path="/userProfile"
            element={<UserProfile />}
          />
          <Route
            path="/underConstructionHome"
            element={<UnderConstructionHome />}
          />
          <Route path="/landingPageAbout" element={<LandingPageAbout />} />
          <Route path="/landingPageContact" element={<LandingPageContact />} />
          <Route
            path="/mentoringSessionEmpty"
            element={<MentoringSessionEmpty />}
          />
          <Route
            path="/underConstructionMentorSession"
            element={<UnderConstructionMentorSession />}
          />
          <Route path="/mentors" element={<Mentors />} />
          <Route path="/mentorsFilter" element={<MentorsFilter />} />
          <Route
            path="/underConstructionMentors"
            element={<UnderConstructionMentors />}
          />
          <Route
            path="/mobileAuthentication"
            element={<MobileAuthentication />}
          />
          <Route path="/notification" element={<Notification />} />
          <Route path="/request" element={<Request />} />
          <Route
            path="/userProfileEmptyView"
            element={<UserProfileEmptyView />}
          />
          <Route
            path="/userProfileOtherUsers"
            element={<UserProfileOtherUsers />}
          />
          <Route path="/verificationPage" element={<VerificationPage />} />
          <Route
            path="/underConstructionWeeklySchedulePage"
            element={<UnderConstructionWeeklySchedulePage />}
          />
          <Route
            path="/weeklySchedulePageNotMenter"
            element={<WeeklySchedulePageNotMenter />}
          />
         
          
        </Routes>
      </AuthProvider>
    </React.Fragment>
  );
};

export default App;
