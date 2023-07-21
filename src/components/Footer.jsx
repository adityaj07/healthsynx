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
    <div className="bg-[#F1DFDE] w-[70%] mx-auto  relative flex flex-col gap-24 rounded-lg mt-72 px-16 py-14">
     {!isAboutOrContactOrFeaturesPage && <div className="absolute -top-[14rem] left-32 right-32">
        <Newsletter />
      </div>}
      <div className="grid grid-cols-3 gap-4 mt-16">
        <div className="flex flex-col gap-4">
          <img
            src={logo}
            alt="logo"
            className="w-[7rem] h-[7rem] rounded-3xl"
          />
          <p className="text-sm w-[90%]">
            We envision a world where everyone has the tools and knowledge to
            lead a healthy and active lifestyle.
          </p>
        </div>
        <div className="flex items-center">
          <ul className="grid grid-cols-2 gap-3">
            {links.map((link) => (
              <li
                key={link}
                className="text-black text-base hover:text-gray-900 cursor-pointer  underline"
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
      <div className="flex justify-between items-center border-t-[1px] border-gray-700 pt-6">
        <div className="flex gap-3 items-center">
          <img
            src={logo1}
            alt="logo"
            className="rounded-md w-[3rem] h-[3rem]"
          />
          <span className="text-2xl font-extrabold">HealthSynx.</span>
        </div>
        <div>
          <span className="tracking-widest">
            &copy;Copyright 2023 | HealthSynx
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
