import React, { useContext } from "react";
import "animate.css";
import BetSlip from "./BetSlip";
import moment from "moment";

// import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

import "swiper/css";
import BetSlipForm from "./BetSlipForm";

import { TicketContext } from "../../hooks/useFetchTicket";
import TicketStatus from "./TicketStatus";
import BetHistory from "./BetHistory";

const AddBetSlip = () => {
  const { slipInfo, handleFetchTicket } = useContext(TicketContext);

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
    <section className="bg-white relative w-full md:-mx-2 h-fit pt-[68px] sm:pt-2 md:flex md:pt-24 px-6 md:px-4 lg:px-8 xl:px-14">
      <div className=" md:px-3  md:pt-5 rounded-xl md:w-1/4 md:min-h-screen">
        <div className="pb-4">
          <BetSlipForm />

          {/* BET SLIP HISTORY SECTION */}
          <BetHistory />
        </div>
      </div>

      {/* <div className="flex items-center justify-between my-2 px-3 md:hidden">
          <button
            id="ticketStatusLink"
            onClick={switchTicketStatus}
            className="text-neutral-900 font-semibold transform transition hover:-translate-y-2 text-sm tracking-wide"
          >
            Ticket Status
          </button>
          <button
            id="ticketHistoryLink"
            onClick={switchTicketHistory}
            className="text-neutral-900 font-semibold transform transition hover:-translate-y-2 text-sm tracking-wide"
          >
            Ticket History
          </button>
        </div> */}

      {/* Ticket Status */}

      <TicketStatus displayHidden="hidden" />

      {/* Ticket History */}
      <section
        id="ticketHistory"
        className="bg-white hidden animate__animated animate__faster animate__fadeIn md:rounded-xl"
      >
        <h2 className="bg-neutral-800 px-6 py-4 text-gray-300">
          Ticket History
        </h2>

        <div className="pb-36">
          {slipInfo && slipInfo.length
            ? slipInfo.map(
                (items, index) =>
                  items.length &&
                  items
                    .slice(0, 1)
                    .map(
                      (item) =>
                        (item.ticketStatus === "Won" ||
                          item.ticketStatus === "Lost") && (
                          <BetSlip
                            key={index}
                            betSlipStake={item.totalStakes}
                            betSlipCompany={item.betPlatform}
                            betSlipCompanyColor={"text-green-500"}
                            betSlipID={item.betId}
                            numberOfGames={item.totalGames.length}
                            betSlipOdd={item.totalOdds}
                            betSlipDate={moment(item.gameDateTime).format(
                              "MMM D"
                            )}
                            betSlipStatus={item.ticketStatus}
                            betSlipStatusColorCode={"bg-yellow-500"}
                          />
                        )
                    )
              )
            : ""}
        </div>
      </section>
    </section>
  );
};

export default AddBetSlip;
