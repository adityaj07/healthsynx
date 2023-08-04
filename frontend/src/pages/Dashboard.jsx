import React from "react";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex">
      <div className="w-[30%] lg:w-[20%]">
      <Sidebar />
      </div>
      <div className="h-screen md:w-[70%] lg:w-[80%] bg-white ">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
