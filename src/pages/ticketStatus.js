import React from "react";
import BetHistory from "../components/ticketIDComponent/BetHistory";
import BetSlipForm from "../components/ticketIDComponent/BetSlipForm";
import TicketStatus from "../components/ticketIDComponent/TicketStatus";
import PageLayout from "../layout/layout";

const TicketStatusPage = () => {
  return (
    <PageLayout>
      <div className="md:flex md:gap-3 pt-[60px] md:pt-24">
        <div className="hidden md:block bg-[#ffffff] md:bg-white shadow-lg  border-2 border-gray-50 md:rounded-2xl md:px-3 md:pt-5 rounded-xl md:w-1/4 md:min-h-fit">
          <div className="pb-4 pt-6 md:pt-0">
            <BetSlipForm />
          </div>
          <BetHistory />
        </div>

        <TicketStatus />

      </div>
    </PageLayout>
  );
};

export default TicketStatusPage;
