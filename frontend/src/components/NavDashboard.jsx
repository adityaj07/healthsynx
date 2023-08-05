import React from "react";
import { MdNotificationsNone } from "react-icons/md";
import { MdAdd } from "react-icons/md";

const NavDashboard = () => {
  return (
    <div className="flex justify-between items-center h-[4rem] p-4 border-b-[1px] border-slate-500  mx-5 mt-3 ">
      <h1 className="text-2xl">
        Hello, <span className="font-bold">Aditya</span>
      </h1>
      <div className="flex items-center gap-6">
        <span>Sunday, 6th Aug, 2023</span>
        <MdAdd size={30} className="cursor-pointer"/>
        <MdNotificationsNone size={30} className="cursor-pointer"/>
      </div>
    </div>
  );
};

export default NavDashboard;
