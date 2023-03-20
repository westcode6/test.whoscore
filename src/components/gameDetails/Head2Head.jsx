import React from "react";
import Matches from "../homePage/MatchesCard";

const Head2Head = () => {
  const HOME_LAST_MATCHES = [
    {
      homeTeam: "Arsenal",
      homeTeamogo: "/assets/ClubBanners/arsenal.webp",
      homeTeamGoal: "3",
      awayTeam: "Chelsea",
      awayTeamogo: "/assets/ClubBanners/realMadrid.png",
      awayTeamGoal: "2",
      currentMatchTime: "FT",
    },
    {
      homeTeam: "Arsenal",
      homeTeamogo: "/assets/ClubBanners/arsenal.webp",
      homeTeamGoal: "3",
      awayTeam: "Chelsea",
      awayTeamogo: "/assets/ClubBanners/realMadrid.png",
      awayTeamGoal: "2",
      currentMatchTime: "HT",
    },
    {
      homeTeam: "Arsenal",
      homeTeamogo: "/assets/ClubBanners/arsenal.webp",
      homeTeamGoal: "3",
      awayTeam: "Chelsea",
      awayTeamogo: "/assets/ClubBanners/realMadrid.png",
      awayTeamGoal: "2",
      currentMatchTime: "60",
    },
  ];

  return (
    <div className="p-3 sm:p-0">
      <h2 className="my-4">Premier Soccer League</h2>
      {HOME_LAST_MATCHES.map(
        (
          {
            homeTeam,
            homeTeamLogo,
            homeTeamGoal,
            awayTeam,
            awayTeamLogo,
            awayTeamGoal,
            currentMatchTime,
          },
          index
        ) => (
          <Matches
            key={index}
            homeTeam={homeTeam}
            homeTeamLogo={homeTeamLogo}
            homeTeamGoal={homeTeamGoal}
            currentMatchTime={currentMatchTime}
            awayTeam={awayTeam}
            awayTeamLogo={awayTeamLogo}
            awayTeamGoal={awayTeamGoal}
          />
        )
      )}
    </div>
  );
};

export default Head2Head;
