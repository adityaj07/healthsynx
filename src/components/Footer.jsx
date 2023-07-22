import React from "react";
import { useLocation } from "react-router-dom";
import logo from "../assets/1.png";
import logo1 from "../assets/HealthSynx.png";
import Newsletter from "./Newsletter";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const socials = [
  {
    id: 1,
    name: "Twitter",
    icon: <FaTwitter size={20} />,
  },
  {
    id: 2,
    name: "Facebook",
    icon: <FaFacebook size={20} />,
  },
  {
    id: 3,
    name: "Instagram",
    icon: <FaInstagram size={20} />,
  },
  {
    id: 4,
    name: "LinkedIn",
    icon: <FaLinkedin size={20} />,
  },
];

const links = [
  "Contact Us",
  "About",
  "Resources",
  "Join our Community",
  "Terms of Service",
  "Privacy Policy",
];

const Footer = () => {
  const location = useLocation();

  const isAboutOrContactOrFeaturesPage =
    location.pathname === "/about" ||
    location.pathname === "/contact" ||
    location.pathname === "/features";

  return (
    <div className="bg-[#F1DFDE] w-[90%] lg:w-[70%] mx-auto  relative flex flex-col gap-24 rounded-lg mt-[20rem] p-6 md:px-16 md:py-14">
     {!isAboutOrContactOrFeaturesPage && <div className="absolute -top-64 left-6 right-6 md:-top-52 lg:-top-[14rem] lg:left-32 lg:right-32">
        <Newsletter />
      </div>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-16">
        <div className="flex flex-col items-center md:items-start gap-4 mt-4 md:mt-0">
          <img
            src={logo}
            alt="logo"
            className="w-[7rem] h-[7rem] rounded-3xl"
          />
          <p className="text-sm w-[90%] text-center md:text-start">
            We envision a world where everyone has the tools and knowledge to
            lead a healthy and active lifestyle.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center my-6 md:my-0">
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {links.map((link) => (
              <li
                key={link}
                className="text-black text-base hover:text-gray-900 cursor-pointer text-center md:text-start  underline"
              >
                {link}
              </li>
            ))}
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {socials.map((social) => {
            return (
              <div
                key={social.id}
                className="flex items-center justify-evenly gap-2 bg-white rounded-lg px-4 py-2 cursor-pointer"
              >
                {social.icon}
                {social.name}
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-4 md:gap-0 justify-between items-center border-t-[1px] border-gray-700 pt-6">
        <div className="flex gap-3 items-center">
          <img
            src={logo1}
            alt="logo"
            className="rounded-md w-[2rem] h-[2rem] md:w-[3rem] md:h-[3rem]"
          />
          <span className="text-base md:text-2xl font-extrabold">HealthSynx.</span>
        </div>
        <div>
          <span className="tracking-widest text-sm">
            &copy;Copyright 2023 | HealthSynx
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
