import React from "react";
import logo from "../assets/HealthSynx.png";
import SidebarProfile from "../components/SidebarProfile";
import { BiSolidDashboard } from "react-icons/bi";
import { FiActivity } from "react-icons/fi";
import { GoGoal } from "react-icons/go";
import { GiFruitBowl } from "react-icons/gi";
import { TbDeviceWatchHeart } from "react-icons/tb";
import { FiSettings } from "react-icons/fi";
import { LuLogOut } from "react-icons/lu";
import { NavLink } from "react-router-dom";

const menuLinks = [
  {
    title: "Dashboard",
    icon: BiSolidDashboard,
  },
  {
    title: "Activity",
    icon: FiActivity,
  },
  {
    title: "Goals",
    icon: GoGoal,
  },
  {
    title: "Nutrition",
    icon: GiFruitBowl,
  },
  {
    title: "Wearables",
    icon: TbDeviceWatchHeart,
  },
  {
    title: "Settings",
    icon: FiSettings,
  },
];

const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen rounded-r-3xl z-40 w-[30%] lg:w-[20%] bg-black ">
      <div className="flex flex-col gap-4 py-6 px-4 ">
        <div className="logo flex gap-3 items-center justify-center border-b-[1px] pb-4">
          <img src={logo} alt="logo" className="rounded-md w-[3rem] h-[3rem]" />
          <span className="text-2xl font-extrabold text-white">
            HealthSynx.
          </span>
        </div>
      </div>

      <div className="max-w-[90%] mx-auto flex flex-col justify-between">
        <SidebarProfile />
        <ul className="flex flex-col items-center justify-center gap-4 text-white mt-12 w-full">
          {menuLinks.map((link) => (
            <NavLink
              key={link.title}
              to={`/dashboard${
                link.title === "Dashboard" ? "" : "/" + link.title.toLowerCase()
              }`}
              className={`cursor-pointer rounded-lg transition-colors duration-200 w-full gap-4 hover:bg-gray-400 hover:bg-opacity-20`}
            >
              <li
                key={link.title}
                className="flex justify-start items-center p-2 md:px-2 lg:px-4  w-full gap-4"
              >
                <span>{<link.icon size={20} />}</span>
                <span>{link.title}</span>
              </li>
            </NavLink>
          ))}
        </ul>

        <button className="flex justify-start items-center gap-4 text-white ounded-lg hover:bg-gray-400 hover:bg-opacity-20 transition-colors duration-200 p-2 md:px-2 lg:px-4 cursor-pointer rounded-lg mt-48 ">
          <LuLogOut size={20} />
          Log out
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
