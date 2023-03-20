import React from "react";
import SubscriptionForm from "../SubscriptionForm";

const ExploreComingSoon = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: "url(/assets/images/explore.png)",
      }}
    >
      <div className="py-6 px-4 md:px-8 md:py-10 bg-neutral-900 text-center text-[#BDBDBD] rounded-xl w-5/6 mx-auto sm:w-2/3 lg:w-1/3">
        <h2 className="font-bold text-2xl mb-3 md:text-4xl ">Coming Soon</h2>
        <p className="text-xs sm:text-base">
          We are building a Social Livestreaming Platform Service for community
          of Sport Enthusiats and Guess what?, it is totally free, Kindly drop
          your email below to be the first to experience it
        </p>
        <SubscriptionForm />
      </div>
    </div>
  );
};

export default ExploreComingSoon;
