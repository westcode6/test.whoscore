import React from "react";
import { BsBookmarkDash } from "react-icons/bs";
export default function NewsPanel() {
  return (
    <main className="px-6 py-2 pb-24 bg-white rounded-3xl">
      <h1 className="text-lg text-gray-800  font-bold mt-4">Trending News 🔥</h1>
      <header className="mt-6 md:mt-2">
        <img
          src="./assets/images/chealsea.jpg"
          className="w-full h-60 rounded-2xl object-cover shadow-2xxl border-4 border-gray-100"
          alt=""
        />

        <div className="px-2 py-3 flex items-start justify-between">
          <div className="pr-8">
            <h3 className="text-sm md:text-base text-gray-700 font-semibold capitalize">
              Real Sociedad 1-4 FC Barcelona: It's all starting to click!
            </h3>

            <span className="font-semibold text-xs text-gray-500 mt-4">
              about 2 hours ago
            </span>
          </div>

          <span className="block text-xl text-gray-500">
            <BsBookmarkDash />
          </span>
        </div>
      </header>

      <section className="">
        <NewsCard image={"./assets/images/arsenal.jpg"} />
        <NewsCard image={"./assets/images/goal.jpg"} />
        <NewsCard image={"./assets/images/ronaldo.png"} />
        <NewsCard image={"./assets/images/martinez.jpg"} />
        <NewsCard image={"./assets/images//stadium.webp"} />
        <NewsCard image={"./assets/images/mall.jpg"} />
        <NewsCard image={"./assets/images/shout1.jpg"} />
        <NewsCard image={"./assets/images/shhh.jpg"} />
        <NewsCard image={"./assets/images/watch.png"} />
        <NewsCard image={"./assets/images/chealsea.jpg"} />
      </section>
    </main>
  );
}

export function NewsCard({image}) {
  return (
    <>
      <div className="my-6  hover:shadow-sm shadow-xl rounded-md flex items-center justify-between space-x-2">
        <div className="flex items-start justify-center">
          <img
            src={image}
            className="w-20 h-20 shadow-xl rounded-xl object-cover"
            alt=""
          />

          <div className="px-4 py-1">
            <h3 className="text-sm text-gray-700 font-bold capitalize">
              The squad for the trip to San Sebastian Xavi names....
            </h3>
            <span className="text-xs text-gray-400 capitalize">22 AUG 2022 14:16</span>
          </div>
        </div>

        <div className="flexx items-start justify-end">
          <span className="block text-xl text-gray-500">
            <BsBookmarkDash />
          </span>
        </div>
      </div>
    </>
  );
}
