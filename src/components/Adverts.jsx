import React, { useState } from "react";
import ComingSoon from "../pages/comingSoon";

const Adverts = ({ setShowAds, showAds }) => {
  const [counter, setCounter] = useState(5);
  setTimeout(() => {
    if (counter === 0) {
      return;
    } else {
      setCounter(counter - 1);
    }
  }, 1100);

  return (
    <div className="h-full overflow-hidden bg-black mx-auto w-full top-[60px] left-0 right-0 md:top-24 md:w-[70%] md:mr-4 fixed z-[10000] text-center text-white">
      <span
        className="absolute z-10 right-5 top-5 flex justify-center items-center text-2xl w-10 h-10 rounded-full border border-white"
        onClick={() => setShowAds(!showAds)}
      >
        {counter === 0 ? "X" : counter}
      </span>

      <ComingSoon text={"Ads.whoScore.Uk?"} />
    </div>
  );
};

export default Adverts;
