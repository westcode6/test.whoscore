import { AiOutlineStar } from "react-icons/ai";
export default function LiveMarches() {
  const liveCompetitions = [
    {
      id: 1,
      liveGame: "Quater Finals",
      liveGameMins: "24 '",
      firstClubLogo: "./assets/ClubBanners/liverpool.png",
      firstClubName: "West Brom",
      firstClubScore: 1,

      secondClubLogo: "./assets/ClubBanners/realMadrid.png",
      secondClubName: "Preston",
      secondClubScore: 3,
    },

    {
      id: 2,
      liveGame: "Quater Finals",
      liveGameMins: "43 '",
      firstClubLogo: "./assets/ClubBanners/liverpool.png",
      firstClubName: "Germany",
      firstClubScore: 5,

      secondClubLogo: "./assets/ClubBanners/realMadrid.png",
      secondClubName: "Portuga",
      secondClubScore: 2,
    },
  ];

  return (
    <>
      <section style={{height: "420px"}} className="mt-10  animate__animated animate__faster animate__fadeIn">
        {liveCompetitions.map((eachLive) => (
          <div
            className="border-2 border-neutral-800 px-4 py-3 relative rounded-xl mb-10 cursor-pointer"
            key={eachLive.id}
          >
            <header className="">
              <div className="flex items-center justify-between">
                <span className="pr-2 pb-2 text-lg text-neutral-800">
                  <AiOutlineStar />
                </span>

                <div className="border-b border-neutral-400 pb-2 w-full flex items-center justify-between">
                  <h3 className="text-neutral-800 text-sm">
                    {eachLive.liveGame}
                  </h3>

                  <h5 className="text-neutral-800 text-sm">
                    {eachLive.liveGameMins}
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
                      src={eachLive.firstClubLogo}
                      className="w-6 h-6 object-cover object-center"
                      alt=""
                    />
                    <h5 className="text-neutral-800 text-xs pl-2">
                      {eachLive.firstClubName}
                    </h5>
                  </div>

                  <h4 className="text-neutral-800 text-xs block">
                    {eachLive.firstClubScore}
                  </h4>
                </div>

                {/* Second Club Details */}
                <div className="w-full flex items-center justify-between">
                  <div className="w-full flex items-center">
                    <img
                      src={eachLive.secondClubLogo}
                      className="w-6 h-6 object-cover object-center"
                      alt=""
                    />
                    <h5 className="text-neutral-800 text-xs pl-2">
                      {eachLive.secondClubName}
                    </h5>
                  </div>

                  <h4 className="text-neutral-800 text-xs">
                    {eachLive.secondClubScore}
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
