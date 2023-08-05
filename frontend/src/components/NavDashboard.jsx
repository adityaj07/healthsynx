import React from "react";
import { MdNotificationsNone } from "react-icons/md";
import { MdAdd} from "react-icons/md";

const NavDashboard = () => {
  return (
    <div className="flex justify-between items-center h-[4rem] p-4  rounded-[1.5rem] mx-5 mt-4 ">
      <h1 className="text-2xl">Hello, <span className="font-bold">Aditya</span></h1>
      <div className="flex items-center gap-6">
       
          <MdAdd size={30}/>
          <MdNotificationsNone  size={30}/>
       
      </div>
    </div>
  );
};

export default NavDashboard;
