import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import NavDashboard from "../components/NavDashboard";
import axiosInstance from "../api/axiosInstance";


const Dashboard = () => {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const { data: user } = await axiosInstance.get("http://localhost:3000/auth/");
        // console.log(user);
        setUserInfo(user);
        // console.log(userInfo);
      } catch (error) {
        console.log("Error fetching user info:", error.message);
        if (error.response) {
          console.log("Server responded with:", error.response.data);
        }
      }
    };
  
    fetchUserInfo();
  }, []);
  

  return (
    <div className="flex bg-black h-screen ">
      <div className="w-[30%] lg:w-[20%]">
        <Sidebar userInfo={userInfo} />
      </div>

      <div className=" md:w-[70%] lg:w-[80%] rounded-[2rem] m-4 bg-white">
        <NavDashboard userInfo={userInfo} />
        <div className="text-black ">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
