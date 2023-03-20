import React from "react";

const ProgressBar = ({ width }) => {
  return (
    <div className="bg-[yellow] w-full rounded-xl h-1">
      <div className={`w-[${width}%] bg-red-500 h-full`}></div>
    </div>
  );
};

export default ProgressBar;
