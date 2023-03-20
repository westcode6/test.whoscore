import React from "react";
import BottomBar from "../components/BottomBar";
import Navbar from "../components/Navbar";
import { useLocation } from "react-router-dom";

const PageLayout = ({ children }) => {
  const location = useLocation();
  return (
    <div className="relative h-fit w-full mx-auto max-w-screen-2xl px-0 md:px-6 sm:bg-[#f9f8f8] lg:bg-[#f5f5f5]">
      {location.pathname !== "/gameDetails" && <Navbar />}

      <main className="">{children}</main>
      <BottomBar />
    </div>
  );
};

export default PageLayout;
