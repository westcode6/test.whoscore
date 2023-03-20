import React, { Component } from "react";

import { NavLink } from "react-router-dom";

import { GoEyeClosed } from "react-icons/go";
import {
  BsFillPlayFill,
  BsFillBookmarkFill,
  BsFillHeartFill,
} from "react-icons/bs";
import VideoPlayer from "./WatchPageVideoPlayer";

export default class WatchPagePanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      soccerVideos: [],
    };
  }

  componentDidMount() {
    fetch(
      "https://www.scorebat.com/video-api/v3/feed/?token=[NjA4NThfMTY3Njg0ODY3Ml9lYmEzZTc1Y2JlMjcxZDhjYzAzNzJmMmNjMDMwMzk5NTM2ZDFkM2M5"
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({ soccerVideos: data.response });
      });
  }

  render() {
    return (
      <>
        <div className="bg-white rounded-2xl shadow-2xl shadow-gray-200 mx-2 md:mx-6">
          <WatchPageHeader />

          <div className="mt-6 ">
            <WatchVideosPanel watchVideos={this.state.soccerVideos} />
          </div>
        </div>
      </>
    );
  }
}

// Watch Page Header
function WatchPageHeader() {
  return (
    <>
      <div className="rounded-b-2xl   md:rounded-3xl min-w-screen mt-0 lg:h-[60vh] md:shadow-xl shadow-gray-400  flex items-center overflow-hidden relative">
        <div className="w-full bg-dark  text-gray-800 relative md:text-left">
          <div className="lg:flex  items-center">
            <div className="w-full lg:w-2/5 xl:w-3/5  md:mb-0 md:order-2">
              <div className="relative">
                <div>
                  <video
                    className="h-full w-full"
                    autoPlay

                    loop
                    mute
                    control                    width="100%"

                  >
                    <source src="./assets/videos/fifa.mp4" type="video/mp4" />

                    <source src="./assets/videos/fifa.mp4" type="video/mp4" />

                    <a href="/media/cc0-videos/flower.webm">WEBM</a>
                    <a href="/media/cc0-videos/flower.mp4">MP4</a>
                  </video>
                </div>
                <div className="hidden">
                  <img
                    src="./assets/images/chealsea1.jpg"
                    className="w-full h-80 md:h-[35vh] lg:h-[65vh] rounded-b-3xl md:rounded-3xl shadow-2xl shadow-zinc-600 md:shadow-zinc-500 object-cover relative z-10"
                    alt=""
                  />
                </div>
                <div className="w-full backdrop-brightness-40 bg-black/50  h-full absolute rounded-b-3xl md:rounded-3xl rounded-3xl top-0 left-0 right-0 z-10"></div>
              </div>
            </div>
            <div className="w-full  rounded-b-3xl md:rounded-3xl mt-8 lg:w-3/5 xl:w-2/5 lg:h-[65vh] flex justify-center items-center md:order-1  xl:mt-0">
              <div className="px-4  md:px-8  lg:py-10">
                <h1 className="font-black text-white capitalize text-3xl lg:text-4xl ">
                  Arsenal Fc <span className="px-2">1-1</span> Chealsea
                </h1>

                <p className="bg-dark-text my-4 md:my-6 text-xl font-bold">
                  Premier League 2021/21 - English
                </p>
                <p className="text-base leading-7 bg-dark-text mb-6">
                  Lorem ipsum dolor sit, amet consectetur adipisicing, elit.
                  Eos, voluptatum dolor Lorem ipsum dolor, sit amet consectetur
                  adipisicing elit. Debitis, esse. Lorem, Lorem ipsum dolor sit
                  amet consectetur.
                </p>

                <div className="px-2 py-12 lg:py-0 lg:pt-12 xl:pt-14 w-full mt-auto flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <span className="bg-white text-red-500 w-12 h-12 p-4 rounded-full flex items-center justify-center">
                      <span className="text-3xl block">
                        <BsFillPlayFill />
                      </span>
                    </span>

                    <h4 className="uppercase text-sm text-white font-bold">
                      Play now
                    </h4>
                  </div>

                  <div className="flex items-start justify-between space-x-8 pl-8 md:pr-16">
                    <div className="flex flex-col items-center justify-center">
                      <span className="text-lime-400 mb-3">
                        <BsFillBookmarkFill />
                      </span>
                      <div className="text-xs bg-dark-text text-center font-bold">
                        <h4>Add to</h4>
                        <h4>watch list</h4>
                      </div>
                    </div>

                    <div className="flex flex-col items-center justify-center">
                      <span className="bg-dark-text text-xl mb-3">
                        <BsFillHeartFill />
                      </span>
                      <h4 className=" text-xs bg-dark-text font-bold ">Like</h4>
                    </div>

                    <div className="flex flex-col items-center justify-center">
                      <span className="text-neutral-400 text-xl mb-3">
                        <GoEyeClosed />
                      </span>
                      <h4 className=" text-xs bg-dark-text font-bold ">
                        Watched
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function WatchVideosPanel({ watchVideos }) {
  return (
    <>
      <div className="w-full bg-white px-4 md:px-8 ">
        <h2 className="text-xl font-bold tracking-normal capitalize">
          All recent Highlights
        </h2>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          {watchVideos.map((eachVideo) => (
            <WatchVideoCard watchVideo={eachVideo} key={eachVideo.videos.id} />
          ))}
        </div>
      </div>
    </>
  );
}

// WatchVideoCard Component
export function WatchVideoCard({ watchVideo }) {
  return (
    <div
      key={watchVideo.videos.id}
      className="shadow-inner bg-white border border-gray-50 hover:shadow-xl hover:shadow-gray-400 rounded-2xl"
      onClick={() => {
        window.open(watchVideo.matchviewUrl);
        window.location.reload();
      }}
    >
      <NavLink
        to={"/watchPage"}
        href={watchVideo.matchviewUrl}
        target="_blank"
        rel="noreferrer"
        className="w-[80vw] sm:w-[50vw] md:w-[32vw] lg:w-80 relative overflow-hidden  rounded-xl"
      >
        <div className="h-52 md:h-40 rounded-xl  relative w-full overflow-hidden">
          <VideoPlayer
            url={watchVideo.matchviewUrl}
            thumbnail={watchVideo.thumbnail}
          />
        </div>

        <div className="px-3 py-4">
          <div className="">
            <h5 className="text-base font-bold tracking-normal leading-6 text-gray-800 pr-2">
              {" "}
              {watchVideo.title}
            </h5>

            <h5 className="text-sm text-gray-500 mt-1">
              {watchVideo.competition}
            </h5>
          </div>
        </div>
      </NavLink>
    </div>
  );
}
