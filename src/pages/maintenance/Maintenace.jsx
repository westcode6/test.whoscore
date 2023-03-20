import React from "react";
import maintenanceImg from "./assets/maintenance.png";

const Maintenace = () => {
  return (
    <>
      <header className="bg-white py-5">
        <h1 className="logo-font text-center text-xl">WhoScore?</h1>
      </header>
      <section className="text-center bg-[#F6F6F6] h-screen">
        <img
          src={maintenanceImg}
          alt="maintenance"
          className="block mx-auto py-10 object-cover w-72 sm:w-auto"
        />

        <div className="max-w-2xl px-4 md:px-0 mx-auto">
          <div>
            <h2 className="font-bold text-[28px] lg:text-[42px]">
              We're Improving your Experience
            </h2>
            <p className="font-medium text-sm md:text-base text-[#4F4F4F] mt-8 max-w-[414px] mx-auto">
              <b>WhoScore</b> is down for scheduled Maintenance, expect us to be
              back online soon, Thank you for your patience
            </p>
          </div>

          <div className="flex mt-7 mb-10 sm:mb-0 md:mt-10 max-w-md mx-auto justify-center">
            <input
              type="email"
              placeholder="Your Email"
              className="p-2 sm:p-4 text-sm border border-[#3361CC] flex-1"
            />
            <button className="py-2 px-6 sm:py-4 sm:px-5 text-[#F2F2F2] bg-[#3361CC] text-sm font-bold">
              Notify Me
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Maintenace;
