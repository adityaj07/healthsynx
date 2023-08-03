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
import { Link, Route, Routes } from "react-router-dom";
// import DashboardHome from "./Dashboard/DashboardHome";
// import Activity from "./Dashboard/Activity";
// import Goals from "./Dashboard/Goals";
// import Nutrition from "./Dashboard/Nutrition";
// import Wearables from "./Dashboard/Wearables";
// import Settings from "./Dashboard/Settings";

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

const Dashboard = () => {
  return (
    <div className="flex">
      <div className="fixed top-0 left-0 h-screen rounded-r-3xl z-40 w-[15%] bg-black ">
        <div className="flex flex-col gap-4 py-6 px-4 ">
          <div className="logo flex gap-3 items-center justify-center border-b-[1px] pb-4">
            <img
              src={logo}
              alt="logo"
              className="rounded-md w-[3rem] h-[3rem]"
            />
            <span className="text-2xl font-extrabold text-white">
              HealthSynx.
            </span>
          </div>
        </div>

        <div className="max-w-[90%] mx-auto flex flex-col justify-between">
          <SidebarProfile />
          <ul className="flex flex-col items-center justify-center gap-4 text-white mt-12 w-full">
            {menuLinks.map((link) => (
              <Link to={`/${link.title === "Dashboard" ? "dashboard" : link.title.toLowerCase()}`}  className="cursor-pointer rounded-lg hover:bg-gray-400 hover:bg-opacity-20 transition-colors duration-200 w-full gap-4">
                <li
                  key={link.title}
                  className="flex justify-start items-center p-2 md:px-2 lg:px-4 rounded-lg hover:bg-gray-400 hover:bg-opacity-20 transition-colors duration-200 w-full gap-4"
                >
                  <span>{<link.icon size={20} />}</span>
                  <span>{link.title}</span>
                </li>
              </Link>
            ))}
          </ul>

          <button className="flex justify-start items-center gap-4 text-white ounded-lg hover:bg-gray-400 hover:bg-opacity-20 transition-colors duration-200 p-2 md:px-2 lg:px-4 cursor-pointer rounded-lg mt-48">
            <LuLogOut size={20} />
            Log out
          </button>
        </div>
      </div>
      <div className="h-screen w-full bg-white ">
      
      </div>
    </div>
  );
};

export default Dashboard;
