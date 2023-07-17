import React from "react";
import  logo  from "../assets/HealthSynx.png";
import Button from "./Button";

const links = ["Home", "Features", "About", "Contact"];

const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between items-center p-2 h-[5rem] mt-[2rem]">
        <div className="flex gap-3 items-center">
          <img src={logo} alt="logo" className="rounded-md w-[3rem] h-[3rem]" />{" "}
          <span className="text-2xl font-extrabold">HealthSynx.</span>
        </div>
        <div className="bg-[#151515] rounded-3xl text-white p-2">
            <ul className="flex items-center justify-center gap-6">
                {
                    links.map((link)=>(
                        <li key={link} className="p-2 cursor-pointer hover:text-gray-300 transition-colors duration-200">{link}</li>
                    ))
                }
            </ul>
        </div>
        <div className="flex items-center gap-4">
            <Button text="Signup" className="bg-black text-white  border border-black hover:bg-white hover:text-black transition-colors duration-150 "/>
            <Button text="Login" className="border border-black hover:bg-black hover:text-white transition-colors duration-150"/>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
