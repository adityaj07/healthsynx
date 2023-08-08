import React from "react";
import { GiFootprint } from "react-icons/gi";
import { FaMoon } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";
import DashboardHomeCard from "../../components/DashboardHomeCard";

const DashboardHome = () => {
  return (
    <>
      <div className="mt-6 mx-4 flex gap-4 justify-between items-center">
        <DashboardHomeCard
          cardName="Steps Taken"
          className="bg-[#C0DEDD]"
          icon={GiFootprint}
          metricCount="1458/2000"
        />
        <DashboardHomeCard
          cardName="Heart"
          className="bg-[#F1DFDE]"
          icon={AiFillHeart}
          metricCount="72.86bpm"
        />
        <DashboardHomeCard
          cardName="Sleep"
          className="bg-[#E6DFF1]"
          icon={FaMoon}
          metricCount="8hrs"
        />
      </div>
      <div>
        <div>

        </div>
        <div>
          <h1>Goals</h1>
          <div>

          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardHome;
