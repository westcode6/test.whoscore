import { AiOutlineStar } from "react-icons/ai";
export default function MarchesResult() {
  const CompetitionResults = [
    {
      id: 1,
      marchCompetition: "Quater Finals",
      marchDate: "5th April 2022",
      firstTeam: "Dortmund",
      firstTeamScore: "3",
      firstTeamLogo: "./assets/ClubBanners/dortmund.svg",
      secondTeam: "Juventus",
      secondTeamLogo: "./assets/ClubBanners/juventus.jpg",
      secondTeamScore: "6",
      marchTime: "F T",
    },

    {
      id: 2,
      marchCompetition: "Quater Finals",
      marchDate: "12th July 2022",
      firstTeam: "Liverpool",
      firstTeamScore: "3",
      firstTeamLogo: "./assets/ClubBanners/liverpool.png",
      secondTeam: "Arsenal",
      secondTeamLogo: "./assets/ClubBanners/arsenal.webp",
      secondTeamScore: "3",
      marchTime: "F T",
    },

    {
      id: 3,
      marchCompetition: "Quater Finals",
      marchDate: "15th july 2022",
      firstTeam: "Chelsea",
      firstTeamScore: "7",

      firstTeamLogo: "./assets/ClubBanners/chelsea.png",
      secondTeam: "Man United",
      secondTeamLogo: "./assets/ClubBanners/manU.png",
      secondTeamScore: "3",
      marchTime: "F T",
    },

    {
      id: 4,
      marchCompetition: "Quater Finals",
      marchDate: "21th July 2022",
      firstTeam: "Tottenham",
      firstTeamScore: "1",
      firstTeamLogo: "./assets/ClubBanners/tottenham.png",
      secondTeam: "Southampton",
      secondTeamLogo: "./assets/ClubBanners/southampton.png",
      secondTeamScore: "1",
      marchTime: "F T",
    },

    {
      id: 5,
      marchCompetition: "Quater Finals",
      marchDate: "15th September 2022",
      firstTeam: "West brom",
      firstTeamScore: "2",
      firstTeamLogo: "./assets/ClubBanners/westbrom.png",
      secondTeam: "Hull City",
      secondTeamLogo: "./assets/ClubBanners/hullcity.png",
      secondTeamScore: "1",
      marchTime: "F T",
    },

    {
      id: 6,
      marchCompetition: "Quater Finals",
      marchDate: "5th April 2022",
      firstTeam: "Real Madrid",
      firstTeamScore: "4",
      firstTeamLogo: "./assets/ClubBanners/realMadrid.png",
      secondTeam: "Bayern Munich",
      secondTeamLogo: "./assets/ClubBanners/bayern.webp",
      secondTeamScore: "2",
      marchTime: "F T",
    },
  ];

  return (
    <>
      <section  style={{height: "420px"}}  className="mt-10 overflow-scroll  animate__animated animate__faster animate__fadeIn">
        {CompetitionResults.map((eachResult) => (
          <div
            className="border-2 border-neutral-800 px-4 py-3 relative rounded-xl mb-10 cursor-pointer"
            key={eachResult.id}
          >
            <header className="">
              <div className="flex items-center justify-between">
                <span className="pr-2 pb-2 text-lg text-neutral-800">
                  <AiOutlineStar />
                </span>

                <div className="border-b border-neutral-400 pb-2 w-full flex items-center justify-between">
                  <h3 className="text-neutral-800 text-sm">
                    {eachResult.marchCompetition}
                  </h3>

                  <h5 className="text-neutral-800 text-sm">
                    {eachResult.marchTime}
                  </h5>
                </div>
              </div>
            </header>

            {/* Live Game Details Section */}

            <div className="px-6 flex items-center justify-between mt-3">
              <div className="w-full flex flex-col items-center space-y-4">
                {/* First Club Details */}
                <div className="w-full flex items-center justify-between">
                  <div className="flex items-center">
                    <img
                      src={eachResult.firstTeamLogo}
                      className="w-6 h-6 object-cover object-center"
                      alt={eachResult.firstTeam}
                    />
                    <h5 className="text-neutral-800 text-xs pl-2">
                      {eachResult.firstTeam}
                    </h5>
                  </div>

                  <h4 className="text-neutral-800 text-xs block">
                    {eachResult.firstTeamScore}
                  </h4>
                </div>

                {/* Second Club Details */}
                <div className="w-full flex items-center justify-between">
                  <div className="w-full flex items-center">
                    <img
                      src={eachResult.secondTeamLogo}
                      className="w-6 h-6 object-cover object-center"
                      alt={eachResult.secondTeam}
                    />
                    <h5 className="text-neutral-800 text-xs pl-2">
                      {eachResult.secondTeam}
                    </h5>
                  </div>

                  <h4 className="text-neutral-800 text-xs">
                    {eachResult.secondTeamScore}
                  </h4>
                </div>
              </div>
            </div>

            <div className="border-b-2 border-neutral-700 absolute -bottom-2 w-full h-10 right-0 left-0 rounded-xl shadow-md"></div>
          </div>
        ))}
      </section>
    </>
  );
}
