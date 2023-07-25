import React from "react";

const Card = ({ icon: Icon, title, desc }) => {
  return (
    <div>
      <div className="bg-white text-black rounded-xl lg:w-[21rem] lg:h-[11rem] p-4">
        <div className="flex items-start gap-4">
          <Icon size={80} className="-mt-6"/>
          <div className="flex flex-col items-start gap-4">
            <span className="font-bold text-start">{title}</span>
            <p className="text-start text-[0.85rem] md:text-sm">{desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
