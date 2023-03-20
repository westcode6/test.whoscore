import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Ads = ({ setShowAds, showAds, videoMuted }) => {
  const [counter, setCounter] = useState(5);
  const location = useLocation();
  const navigate = useNavigate();

  setTimeout(() => {
    if (counter === 0) {
      return;
    }
    setCounter(counter - 1);
  }, 1100);

  const redirect = () => {
    if (location.pathname !== "/ticketStatus") {
      navigate("/ticketStatus");
    }
  };
  return (
    <div className="pt-[60px] md:pt-0 w-full flex flex-col gap-6 h-full overflow-hidden bg-black md:bg-white md:text-black mx-auto top-[60px] left-0 right-0 md:top-24 md:w-[72%] md:mr-4 absolute z-[100] text-center text-white">
      <video
        className="w-full h-fit min-h-[200px] max-h-[400px] md:mb-4 object-cover border-b border-b-gray-600"
        src="https://res.cloudinary.com/dfhnapzh3/video/upload/v1674325136/accelerated_plus_kpv2cf.mp4"
        autoPlay
        muted={videoMuted}
        controls
      ></video>
      <span
        onClick={() => setShowAds(!showAds) || redirect()}
        className=" text-xl border border-white rounded-full w-10 h-10 right-4 top-4  absolute p-1 z-[10000]"
      >
        {counter === 0 ? "X" : counter}
      </span>
      <div className="mb-4 flex justify-center text-left px-4 gap-3">
        <div>
          <h1 className="coming-soon text-center text-2xl lg:text-3xl mb-2 font-bold logo-font">
            Kaiglo.com
          </h1>
          <p className="text-white text-center  md:text-inherit text-sm md:text-base">
            Kaiglo makes online shopping in Nigeria simple and convenient.
            <br /> Buy one get 2 free
          </p>
        </div>
      </div>

      <div className="flex w-full justify-evenly lg:justify-center  lg:gap-6 gap-1">
        <img
          src="/assets/images/goal.jpg"
          alt=""
          className="w-[45%] sm:w-2/5 lg:w-1/5 shadow-lg shadow-gray-500"
        />
        <img
          src="/assets/images/watch.webp"
          alt=""
          className="w-[45%] sm:w-2/5 lg:w-1/5 shadow-lg shadow-gray-500"
        />
      </div>

      <div className=" mb-6">
        <button
          className="border py-1 md:py-3 text-sm border-gray-500 mr-2 uppercase text-gray-200 md:text-inherit w-2/5 sm:w-1/3 max-w-[117px] rounded disabled:cursor-not-allowed disabled:opacity-20 disabled:bg-black"
          disabled={counter !== 0}
        >
          skip
        </button>
        <a
          href="https://www.kaiglo.com/"
          target="_blank"
          rel="noreferrer"
          className="py-1 inline-block md:py-3 text-sm rounded bg-gray-400 uppercase  text-black w-2/5 sm:w-1/3 max-w-[117px] sm:justify-center"
        >
          Learn more
        </a>
      </div>
    </div>
  );
};

export default Ads;
