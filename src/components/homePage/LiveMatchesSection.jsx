import React, { useContext } from "react";
import Matches from "./MatchesCard";
import { MatchContext } from "../../context/MatchContext";

import { FaChevronDown } from "react-icons/fa";

const LiveMatchesSection = () => {
  const { matches, loading, message } = useContext(MatchContext);

  return (
    <div>
      <section className="bg-white mt-4 rounded-2xl shadow-none md:shadow-xl mx-1 md:mx-0   pb-24 z-4 ">
        <h2 className="text-xl pop  pt-8 mb-6 top-[60px] z-[70]  text-gray-700 pl-2 md:pl-6 pb-4">
          Popular Competitons
        </h2>

        <div className="rounded-md">
          {loading && !message ? (
            <div className="flex items-center justify-center h-full">
              <img
                src="/assets/images/circles-menu-1.gif"
                alt="Loader"
                className="w-14"
              />
            </div>
          ) : message ? (
            <p className="text-sm">{message}</p>
          ) : (
            matches.map(([key, value]) => (
              <div key={key} className="mt-2 relative mb-4">
                <div className="bg-white flex gap-2 mb-2 py-2  items-center sticky top-[55px] z-50  px-2 md:px-5">
                  <img
                    src="/assets/ClubBanners/champions.png"
                    alt=""
                    className="block w-10 h-10"
                  />
                  <div className="flex-1 flex justify-between items-center my-1 p-2 bg-white">
                    <h3 className=" text-lg capitalize font-bold">
                      {key.split("-").join(" ")}
                    </h3>
                    <FaChevronDown />
                  </div>
                </div>

                {value.map((item) => (
                  <Matches
                    key={item._id}
                    homeTeam={item.homeTeam}
                    homeTeamLogo={item.homeTeamLogo}
                    homeTeamGoal={item.gameScore[0]}
                    currentMatchTime={item.currentMatchTime}
                    awayTeam={item.awayTeam}
                    awayTeamLogo={item.awayTeamLogo}
                    awayTeamGoal={item.gameScore[4]}
                    matchDetail={item}
                  />
                ))}
              </div>
            ))
          )}
        </div>
      </section>
    </div>
  );
};

export default LiveMatchesSection;
