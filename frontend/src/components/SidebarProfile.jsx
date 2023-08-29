import {React} from "react";
import profilePic from "../assets/adi.jpeg";
import { Link } from "react-router-dom";


const SidebarProfile = ({userInfo}) => {
  if (!userInfo) {
    return "Loading..."; 
  }
  // console.log(userInfo);
  return (
    <div className="flex flex-col justify-center items-center gap-4 pt-4 text-white">
      <img
        src={profilePic}
        alt="user profile picture"
        className="w-[8rem] rounded-full"
      />
      <h1 className="font-bold text-2xl">{userInfo.data?.username}</h1>
      <Link to={`/dashboard/profile/${userInfo.data?.id}`}><button
        className="border-[1px] px-4 py-2 rounded-full hover:bg-white hover:text-black transition-colors duration-200"
      >
        Edit
      </button></Link>
    </div>
  );
};

export default SidebarProfile;
