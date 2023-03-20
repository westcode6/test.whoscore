import React from "react";
import {
  AiOutlineRight,
  AiOutlineStar,
  AiOutlineInfoCircle,
} from "react-icons/ai";
import { FiMonitor } from "react-icons/fi";
export default function LiveMatchComponent() {
  return (
    <div className="px-6 md:px-14">
      <header className="w-full hidden">
        <div className="rounded-3xl">
          <div className="flex item-center justify-between">
            <div className="flex items-center space-x-4">
              <button className="bg-gray-100 text-xs font-bold text-gray-600 shadow-inner rounded-2xl p-3 ">
                All
              </button>

              <button className="bg-red-500 text-xs font-extrabold text-white shadow-inner rounded-2xl px-4 py-2">
                Live
              </button>

              <button className="bg-gray-100 text-xs font-bold text-gray-600 shadow-inner rounded-2xl px-4 py-2">
                ODDS
              </button>

              <button className="bg-gray-100 text-xs font-bold text-gray-600 shadow-inner rounded-2xl px-4 py-2">
                Finished
              </button>
            </div>
            <div>
              <div className="calender-container">
                <span className="cursor-pointer text-2xl">
                  <img
                    src="assets/images/calendar-icon.png"
                    alt="calendar icon"
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center">
          <img
            src="./assets/ClubBanners/laliga.png"
            className="w-14 h-14 object-cover rounded-full"
            alt="laliga"
          />
          <div className="pl-2">
            <h4 className="text-base font-bold">La Liga</h4>
            <span className="text-sm text-gray-500 font-semibold block">
              Spain
            </span>
          </div>
        </div>

        <div className="flex items-center justify-end p-1">
          <span className="text-gray-600 text-2xl">
            <AiOutlineRight />
          </span>
        </div>
      </div>

      <main className="">
        <LiveMatch liveScore="2 : 4" liveTime="65" firstTeam="Arsenal" firstTeamLogo={"./assets/ClubBanners/arsenal.webp"} secondTeam="Bayern" secondTeamLogo={"./assets/ClubBanners/bayern.webp"}  />

        <LiveMatch liveScore="1 : 1" liveTime="89" firstTeam="chelsea" firstTeamLogo={"./assets/ClubBanners/chelsea.png"} secondTeam="Liverpool" secondTeamLogo={"./assets/ClubBanners/liverpool.png"}  />

        <LiveMatch liveScore="4 : 1" liveTime="74" firstTeam="Hullcity" firstTeamLogo={"./assets/ClubBanners/hullcity.png"} secondTeam="Juventus" secondTeamLogo={"./assets/ClubBanners/juventus.jpg"}  />

        <LiveMatch liveScore="2 : 3" liveTime="55" firstTeam="Real Madrid" firstTeamLogo={"./assets/ClubBanners/realMadrid.png"} secondTeam="Bayern" secondTeamLogo={"./assets/ClubBanners/bayern.webp"}  />

        <LiveMatch liveScore="3 : 0" liveTime="68" firstTeam="Dortmund" firstTeamLogo={"./assets/ClubBanners/dortmund.svg"} secondTeam="man United" secondTeamLogo={"./assets/ClubBanners/manU.png"}  />
        <LiveMatch liveScore="2 : 4" liveTime="65" firstTeam="Tottenham" firstTeamLogo={"./assets/ClubBanners/tottenham.png"} secondTeam="Westbrom" secondTeamLogo={"./assets/ClubBanners/westbrom.png"}  />

        <LiveMatch liveScore="2 : 4" liveTime="65" firstTeam="Arsenal" firstTeamLogo={"./assets/ClubBanners/arsenal.webp"} secondTeam="Bayern" secondTeamLogo={"./assets/ClubBanners/bayern.webp"}  />
      
      </main>
    </div>
  );
}

export function LiveMatch({liveScore, liveTime,firstTeam, firstTeamLogo, secondTeam, secondTeamLogo}) {
  return (
    <>
      <div className="my-4 ">
        <div className="shadow-lg rounded-2xl  hover:shadow-2xl hover:bg-white px-4 md:px-6 lg:px-8 py-4 flex items-center spaxe-x-2  justify-between">
          {/* Left Hand */}
          <div className="pr-2 flex items-center space-x-4">
            <span className="text-gray-500 text-lg">
              <AiOutlineStar />
            </span>
            <p className="text-xs text-red-500">{liveTime}'</p>
          </div>

          {/* Center */}
          <div className="flex items-center justify-around space-x-3">
            <div className="flex items-center space-x-2">
              <img
                src={firstTeamLogo}
                className="w-8 h-8 object-cover"
                alt={firstTeam}
              />

              <h4 className="text-sm text-gray-900 font-bold">{firstTeam}</h4>
            </div>

            <div>
              <p className="px-1.5 py-1 text-xs font-extrabold rounded-full bg-gray-50 border border-gray-100 shadow-inner">
                {liveScore}
              </p>
            </div>

            <div className="flex items-center space-x-2">
              <h4 className="text-sm text-gray-900 font-bold">{secondTeam}</h4>
              <img
                src={secondTeamLogo}
                className="w-8 h-8 object-cover"
                alt={secondTeam}
              />
            </div>
          </div>

          {/* Right Hand */}
          <div className="pl-2 flex items-center space-x-4">
            <span className="text-gray-500 text-lg">
              <AiOutlineInfoCircle />
            </span>
            <p className="text-base text-gray-500">
              <FiMonitor />
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
