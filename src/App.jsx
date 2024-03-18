import React, { useState, useEffect } from "react";
import { Link, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Auth from "./components/Auth";
import Footer2 from "./components/Footer/Footer2";
import DefaultPage from "./components/DefaultPage";
import HomePagemain from "./components/HomePagemain";
import DMathc from "./components/ExamPages/DiagnosticExam/DMathWithCalculator/DMathc";
import Devidence from "./components/ExamPages/DiagnosticExam/DEvidenceBasedReading/Devidence";
import Dmathnc from "./components/ExamPages/DiagnosticExam/DMathWithNoCalculator/Dmathnc";
import Dwriting from "./components/ExamPages/DiagnosticExam/DWritingAndLanguage/Dwriting";
import MapApp from "./components/Map/MapApp";
import SignupPage from "./components/SignupPage";
import OtpPage from "./components/OtpPage";
import Success from "./components/OTP/Success";
import LoginPage from "./components/LoginPage";
import ForgetPassword from "./components/ForgetPassword/ForgetPassword";
import ForgetPasswordSecond from "./components/ForgetPassword/ForgetPasswordSecond";
import Payment from "./components/Payment/Payment";
import TestComplete from "./components/Messages/TestComplete";
import Aboutus from "./components/About/Aboutus";
import Cookies from "./components/Policy/Cookies";
import Terms from "./components/Policy/Terms";
import ResultBoard from "./components/ResultBoard";
import ResultPage from "./components/Result/ResultPage";
import DashMain from "./components/Dashboard/DashMain";
import Help from "./components/Help/Help";
const App = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isHomepage = location.pathname === "/";

  const [loginStatus, setLoginStatus] = useState(false);
  const [satData, setSatData] = useState('');

  const handleLoginSuccess = () => {
    setLoginStatus(true);
  };

  const handleSatDataReceived = (data) => {
    setSatData(data);
  };

  useEffect(() => {
    // Check satData when accessing /Map or /Payment routes
    if ((location.pathname === "/Map" || location.pathname === "/Payment") && !satData) {
      // Redirect user to homepage or any other appropriate page
      navigate("/");
    }
  }, [location.pathname, satData]);

  return (
    <div className="unscroll">
      <Routes>
        <Route path="/" element={<DefaultPage />} />
        <Route path="/Otp" element={<OtpPage />} />
        <Route path="/Login" element={<LoginPage onLoginSuccess={handleLoginSuccess} />} />
        <Route path="/Login/Forgetpassword" element={<ForgetPassword />} />
        <Route path="/About" element={<Aboutus />} />
        <Route path="/cookies" element={<Cookies />} />
        <Route path="/Terms" element={<Terms />} />

        {satData === "See Plans" && (
          <Route path="/Payment" element={<Payment />} />
        )}

        {satData === "Continue Preparing" && (
          <Route
            path="/Map"
            element={
              <Auth>
                <MapApp />
              </Auth>
            }
          />
        )}

        <Route path="/Help" element={<Help />} />
        <Route
          path="/Login/Forgetpassword/ForgetPasswordSecond"
          element={<ForgetPasswordSecond />}
        />
        <Route
          path="/HomePage"
          element={
            <Auth>
              <HomePagemain onSatDataReceived={handleSatDataReceived} />
            </Auth>
          }
        />
        <Route
          path="/TestComplete"
          element={
            <Auth>
              <TestComplete />
            </Auth>
          }
        />
        <Route
          path="/TestComplete/Result"
          element={
            <Auth>
              <ResultPage />
            </Auth>
          }
        />
        <Route
          path="/Dashboard"
          element={
            <Auth>
              <DashMain />
            </Auth>
          }
        />
        <Route
          path="/DMath"
          element={
            <Auth>
              <DMathc />
            </Auth>
          }
        />
        <Route
          path="/Devidence"
          element={
            <Auth>
              <Devidence />
            </Auth>
          }
        />
        <Route
          path="/Dmathnc"
          element={
            <Auth>
              <Dmathnc />
            </Auth>
          }
        />
        <Route
          path="/Dwriting"
          element={
            <Auth>
              <Dwriting />
            </Auth>
          }
        />
        <Route
          path="/payment"
          element={
            <Auth>
              <Payment />
            </Auth>
          }
        />
        <Route path="/ResultBoard" element={<ResultBoard />} />
      </Routes>

      {!isHomepage && <Footer2 />}
    </div>
  );
};

export default App;