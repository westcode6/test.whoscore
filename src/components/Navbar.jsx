import React, { useState, useContext } from "react";
import { FaChevronDown,  FaUserTie } from "react-icons/fa";
import { BsMoonStars } from "react-icons/bs";
import {RiSearchEyeLine,} from "react-icons/ri"
import { Link, useLocation } from "react-router-dom";
import { MatchContext } from "../context/MatchContext";

export default function Navbar() {
  const [displaySearchInput, setDisplaySearchInput] = useState(false);
  const location = useLocation();
  const { handlleSearchResult, searchText, setSearchText } =
    useContext(MatchContext);

  return (
    <div className="relative">
      <header className="text-[#4F4F4F] bg-white shadow-sm fixed top-0 mx-auto left-0 right-0 w-full z-20  px-6 py-4 flex items-center justify-between  sm:py-3 sm:gap-8 lg:gap-16 xl:gap-40 sm:px-10 lg:px-20">
        <div className="text-sm font-bold flex gap-2 md:gap-4 items-center ">
          <Link to="/home" className="flex items-center">
            {/* <span className="text-gray-800 text-4xl rounded-full shadow-inner">
            <GiSoccerKick />
          </span> */}
            <span className="border-r pr-2 md:pr-4 text-black border-r-[#4F4F4F] logo-font text-xl">
              WhoScore?
            </span>
          </Link>
          <Link to={location.pathname}>
            <span>{location.pathname.replace("/", "")}</span>
          </Link>
        </div>

        <div className="sm:hidden">
          <div className="w-full flex items-center justify-end space-x-4">
          
            <Link>
              <div>
                <span
                  className="text-xl"
                  onClick={() => {
                    setDisplaySearchInput(!displaySearchInput);
                    !displaySearchInput && setSearchText("");
                  }}
                >
                  <RiSearchEyeLine />
                </span>
              </div>
            </Link>
            <Link to={"/profile"}>
              <div>
                <span
                  className="text-lg p-2 block rounded-full shadow-inner"
                  onClick={() => {
                    setDisplaySearchInput(!displaySearchInput);
                    !displaySearchInput && setSearchText("");
                  }}
                >
                  <FaUserTie />
                </span>
              </div>
            </Link>
         

            <div className="bg-white hover:shadow-lg border-2 border-gray-100  shadow-inner cursor-pointer  rounded-3xl flex items-center justify-center">
              <span className="text-xl bg-dark p-2 rounded-full text-lime-400 shadow-inner">
                {" "}
                <BsMoonStars />
              </span>

              <button className="text-xs px-3 py-1 font-extrabold text-black flex flex-col items-center leading-4">
                <span>Dark</span>
                <span>Mode</span>
              </button>
            </div>
          </div>
        </div>

        {displaySearchInput && (
          <div className="absolute top-[68px] left-0 right-0 z-[100] px-4 sm:hidden">
            <input
              type="text"
              placeholder="search for teams or competition"
              className="w-full p-2 border border-gray-800 rounded-md"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              onKeyDown={(e) => handlleSearchResult(e, searchText)}
            />
          </div>
        )}
        <div className="hidden sm:block flex-1 relative">
          <RiSearchEyeLine className="absolute text-xl top-3 left-5" />
          <input
            type="text"
            placeholder="Search"
            className="w-full text-sm bg-[#f6f5f5] border rounded-xl outline-none py-3 pl-14"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onKeyDown={(e) => handlleSearchResult(e, searchText)}
          />
        </div>

        <nav className="hidden text-sm font-bold text-gray-600  sm:flex sm:gap-4 lg:gap-14 justify-center items-center">
          <Link to="/ticketIdPage">
            <span className="hover:underline">WhoScore Gaming</span>
          </Link>
          <Link to="/watchPage">
            <span className="hover:underline">Watch</span>
          </Link>
          <Link to="/newsPage">
            <span className="hover:underline">Explore</span>
          </Link>

          <div className="flex items-center gap-3">
            <span className="w-8 h-8 block rounded-full bg-gray-200">
              <img
                src="./assets/images/goal.jpg"
                className="w-8 h-8 rounded-full object-cover"
                alt=""
              />
            </span>
            <FaChevronDown />
          </div>
        </nav>
      </header>
    </div>
  );
}
