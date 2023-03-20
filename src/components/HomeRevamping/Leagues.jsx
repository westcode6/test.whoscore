import React from "react";

export default function Leagues() {
  return (
    <section>
      <div id="accordionExample">
        <div className="rounded-t-lg bg-white dark:border-neutral-600 dark:bg-neutral-800">
          <h2 className="mb-0 mt-4 text-gray-800" id="headingOne">
            <button
              className="group relative flex w-full items-center rounded-t-[15px] border-0 bg-white py-4 px-5 text-left text-lg font-bold text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
              type="button"
              data-te-collapse-init
              data-te-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <p className="text-gray-800">My Leagues</p>
              <span className="ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#1d1c1c] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#141313] motion-reduce:transition-none dark:fill-gray-800 dark:group-[[data-te-collapse-collapsed]]:fill-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#010101"
                  className="h-6 w-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="!visible"
            data-te-collapse-item
            data-te-collapse-show
            aria-labelledby="headingOne"
            data-te-parent="#accordionExample"
          >
            <div className="py-4 px-5 flex flex-col items-start pl-6">
              <LeagueTag
                leagueLogo={"./assets/ClubBanners/laliga.png"}
                leagueName="Laliga"
              />
              <LeagueTag
                leagueLogo={"./assets/Leagues/europe.jpg"}
                leagueName="Europan League"
              />
              <LeagueTag
                leagueLogo={"./assets/ClubBanners/premier.png"}
                leagueName="Premier League"
              />

              <LeagueTag
                leagueLogo={"./assets/ClubBanners/champions.png"}
                leagueName="Champions Laliga"
              />
              <LeagueTag
                leagueLogo={"./assets/Leagues/supercup.jpg"}
                leagueName="Superliga Argentina"
              />

              <LeagueTag
                leagueLogo={"./assets/Leagues/uefa_women.png"}
                leagueName="Europan Women League"
              />

              <LeagueTag
                leagueLogo={"./assets/Leagues/ueropia.jpg"}
                leagueName="Ukrainian League"
              />

              <LeagueTag
                leagueLogo={"./assets/Leagues/caf.jpg"}
                leagueName="HET League"
              />

              <LeagueTag
                leagueLogo={"./assets/Leagues/uefa-champions.jpg"}
                leagueName="UEFA Champions"
              />

              <LeagueTag
                leagueLogo={"./assets/Leagues/uefa_cham.jpg"}
                leagueName="Australian League"
              />

              <LeagueTag
                leagueLogo={"./assets/Leagues/supercup.jpg"}
                leagueName="Superliga Argentina"
              />
            </div>
          </div>
        </div>
        <div className=" bg-white dark:border-neutral-600 dark:bg-neutral-800">
          <h2 className="mb-0" id="headingTwo">
            <button
              className="group relative flex w-full items-center rounded-t-[15px] border-0 bg-white py-4 px-5 text-left text-lg font-bold text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
              type="button"
              data-te-collapse-init
              data-te-collapse-collapsed
              data-te-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <p className="text-gray-800">My Teams</p>

              <span className="ml-auto -mr-1 h-5 w-5 shrink-0 rotate-[-180deg] fill-[#010101] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#010101] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#010101"
                  className="h-6 w-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="!visible hidden"
            data-te-collapse-item
            aria-labelledby="headingTwo"
            data-te-parent="#accordionExample"
          >
            <div className="py-4 px-5 flex flex-col items-start pl-6">
              <LeagueTag
                leagueLogo={"./assets/ClubBanners/laliga.png"}
                leagueName="Laliga"
              />
              <LeagueTag
                leagueLogo={"./assets/Leagues/europe.jpg"}
                leagueName="Europan League"
              />
              <LeagueTag
                leagueLogo={"./assets/ClubBanners/premier.png"}
                leagueName="Premier League"
              />

              <LeagueTag
                leagueLogo={"./assets/ClubBanners/champions.png"}
                leagueName="Champions Laliga"
              />
              <LeagueTag
                leagueLogo={"./assets/Leagues/supercup.jpg"}
                leagueName="Superliga Argentina"
              />

              <LeagueTag
                leagueLogo={"./assets/Leagues/uefa_women.png"}
                leagueName="Europan Women League"
              />
            </div>
          </div>
        </div>
        <div className="rounded-b-lg bg-white dark:border-neutral-600 dark:bg-neutral-800">
          <h2 className="accordion-header mb-0" id="headingThree">
            <button
              className="group relative flex w-full items-center rounded-t-[15px] border-0 bg-white py-4 px-5 text-left text-lg font-bold text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
              type="button"
              data-te-collapse-init
              data-te-collapse-collapsed
              data-te-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <p className="text-gray-800">Countries</p>

              <span className="ml-auto -mr-1 h-5 w-5 shrink-0 rotate-[-180deg] fill-[#010101] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#010101] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="!visible hidden"
            data-te-collapse-item
            aria-labelledby="headingThree"
            data-te-parent="#accordionExample"
          >
            <div className="py-4 px-5 flex flex-col items-start pl-6">
              <LeagueTag
                leagueLogo={"./assets/ClubBanners/laliga.png"}
                leagueName="Laliga"
              />
              <LeagueTag
                leagueLogo={"./assets/Leagues/europe.jpg"}
                leagueName="Europan League"
              />
              <LeagueTag
                leagueLogo={"./assets/ClubBanners/premier.png"}
                leagueName="Premier League"
              />

              <LeagueTag
                leagueLogo={"./assets/ClubBanners/champions.png"}
                leagueName="Champions Laliga"
              />
              <LeagueTag
                leagueLogo={"./assets/Leagues/supercup.jpg"}
                leagueName="Superliga Argentina"
              />

              <LeagueTag
                leagueLogo={"./assets/Leagues/uefa_women.png"}
                leagueName="Europan Women League"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function LeagueTag({ leagueLogo, leagueName }) {
  return (
    <>
      <div className="hover:shadow-xl shadow-lg rounded-md  w-full flex items-center justify-start space-x-8 my-3 px-6 py-2">
        <div>
          <img src={leagueLogo} className="w-10 h-fit object-cover" alt="" />
        </div>

        <p className="text-sm font-semibold">{leagueName}</p>
      </div>
    </>
  );
}
