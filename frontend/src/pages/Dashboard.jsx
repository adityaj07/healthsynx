import React from "react";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";


const Dashboard = () => {
  return (
    <div className="flex">
      <div className="fixed top-0 left-0 h-screen rounded-r-3xl z-40 w-[20%] bg-black ">
        <Sidebar />
      </div>
      <div className="h-screen w-full bg-white ">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
