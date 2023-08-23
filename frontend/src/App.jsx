import "./App.css";
import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Forgotpassword from "./pages/Forgotpassword";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Features from "./components/Features";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import Activity from "./pages/Dashboard/Activity";
import Goals from "./pages/Dashboard/Goals";
import Nutrition from "./pages/Dashboard/Nutrition";
import Wearables from "./pages/Dashboard/Wearables";
import Settings from "./pages/Dashboard/Settings";
import DashboardHome from "./pages/Dashboard/DashboardHome";
import { Toaster } from "react-hot-toast";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Profile from "./pages/Dashboard/Profile";

function App() {
  const location = useLocation();

  const islandingPage =
    location.pathname === "/" ||
    location.pathname === "/features" ||
    location.pathname === "/about" ||
    location.pathname === "/contact";

  return (
    <div>
      <GoogleOAuthProvider clientId="290047704036-v4g4r85bt2m7f9p9bopvdlbbtvcn7o61.apps.googleusercontent.com">
        {islandingPage && <Navbar />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgotpassword" element={<Forgotpassword />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="/dashboard" element={<DashboardHome />} />
            <Route path="/dashboard/profile/:username" element={<Profile />} />
            <Route path="/dashboard/activity" element={<Activity />} />
            <Route path="/dashboard/goals" element={<Goals />} />
            <Route path="/dashboard/nutrition" element={<Nutrition />} />
            <Route path="/dashboard/wearables" element={<Wearables />} />
            <Route path="/dashboard/settings" element={<Settings />} />
          </Route>
        </Routes>
        <Toaster />
        {islandingPage && <Footer />}
      </GoogleOAuthProvider>
    </div>
  );
}

export default App;
