// import FixtureMarches from "./FixtureMarches";
// import LiveMarches from "./LiveMarches";
// import MarchesResult from "./MarchesResult";

import TableGroup from "./TableGroup";

export default function ViewTableComponent() {
  function switchAll() {
    document
      .getElementById("homeBtn")
      .classList.remove("bg-neutral-700", "text-neutral-50");

    document
      .getElementById("awayBtn")
      .classList.remove("bg-neutral-700", "text-neutral-50");

    document
      .getElementById("allBtn")
      .classList.add("bg-neutral-700", "text-neutral-50");
    document.getElementById("live").classList.add("hidden");
    document.getElementById("result").classList.add("hidden");
    document.getElementById("fixtures").classList.remove("hidden");
  }

  function switchHome() {
    document
      .getElementById("allBtn")
      .classList.remove("bg-neutral-700", "text-neutral-50");

    document
      .getElementById("awayBtn")
      .classList.remove("bg-neutral-700", "text-neutral-50");

    document
      .getElementById("homeBtn")
      .classList.add("bg-neutral-700", "text-neutral-50");
    document.getElementById("fixtures").classList.add("hidden");
    document.getElementById("result").classList.add("hidden");
    document.getElementById("live").classList.remove("hidden");
  }

  function switchAway() {
    document
      .getElementById("allBtn")
      .classList.remove("bg-neutral-700", "text-neutral-50");

    document
      .getElementById("homeBtn")
      .classList.remove("bg-neutral-700", "text-neutral-50");

    document
      .getElementById("awayBtn")
      .classList.add("bg-neutral-700", "text-neutral-50");
    document.getElementById("fixtureBtn").classList.remove("bg-neutral-700");
    document.getElementById("live").classList.add("hidden");
    document.getElementById("fixtures").classList.add("hidden");
    document.getElementById("result").classList.remove("hidden");
  }
  return (
    <>
      <main className=" animate__animated animate__faster animate__fadeIn">
      <section className="px-8 mt-10">
        <div className="flex items-center justify-between">
          <button
            id="allBtn"
            onClick={switchAll}
            className=" bg-neutral-700  text-neutral-50 px-4 py-1 rounded-md text-sm"
          >
            All
          </button>

          <button
            id="homeBtn"
            onClick={switchHome}
            className="hover:bg-neutral-700 text-neutral-800 hover:text-neutral-50 px-4 py-1 rounded-md text-sm"
          >
            Home
          </button>

          <button
            id="awayBtn"
            onClick={switchAway}
            className="hover:bg-neutral-700 hover:text-neutral-50 text-neutral-800 px-4 py-1 rounded-md text-sm"
          >
            Away
          </button>
        </div>
      </section>


 <section>
    <TableGroup Group={"Group A"} />
    <TableGroup Group={"Group B"} />
    <TableGroup Group={"Group C"} />
 </section>
      </main>
    </>
  );
}
