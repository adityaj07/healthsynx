import React from "react";

const Button = ({ text, className }) => {
  return (
    <div>
      <button className={`px-4 py-2 ${className}`}>{text}</button>
    </div>
  );
};

export default Button;
