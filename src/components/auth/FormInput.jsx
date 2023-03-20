import React from "react";

const FormInput = ({ type, placeholder}) => {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full p-4 bg-[#E0E0E0] outline-none rounded-lg text-sm focus:shadow-[0px_0px_5px_1px_#0E3E16] sm:p-3"
      />
    </div>
  );
};

export default FormInput;
