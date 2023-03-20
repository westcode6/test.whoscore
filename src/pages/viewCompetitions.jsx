import { FaLongArrowAltLeft } from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";

import React from "react";
import { Link } from "react-router-dom";
import ViewMarchesComponent from "../components/viewCompetitions/viewMarches/ViewMarchesComponent";
import ViewTableComponent from "../components/viewCompetitions/viewTable/ViewTableComponent";

export default function ViewCompetitions() {
  function switchMarch() {
    document
      .getElementById("table")
      .classList.remove("border-b-2", "border-neutral-800");
    document
      .getElementById("marches")
      .classList.add("border-b-2", "border-neutral-800");

    document
      .getElementById("fixtureBtn")
      .classList.remove("bg-neutral-700", "text-neutral-50");

    document.getElementById("viewTable").classList.add("hidden");
    document.getElementById("viewMarches").classList.remove("hidden");
    document.getElementById("live").classList.remove("hidden");
  }

  function switchTable() {
    document.getElementById("marches").classList.remove("border-b-2");

    document
      .getElementById("table")
      .classList.add("border-b-2", "border-neutral-800");
    document.getElementById("viewMarches").classList.add("hidden");
    document.getElementById("viewTable").classList.remove("hidden");
    document.getElementById("live").classList.remove("hidden");
  }

  return (
    <>
      <main className="">
        <section className="w-full md:w-2/6 mx-auto h-full py-5 px-4 relative animate__animated animate__faster animate__fadeIn">
          <div className="flex items-center justify-between mt-4 px-2">
            <Link to={"/home"}>
              <div href="##">
                <span className="text-xl text-neutral-800">
                  <FaLongArrowAltLeft />
                </span>
              </div>
            </Link>

            <Link to={"/home"}>
              <div>
                <span className="text-xl text-neutral-800">
                  <AiFillCloseCircle />
                </span>
              </div>
            </Link>
          </div>

          <header className="px-4 mt-8">
            <h2 className="text-lg text-neutral-800 font-semibold">
              UEFA Champions League
            </h2>
            <div className="flex items-center justify-between mt-8">
              <div>
                <a
                  href="##"
                  id="marches"
                  onClick={switchMarch}
                  className="text-neutral-800 text-sm border-b-2 border-neutral-800 pb-1"
                >
                  Marches
                </a>
              </div>

              <div>
                <a
                  href="##"
                  id="table"
                  onClick={switchTable}
                  className="text-neutral-800 text-sm pb-1"
                >
                  Table
                </a>
              </div>

              <div>
                <Link to={"/commingSoon"}>
                  <span href="##" className="text-neutral-800 text-sm  pb-1">
                    Videos
                  </span>
                </Link>
              </div>

              <div>
                <Link to={"/comingSoon"}>
                  <span href="##" className="text-neutral-800 text-sm  pb-1">
                    News
                  </span>
                </Link>
              </div>
            </div>
          </header>

          <div id="viewMarches" className="">
            <ViewMarchesComponent />
          </div>

          <div id="viewTable" className="hidden">
            <ViewTableComponent />
          </div>
        </section>
      </main>
    </>
  );
}
