import React, { useState, useContext } from "react";
import InputElement from "../utilities/Input";
import { FaPlus } from "react-icons/fa";
import { TicketContext } from "../../hooks/useFetchTicket";
import Ads from "../Ads/Ads";

const BetSlipForm = () => {
  const [ticketId, setTicketId] = useState("");
  const [showAds, setShowAds] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [videoMuted, setVideoMuted] = useState(true);

  const { handleFetchTicket, betPlatform, setBetPlatform } =
    useContext(TicketContext);

  // save tickers to LS
  const handleSubmit = (e) => {
    e.preventDefault();

    if (ticketId === "") {
      setErrorMessage("Enter a betslip id");
      setTimeout(() => setErrorMessage(""), 5000);
    } else {
      setShowAds(true);
      handleFetchTicket(ticketId, betPlatform);

      setTicketId("");

      setVideoMuted(false);
    }
  };

  return (
    <div className="">
      {showAds && (
        <Ads
          videoMuted={videoMuted}
          setVideoMuted={setVideoMuted}
          showAds={showAds}
          setShowAds={setShowAds}
        />
      )}
      <div className="relative px-2 sm:px-0 mt-2 md:mt-0">
        <div
          className={`mb-10 relative border border-gray-600  shadow-md transform transition ease-linear duration-100  rounded-2xl overflow-hidden xs:w-11/12 sm:w-4/6 md:w-full mx-auto`}
        >
          <div
            className={`relative w-full border bg-white border-b-8 border-neutral-300  rounded-2xl  transform transition ease-linear duration-100    px-4 py-3`}
          >
            <div className="px-1">
              <header>
                <h2
                  className={`text-2xl md:text-xl text-center text-gray-900 font-semibold tracking-wide  logo-font`}
                >
                  WhoScore?
                </h2>
              </header>
              <form className="mt-4" onSubmit={(e) => handleSubmit(e)}>
                <InputElement
                  value={ticketId}
                  onChange={(e) => setTicketId(e.target.value)}
                  placeholder={"Enter Your BetSlip ID"}
                />
                {errorMessage && (
                  <p className="text-sm pl-1 text-red-600">{errorMessage}</p>
                )}
                <div className="mt-8">
                  <select
                    id="standard-select"
                    value={betPlatform}
                    onChange={(e) => setBetPlatform(e.target.value)}
                    className="border-2 border-gray-400 focus:outline-none focus:ring focus:ring-gray-300 bg-white text-sm  text-gray-600 font-semibold w-full rounded-xl h-12 px-2 py-2"
                  >
                    <option>Select Betting Platform</option>
                    <option value="bet9ja">Bet9ja</option>
                    {/* <option value="1X Bet">1X Bet</option>
             <option value="Bet King">Bet King</option>
             <option value="Winners">Winners</option> */}
                  </select>

                  <button
                    type="submit"
                    className="w-full mt-10 mb-6 bg-black transform ease-in transition hover:-translate-y-0.5 duration-200 text-sm text-white uppercase font-bold rounded-xl hover:shadow-md shadow-black py-4"
                  >
                    Load games
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div
          className="shadow-xl  text-black rounded-full w-14 h-14 top-[92%] left-0 mx-auto flex justify-center items-center transform transition duration-300 hover:scale-105  bg-black border p-6 border-gray-50 z-50 absolute right-0"
          // onClick={() => setShowForm(!showForm)}
        >
          <div>
            <span className=" w-8 h-8 rounded-full flex justify-center items-center bg-white">
              <FaPlus />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BetSlipForm;
