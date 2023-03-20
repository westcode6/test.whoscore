import React, { useContext, useState } from "react";
import "animate.css";

// import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import TicketResult from "./TicketResult";
// import { Navigation } from "swiper";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";

import { TicketContext } from "../../hooks/useFetchTicket";

import SweetPagination from "sweetpagination";

const TicketStatus = ({ displayHidden }) => {
  const { slipInfo, handleFetchTicket, handleDeleteTicket } =
    useContext(TicketContext);
  // const swiperRef = useRef();

  let gameData = slipInfo;
  const [currentPageData, setCurrentPageData] = useState(gameData);

  const filteredTicket =
    slipInfo.length &&
    slipInfo?.map(
      (items) =>
        items.length &&
        items?.filter(
          (item) => item.ticketStatus === "Lost" || item.ticketStatus === "Won"
        )
    );

  setInterval(() => {
    filteredTicket?.map((item) => {
      return (
        item[0].ticketStatus !== "Won" ||
        (item[0].ticketStatus !== "Lost" &&
          handleFetchTicket(item[0].betId, item[0].betPlatform))
      );
    });
  }, 1800000);

  return (
    <div
      className={`pb-24 w-full ${displayHidden} overflow:hidden  md:block md:w-[72%] ml-auto relative min-h-full md:pb-10 bg-white  border-2 border-gray-50 md:rounded-2xl shadow-lg`}
    >
      <div className="md:flex items-center justify-center shadow-sm py-6 rounded-t-xl">
        <SweetPagination
          currentPageData={setCurrentPageData}
          dataPerPage={1}
          getData={gameData}
          navigation={true}
          getStyle={"style-custom"}
        />
        <div className="md:ml-8 space-x-2 flex items-center justify-center mt-5 md:mt-0">
          <span className="w-2 md:w-4 h-2 md:h-4 block bg-[#63da77] rounded-full"></span>
          <span className="w-2 md:w-4 h-2 md:h-4 block bg-amber-400 rounded-full"></span>
          <span className="w-2 md:w-4 h-2 md:h-4  block bg-red-400 rounded-full"></span>
        </div>
      </div>

      {/*

         <Swiper
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        modules={[Navigation]}
      >

        <div className="absolute top-0 w-full right-0 left-0 flex justify-center items-center z-10">
            <div className="flex w-2/5 bg-stone-200 text-black rounded-full justify-between py-1 px-4 opacity-70">
              <button onClick={() => swiperRef.current?.slidePrev()}>
                <BsChevronLeft />
              </button>
              <button onClick={() => swiperRef.current?.slideNext()}>
                <BsChevronRight />
              </button>
            </div>
          </div> *


            <SwiperSlide >

            </SwiperSlide>

          </Swiper>
      */}

      {/* {currentPageData.map((games) => (
        <div
          key={games.id}
          className="w-full overflow-x-hidden  pb-2  bg-white block animate__animated  animate__slideInRight animate__faster  md:px-0"
        >
          <div className="w-full flex items-center justify-between text-sm px-4 md:px-10 py-4 bg-white rounded-t-3xl shadow-inner border-t-8 border-gray-100   text-neutral-900 tracking-wide">
            <div className="flex flex-col items-start space-y-2">
              <p className="">{games.betId}</p>
              <h5 className="flex">
                <span>Total Stake(NGN): </span>{" "}
                <p className="pl-2 font-bold text-black">
                  <strong>{games.totalStake}</strong>
                </p>
              </h5>
              <h5 className="flex">
                <span>Total Odds:</span>{" "}
                <p className="pl-2 font-bold text-black">
                  <strong>{games.totalOdds}</strong>
                </p>
              </h5>
            </div>

            <div className="flex flex-col items-end space-y-2">
              <h5 className="flex items-center">
                <span
                  className={`${
                    games.betStatus === "Lost"
                      ? "text-red-500"
                      : games.betStatus === "Won"
                      ? "text-green-400"
                      : games.betStatus === "Pending"
                      ? "text-amber-500"
                      : "text-gray-900 text-base"
                  }`}
                >
                  {games.betStatus}
                </span>{" "}
                <span
                  className={`${
                    games.betStatus === "Lost"
                      ? "bg-red-500"
                      : games.betStatus === "Won"
                      ? "bg-green-400"
                      : games.betStatus === "Pending"
                      ? "bg-amber-500"
                      : "bg-gray-900"
                  } w-3 h-3 shadow  rounded-full ml-2 block`}
                ></span>
              </h5>
              <h5 className="flex">{games.date}</h5>
              <h5
                className={`${
                  games.betStatus === "Lost"
                    ? "bg-red-500"
                    : games.betStatus === "Won"
                    ? "bg-green-400"
                    : games.betStatus === "Pending"
                    ? "bg-amber-500"
                    : "bg-gray-900"
                } w-6 h-6 flex items-center justify-center rounded-full`}
              >
                ⚾
              </h5>
            </div>
          </div>

          <div className="bg-red-50 px-4 md:px-8 py-4  hover:shadow-lg transform transition hover:-translate-y-0.5 duration-300 border-t border-red-400">
            <div className=" flex md:max-w-xl md:mx-auto items-center justify-between ">
              <div className="text-sm tracking-wider">
                <a href="/" className="flex items-center space-x-2">
                  <span className="text-2xl">{games.team1Logo}</span>
                  <p className="">{games.team1}</p>
                </a>
              </div>

              <div className="flex flex-col items-center text-sm">
                <p className="w-8 h-8 bg-stone-700 rounded-full flex items-center justify-center text-center text-gray-100 font-semibold">
                  90
                </p>
                <h4 className="font-bold text-base mb-1 mt-2">
                  <strong>{games.scores}</strong>
                </h4>
                <h5 className="flex mb-2">
                  <span className="text-gray-500">
                    <strong>Odds :</strong>
                  </span>{" "}
                  <p className="pl-2 font-semibold">{games.odd}</p>
                </h5>
                <h5 className="flex">
                  <span className="text-gray-500">Status:</span>{" "}
                  <p className="text-red-400 tracking-wider pl-2 font-semibold">
                    {games.gameStatus}
                  </p>{" "}
                </h5>
              </div>

              <div className="text-sm tracking-wider">
                <a href="/" className="flex items-center space-x-2 ">
                  <p className="">{games.team2}</p>
                  <span className="text-2xl">{games.team2Logo}</span>
                </a>
              </div>
            </div>
          </div>

          <div className="bg-green-50 px-4 md:px-8 py-4  hover:shadow-lg transform transition hover:-translate-y-0.5 duration-300 border-t border-green-400">
            <div className=" flex md:max-w-xl md:mx-auto items-center justify-between ">
              <div className="text-sm tracking-wider">
                <a href="/" className="flex items-center space-x-2">
                  <span className="text-2xl">{games.team1Logo}</span>
                  <p className="">{games.team1}</p>
                </a>
              </div>

              <div className="flex flex-col items-center text-sm">
                <p className="w-8 h-8 bg-stone-700 rounded-full flex items-center justify-center text-center text-gray-100 font-semibold">
                  90
                </p>
                <h4 className="font-bold text-base mb-1 mt-2">
                  <strong>2 : 3</strong>
                </h4>
                <h5 className="flex mb-2">
                  <span className="text-gray-500">
                    <strong>Odds:</strong>
                  </span>{" "}
                  <p className="pl-2 font-semibold">65.2</p>
                </h5>
                <h5 className="flex">
                  <span className="text-gray-500">Status:</span>{" "}
                  <p className="text-green-400 tracking-wider pl-2 font-semibold">
                    Won
                  </p>{" "}
                </h5>
              </div>

              <div className="text-sm tracking-wider">
                <a href="/" className="flex items-center space-x-2 ">
                  <p className="">{games.team2}</p>
                  <span className="text-2xl">{games.team2Logo}</span>
                </a>
              </div>
            </div>
          </div>

          <div className="bg-green-50 px-4 md:px-8 py-4  hover:shadow-lg transform transition hover:-translate-y-0.5 duration-300 border-t border-green-400">
            <div className=" flex md:max-w-xl md:mx-auto items-center justify-between ">
              <div className="text-sm tracking-wider">
                <a href="/" className="flex items-center space-x-2">
                  <span className="text-2xl">{games.team1Logo}</span>
                  <p className="">{games.team1}</p>
                </a>
              </div>

              <div className="flex flex-col items-center text-sm">
                <p className="w-8 h-8 bg-stone-700 rounded-full flex items-center justify-center text-center text-gray-100 font-semibold">
                  90
                </p>
                <h4 className="font-bold text-base mb-1 mt-2">
                  <strong>3 : 1</strong>
                </h4>
                <h5 className="flex mb-2">
                  <span className="text-gray-500">
                    <strong>Odds:</strong>
                  </span>{" "}
                  <p className="pl-2 font-semibold">17.5</p>
                </h5>
                <h5 className="flex">
                  <span className="text-gray-500">Status:</span>{" "}
                  <p className="text-green-400 tracking-wider pl-2 font-semibold">
                    Won
                  </p>{" "}
                </h5>
              </div>

              <div className="text-sm tracking-wider">
                <a href="/" className="flex items-center space-x-2 ">
                  <p className="">{games.team2}</p>
                  <span className="text-2xl">{games.team2Logo}</span>
                </a>
              </div>
            </div>
          </div>

          <div className="bg-red-50 px-4 md:px-8 py-4  hover:shadow-lg transform transition hover:-translate-y-0.5 duration-300 border-t border-red-400">
            <div className=" flex md:max-w-xl md:mx-auto items-center justify-between ">
              <div className="text-sm tracking-wider">
                <a href="/" className="flex items-center space-x-2">
                  <span className="text-2xl">{games.team1Logo}</span>
                  <p className="">{games.team1}</p>
                </a>
              </div>

              <div className="flex flex-col items-center text-sm">
                <p className="w-8 h-8 bg-stone-700 rounded-full flex items-center justify-center text-center text-gray-100 font-semibold">
                  90
                </p>
                <h4 className="font-bold text-base mb-1 mt-2">
                  <strong>2 : 2</strong>
                </h4>
                <h5 className="flex mb-2">
                  <span className="text-gray-500">
                    <strong>Odds:</strong>
                  </span>{" "}
                  <p className="pl-2 font-semibold">42.6</p>
                </h5>
                <h5 className="flex">
                  <span className="text-gray-500">Status:</span>{" "}
                  <p className="text-red-400 tracking-wider pl-2 font-semibold">
                    {games.gameStatus}
                  </p>{" "}
                </h5>
              </div>

              <div className="text-sm tracking-wider">
                <a href="/" className="flex items-center space-x-2 ">
                  <p className="">{games.team2}</p>
                  <span className="text-2xl">{games.team2Logo}</span>
                </a>
              </div>
            </div>
          </div>

          <div className="bg-red-50 px-4 md:px-8 py-4  hover:shadow-lg transform transition hover:-translate-y-0.5 duration-300 border-t border-red-400">
            <div className=" flex md:max-w-xl md:mx-auto items-center justify-between ">
              <div className="text-sm tracking-wider">
                <a href="/" className="flex items-center space-x-2">
                  <span className="text-2xl">{games.team1Logo}</span>
                  <p className="">{games.team1}</p>
                </a>
              </div>

              <div className="flex flex-col items-center text-sm">
                <p className="w-8 h-8 bg-stone-700 rounded-full flex items-center justify-center text-center text-gray-100 font-semibold">
                  90
                </p>
                <h4 className="font-bold text-base mb-1 mt-2">
                  <strong>6 : 2</strong>
                </h4>
                <h5 className="flex mb-2">
                  <span className="text-gray-500">
                    <strong>Odds:</strong>
                  </span>{" "}
                  <p className="pl-2 font-semibold">23.5</p>
                </h5>
                <h5 className="flex">
                  <span className="text-gray-500">Status:</span>{" "}
                  <p className="text-red-400 tracking-wider pl-2 font-semibold">
                    {games.gameStatus}
                  </p>{" "}
                </h5>
              </div>

              <div className="text-sm tracking-wider">
                <a href="/" className="flex items-center space-x-2 ">
                  <p className="">{games.team2}</p>
                  <span className="text-2xl">{games.team2Logo}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      ))} */}

      {slipInfo && slipInfo.length ? (
        currentPageData.map((items, index) => (
          <div
            key={index}
            className="px-4 animate__animated  animate__slideInRight animate__faster  md:px-2"
          >
            {items.length &&
              Array.from(items).map((item, index) => (
                <TicketResult
                  key={index}
                  handleDeleteTicket={handleDeleteTicket}
                  betId={item.betId}
                  betSlipCompany={item.betPlatform}
                  ticketStatus={item.ticketStatus}
                  totalStakes={item.totalStakes}
                  totalOdds={item.totalOdds}
                  bet={item.bet}
                  odd={item.odd}
                  matchDate={item.matchDate && item.matchDate.split(" ")[2]}
                  gCheck={item.gCheck}
                  betScore={item.betScore}
                  awayTeam={item.game && item.game.split("-")[0]}
                  homeTeam={item.game && item.game.split("-")[1]}
                  awayTeamLogo={item.awayTeamLogo && item.awayTeamLogo}
                  homeTeamLogo={item.homeTeamLogo && item.homeTeamLogo}
                  gameStatus={item.gameStatus}
                />
              ))}
          </div>
        ))
      ) : (
        <p className="m-4 font-semibold">
          Enter a ticked ID to keep track of your ticket.
        </p>
      )}
    </div>
  );
};

export default TicketStatus;
