import BetSlip from "./BetSlip";
export default function TicketStatusBoard() {
  function switchTicketHistory() {
    document.getElementById("ticketHistory").classList.remove("hidden");
    document.getElementById("liveTicket").classList.add("hidden");
  }

  function switchLiveTicket() {
    document.getElementById("ticketHistory").classList.add("hidden");
    document.getElementById("liveTicket").classList.remove("hidden");
  }

  return (
    <div className="w-full md:max-w-md hidden">


      {/* Live Ticket Section */}


      <section
        id="liveTicket"
        className="bg-white py-2 animate__animated animate__faster animate__fadeIn"
      >
      <header className="flex items-center justify-between  mb-6 px-5">
        <button
          id="liveTicketLink"
          onClick={switchLiveTicket}
          className="font-semibold  px-2 py-2 text-sm text-neutral-900 transform transition hover:-translate-y-1"
        >
          Live Tickets
        </button>
        <button
          id="ticketHistoryLink"
          onClick={switchTicketHistory}
          className="text-neutral-900 font-semibold transform transition hover:-translate-y-2 text-sm tracking-wide"
        >
          Ticket History
        </button>
      </header>
        <BetSlip
          betSlipCompany={"Bet9ja"}
          betSlipCompanyColor={"text-green-500"}
          betSlipID={"3424543"}
          numberOfGames={"17"}
          betSlipOdd={"400"}
          betSlipDate={"Feb 27"}
          betSlipStatus={"Pending"}
          betSlipStatusColorCode={"bg-yellow-500"}
        />

        <BetSlip
          betSlipCompany={"1x BET"}
          betSlipCompanyColor={"text-blue-500"}
          betSlipID={"1234535"}
          numberOfGames={"25"}
          betSlipOdd={"600"}
          betSlipDate={"Jan 16"}
          betSlipStatus={"pending"}
          betSlipStatusColorCode={"bg-yellow-500"}
        />

        <div className="mb-10">
          <BetSlip
            betSlipCompany={"BetKing"}
            betSlipCompanyColor={"text-yellow-500"}
            betSlipID={"3424543"}
            numberOfGames={"17"}
            betSlipOdd={"400"}
            betSlipDate={"Feb 27"}
            betSlipStatus={"Pending"}
            betSlipStatusColorCode={"bg-yellow-500"}
          />
        </div>
      </section>

      {/* Ticket History */}
      <section
        id="ticketHistory"
        className="hidden animate__animated animate__faster animate__fadeIn"
      >
        <h2 className="bg-neutral-800 px-6 py-4 text-gray-300">
          Ticket History
        </h2>
        <BetSlip
          betSlipCompany={"1x BET"}
          betSlipCompanyColor={"text-blue-500"}
          betSlipID={"1234535"}
          numberOfGames={"25"}
          betSlipOdd={"600"}
          betSlipDate={"May 20"}
          betSlipStatus={"Lost"}
          betSlipStatusColorCode={"bg-red-500"}
        />

        <BetSlip
          betSlipCompany={"1x BET"}
          betSlipCompanyColor={"text-blue-500"}
          betSlipID={"324535"}
          numberOfGames={"25"}
          betSlipOdd={"600"}
          betSlipDate={"May 20"}
          betSlipStatus={"Lost"}
          betSlipStatusColorCode={"bg-red-500"}
        />

        <BetSlip
          betSlipCompany={"1x BET"}
          betSlipCompanyColor={"text-blue-500"}
          betSlipID={"484535"}
          numberOfGames={"25"}
          betSlipOdd={"600"}
          betSlipDate={"May 26"}
          betSlipStatus={"Lost"}
          betSlipStatusColorCode={"bg-red-500"}
        />

        <div className="pb-12">
          <BetSlip
            betSlipCompany={"BetKing"}
            betSlipCompanyColor={"text-yellow-500"}
            betSlipID={"3424543"}
            numberOfGames={"17"}
            betSlipOdd={"400"}
            betSlipDate={"June 2"}
            betSlipStatus={"Won"}
            betSlipStatusColorCode={"bg-green-500"}
          />

          <BetSlip
            betSlipCompany={"Bet9ja"}
            betSlipCompanyColor={"text-green-500"}
            betSlipID={"3424543"}
            numberOfGames={"17"}
            betSlipOdd={"400"}
            betSlipDate={"Feb 27"}
            betSlipStatus={"Won"}
            betSlipStatusColorCode={"bg-green-500"}
          />
        </div>
      </section>
    </div>
  );
}
