import React from "react";
import profilePic from "../assets/adi.jpeg";
import Button from "./ui/Button";

const SidebarProfile = () => {
  return (
   
      <div className="flex flex-col justify-center items-center gap-4 pt-4 text-white">
        <img
          src={profilePic}
          alt="user profile picture"
          className="w-[8rem] rounded-full"
        />
        <h1 className="font-bold text-2xl">Hi, Aditya!</h1>
      <Button text="Edit" className="border-[1px] rounded-full hover:bg-white hover:text-black transition-colors duration-200"/>
      </div>
    
  );
};

export default SidebarProfile;
