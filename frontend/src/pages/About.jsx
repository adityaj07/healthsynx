import React from "react";
import logo from "../assets/1.png";
import { Link } from "react-router-dom";
import Button from "../components/ui/Button";

const About = () => {
  return (
    <div className="mt-[10rem] -mb-24">
      <div className="w-[90%] mx-auto px-4 md:px-0 flex flex-col">
        <div className="bg-black text-white rounded-lg px-6 py-8 flex flex-col justify-center items-center">
          <img
            src={logo}
            alt="logo"
            className="w-[8rem] h-[8rem] md:w-[10rem] md:h-[10rem] rounded-lg mb-4"
          />
          <h1 className="text-3xl md:text-5xl mb-2 font-bold text-center">
            About Us
          </h1>
          <small className="text-base md:text-sm  mb-3">
            Know about HealthSynx.
          </small>
        </div>

        <div className="my-8">
          <h2 className="text-2xl font-semibold my-4">About HealthSynx</h2>
          <p className="text-base">At HealthSynx, we empower individuals to lead healthier lives through comprehensive health and fitness tracking. Our platform offers personalized goal setting, seamless wearable integration, and valuable data insights.</p>

          <h2 className="text-2xl font-semibold mb-4 mt-4">Why Choose HealthSynx?</h2>
          <ul className="list-disc px-6">
            <li className="my-2"><span className="font-bold text-base">Integration with Wearables:</span> Easily track your health data from various wearable devices.</li>
            <li className="my-2"><span className="font-bold text-base">User-Friendly Interface:</span> Enjoy a smooth experience with our intuitive platform.</li>
            <li className="my-2"><span className="font-bold text-base">Comprehensive Tracking:</span> Monitor activities, nutrition, and progress for a holistic view.</li>
          </ul>
        </div>

        <div className="flex flex-col justify-center items-center px-6 py-8 border-[2px] rounded-lg mt-8 -mb-32 md:-mb-16">
          <h1 className="text-3xl mb-3 font-semibold">
          Get Started Today!
          </h1>
          <p>Sign up or log in to embark on a path to a healthier you.</p>
          <div className="flex items-center gap-4 mt-6">
            <Link to="/signup">
              <Button
                text="Signup"
                className="bg-black text-white  border border-black hover:bg-white hover:text-black transition-colors duration-150 "
              />
            </Link>
            <Link to="/login">
              <Button
                text="Login"
                className="border border-black hover:bg-black hover:text-white transition-colors duration-150"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
