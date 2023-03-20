import React from "react";
import { GiSoccerKick, GiHockey } from "react-icons/gi";
import { TiVideo } from "react-icons/ti";
import { TbCricket, TbBallTennis } from "react-icons/tb";
import {
  MdOutlineSportsVolleyball,
  MdOutlineSportsBasketball,
  MdOutlineSportsRugby,
} from "react-icons/md";
import { BsMoonStars } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiFootballLine } from "react-icons/ri";
import { NavLink, useLocation } from "react-router-dom";

// DestopNavbar Component
export default function ResponsiveNavbar() {
  const location = useLocation();
  return (
    <>
      <div className="hidden lg:block bg-white shadow-sm  w-full fixed top-0 z-50">
        <nav className="w-full h-[67px]   z-50 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-16 flex items-center justify-between">
          <div className="w-9/12 flex items-center">
            <div className="">
              <NavLink
                to="/home"
                className="pr-2 md:pr-4 text-black  logo-font sm:text-xl flex items-center"
              >
                <span className="p-1 bg-white shadow-inner rounded-full   text-black text-4xl">
                  <GiSoccerKick />
                </span>
                <span className=""> WhoScore</span>
              </NavLink>
            </div>

            <div className="ml-2">
              <div className="flex space-x-8">
                <NavItem
                  title="Football"
                  to="/home"
                  icon={<RiFootballLine />}
                  active={location.pathname === "/home"}
                />

                <NavItem
                  title="Basketball"
                  to="/basketball"
                  icon={<MdOutlineSportsBasketball />}
                  active={location.pathname === "/basketball"}
                />

                <NavItem
                  title="Vollyball"
                  to="/home"
                  icon={<MdOutlineSportsVolleyball />}
                  active={location.pathname === "/volleyball"}
                />

                <NavItem
                  title="Rugby"
                  to="/home"
                  icon={<MdOutlineSportsRugby />}
                  active={location.pathname === "/rugby"}
                />
                <NavItem
                  title="Tennis"
                  to="/home"
                  icon={<TbBallTennis />}
                  active={location.pathname === "/tennis"}
                />
                <NavItem
                  title="Cricket"
                  to="/home"
                  icon={<TbCricket />}
                  active={location.pathname === "/cricket"}
                />
                <NavItem
                  title="Hockey"
                  to="/home"
                  icon={<GiHockey />}
                  active={location.pathname === "/hockey"}
                />
              </div>
            </div>
          </div>

          {/* Navbar Icons */}
          <div className="w-full flex items-center justify-end space-x-8">
            <div className="relative">
              <input
                type="text"
                className="border-2 border-gray-50 shadow-inner hover:shadow-lg bg-white text-base text-black placeholder:text-gray-500 px-6 py-3 rounded-3xl"
                placeholder="Search"
              />
              <span className="absolute top-4 right-2 text-2xl">
                {" "}
                <BiSearchAlt />
              </span>
            </div>

            <NavLink to={"/watchPage"}>
              <div className="px-4 py-2 bg-red-500  hover:bg-red-400 text-white  font-bold  shadow-gray-400 hover:text-white rounded-full transform transition ease-linear   duration-300 flex items-center space-x-2">
                <span className="text-2xl">
                  <TiVideo />
                </span>
                <span className="text-sm font-extrabold">Watch</span>
              </div>
            </NavLink>

            {/* DarkMode */}
            <div className="bg-white hover:shadow-lg border-4 border-gray-50  shadow-inner cursor-pointer pr-2 rounded-3xl flex items-center justify-center">
              <span className="text-xl bg-dark p-2 rounded-full text-lime-400 shadow-inner">
                {" "}
                <BsMoonStars />
              </span>

              <button className="text-xs px-2 py-1 font-bold text-gray-900 flex flex-col items-center leading-4">
                <span>Dark</span>
                <span>Mode</span>
              </button>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}


// MobileNavbar Component

// function MobileNavbar() {
//   const location = useLocation();

//   return (
//     <>
//       <div className="lg:hidden">
//         <nav className="w-full  shadow-fit bg-white rounded-lg px-2 sm:px-6 md:px-8 lg:px-10 xl:px-12 flex items-center justify-between">
//           <div className="w-full lg:w-9/12 flex flex-col items-center">
//             <div className="w-full flex  justify-between pt-4">
//               <h1>
//                 <NavLink
//                   to="/home"
//                   className="pr-2 md:pr-8 text-black  logo-font sm:text-xl flex items-center"
//                 >
//                   <span className="p-1 bg-white shadow-inner rounded-full   text-red-500 text-4xl">
//                     <GiSoccerKick />
//                   </span>
//                   <span className=""> WhoScore?</span>
//                 </NavLink>
//               </h1>

//               {/* Nav Icons Comes Here */}
//               <div className="w-full flex items-center justify-end space-x-6">
//               <div className="">
//                   <span className="text-2xl">
//                     <BiSearchAlt  />
//                   </span>
//                 </div>

//                 <div className="bg-gray-200 rounded-full p-2">
//                   <span>
//                     <ImUserCheck />
//                   </span>
//                 </div>

//                 <div className="bg-white hover:shadow-lg border-4 border-gray-50  shadow-inner cursor-pointer pr-2 rounded-3xl flex items-center justify-center">
//                   <span className="text-3xl ml-2">
//                     {" "}
//                     <GiMoon />
//                   </span>

//                   <button className="text-xs px-2 py-1 font-bold text-gray-900 flex flex-col items-center leading-4">
//                     <span>Dark</span>
//                     <span>Mode</span>
//                   </button>
//                 </div>
//               </div>
//             </div>

//             <div className="w-full pl-2">
//               <div className="w-full overflow-scroll flex space-x-4">
//               <NavItem
//                   title="Football"
//                   to="/home"
//                   icon={<RiFootballLine />}
//                   active={location.pathname === "/home"}
//                 />

//                 <NavItem
//                   title="Basketball"
//                   to="/basketball"
//                   icon={<MdOutlineSportsBasketball />}
//                   active={location.pathname === "/basketball"}
//                 />

//                 <NavItem
//                   title="Vollyball"
//                   to="/home"
//                   icon={<MdOutlineSportsVolleyball />}
//                   active={location.pathname === "/volleyball"}
//                 />

//                 <NavItem
//                   title="Rugby"
//                   to="/home"
//                   icon={<MdOutlineSportsRugby />}
//                   active={location.pathname === "/rugby"}
//                 />
//                 <NavItem
//                   title="Tennis"
//                   to="/home"
//                   icon={<TbBallTennis />}
//                   active={location.pathname === "/tennis"}
//                 />
//                 <NavItem
//                   title="Cricket"
//                   to="/home"
//                   icon={<TbCricket />}
//                   active={location.pathname === "/cricket"}
//                 />
//                 <NavItem
//                   title="Hockey"
//                   to="/home"
//                   icon={<GiHockey />}
//                   active={location.pathname === "/hockey"}
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Navbar Icons */}
//           <div className="flex items-end justify-end">
//             <div className="hidden items-center space-x-4">
//               <div className="relative">
//                 <input
//                   type="text"
//                   className="border-2 border-gray-50 shadow-inner hover:shadow-lg bg-white text-base text-black placeholder:text-gray-500 px-6 py-3 rounded-3xl"
//                   placeholder="Search"
//                 />
//                 <span className="absolute top-4 right-2 text-2xl">
//                   {" "}
//                   <BiSearchAlt />
//                 </span>
//               </div>

