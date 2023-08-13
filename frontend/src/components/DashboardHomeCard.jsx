import React from "react";

const DashboardHomeCard = ({
  icon: Icon,
  cardName,
  metricCount,
  className,
}) => {
  return (
    <div className={`${className} px-6 py-8 rounded-xl md:w-[85%] lg:w-1/3 flex justify-between items-center shadow-[0_3px_10px_rgb(0,0,0,0.2)]`}>
      <div className={`flex flex-col gap-4 `}>
        <Icon size={30}/>
        <h1 className="text-2xl mt-4">{cardName}</h1>
      </div>
      <span className="text-3xl font-black">{metricCount}</span>
    </div>
  );
};

export default DashboardHomeCard;
