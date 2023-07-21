import React from "react";
import { Link } from "react-router-dom";
import logo1 from "../assets/2.png";
import logo from "../assets/HealthSynx.png";
import line from "../assets/line.svg"
import google from "../assets/google.svg"
import { FaArrowRight, FaArrowLeft} from "react-icons/fa";



const Login = () => {
  return (
    <div className="w-screen h-screen">
      <div className="grid grid-cols-2 ">
        <div className="left flex flex-col px-10 py-12">
          <div className="logo flex gap-3 items-center">
            <img
              src={logo}
              alt="logo"
              className="rounded-md w-[3rem] h-[3rem]"
            />
            <span className="text-2xl font-extrabold">HealthSynx.</span>
          </div>
          <div className="Login flex flex-col justify-center items-center mt-12 h-[80%]">
            <div className="flex flex-col w-[50%] gap-6">
              <h1 className="text-4xl font-bold">Welcome back, <span>Ram</span></h1>
              <small className="mb-6">
                Enter your details or continue with Google.
              </small>
            
              <input
                type="email"
                placeholder="Email"
                className="outline-none bg-transparent px-4 py-2 text-black border-black border-b-[1px]"
              />
              <input
                type="password"
                placeholder="Password"
                className="outline-none bg-transparent px-4 py-2 text-black border-black border-b-[1px]"
              />
              <Link to="/forgotpassword"><div className="flex justify-end items-center font-semibold hover:underline cursor-pointer text-sm mb-4">
               Forgot password? 
              </div></Link>
             <button className="bg-black text-white rounded-full w-full border-black border-[1px] px-4 py-2 flex items-center justify-center gap-4 hover:bg-white hover:text-black transition-colors duration-150">
                Login
                <FaArrowRight />
              </button>
              <div className="OR flex items-center justify-center my-6">
                <hr className="w-[40%] h-[2px] bg-gray-400" />
                <p className="text-center mx-4">or</p>
                <hr className="w-[40%] h-[2px] bg-gray-400" />
              </div>
              <button className="bg-white text-black rounded-full w-full border-black border-[1px] px-4 py-2 flex items-center justify-center gap-4 hover:bg-black hover:text-white transition-colors duration-150">
                <img src={google} alt="google" className="w-[1.5rem]"/>
                Log in with Google
              </button>
              <p className="text-center relative">Don't have an account? <Link to="/signup"><span className="font-bold cursor-pointer hover:underline">Signup</span></Link>
              <img src={line} alt="line" className="absolute -top-2 right-5 w-[10rem]  -z-[5]"/>
              </p>
            </div>
            <Link to="/"><p className="mt-24 text-sm flex items-center gap-4 cursor-pointer hover:underline">
            <FaArrowLeft/>
              Back to home page</p></Link>
          </div>
        </div>
        <div className="right bg-black flex justify-center items-center rounded-l-3xl h-screen">
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
