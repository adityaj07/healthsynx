import "./App.css"
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

function App() {
  const location = useLocation();

  const isSingupOrLoginPage =
    location.pathname === "/signup" ||
    location.pathname === "/login" ||
    location.pathname === "/forgotpassword";

  return (
    <div className="">
      {!isSingupOrLoginPage && <Navbar />}
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="#features" element={<Features />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgotpassword" element={<Forgotpassword />} />
      </Routes>
      {!isSingupOrLoginPage && <Footer />} */}
    </div>
  );
}

export default App;
