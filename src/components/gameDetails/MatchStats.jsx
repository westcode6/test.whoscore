import React from "react";
import ProgressBar from "./Progressbar";

const MatchStats = () => {
  const STATS = [
    {
      title: "Shot on Goals",
      homeTeam: "4",
      awayTeam: "6",
    },
    {
      title: "Shots",
      homeTeam: "6",
      awayTeam: "12",
    },
    {
      title: "Possession %",
      homeTeam: "22",
      awayTeam: "70",
    },
    {
      title: "Yellow Card",
      homeTeam: "1",
      awayTeam: "4",
    },
    {
      title: "Corner",
      homeTeam: "4",
      awayTeam: "6",
    },
    {
      title: "Shot on Goals",
      homeTeam: "4",
      awayTeam: "6",
    },
    {
      title: "Shot on Goals",
      homeTeam: "4",
      awayTeam: "6",
    },
  ];
  return (
    <div className="w-5/6 mt-8 md: md:mt-12 lg:w-1/2 mx-auto text-center">
      {STATS.map(({ title, homeTeam, awayTeam }, index) => (
        <div key={index}>
          <h2 className="text-gray-400 font-bold">{title}</h2>
          <div className="flex justify-between gap-4 items-center mb-5 md:mb-7">
            <div className="flex-1 flex items-center gap-4">
              <span>{homeTeam}</span>
              <ProgressBar width={homeTeam} />
            </div>
            <div className="flex-1 flex items-center gap-4">
              <ProgressBar width={awayTeam} />
              <span>{awayTeam}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MatchStats;
