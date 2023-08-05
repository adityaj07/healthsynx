import React from "react";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import NavDashboard from "../components/NavDashboard";

const Dashboard = () => {
  return (
    <div className="flex bg-black h-screen">
      <div className="w-[30%] lg:w-[20%]">
        <Sidebar />
      </div>

      <div className="min-h-[96vh] md:w-[70%] lg:w-[80%] rounded-[2rem] m-4 bg-white overflow-hidden">
        <NavDashboard />
        <div className="text-black h-full overflow-auto">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
