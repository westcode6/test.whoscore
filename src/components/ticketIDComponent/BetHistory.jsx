import React, { useContext } from "react";
import { TicketContext } from "../../hooks/useFetchTicket";
import HistoryCard from "./HistoryCard";

const BetHistory = () => {
  const { slipInfo } = useContext(TicketContext);
  // const [won, setWon] = useState([]);

  // useEffect(() => {
  //   const test =
  //     slipInfo && slipInfo.length
  //       ? slipInfo.map(
  //           (items) => items[0]?.ticketStatus.includes("Won") && items[0]
  //         )
  //       : "";
  //   setWon(test);
  //   console.log("wonnnnn", won);
  // }, []);

  return (
    <div className="w-full px-4 md:px-1 sm:py-4 pt-4 pb-32" id="betHistory">
      <h3 className="text-center text-lg my-6 font-bold">Bet History</h3>

      {/* Tailwind Accordion For Pending Tickets */}

      <div className="relative bg-white shadow-inner  border-2 border-neutral-200 hover:shadow-md hover:border-neutral-200 transform transition  ease-linear duration-100  rounded-xl  px-4 py-3 mb-4 w-full overflow-hidden">
        <h4 className="text-sm font-semibold text-gray-500">
          Pending{" "}
          <span className="w-2 h-2 rounded-full inline-block bg-amber-400 ml-2"></span>
        </h4>
        <input
          type="checkbox"
          className="peer absolute top-5 inset-x-0 w-full h-10 z-10 opacity-0 transition    ease-linear duration-200 cursor-pointer"
        />

        <div className="h-10 w-full flex items-center">
          <h1 className="text-sm font-semibold text-gray-700">Tickets</h1>
        </div>
        {/* <span className="">1 naira</span> */}

        {slipInfo && slipInfo.length ? (
          slipInfo.map(
            (items, index) =>
              items[0]?.ticketStatus === "Pending" && (
                <HistoryCard
                  key={index}
                  betId={items[0]?.betId}
                  totalStakes={items[0]?.totalStakes.replace("Stake:", "")}
                  totalOdds={items[0]?.totalOdds}
                />
              )
          )
        ) : (
          <p>You have no pending ticket</p>
        )}
      </div>

      {/* Tailwind Accordion for Won Tickets */}

      <div className="relative bg-white shadow-inner  border-2 border-neutral-200 hover:shadow-md hover:border-neutral-200 transform transition  ease-linear duration-100  rounded-xl  px-4 py-3 mb-4 w-full overflow-hidden">
        <h4 className="text-sm text-gray-500">
          Won{" "}
          <span className="w-2 h-2 rounded-full inline-block bg-green-400 ml-2"></span>
        </h4>
        <input
          type="checkbox"
          className="
                 peer
                 absolute top-5 inset-x-0 w-full h-10 z-10 opacity-0 transition ease-linear duration-200 cursor-pointer"
        />

        <div className="h-10 w-full flex items-center">
          <h1 className="text-sm font-semibold text-gray-700"> Tickets</h1>
        </div>

        {/* <span className="">1 naira</span> */}
        {slipInfo && slipInfo.length ? (
          slipInfo.map(
            (items, index) =>
              items[0]?.ticketStatus.includes("Won") && (
                <HistoryCard
                  key={index}
                  betId={items[0]?.betId}
                  totalStakes={items[0]?.totalStakes.replace("Stake:", "")}
                  totalOdds={items[0]?.totalOdds}
                />
              )
          )
        ) : (
          <p>You have no won ticket</p>
        )}
      </div>

      {/* Tailwind Accordion for Lost Tickets*/}

      <div className="relative bg-white shadow-inner  border-2 border-neutral-200 hover:shadow-md hover:border-neutral-200 transform transition  ease-linear duration-100  rounded-xl  px-4 py-3 mb-4 w-full overflow-hidden">
        <h4 className="text-sm font-semibold text-gray-500">
          Lost{" "}
          <span className="w-2 h-2 rounded-full inline-block bg-red-600 ml-2"></span>
        </h4>
        <input
          type="checkbox"
          className="peer absolute top-5 inset-x-0 w-full h-10 z-10 opacity-0 transition ease-linear duration-200 cursor-pointer"
        />

        <div className="h-10 w-full flex items-center">
          <h1 className="text-sm font-semibold text-gray-700">Tickets</h1>
        </div>
        {/* <span className="">20,000 naira</span> */}

        {/* Content goes in here*/}
        {slipInfo && slipInfo.length ? (
          slipInfo.map(
            (items, index) =>
              items[0]?.ticketStatus.includes("Lost") && (
                <HistoryCard
                  key={index}
                  betId={items[0]?.betId}
                  totalStakes={items[0]?.totalStakes.replace("Stake:", "")}
                  totalOdds={items[0]?.totalOdds}
                />
              )
          )
        ) : (
          <p>You have no lost ticket</p>
        )}
      </div>
    </div>
  );
};

export default BetHistory;
