import { useState, useContext} from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";
import { useDate } from "../../hooks/useDate";
import { MatchContext } from "../../context/MatchContext";

export default function PageCalender() {
  const {
    // activeMonth,
    yesterday,
    dPrevDay,
    getYesterdaysDate,
    todaysDate,
    getTomorrowTime,
    dNextDay,
    tomorrowsDate,
    nextTomorrow,
    dNextNextDay,
    nextTomorrowsDate,
  } = useDate();

  const { handleFetchMatches} = useContext(MatchContext);
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [dateState, setDateState] = useState(new Date());
  const [toggleState, setToggleState] = useState(2);

  const toggleDate = (index) => {
    setToggleState(index);
  };

  const activeDateClasses =
    "shadow-xl shadow-gray-200 font-extrabold bg-dark tracking-normal text-lime-50 py-1 px-2 text-xs";

  const notActiveDateClasses =
    "shadow-inner font-bold bg-gray-50/40  tracking-wide text-gray-400 py-1 px-3 text-xs";

  return (
    <section className="md:shadow-none shadow-inner bg-white shadow-white mt-2 md:border-x-0 md:border-b-0  border-stone-100 overflow-x-scroll sm:overflow-hidden px-12 py-3 rounded-3xl flex justify-between sm:justify-evenly items-center text-xs">
      {/* <div
        className={`bg-red-400 text-white py-3 px-2 rounded-2xl text-xs sm:text-sm cursor-pointer `}
        onClick={() => {
          handleLiveMatches();
        }}
      >
        Live
      </div> */}

{/* The data here are static and need to be worked on */}
      <div
        className={`${
          toggleState === 0 ? activeDateClasses : notActiveDateClasses
        } cursor-pointer  calender-container text-center rounded-2xl py-3`}
        onClick={() => {
          toggleDate(0);
          handleFetchMatches(moment(yesterday).format("YYYY-MM-D"));
        }}
      >
        <p className="pointer-events-none">{"Sun"}</p>
        <span className="text-sm text-gray-900 font-extrabold uppercase pointer-events-none mt-2">
          {getYesterdaysDate - 1}
        </span>
      </div>

      <div
        className={`${
          toggleState === 0 ? activeDateClasses : notActiveDateClasses
        } cursor-pointer  calender-container text-center rounded-2xl py-3`}
        onClick={() => {
          toggleDate(0);
          handleFetchMatches(moment(yesterday).format("YYYY-MM-D"));
        }}
      >
        <p className="pointer-events-none">{"Mon"}</p>
        <span className="text-sm text-gray-900 font-extrabold uppercase pointer-events-none mt-2">
          {getYesterdaysDate - 1}
        </span>
      </div>

      <div
        className={`${
          toggleState === 0 ? activeDateClasses : notActiveDateClasses
        } cursor-pointer  calender-container text-center rounded-2xl py-3`}
        onClick={() => {
          toggleDate(0);
          handleFetchMatches(moment(yesterday).format("YYYY-MM-D"));
        }}
      >
        <p className="pointer-events-none">{"Tue"}</p>
        <span className="text-sm text-gray-900 font-extrabold uppercase pointer-events-none mt-2">
          {getYesterdaysDate - 1}
        </span>
      </div>
      {/* End of static data */}

      
      <div
        className={`${
          toggleState === 2
            ? activeDateClasses
            : notActiveDateClasses
        } cursor-pointer  calender-container text-center rounded-2xl py-3`}
        onClick={() => {
          toggleDate(2);

          handleFetchMatches(moment(new Date()).format("YYYY-MM-D"));
        }}
      >
        <p className="pointer-events-none">Today</p>
        <span className="text-sm text-lime-400 font-extrabold uppercase pointer-events-none mt-2">
          {todaysDate}
        </span>
      </div>

      <div
        className={`${
          toggleState === 1 ? activeDateClasses : notActiveDateClasses
        } cursor-pointer  calender-container text-center rounded-2xl py-3`}
        onClick={() => {
          toggleDate(1);
          handleFetchMatches(moment(yesterday).format("YYYY-MM-D"));
        }}
      >
        <p className="pointer-events-none">{dPrevDay}</p>
        <span className="text-sm text-gray-900 font-extrabold uppercase pointer-events-none mt-2">
          {getYesterdaysDate}
        </span>
      </div>


      <div
        className={`${
          toggleState === 3 ? activeDateClasses : notActiveDateClasses
        } cursor-pointer  calender-container text-center rounded-2xl py-3`}
        onClick={() => {
          toggleDate(3);

          handleFetchMatches(moment(getTomorrowTime).format("YYYY-MM-D"));
        }}
      >
        <p className="pointer-events-none">
          {dNextDay}
        </p>
        <span className="text-sm text-gray-900 font-extrabold uppercase pointer-events-none mt-2">
          {tomorrowsDate}
        </span>
      </div>

      <div
        className={`${
          toggleState === 4
            ? activeDateClasses
            : notActiveDateClasses
        } cursor-pointer  calender-container text-center rounded-2xl py-3`}
        onClick={() => {
          toggleDate(4);
          handleFetchMatches(moment(nextTomorrow).format("YYYY-MM-D"));
        }}
      >
        <p className="pointer-events-none">{dNextNextDay}</p>
        <span className="text-sm text-gray-900 font-extrabold uppercase pointer-events-none mt-2">
          {nextTomorrowsDate}
        </span>
      </div>

      {calendarOpen && (
        <div
          className="calender-container hidden text-center mx-auto absolute bg-inherit h-full w-4/5"
          onClick={() =>
            handleFetchMatches(moment(dateState).format("YYYY-MM-D"))
          }
        >
          <h3 className="text-gray-500 text-sm">
            {moment(dateState).format("dddd")}
          </h3>
          <span>
            {moment(dateState).format("D")} {moment(dateState).format("MMMM")}
          </span>
        </div>
      )}

      <div className="hidden">
        <span
          className="cursor-pointer text-2xl"
          onClick={() => setCalendarOpen(!calendarOpen)}
        >
          <img src="assets/images/calendar-icon.png" alt="calendar icon" />
        </span>
        <Calendar
          value={dateState}
          onChange={(e) => {
            setDateState(e);
            handleFetchMatches(moment(dateState).format("YYYY-MM-D"));
            setCalendarOpen(!calendarOpen);
          }}
          className={`absolute right-0 top-full  z-50 transition duration-300 ${
            calendarOpen
              ? "translate-y-0 pb-24"
              : "opacity-0 -translate-y-4 duration-75 -z-[100]"
          }`}
        />
      </div>
    </section>
  );
}
