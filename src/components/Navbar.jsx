import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/HealthSynx.png";
import Button from "./ui/Button";

const links = ["Home", "Features", "About", "Contact"];

const Navbar = () => {
  return (
    <>
      <div className="fixed  top-2 left-[15rem] right-[15rem]  z-[50] bg-[#C0DEDD] rounded-lg">
        <nav className="flex justify-between items-center p-2 h-[5rem] mx-4 my-2">
          <div className="flex gap-3 items-center">
            <img
              src={logo}
              alt="logo"
              className="rounded-md w-[3rem] h-[3rem]"
            />
            <span className="text-2xl font-extrabold">HealthSynx.</span>
          </div>
          <div className="bg-[#151515] rounded-3xl text-white p-2">
            <ul className="flex items-center justify-center gap-6">
              {links.map((link) => (
                <li
                  key={link}
                  className="p-2 px-4 cursor-pointer hover:text-gray-300 transition-colors duration-200"
                >
                  <Link to={`/${link === "Home" ? "" : link.toLowerCase()}`}>{link}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center gap-4">
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
        </nav>
      </div>
    </>
  );
};

export default Navbar;
