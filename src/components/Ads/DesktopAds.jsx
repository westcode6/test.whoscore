import React from "react";
import {NewsData} from "../newsPage/NewsData";
import News from "../newsPage/News";

const DesktopAds = () => {
  return (
    <section className="hidden px-2 py-6 md:px-4 rounded-b-2xl md:block bg-white shadow-xl bg-black border-b-8 border-neutral-200 md:w-1/4 md:min-h-screen text-center">
      <div>
        <video
          className="w-full mb-12 min-h-[290px] max-h-[350px] object-cover rounded-xl"
          autoPlay
          muted
          loop
          src="https://res.cloudinary.com/du10sgc3x/video/upload/v1667525786/whoscore_ads/video/ad_kaiglo_lwm0v3.mp4"
        ></video>

        <div className="mb-16 px-1">
          <div>
            <h1 className="coming-soon text-2xl mb-3 font-bold logo-font">
              WhoScore.Uk?
            </h1>
            <p className="text-[#828282] text-base">
              WhoScore? is a Livescore and Streaming service with a Global
              Community of Sport Enthusiasts.
            </p>
          </div>
        </div>

        <div className="mb-8">
          <button className="border py-1 text-sm border-black mr-2 uppercase w-2/5 sm:w-1/3 rounded disabled:cursor-not-allowed disabled:opacity-20 disabled:bg-black">
            skip
          </button>
          <a
            href="https://www.kaiglo.com/"
            target="_blank"
            rel="noreferrer"
            className="p-1 inline-block text-sm rounded bg-black uppercase text-white w-2/5 sm:w-1/3 sm:justify-center"
          >
            Learn More
          </a>
        </div>
      </div>

      <article className="text-left">
        <h2 className="font-semibold mb-3 text-center">Trending News</h2>
        {NewsData.map(({ image, title, desc, tag, time }, index) => (
          <News
            key={index}
            image={image}
            title={title}
            desc={desc}
            tag={tag}
            time={time}
          />
        ))}
      </article>
    </section>
  );
};

export default DesktopAds;
