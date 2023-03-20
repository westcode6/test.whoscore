// import Home from "../../pages/home";
import { Link } from "react-router-dom";

import Categories from "./Categories";
import Navbar from "../Navbar";
import LiveMatchesSection from "./LiveMatchesSection";
import BetSlipForm from "../ticketIDComponent/BetSlipForm";
import DesktopAds from "../Ads/DesktopAds";
import BottomBar from "../BottomBar";

const HomePage = () => {
  return (
    <>
      <div className="relative min-h-screen h-fit w-full mx-auto max-w-screen-2xl sm:bg-[#f7f7f7] lg:bg-[#f5f5f5] md:px-6 lg:px-12">
        <Navbar />

        <div className="md:flex md:gap-3 pt-[50px] md:pt-24 ">
          <div className="bg-neutral-200 md:bg-white rounded-none px-2 py-6 md:px-6  shadow-md  md:block  md:pt-6 md:w-1/4 md:min-h-screen ">
            <div className="pb-4 pt-6 md:pt-0 ">
              <BetSlipForm />
              <div className="mt-14 px-9 text-center md:hidden">
                <h2 className="text-sm mb-4 logo-font tracking-wider">
                  WhoScore?
                </h2>
                <nav className="flex justify-evenly font-bold text-[#828282] text-sm">
                  <a href="#livescore">Livescore</a>

                  <Link to="/ticketIdPage">
                    <span>WhoScore Gaming</span>
                  </Link>
                  <Link to="/newsPage">
                    <span>Explore</span>
                  </Link>
                </nav>
              </div>
            </div>

            <div className="hidden md:block">
              <h2 className="font-semibold text-lg mb-2">Leagues</h2>
              <p>Coming soon!</p>
            </div>
          </div>

          <div
            id="livescore"
            className="animate__animated animate__faster animate__fadeIn md:w-1/2   h-full"
          >
            <div className="sm:bg-inherit">
              <Categories />
            </div>
            <LiveMatchesSection />
          </div>

          <DesktopAds />
        </div>
      </div>

      <BottomBar />
    </>
  );
};

export default HomePage;
