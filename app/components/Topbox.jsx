import React from "react";

const Topbox = ({ title, icon, number }) => {
  return (
    <div className="w-full bg-boxbg rounded-sm">
      <div className="flex">
        {icon}
        {title}
      </div>
      {number}
    </div>
  );
};

export default Topbox;
