import DetailsHeader from "../components/gameDetails/DetailsHeader";
import GameInfo from "../components/gameDetails/GameInfo";
import DesktopAds from "../components/Ads/DesktopAds";
import BetSlipForm from "../components/ticketIDComponent/BetSlipForm";
import PageLayout from "../layout/layout";
import { useState } from "react";
import Navbar from "../components/Navbar";

export default function GameDetails() {
  const [showForm, setShowForm] = useState(true);
  return (
    <PageLayout>
      <Navbar />
      <div className="md:flex md:gap-3 pt-[60px] md:pt-24">
        <div className="hidden md:block bg-[#E0E0E0] md:bg-white md:px-3 md:pt-5 rounded-xl md:w-1/4 md:min-h-screen">
          <div className="pb-4 pt-6 md:pt-0">
            <BetSlipForm
              showForm={showForm}
              setShowForm={() => setShowForm(true)}
            />
          </div>

          <div className="hidden md:block">
            <h2 className="font-semibold text-lg mb-2">Leagues</h2>
            <p>Coming soon!</p>
          </div>
        </div>
        <div className="sm:p-3 md:w-1/2 bg-white rounded-xl">
          <DetailsHeader />
          <GameInfo />
        </div>
        <DesktopAds />
      </div>
    </PageLayout>
  );
}
