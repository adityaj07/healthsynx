import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import toast from "react-hot-toast";
import logo1 from "../assets/2.png";
import logo from "../assets/HealthSynx.png";
import line from "../assets/line.svg";
import google from "../assets/google.svg";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import axiosInstance from "../api/axiosInstance";

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [buttonDisabled, setButtonDisabled] = useState(false);

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  const onLogin = async () => {
    try {
      const res = await axiosInstance.post("https://healthsynx-backend.vercel.app/auth/login", user);
      console.log(res.data);
      setButtonDisabled(true);
      toast.success("Logged in successfully");
      navigate("/dashboard");
    } catch (error) {
      console.log("Error occurred", error.message);
      toast.error("Login failed. Please check your credentials");
    }
  };

  return (
    <div className="w-screen h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-2 ">
        <div className="left flex flex-col px-10 py-8 md:py-12">
          <Link className="logo flex gap-3 items-center" to="/">
            <img
              src={logo}
              alt="logo"
              className="rounded-md w-[3rem] h-[3rem]"
            />
            <span className="text-2xl font-extrabold">HealthSynx.</span>
          </Link>
          <motion.div
            className="login flex flex-col justify-center items-center mt-20 md:mt-24 h-[80%]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col w-[95%] md:w-[50%] gap-6">
              <h1 className="text-4xl font-bold">Welcome back</h1>
              <small className="mb-6">
                Enter your details or continue with Google.
              </small>
              <input
                type="email"
                placeholder="Email"
                className="outline-none bg-transparent px-4 py-2 text-black border-black border-b-[1px]"
                value={user.email}
                onChange={(e) => {
                  setUser({ ...user, email: e.target.value });
                }}
              />
              <input
                type="password"
                placeholder="Password"
                className="outline-none bg-transparent px-4 py-2 text-black border-black border-b-[1px]"
                value={user.password}
                onChange={(e) => {
                  setUser({ ...user, password: e.target.value });
                }}
              />
              <Link to="/forgotpassword">
                <div className="flex justify-end items-center font-semibold underline md:hover:underline cursor-pointer text-sm mb-2">
                  Forgot password?
                </div>
              </Link>
              <div className="flex flex-col">
              <small className="font-semibold">Test credentials</small>
              <small>Email: user@gmail.com</small>
              <small>Password: 123456</small>

              </div>
              <button
                className={`bg-black text-white rounded-full w-full border-black border-[1px] px-4 py-2 flex items-center justify-center gap-4 hover:bg-white hover:text-black transition-colors duration-150 ${
                  buttonDisabled
                    ? "cursor-not-allowed disabled:hover:bg-gray-600"
                    : ""
                }`}
                onClick={onLogin}
              >
                Log in
                <FaArrowRight />
              </button>
              {/* <Toaster/> */}
              <div className="OR flex items-center justify-center my-2 md:my-6">
                <hr className="w-[40%] h-[2px] bg-gray-400" />
                <p className="text-center mx-4">or</p>
                <hr className="w-[40%] h-[2px] bg-gray-400" />
              </div>
              <button className="bg-white text-black rounded-full w-full border-black border-[1px] px-4 py-2 flex items-center justify-center gap-4 hover:bg-black hover:text-white transition-colors duration-150">
                <img src={google} alt="google" className="w-[1.5rem]" />
                Log in with Google
              </button>
              <p className="text-center relative">
                Already have an account?{" "}
                <Link to="/signup">
                  <span className="font-bold cursor-pointer hover:underline">
                    Signup
                  </span>
                </Link>
                <img
                  src={line}
                  alt="line"
                  className="absolute -top-2 -right-8 md:right-5 w-[10rem]  -z-[5]"
                />
              </p>
            </div>
            <Link to="/">
              <p className="mt-12 md:mt-24 text-sm flex items-center gap-4 cursor-pointer hover:underline">
                <FaArrowLeft />
                Back to home page
              </p>
            </Link>
          </motion.div>
        </div>
        <div className="right bg-black lg:flex justify-center items-center rounded-l-3xl h-screen hidden ">
          <img
            src={logo1}
            alt="healthsynx image"
            className="w-[31.25rem] h-[31.25rem]"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
