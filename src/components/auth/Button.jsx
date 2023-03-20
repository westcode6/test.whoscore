import React from "react";

const Button = ({ text }) => {
  return (
    <button className="w-full bg-[#333333] rounded-lg text-gray-50 py-4 cursor-pointer text-sm font-semibold">
      {text}
    </button>
  );
};

export default Button;
