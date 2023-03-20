import React from "react";

// React Icons
import { HiSpeakerphone } from "react-icons/hi";
import { BsFilePlayFill } from "react-icons/bs";
import { IoIosTennisball } from "react-icons/io";
import { FaVolleyballBall, FaTableTennis } from "react-icons/fa";
import { MdSpeakerNotes } from "react-icons/md";
import { RiFootballLine } from "react-icons/ri";

import { GiBasketballBall, GiHockey } from "react-icons/gi";
import WatchPagePanel from "../components/WatchPageComponents/WatchPagePanel";
import BottomBar from "../components/BottomBar";
import ResponsiveNavbar from "../components/common/ResponsiveNavbar";
import Navbar from "../components/Navbar";

export default function WatchPageScreen() {
  return (
    <div className="room-container">

      <div className="lg:hidden">
      <Navbar />

      </div>
         <div className="md:hidden lg:block">
         <ResponsiveNavbar />

         </div>

         <div className="root-container relative  w-full">
       
        {/* <HomeSliderComponent /> */}
      <div className="h-screen w-full flex overflow-hidden select-none">

       <WatchPageSideNav />

        <main
          className="pb-2 flex-1 mt-16  rounded-l-lg
		transition duration-500 ease-in-out overflow-y-auto"
        >
          

          <section className="lg:mr-2 md:pt-8 overflow-hidden md:mt-2 lg:mt-0 rounded-b-3xl md:rounded-3xl">
            <WatchPagePanel />

            <div className="md:hidden">
              <BottomBar />
            </div>
          </section>
        </main>
      </div>
      </div>

    </div>
  );
}


export function WatchPageSideNav() {
  return (
    <>
     <div className="h-[84%] rounded-xl mt-28  lg:mx-6">
          <nav className="w-60 hidden mt-1 bg-white shadow-2xl shadow-gray-500  md:flex flex-col items-center rounded-3xl py-4 ">
            <ul className="w-full px-6 capitalize">
              <li className="mt-2 py-3  bg-white shadow-xl shadow-zinc-400/50  text-black transform transition ease-in duration-100 font-extrabold hover:font-bold rounded-3xl">
                <a
                  href="/watchPage"
                  className="flex justify-start space-x-8 px-2 items-center ml-4"
                >
                     <span className="text-xl text-red-500">
                    {" "}
                    <RiFootballLine />
                  </span>
                  <span className="text-base">Soccer</span>
                </a>
              </li>

              <li className="watchPageSideNavLinks">
                <a
                  href="/watchPage"
                  className="flex justify-start space-x-8 px-2 items-center ml-4"
                >
                       <span className="text-xl text-red-500">
                    <IoIosTennisball />
                  </span>
                  <span className="text-base">Tennis</span>
                </a>
              </li>

              <li className="watchPageSideNavLinks">
                <a
                  href="/watchPage"
                  className="flex justify-start space-x-8 px-2 items-center ml-4"
                >
                      <span className="text-xl text-red-500">
                    <GiBasketballBall />
                  </span>
                  <span className="text-base">Basketball</span>
                </a>
              </li>

              <li className="watchPageSideNavLinks">
                <a
                  href="/watchPage"
                  className=" flex justify-start  space-x-8 px-2 items-center ml-4"
                >
                   <span className="text-xl text-red-500">
                    <FaVolleyballBall />
                  </span>
                  <span className="text-base">Volleyball</span>
                </a>
              </li>

              <li className="watchPageSideNavLinks">
                <a
                  href="/watchPage"
                  className=" flex justify-start  space-x-8 px-2 items-center ml-4"
                >
                     <span className="text-xl text-red-500">
                    <GiHockey />
                  </span>
                  <span className="text-base">Ice Hockey</span>
                </a>
              </li>

              <li className="watchPageSideNavLinks">
                <a
                  href="/watchPage"
                  className=" flex justify-start  space-x-8 px-2 items-center ml-4"
                >
                       <span className="text-xl text-red-500">
                    <FaTableTennis />
                  </span>
                  <span className="text-base">Table Tennis</span>
                </a>
              </li>

              <li className="watchPageSideNavLinks">
                <a
                  href="/watchPage"
                  className="flex justify-start space-x-8 px-2 items-center ml-4"
                >
                       <span className="text-xl text-red-500">
                    <BsFilePlayFill />
                  </span>
                  <span className="text-base">Shorts</span>
                </a>
              </li>

              <li className="watchPageSideNavLinks">
                <a
                  href="/watchPage"
                  className="flex justify-start space-x-8 px-2 items-center ml-4"
                >
                  <span className="text-xl text-red-500">
                    <HiSpeakerphone />
                  </span>
                  <span className="text-base">Commentary</span>
                </a>
              </li>
            </ul>

            <div className="px-6 mt-auto">
           

              
              <div className="watchPageSideNavLinks">
                <a
                  href="/watchPage"
                  className="w-full flex justify-start space-x-6 items-center"
                >
                    <span className="ml-4 text-xl text-red-500">
                    <MdSpeakerNotes />
                  </span>
                  <span className="text-base pr-2 font-bold">Send Feedback</span>

                </a>
              </div>

              {/* <li className="mt-2 py-3  bg-white drop-shadow-xl shadow-xl shadow-zinc-400/50  text-black transform transition ease-in duration-100 font-extrabold hover:font-bold rounded-3xl">
                <a
                  href="/watchPage"
                  className="flex justify-start space-x-8 px-2 items-center ml-4"
                >
                  <span className="text-xl text-red-500 font-black ">
                    {" "}
                    <HiSpeakerphone />
                  </span>
                  <span className="text-base">Commentary</span>
                </a>
              </li> */}
            </div>
          </nav>
        </div>
    </>
  )
}
