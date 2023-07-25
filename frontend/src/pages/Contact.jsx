import React from "react";
import logo from "../assets/1.png";
import ContactCard from "../components/ui/ContactCard";
import { PiChatTeardropThin } from "react-icons/pi";
import { FaLocationArrow, FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";
import Button from "../components/ui/Button";

const Contact = () => {
  return (
    <div className="mt-[10rem] -mb-24">
    <div className="w-[90%] mx-auto px-4 md:px-0 flex flex-col">
        <div className="bg-black text-white rounded-lg px-6 py-8 flex flex-col justify-center items-center">
          <img
            src={logo}
            alt="logo"
            className="w-[8rem] h-[8rem] md:w-[10rem] md:h-[10rem] rounded-lg mb-4"
          />
          <h1 className="text-4xl mb-2 font-bold text-center">
            Contact our friendly team
          </h1>
          <small className="text-base mb-3">Let us know how we can help.</small>
        </div>
        <div className="flex flex-col lg:flex-row px-6 py-8 gap-4 justify-center mt-5">
          <ContactCard
            title="Chat to Support"
            desc="We're here to help."
            link="support@healthsynx.com"
            icon={ PiChatTeardropThin }
          />
          <ContactCard
            title="Visit Us"
            desc="Visit our office HQ."
            link="View on Google Maps"
            icon={FaLocationArrow}
          />
          <ContactCard
            title="Call Us"
            desc="Mon-Fri from 8am to 5pm"
            link="+91 1234567890"
            icon={FaPhone}
          />
        </div>
        <div className="flex flex-col justify-center items-center px-6 py-8 border-[2px] rounded-lg mt-8">
          <h1 className="text-3xl mb-3 font-semibold">Get Started with tracking your health now!</h1>
          <p>Register or Sign in.</p>
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

export default Contact;
