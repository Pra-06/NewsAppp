import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { authActions } from "./store/auth";

// Global Layout Components
import Navbar from './Components/Navbar/Navbar';
import Logo from './Components/Logo/Logo';
import Footer from './Components/Footer/Footer';

// Pages for Logged-In Users
import MainHomePage from './Pages/MainHomePage';
import Budget from './Components/Home/Budget';
import Technology from './PagesOfHome/Technology';
import DailyReports from './Pages/SubDomain/DailyReports';
import EditorPack from './PagesOfHome/EditorPack';
import MostRead from './PagesOfHome/MostRead';
import TopNews from './PagesOfHome/TopNews';
import Crime from './Components/Home/Crime';
import InnerCrime from './Components/Home/InnerCrime';
import AboutUs from './Pages/AboutUs';
import AdvertisementWithUS from './Pages/Advertisement';
import TermsAndCondition from './Pages/TermsAndCondition';
import TrendingTopics from './Pages/TrendingTopics';

// Auth Pages
import Login from './authpages/authLoginPages/Login';
import Signup from './authpages/authSignUpPages/Signup';
import ForgetPassword from './authpages/authLoginPages/ForgetPassword';
import PassVerification from './authpages/authLoginPages/PassVerification';
import Email from './authpages/authSignUpPages/Email';
import Verify from './authpages/authSignUpPages/Verify';
import Verification from './authpages/authSignUpPages/Verification';

import './App.css';
import ContactUs from "./Pages/ContactUs";

function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const role = useSelector((state) => state.auth.role);

  // Persist login state on refresh
  useEffect(() => {
    const userId = localStorage.getItem("id");
    const token = localStorage.getItem("token");
    const storedRole = localStorage.getItem("role");

    if (userId && token && storedRole) {
      dispatch(authActions.login());
      dispatch(authActions.changeRole(storedRole));
    }
  }, [dispatch]);

  return (
    <div className="bg-gray-100 min-h-screen">
      {isLoggedIn && <Logo />}
      {isLoggedIn && <Navbar />}

      <Routes>
        {isLoggedIn ? (
          <>
            {/* Home + Pages */}
            <Route path="/" element={<MainHomePage />} />
            <Route path="/technology" element={<Technology />} />
            <Route path="/daily-report" element={<DailyReports />} />
            <Route path="/editor-pack" element={<EditorPack />} />
            <Route path="/most-read" element={<MostRead />} />
            <Route path="/top-news" element={<TopNews />} />
            <Route path="/crime" element={<Crime />} />
            <Route path="/innercrime" element={<InnerCrime />} />
            <Route path="/budget-2025" element={<Budget />} />

            {/* Info Pages */}
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/advertise" element={<AdvertisementWithUS />} />
            <Route path="/termsandcondition" element={<TermsAndCondition />} />
            <Route path="/trending-topics" element={<TrendingTopics />} />
          </>
        ) : (
          <>
            {/* Auth Routes */}
            <Route path="/" element={<Login />} />
            <Route path="/log-in" element={<Login />} />
            <Route path="/sign-up" element={<Signup />} />
            <Route path="/forget-password" element={<ForgetPassword />} />
            <Route path="/password-verification" element={<PassVerification />} />
            <Route path="/verify" element={<Verify />} />
            <Route path="/E~mail" element={<Email />} />
            <Route path="/verification" element={<Verification />} />
          </>
        )}
      </Routes>

      {isLoggedIn && <Footer />}
    </div>
  );
}

export default App;
