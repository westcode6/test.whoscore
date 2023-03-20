import { useState, useEffect, createContext } from "react";
import axios from "axios";

export const TicketContext = createContext(null);

export const TicketContextProvider = ({ children }) => (
  <TicketContext.Provider value={useFetchTicket()}>
    {children}
  </TicketContext.Provider>
);

const useFetchTicket = () => {
  // retrieve tickets from LS
  const getTicketFromLS = () => {
    let savedTicket = localStorage.getItem("Tickets");
    return savedTicket ? JSON.parse(savedTicket) : [];
  };

  const [betPlatform, setBetPlatform] = useState("");
  const [slipInfo, setSlipInfo] = useState(getTicketFromLS());

  const handleFetchTicket = async (id, betPlatform) => {
    try {
      const checkId = slipInfo.map((item) => item[0].betId).includes(id);

      if (checkId === true) {
        return;
      } else {
        const { data } = await axios.get(
          `https://whoscore-ticketid.onrender.com/tickets/${betPlatform}/${id}`
        );

        data[0].betPlatform = betPlatform;
        console.log("data", data);
        setSlipInfo([data, ...slipInfo]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteTicket = (betId) => {
    const newTicket = slipInfo.filter((item) =>
      item[0].betId !== betId && item.length !== 0 ? item : slipInfo.pop(item)
    );

    setSlipInfo(newTicket);
  };

  // save tickers to LS
  useEffect(
    () => localStorage.setItem("Tickets", JSON.stringify(slipInfo)),
    [slipInfo]
  );

  return {
    betPlatform,
    setBetPlatform,
    slipInfo,
    handleFetchTicket,
    handleDeleteTicket,
  };
};