//               <a
//                 href="/home"
//                 className="px-4 py-2 border-2  border-gray-50  shadow-inner hover:shadow-lg rounded-3xl bg-gray-900 text-white hover:text-red-200 transform transition ease-linear hover:bg-black  duration-200 flex items-center space-x-2"
//               >
//                 <span className="text-2xl">
//                   <TiVideo />
//                 </span>
//                 <span className="text-sm font-bold">Watch</span>
//               </a>
//             </div>
//           </div>
//         </nav>
//       </div>
//     </>
//   );
// }

function NavItem({ title, to = "#", icon, active }) {
  return (
    <NavLink to={to} className={`flex-1  ${active && ""}`}>
      <div
        to={to}
        className={`h-[67px] flex items-center ${active && "font-black"}`}
      >
        <div
          className={`flex items-center hover:bg-gray-900 hover:text-lime-400 hover:p-2 rounded-2xl  text-sm text-gray-700  ${
            active && " bg-dark p-2 rounded-2xl text-lime-400  font-bold"
          }`}
        >
          <span
            className={`pr-2  text-2xl`}
          >
            {icon}
          </span>
          <span
            className={`flex items-center text-sm ${
              active && "font-extrabold tracking-wide"
            }`}
          >
            {title}
          </span>
        </div>
      </div>
    </NavLink>
  );
}
