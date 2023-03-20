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
    <div className="md:pt-0 w-full h-screen flex flex-col gap-6 overflow-hidden bg-black md:bg-white md:text-black mx-auto bottom-0 top-[60px] left-0 right-0 md:top-24 md:w-[72%] md:mr-4 fixed z-[100] text-center text-white">
      <video
        className="w-full h-3/4 object-fill object-center md:mb-4 border-b border-b-gray-600"
        src="https://res.cloudinary.com/dfhnapzh3/video/upload/v1674325136/accelerated_plus_kpv2cf.mp4"
        autoPlay
        muted={videoMuted}
      ></video>

      <div className="px-2">
        <button
          onClick={() => setShowAds(!showAds) || redirect()}
          className="border p-2 md:py-3 w-1/3 md:w-1/4 text-sm border-gray-500 mr-2 uppercase text-gray-200 md:text-inherit rounded disabled:cursor-not-allowed disabled:text-black disabled:bg-blue-300"
          disabled={counter !== 0}
        >
          skip ads {counter === 0 ? "" : "in " + counter}
        </button>
        <a
          href="https://accelerateplus.tv/?fbclid=PAAabvw24Xn-IkxYNCuZNyRWD2b_IfNNDOE4K1bOfNbmjG7iPW8zVh0nNPSFg"
          target="_blank"
          rel="noreferrer"
          className="py-2 px-6 ml-2 w-3/5 md:w-2/5 animate-pulse inline-block md:py-3 text-sm rounded bg-blue-600 uppercase text-black sm:justify-center"
        >
          Sign up
        </a>
      </div>
    </div>
  );
};

export default Ads;
