import "./App.css";
import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
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

function App() {
  const location = useLocation();

  const islandingPage =
    location.pathname === "/" ||
    location.pathname === "/features" ||
    location.pathname === "/about" ||
    location.pathname === "/contact";

  return (
    <div>
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
          <Route path="/dashboard/activity" element={<Activity />} />
          <Route path="/dashboard/goals" element={<Goals />} />
          <Route path="/dashboard/nutrition" element={<Nutrition />} />
          <Route path="/dashboard/wearables" element={<Wearables />} />
          <Route path="/dashboard/settings" element={<Settings />} />
        </Route>
      </Routes>
      {islandingPage && <Footer />}
    </div>
  );
}

export default App;
