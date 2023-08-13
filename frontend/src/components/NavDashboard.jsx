import React from "react";
import { MdNotificationsNone } from "react-icons/md";
import { MdAdd } from "react-icons/md";
import { getDaySuffix, getMonthAbbreviation } from "../helpers/getDateAndMonth";

const currentDate = new Date();
const day = currentDate.getDate();
const daySuffix = getDaySuffix(day);
const monthIndex = currentDate.getMonth();
const monthAbbreviation = getMonthAbbreviation(monthIndex);
const year = currentDate.getFullYear();
const dayOfWeek = currentDate.toLocaleString("en-US", { weekday: "long" });

const formattedDate = `${dayOfWeek}, ${day}${daySuffix} ${monthAbbreviation}, ${year}`;

const NavDashboard = () => {
  return (
    <div className="flex justify-between items-center h-[4rem] p-4 border-b-[1px] border-slate-500  mx-5 mt-3 ">
      <h1 className="text-2xl">
        Hello, <span className="font-bold">User</span>
      </h1>
      <div className="flex items-center gap-6">
        <span>{formattedDate}</span>
        <MdAdd size={30} className="cursor-pointer" />
        <MdNotificationsNone size={30} className="cursor-pointer" />
      </div>
    </div>
  );
};

export default NavDashboard;
