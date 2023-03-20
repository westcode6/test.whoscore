import React from "react";

export default function HomeSliderComponent() {
  return (
    <div className="w-full px-6 md:px-10 py-8   rounded-3xl">
      {/* <AwesomeSlider organicArrows="true" bullets="true" slider-height-percentage="30%">
      <div data-src="./assets/icons/bg8.jpg" />
      <div data-src="./assets/icons/bg6.webp" />
      <div data-src="./assets/icons/bg18.jpg" />

    </AwesomeSlider> */}

      <h2 className="text-lg text-gray-800 font-bold">Live Match</h2>

      <section className="w-full flex gap-6 items-center   overflow-x-scroll pl-2">
        <LiveMatchCard
          week={"12"}
          timeLeft="90 + 4"
          league={"Stamford Bridge"}
          firstTeam="Chelsea"
          firstTeamLogo={"./assets/ClubBanners/chelsea.png"}
          secondTeam="Man United"
          secondTeamLogo={"./assets/ClubBanners/manU.png"}
          scores="2 : 1"
        />

        <LiveMatchCard
          week={"10"}
          timeLeft="87"
          league={"Premier League"}
          firstTeam="Arsenal"
          firstTeamLogo={"./assets/ClubBanners/arsenal.webp"}
          secondTeam="Liverpool"
          secondTeamLogo={"./assets/ClubBanners/liverpool.png"}
          scores="4 : 1"
        />

        <LiveMatchCard
          week={"14"}
          timeLeft="89"
          league={"Europian League"}
          firstTeam="Dortmund"
          firstTeamLogo={"./assets/ClubBanners/dortmund.svg"}
          secondTeam="Juventus"
          secondTeamLogo={"./assets/ClubBanners/juventus.jpg"}
          scores="5 : 2"
        />

        <LiveMatchCard
          week={"10"}
          timeLeft="90 + 4"
          league={"Stamford Bridge"}
          firstTeam="Westbrom"
          firstTeamLogo={"./assets/ClubBanners/westbrom.png"}
          secondTeam="Hullcity"
          secondTeamLogo={"./assets/ClubBanners/hullcity.png"}
          scores="1 : 4"
        />
      </section>
    </div>
  );
}

export function LiveMatchCard({
  week,
  league,
  scores,
  timeLeft,
  firstTeam,
  firstTeamLogo,
  secondTeam,
  secondTeamLogo,
}) {
  return (
    <>
      <div className="w-80  rounded-3xl shadow-2xl transform transition ease-in hover:-translate-y-1 hover:bg-white  my-4">
        <header className="w-full rounded-3xl border-b-none border-gray-400 bg-white shadow-xl  py-3 ">
          <div className="">
            <div className="ml-4 w-16 h-8 flex items-center justify-center rounded-full bg-white shadow-inner border border-gray-50 text-red-500">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-red-400 block animate-ping"></span>{" "}
                <span className="text-xs font-bold block">Live</span>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center space-x-2">
              <h3 className="text-xl  font-extrabold">{league}</h3>
              <p className="text-sm text-gray-400 font-bold mt-2">
                Week {week}
              </p>
            </div>
          </div>
        </header>

        <div className="w-full  rounded-b-3xl px-6 pb-6  pt-2 text-gray-900 flex gap-4 items-center justify-between">
          <div className="w-52 flex flex-col items-center justify-center">
            <div className="rounded-full border-8 border-gray-100 shadow-inner">
              <div className="w-full bg-white rounded-full">
                <img
                  src={firstTeamLogo}
                  alt={firstTeam}
                  className="w-12 h-12 rounded-full "
                />
              </div>
            </div>
            <h3 className="text-lg  my-2 font-extrabold ">{firstTeam}</h3>
            <span className="text-sm text-gray-500 font-bold">Home</span>
          </div>

          <div className="w-52 flex flex-col items-center justify-center">
            <div className="flex items-center">
              <h3 className="text-3xl md:text-3xl font-extrabold">{scores}</h3>{" "}
            </div>

            <div className="mt-8 px-2 bg-lime-500 flex items-center rounded-2xl shadow-inner">
              <span className="text-sm font-extrabold text-white py-2">
                {" "}
                {timeLeft}
              </span>
            </div>
          </div>

          <div className="w-52 flex flex-col items-center justify-center">
            <div className="rounded-full border-8 border-gray-100 shadow-inner">
              <div className="w-full bg-white rounded-full">
                <img
                  src={secondTeamLogo}
                  alt={secondTeam}
                  className="w-12 h-12 rounded-full "
                />
              </div>
            </div>
            <h3 className="text-sm  my-2 font-extrabold">{secondTeam}</h3>
            <span className="text-sm text-gray-500 font-bold">Away</span>
          </div>
        </div>
      </div>
    </>
  );
}
