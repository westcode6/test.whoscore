import React, { useState } from "react";

import Head2Head from "./Head2Head";
import MatchInfo from "./MatchInfo";
import MatchStats from "./MatchStats";

const GameInfo = () => {
  const [showInfo, setShowInfo] = useState(true);
  const [showStats, setShowStats] = useState(false);
  const [showLineup, setShowLineup] = useState(false);
  const [showH2H, setShowH2H] = useState(false);
  return (
    <section>
      <div className="my-8 md:my-5 gap-3 flex items-center justify-center">
        <button
          onClick={() => {
            setShowInfo(!showInfo);
            setShowStats(false);
            setShowH2H(false);
            setShowLineup(false);
          }}
          className={`${
            showInfo
              ? "bg-btnBg text-indigo-100"
              : "bg-bgPrimary text-indigo-900"
          } text-xs md:text-base tracking-wide  px-3 sm:px-6 py-1 rounded-lg md:rounded-xl`}
        >
          Info
        </button>

        <button
          onClick={() => {
            setShowStats(!showStats);
            setShowInfo(false);
            setShowLineup(false);
            setShowH2H(false);
          }}
          className={`${
            showStats ? "bg-btnBg text-white" : "bg-bgPrimary text-indigo-900"
          } text-xs md:text-base  px-3 sm:px-6 py-1 rounded-lg md:rounded-xl`}
        >
          Stats
        </button>

        <button
          onClick={() => {
            setShowLineup(!showLineup);
            setShowStats(false);
            setShowInfo(false);
            setShowH2H(false);
          }}
          className={`${
            showLineup ? "bg-btnBg text-white" : "bg-bgPrimary text-indigo-900"
          } text-xs md:text-base  px-3 sm:px-6 py-1 rounded-lg md:rounded-xl`}
        >
          Line Up
        </button>

        <button
          onClick={() => {
            setShowH2H(!showH2H);
            setShowStats(false);
            setShowInfo(false);
            setShowLineup(false);
          }}
          className={`${
            showH2H ? "bg-btnBg text-white" : "bg-bgPrimary text-indigo-900"
          } text-xs md:text-base  px-3 sm:px-6 py-1 rounded-lg md:rounded-xl`}
        >
          H2H
        </button>
      </div>

      {showInfo && <MatchInfo />}
      {showH2H && <Head2Head />}
      {showStats && <MatchStats />}
    </section>
  );
};

export default GameInfo;
