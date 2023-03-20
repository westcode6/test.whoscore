import React from "react";
import BottomBar from "../BottomBar";
import ResponsiveNavbar from "../common/ResponsiveNavbar";

import Categories from "../homePage/Categories";
import Navbar from "../Navbar";
import NewsPanel from "../newsPage/NewsPanel";
import HomeSliderComponent from "./HomeSliderComponent";
import Leagues from "./Leagues";
import LiveMatchComponent from "./LiveMatchComponent";

export default function HomePage() {
  return (
    <div className="">
      <div className="hidden lg:block">
        <ResponsiveNavbar />
      </div>

      <div className="lg:hidden">
        <Navbar />
      </div>

      <div className="root-container relative  w-full">
        <div className="mt-6 md:mt-12 lg:mt-16 rounded-b-3xl">
          <main className="w-full flex items-center justify-center">
            <div className="md:w-[89%] mx-auto flex justify-center">
              <section className="w-full  grid grid-cols-1 md:grid-cols-12 gap-6 md:mt-6 md:px-4 py-2">
                <div className="hidden lg:block bg-white shadow-2xl lg:col-span-3 px-4 ml-8 rounded-2xl">
                  <div className=" rounded-2xl">
                    <Leagues />
                  </div>
                </div>

                <div className="col-span-12 lg:col-span-6  bg-white shadow-2xl shadow-gray-400 border-2 border-gray-100 rounded-2xl">
                  <Categories />
                  <HomeSliderComponent />

                  <LiveMatchComponent />
                </div>
                <div className="hidden lg:block bg-white shadow-2xl md:col-span-3 rounded-3xl">
                  <div className="">
                    <NewsPanel />
                  </div>
                </div>
              </section>
            </div>
          </main>
        </div>

        {/* <HomeSliderComponent /> */}
      </div>
      <BottomBar />

      <div className="w-full">
        {/* Navbar Component */}

        {/* 3 Section Layout */}
      </div>
    </div>
  );
}
