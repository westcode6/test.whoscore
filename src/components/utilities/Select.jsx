import { useState } from "react";
import { Link } from "react-router-dom";

export default function Select({ optionTitle }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="group px-2 w-full">
        <button
          className={`w-full ml-2 outline-none focus:outline-none border  px-3 py-3 rounded-lg flex items-center justify-between ${
            open ? "mt-48" : ""
          }`}
          onClick={() => setOpen(!open)}
        >
          <span className="pr-1 font-medim">{optionTitle}</span>
          <span>
            <svg
              className={`fill-current h-4 w-4 transform ${
                open && "-rotate-180"
              } transition duration-150 ease-in-out`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </span>
        </button>

        {open && (
          <ul className="ml-2 bg-white shadow-xl z-10 relative  border rounded-sm transform scale-0 group-hover:scale-100 transition duration-150 ease-in-out origin-top w-full">
            <li className="rounded-sm bg-neutral-50 px-3 py-3 hover:bg-gray-100 ">
              <Link to={"/viewCompetitions"}>
                <div className=" flex items-center justify-start transform transition hover:-translate-y-1 hover:shadow-xl">
                  <img
                    src="./assets/ClubBanners/champions.png"
                    alt="realMadrid logo"
                    className="w-10 h-10"
                  />

                  <span className="ml-4">Champions League</span>
                </div>
              </Link>
            </li>

            <li className="rounded-sm bg-neutral-50 px-3 py-3 hover:bg-gray-100 ">
              <Link to={"/viewCompetitions"}>
                <div className=" flex items-center justify-start transform transition hover:-translate-y-1 hover:shadow-xl">
                  <img
                    src="./assets/ClubBanners/champions.png"
                    alt="realMadrid logo"
                    className="w-10 h-10"
                  />

                  <span className="ml-4">French League</span>
                </div>
              </Link>
            </li>

            <li className="rounded-sm bg-neutral-50 px-3 py-3 hover:bg-gray-100 ">
              <Link to={"/viewCompetitions"}>
                <div className=" flex items-center justify-start transform transition hover:-translate-y-1 hover:shadow-xl">
                  <img
                    src="./assets/ClubBanners/champions.png"
                    alt="realMadrid logo"
                    className="w-10 h-10"
                  />

                  <span className="ml-4">England League</span>
                </div>
              </Link>
            </li>
          </ul>
        )}
      </div>
    </>
  );
}
