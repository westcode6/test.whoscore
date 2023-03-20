import { useContext } from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BsShare, BsPlayFill } from "react-icons/bs";
import { MatchContext } from "../../context/MatchContext";

export default function DetailsHeader() {
  const { gameDetails } = useContext(MatchContext);
  const {
    awayTeam,
    awayTeamLogo,
    competition,
    currentMatchTime,
    gameScore,
    homeTeam,
    homeTeamLogo,
  } = gameDetails;
  return (
    <header
      className="relative w-full sm:mx-auto sm:rounded-xl overflow-hidden"
      style={{
        backgroundImage: "url(./assets/images/stad.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-blue-900 text-center bg-opacity-80 shadow w-full pt-6 pb-10 px-4 text-white">
        <div className="lg:w-1/2 mx-auto">
          <h2 className="capitalize">{competition?.replace("-", " ")}</h2>
          <div className="flex justify-between items-center mt-3">
            <div className="flex flex-col gap-2 justify-center items-center">
              <img
                src={
                  homeTeamLogo ? homeTeamLogo : "/assets/images/club-logo.jpg"
                }
                alt={homeTeam + "logo"}
                className="w-10 h-10 object-fill"
              />
              <strong className="font-bold sm:text-lg">{homeTeam}</strong>
              <span className="text-sm">home</span>
            </div>

            <div>
              <span className="font-bold text-2xl md:text-4xl">
                {gameScore}
              </span>
              <span className="bg-white mt-2 text-sm sm:py-1 sm:px-3 block text-blue-600 rounded-full">
                {currentMatchTime}
              </span>
            </div>

            <div className="flex flex-col gap-2 justify-center items-center">
              <img
                src={
                  awayTeamLogo ? awayTeamLogo : "/assets/images/club-logo.jpg"
                }
                alt={awayTeam + "logo"}
                className="w-10 h-10  object-fill"
              />
              <strong className="font-bold sm:text-lg">{awayTeam}</strong>
              <span className="text-sm">away</span>
            </div>
          </div>

          <div className="mt-4">
            <div className="flex items-center text-sm sm:text-base justify-center gap-1 text-white">
              <BsPlayFill className="w-7 h-7" /> Watch Highlight
            </div>

            <div className="flex items-center justify-center space-x-10 mt-3">
              <span className="text-white text-2xl">
                <IoMdNotificationsOutline />
              </span>

              <span className="text-white text-xl">
                <BsShare />
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
