import React from "react";
import { Link } from "react-router-dom";
import Button from "./ui/Button";
import { FaArrowRight } from "react-icons/fa";
import hero from "../assets/hero.svg";
import pattern from "../assets/ooorganize.svg";
import Features from "./Features";
import Guide from "./Guide";
import Pricing from "./Pricing";
// import pattern from "../assets/pattern.svg"

const Home = () => {
  return (
    <>
      <div className="w-[70%] mx-auto grid grid-cols-2 gap-4  mt-32 h-[35rem] z-[40]">
        <div className="text-start relative">
          <small className="px-4 py-2 text-xs rounded-full bg-gray-500 text-white w-fit absolute mt-12">
            Integration with wearable⚡
          </small>
          <h1 className="text-6xl leading-snug font-extrabold mt-24 mb-6">
            Get Fit, <br /> Get Strong, <br />
            Get Healthy!
          </h1>
          <p className="text-xl">
            Elevate Your Fitness Journey with HealthSynx: Your Personalized
            Health and Fitness Tracker
          </p>
          <Link to="/signup"><div className="flex gap-2 items-center mt-6">
            <Button text="Start tracking" className="bg-black text-white" />
            <div className="w-fit h-fit p-2 rounded-full bg-black">
              <FaArrowRight className="invert cursor-pointer" />
            </div>
          </div></Link>
        </div>

        <div>
          <img src={hero} alt="hero" className="w-full h-full" />
        </div>
        <img
          src={pattern}
          alt="pattern"
          className="w-[20rem] h-[20rem] absolute top-8 -left-[9rem]"
        />
        <img
          src={pattern}
          alt="pattern"
          className="w-[15rem] h-[15rem] absolute top-72 -right-[8rem]"
        />
        {/* <img src={pattern} alt="pattern" className="absolute top-0 mx-auto opacity-20 w-screen" /> */}
      </div>
      <Features />
      <Guide />
      <Pricing />
    </>
  );
};

export default Home;
