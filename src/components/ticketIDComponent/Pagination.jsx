import React from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

export const Pagination = ({
  gamesPerPage,
  totalGames,
  currentPage,
  paginate,
}) => {
  const gameNumbers = [];
  for (let i = 1; i <= Math.ceil(totalGames / gamesPerPage); i++) {
    gameNumbers.push(i);
  }
  return (
    <div className="flex flex-col md:flex-row items-center justify-center">
      <div className="flex items-center justify-center px-4 py-4">
        <ul className="m-2 flex items-center">
          <li>
            <navLink
              className="text-xl"
              to={currentPage - 1}
              onClick={() => {
                if (currentPage > 1) {
                  paginate(currentPage - 1);
                }
              }}
              aria-label="Previous"
            >
              <p>
                <span aria-hidden="true" className="block  mr-3">
                  <BsChevronLeft />
                </span>
                <span className="sr-only">Previous</span>
              </p>
            </navLink>
          </li>
          {gameNumbers.map((number) => (
            <li
              key={number}
              className={`w-6 h-6  flex items-center justify-center rounded-full text-sm font-semibold  ${
                currentPage === number
                  ? "bg-orange-500 text-white"
                  : "text-gray-500"
              }`}
            >
              <span className="cursor-pointer" onClick={() => paginate(number)}>
                {number}
              </span>
            </li>
          ))}

          <li>
            <navLink
              className="text-xl"
              to={currentPage + 1}
              onClick={() => {
                if (currentPage < gameNumbers.length) {
                  paginate(currentPage + 1);
                }
              }}
              aria-label="Previous"
            >
              <p>
                <span aria-hidden="true" className="block ml-3">
                  <BsChevronRight />
                </span>
                <span className="sr-only">Next</span>
              </p>
            </navLink>
          </li>
        </ul>
      </div>

      {/* <div className="mt-2 md:mt-0 space-x-2 flex">
        <span className="w-3 h-3 block bg-green-400 rounded-full"></span>
        <span className="w-3 h-3 block bg-amber-400 rounded-full"></span>
        <span className="w-3 h-3  block bg-red-400 rounded-full"></span>
      </div> */}
    </div>
  );
};
