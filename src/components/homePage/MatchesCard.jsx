import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MatchContext } from "../../context/MatchContext";

const Matches = ({
  homeTeam,
  homeTeamLogo,
  homeTeamGoal,
  awayTeam,
  awayTeamLogo,
  awayTeamGoal,
  currentMatchTime,
  matchDetail,
}) => {
  const { handleGameDetails } = useContext(MatchContext);

  return (
    <Link to="/gameDetails" onClick={() => handleGameDetails(matchDetail)}>
      <div className="relative shadow-inner border bg-neutral-50 mb-2 font-bold  text-stone-700 flex items-center w-full xsm:gap-0 py-5 sm:py-2 justify-evenly transform transition duration-300 hover:-translate-y-1  hover:shadow-sm">
        {currentMatchTime !== "FT" && currentMatchTime.length < 4 ? (
          <img
            src="/assets/images/icon-live.svg"
            alt="live icon"
            className="absolute animate-pulse top-1 right-3"
          />
        ) : (
          ""
        )}
        <div className="flex text-center items-center w-32">
          <img
            src={homeTeamLogo ? homeTeamLogo : "/assets/images/club-logo.jpg"}
            alt={homeTeam}
            className="w-8 h-8 object-contain"
          />

          <div className="flex flex-col items-center justify-center pl-2">
            <span className="text-xs  tracking-wide">{homeTeam}</span>
          </div>
        </div>

        <div className="text-center flex-col flex items-center flex-shrink-0">
          <h6
            className={`text-xs  ${
              currentMatchTime.length <= 3 ? "text-gray-900 " : "text-gray-500"
            }`}
          >
            {currentMatchTime}
            {currentMatchTime === "FT" ||
            currentMatchTime === "HT" ||
            currentMatchTime.length >= 3
              ? ""
              : "'"}
          </h6>
          <span className="text-sm inline-block mt-2">
            {homeTeamGoal} : {awayTeamGoal}
          </span>
        </div>

        <div className="flex items-center text-center w-32 justify-end">
          <div className="flex flex-col items-center justify-center pr-2">
            <span className="text-xs tracking-wide">{awayTeam}</span>
          </div>

          <img
            src={awayTeamLogo ? awayTeamLogo : "/assets/images/club-logo.jpg"}
            className="w-8 h-8 object-contain"
            alt={awayTeam + "Logo"}
          />
        </div>
      </div>
    </Link>
  );
};

export default Matches;
