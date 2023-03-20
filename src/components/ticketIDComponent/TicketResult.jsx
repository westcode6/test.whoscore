import moment from "moment";
import React from "react";

const TicketResult = ({
  betId,
  gameDateTime,
  ticketStatus,
  totalStakes,
  totalOdds,
  bet,
  odd,
  gCheck,
  betScore,
  homeTeam,
  homeTeamLogo,
  awayTeam,
  awayTeamLogo,
  gameStatus,
  matchDate,
  betSlipCompany,
  handleDeleteTicket,
}) => {
  return (
    <div className={` border-b -mx-2`}>
      {betId && (
        <div className="mb-4 lg:mb-8 md:mt-6 text-gray-500 font-bold md:px-6 lg:px-12">
          <div
            className={`flex justify-between text-gray-500 ${
              ticketStatus !== "Lost" ? "!text-green-700" : "text-red-900"
            }`}
          >
            <h2 className="font-semibold">{betId}</h2>
            <span className={`font-semibold`}>{ticketStatus}</span>
          </div>

          <div className="flex justify-between my-3 text-sm">
            <span className="text-[#4F4F4F]">
              Total Stake(NGN): {totalStakes}
            </span>
            <span className="lg:text-base">
              {moment(gameDateTime).format("MMM D")}
            </span>
          </div>

          <div className="flex justify-between ">
            <span className="text-sm text-[#4F4F4F]">
              Total Odds: {totalOdds}
            </span>
            <span className="bg-[#4F4F4F] p-2 rounded-full text-xs text-[#32D583]">
              {betSlipCompany}
            </span>
          </div>
        </div>
      )}
      {/* <span
        className="absolute right-0 bottom-0 md:right-16 text-white text-xs font-bold px-1 rounded-lg bg-red-600 cursor-pointer"
        onClick={() => handleDeleteTicket(betId)}
      >
        delete
      </span> */}
      {bet && (
        <div
          key={bet}
          className={`py-3  max-h-32 text-center border border-t-0 border-[#BDBDBD] text-[#4F4F4F] ${
            gameStatus === "Won"
              ? "bg-[#219653] bg-opacity-10"
              : "bg-[#ffe5e5] "
          } `}
        >
          {/* <div className="text-left text-xs mb-1 text-gray-800">
            <h2 className="font-semibold">{bet}</h2>
            <span>{gCheck}</span>
          </div> */}

          <div className="flex px-4  gap-6 justify-between sm:justify-center items-center font-bold text-black text-sm">
            <div className="flex items-center gap-3  w-2/5 lg:w-1/3">
              <img
                src={
                  homeTeamLogo ? homeTeamLogo : "/assets/images/club-logo.jpg"
                }
                alt={homeTeam + "logo"}
                className="w-10 h-10 object-contain shrink-0 border border-gray-600 rounded-full"
              />
              <span>{homeTeam}</span>
            </div>

            <div className="font-bold  text-center flex-col flex items-center  gap-1">
              {/* <span className="bg-gray-800 text-white w-5 h-5 mx-auto rounded-full text-xs flex justify-center items-center">
                80
              </span> */}
              <span>{betScore ? betScore : matchDate}</span>
            </div>

            <div className="flex items-center  gap-3 justify-end w-2/5 lg:w-1/3">
              <span>{awayTeam}</span>
              <img
                src={
                  awayTeamLogo ? awayTeamLogo : "/assets/images/club-logo.jpg"
                }
                alt={awayTeam + "logo"}
                className="w-10 h-10 object-contain shrink-0 border border-gray-600 rounded-full"
              />
            </div>
          </div>

          <div>
            <div className="flex flex-col mt-4 text-xs font-semibold">
              <span className="text-gray-600">
                Odd: <b className="text-black">{odd}</b>
              </span>
              <span className="text-gray-600">
                Status:&nbsp;
                <b
                  className={`${
                    gameStatus === "Won" ? "text-[#219653]" : "text-red-900"
                  }`}
                >
                  {gameStatus}
                </b>
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TicketResult;
