import React from "react";
import { Link } from "react-router-dom";
import logo1 from "../assets/2.png";
import logo from "../assets/HealthSynx.png";
import line from "../assets/line.svg"
import google from "../assets/google.svg"
import { FaArrowRight, FaArrowLeft} from "react-icons/fa";


const Forgotpassword = () => {
  return (
    <div className="w-screen h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-2 ">
        <div className="left flex flex-col px-10 py-8 md:py-12">
          <div className="logo flex gap-3 items-center">
            <img
              src={logo}
              alt="logo"
              className="rounded-md w-[3rem] h-[3rem]"
            />
            <span className="text-2xl font-extrabold">HealthSynx.</span>
          </div>
          <div className="login flex flex-col justify-center items-center mt-20 md:mt-24 h-[80%]">
            <div className="flex flex-col w-[95%] md:w-[50%] gap-6">
              <h1 className="text-4xl font-bold">Forgot password</h1>
              <small className="mb-6">
                Enter your email and we'll send you a reset link.
              </small>
              <input
                type="email"
                placeholder="Email"
                className="outline-none bg-transparent px-4 py-2 text-black border-black border-b-[1px]"
              />
              
             <button className="bg-black text-white rounded-full w-full border-black border-[1px] px-4 py-2 flex items-center justify-center gap-4 hover:bg-white hover:text-black transition-colors duration-150">
                Send
                <FaArrowRight />
              </button>
              <p className="text-center relative">Remember your password? <Link to="/login"><span className="font-bold cursor-pointer hover:underline">Login</span></Link>
              <img src={line} alt="line" className="absolute -top-2 -right-8 md:right-5 w-[10rem]  -z-[5]"/>
              </p>
            </div>
            <Link to="/"><p className="mt-12 md:mt-24 text-sm flex items-center gap-4 cursor-pointer hover:underline">
            <FaArrowLeft/>
              Back to home page</p></Link>
          </div>
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

export default Forgotpassword;
