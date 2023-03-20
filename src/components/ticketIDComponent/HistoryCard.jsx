import React from "react";
import { Link } from "react-router-dom";

const HistoryCard = ({ totalTickets, totalStakes, betId, totalOdds }) => {
  return (
    <>
      <div className="absolute top-8 right-3 text-gray-900 transition-transform duration-200 rotate-0 peer-checked:rotate-180">
        {/* Arrow Icon */}
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </div>
      {/* Content goes in here*/}
      <div className="bg-white overflow-hidden  max-h-0 peer-checked:max-h-full">
        <Link to="/ticketStatus">
          <div className="flex items-start justify-between py-3 rounded-xl shadow-md px-1 hover:shadow-lg  mt-6 mb-2">
            <div className="text-xs">
              <h4 className="text-gray-500 text-sm font-semibold mb-1">
                {betId}
              </h4>
              <h5>Total Stake(NGN): {totalStakes}</h5>
              <h5 className="mt-1">Total Odds: {totalOdds}</h5>
            </div>
            <div>
              <img
                src="/assets/images/bet9ja.png"
                className="w-16 h-8 rounded-full object-cover"
                alt="sporty bet"
              />
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default HistoryCard;
