import { Link } from "react-router-dom";
import logo from "../assets/HealthSynx.png";
import Button from "./ui/Button";
import React, { useState } from "react";
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";

const links = ["Home", "Features", "About", "Contact"];

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavToggle = () => {
    setIsNavOpen((prevState) => !prevState);
  };

  return (
    <>
      <div className="fixed top-2 left-2 right-2 lg:left-[15rem] lg:right-[15rem] z-50 bg-[#C0DEDD] rounded-lg">
        <nav className="flex justify-between items-center md:p-2 h-16 lg:h-[5rem] mx-4 my-2">
          <div className="flex gap-2 md:gap-3 lg:gap-4 items-center">
            <img
              src={logo}
              alt="logo"
              className="rounded-md w-8 h-8 lg:w-[3rem] lg:h-[3rem]"
            />
            <span className="text-base md:text-2xl font-extrabold">
              HealthSynx.
            </span>
          </div>
          <div className="hidden md:flex bg-[#151515] rounded-3xl text-white p-2">
            <ul className="flex items-center justify-center gap-6">
              {links.map((link) => (
                <li
                  key={link}
                  className="p-2 md:px-2 lg:px-4 cursor-pointer hover:text-gray-300 transition-colors duration-200"
                >
                  <Link to={`/${link === "Home" ? "" : link.toLowerCase()}`}>
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden md:flex items-center gap-4">
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

          <div
            onClick={handleNavToggle}
            className="block md:hidden cursor-pointer"
          >
            {isNavOpen ? (
              <RiCloseFill
                size={20}
                className="block lg:hidden animate-fade-in-out"
              />
            ) : (
              <RiMenu3Fill
                size={20}
                className="block lg:hidden animate-fade-in-out"
              />
            )}
          </div>
        </nav>
      </div>

      {/* MOBILE NAV  */}
      <div
        className={`mobile-nav fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 lg:hidden transition-opacity z-[45] pt-4 ${
          isNavOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      onClick={handleNavToggle}>
        <div className="bg-[#151515] mt-20 md:mt-0 rounded-3xl w-[60%] ml-auto mr-[5%] text-white p-4 text-sm shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
          <ul className="flex flex-col items-center w-full justify-center gap-6 border-b-[1px] border-gray-500 pb-4 transition-transform duration-300 ">
            {links.map((link) => (
              <li
                key={link}
                className="p-2 px-4 cursor-pointer  transition-colors duration-200 hover:bg-white hover:text-blacks w-full text-center rounded-lg hover:text-black"
              >
                <Link to={`/${link === "Home" ? "" : link.toLowerCase()}`}>
                  {link}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex flex-col items-center gap-4 py-4 ">
            <Link to="/signup" className="w-full">
              <Button
                text="Signup"
                className="border border-black bg-white text-black w-full hover:bg-[#C0DEDD] transition-colors duration-150"
              />
            </Link>
            <Link to="/login" className="w-full">
              <Button text="Login" className="border border-white  w-full hover:bg-[#F1DFDE] hover:text-black transition-colors duration-150" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
