import React, { useContext } from "react";
import moment from "moment";

import { MatchContext } from "../../context/MatchContext";
import LeagueTable from "./LeagueTable";

const MatchInfo = () => {
  const { gameDetails } = useContext(MatchContext);

  const HOME_LAST_MATCHES = [
    {
      homeLogo: "/assets/ClubBanners/arsenal.webp",
      homeGoal: "3",
      awayLogo: "/assets/ClubBanners/realMadrid.png",
      awayGoal: "2",
    },
    {
      homeLogo: "/assets/ClubBanners/arsenal.webp",
      homeGoal: "3",
      awayLogo: "/assets/ClubBanners/realMadrid.png",
      awayGoal: "2",
    },
    {
      homeLogo: "/assets/ClubBanners/arsenal.webp",
      homeGoal: "3",
      awayLogo: "/assets/ClubBanners/realMadrid.png",
      awayGoal: "2",
    },
  ];

  return (
    <div className="p-3 sm:p-0">
      <div>
        <h2 className="text-xs text-gray-600 mb-6">Match Info</h2>
        <div className="">
          <div className="flex items-center gap-4 mb-4">
            <img src="/assets/images/icon-calendar.png" alt="" />
            <div>
              <strong className="text-sm">
                {moment(gameDetails.matchDate).format("D MMMM YYYY")}
              </strong>
              <span className="block text-gray-500 text-[10px]">Date</span>
            </div>
          </div>

          <div className="flex items-center gap-4 mb-4">
            <img src="/assets/images/whistle.png" alt="" />
            <div>
              <strong className="text-sm">Temitayo</strong>
              <span className="block text-gray-500 text-[10px]">Referee</span>
            </div>
          </div>

          <div className="flex items-center gap-4 mb-4">
            <img src="/assets/images/icon-stadium.png" alt="" />
            <div>
              <strong className="text-sm">Spotify Camp Nou</strong>
              <span className="block text-gray-500 text-[10px]">Stadium</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap md:flex-nowrap mt-8 md:mt-16 justify-between gap-4">
        <div className="text-xs  ">
          <h2 className="sm:text-sm ">Man city</h2>
          <div className="flex mt-2 md:mt-5 gap-3">
            {HOME_LAST_MATCHES.map(
              ({ homeLogo, homeGoal, awayLogo, awayGoal, summary }, index) => (
                <div key={index}>
                  <div className="flex gap-3 rounded-xl border border-black p-2">
                    <div className="flex items-center gap-2">
                      <img src={homeLogo} alt="" className="w-4 h-4" />
                      <strong>{homeGoal}</strong>
                    </div>
                    <span>-</span>
                    <div className="flex items-center -ml-1 gap-2">
                      <strong>{awayGoal}</strong>
                      <img src={awayLogo} alt="" className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>

        <div className="text-xs">
          <h2 className="sm:text-sm ">Chelsea</h2>
          <div className="flex mt-2 md:mt-5 gap-3">
            {HOME_LAST_MATCHES.map(
              ({ homeLogo, homeGoal, awayLogo, awayGoal, summary }, index) => (
                <div key={index}>
                  <div className="flex gap-3 rounded-xl border border-black p-2">
                    <div className="flex items-center -ml-1 gap-2">
                      <img src={homeLogo} alt="" className="w-4 h-4" />
                      <strong>{homeGoal}</strong>
                    </div>
                    <span>-</span>
                    <div className="flex items-center gap-2">
                      <strong>{awayGoal}</strong>
                      <img src={awayLogo} alt="" className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>

      <LeagueTable />
    </div>
  );
};

export default MatchInfo;
