import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import Button from "../components/ui/Button";
import { FaArrowRight } from "react-icons/fa";
import hero from "../assets/hero.jpg";
import pattern from "../assets/ooorganize.svg";
import Features from "../components/Features";
import Guide from "../components/Guide";
import Pricing from "../components/Pricing";
// import pattern from "../assets/pattern.svg"

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-[90%] lg:w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 mt-20 md:mt-36 h-[35rem] z-40">
        <div className="text-start relative md:mt-10">
          <small className="px-4 py-2 text-xs rounded-full bg-gray-500 text-white w-fit absolute mt-12">
            Integration with wearable⚡
          </small>
          <h1 className="text-[3rem] sm:text-[3.5rem] md:text-6xl md:leading-snug font-extrabold mt-24 mb-3 md:mb-6">
            Get Fit, <br /> Get Strong, <br />
            Get Healthy!
          </h1>
          <p className="text-lg md:text-xl">
            Elevate Your Fitness Journey with HealthSynx: Your Personalized
            Health and Fitness Tracker
          </p>
          <Link to="/signup">
            <div className="flex gap-2 items-center mt-6">
              <Button
                text="Start tracking"
                className="bg-black text-white text-base rounded-lg"
              />
              <div className="w-fit h-fit p-2 rounded-full bg-black">
                <FaArrowRight className="invert cursor-pointer" />
              </div>
            </div>
          </Link>
        </div>

        <div>
          <img src={hero} alt="hero" className="w-full h-full mt-6 md:mt-0 " />
        </div>
        <img
          src={pattern}
          alt="pattern"
          className="w-[20rem] h-[20rem] absolute top-8 -left-[9rem] hidden lg:block"
        />
        <img
          src={pattern}
          alt="pattern"
          className="w-[15rem] h-[15rem] absolute top-72 -right-[8rem] hidden lg:block"
        />
      </div>
      <Features />
      <Guide />
      <Pricing />
    </motion.div>
  );
};

export default Home;
