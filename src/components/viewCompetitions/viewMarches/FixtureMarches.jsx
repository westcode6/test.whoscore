import { AiOutlineStar } from "react-icons/ai";
export default function FixtureMarches() {
  const fixtures = [
    {
      id: 1,
      marchCompetition: "Quater Finals",
      marchDate: "5th April 2022",
      firstTeam: "Dortmund",
      firstTeamLogo: "./assets/ClubBanners/dortmund.svg",
      secondTeam: "Juventus",
      secondTeamLogo: "./assets/ClubBanners/juventus.jpg",
      time: "19:30",
    },

    {
      id: 2,
      marchCompetition: "Quater Finals",
      marchDate: "12th July 2022",
      firstTeam: "Liverpool",
      firstTeamLogo: "./assets/ClubBanners/liverpool.png",
      secondTeam: "Arsenal",
      secondTeamLogo: "./assets/ClubBanners/arsenal.webp",
      time: "15:00",
    },

    {
      id: 3,
      marchCompetition: "Quater Finals",
      marchDate: "15th july 2022",
      firstTeam: "Chelsea",
      firstTeamLogo: "./assets/ClubBanners/chelsea.png",
      secondTeam: "Man United",
      secondTeamLogo: "./assets/ClubBanners/manU.png",
      time: "20:45",
    },

    {
      id: 4,
      marchCompetition: "Quater Finals",
      marchDate: "21th July 2022",
      firstTeam: "Tottenham",
      firstTeamLogo: "./assets/ClubBanners/tottenham.png",
      secondTeam: "Southampton",
      secondTeamLogo: "./assets/ClubBanners/southampton.png",
      time: "20:00",
    },

    {
      id: 5,
      marchCompetition: "Quater Finals",
      marchDate: "15th September 2022",
      firstTeam: "West brom",
      firstTeamLogo: "./assets/ClubBanners/westbrom.png",
      secondTeam: "Hull City",
      secondTeamLogo: "./assets/ClubBanners/hullcity.png",
      time: "17:30",
    },

    {
      id: 6,
      marchCompetition: "Quater Finals",
      marchDate: "5th April 2022",
      firstTeam: "Real Madrid",
      firstTeamLogo: "./assets/ClubBanners/realMadrid.png",
      secondTeam: "Bayern Munich",
      secondTeamLogo: "./assets/ClubBanners/bayern.webp",
      time: "19:00",
    },
  ];

  return (
    <>
      <section  style={{height: "420px"}}  className="mt-10 overflow-scroll animate__animated animate__faster animate__fadeIn">
        {fixtures.map((eachMarch) => (
          <div
            className="border-2 border-neutral-800 px-4 py-3 relative rounded-xl mb-10 cursor-pointer"
            key={eachMarch.id}
          >
            <header className="">
              <div className="flex items-center justify-between">
                <span className="pr-2 pb-2 text-lg text-neutral-800">
                  <AiOutlineStar />
                </span>

                <div className="border-b border-neutral-400 pb-2 w-full flex items-center justify-between">
                  <h3 className="text-neutral-800 text-sm">
                    {eachMarch.marchCompetition}
                  </h3>

                  <h5 className="text-neutral-800 text-sm">
                    {eachMarch.marchDate}
                  </h5>
                </div>
              </div>
            </header>

            <div className="px-6 flex items-center justify-between mt-3">
              {/* Game Section */}
              <div className="flex flex-col items-center space-y-4">
                <div className="flex items-center justify-start">
                  <img
                    src={eachMarch.firstTeamLogo}
                    className="w-6 h-6 object-cover object-center"
                    alt={eachMarch.firstTeam}
                  />
                  <h5 className="text-neutral-800 text-xs pl-2">
                    {eachMarch.firstTeam}
                  </h5>
                </div>

                <div className="flex items-center">
                  <img
                    src={eachMarch.secondTeamLogo}
                    className="w-6 h-6 object-cover object-center"
                    alt={eachMarch.secondTeam}
                  />
                  <h5 className="text-neutral-800 text-xs pl-2">
                    {eachMarch.secondTeam}
                  </h5>
                </div>
              </div>

              <div>
                <span className="text-neutral-800 text-xs">
                  {eachMarch.time}
                </span>

              </div>

            </div>


            <div className="border-b-2 border-neutral-700 absolute -bottom-2 w-full h-10 right-0 left-0 rounded-xl shadow-md"></div>

          </div>
        ))}
      </section>
    </>
  );
}
