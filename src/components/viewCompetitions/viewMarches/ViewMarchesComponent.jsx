import FixtureMarches from "./FixtureMarches";
import LiveMarches from "./LiveMarches";
import MarchesResult from "./MarchesResult";

export default function ViewMarchesComponent() {
  function switchFeature() {
    document
      .getElementById("fixtureBtn")
      .classList.add("bg-neutral-700", "text-neutral-50");

      document
      .getElementById("liveBtn")
      .classList.remove("bg-neutral-700", "text-neutral-50");

      document
      .getElementById("resultBtn")
      .classList.remove("bg-neutral-700", "text-neutral-50");
    document.getElementById("live").classList.add("hidden");
    document.getElementById("result").classList.add("hidden");
    document.getElementById("fixtures").classList.remove("hidden");
  }

  function switchLive() {
    document
      .getElementById("fixtureBtn")
      .classList.remove("bg-neutral-700", "text-neutral-50");
      document
      .getElementById("resultBtn")
      .classList.remove("bg-neutral-700", "text-neutral-50");

      document
      .getElementById("liveBtn")
      .classList.add("bg-neutral-700", "text-neutral-50");
    document.getElementById("fixtures").classList.add("hidden");
    document.getElementById("result").classList.add("hidden");
    document.getElementById("live").classList.remove("hidden");
  }

  function switchResult() {
    document.getElementById("fixtureBtn").classList.remove("bg-neutral-700", "text-neutral-50");


    document
    .getElementById("liveBtn")
    .classList.remove("bg-neutral-700", "text-neutral-50");


    document
    .getElementById("resultBtn")
    .classList.add("bg-neutral-700", "text-neutral-50");
    document.getElementById("live").classList.add("hidden");
    document.getElementById("fixtures").classList.add("hidden");
    document.getElementById("result").classList.remove("hidden");
  }
  return (
    <>
     <main className="animate__animated animate__faster animate__fadeIn">
     <section className="px-8 mt-10">
        <div className="flex items-center justify-between">
          <button
            id="fixtureBtn"
            onClick={switchFeature}
            className=" bg-neutral-700  text-neutral-50 px-4 py-1 rounded-md text-sm"
          >
            Fixtures
          </button>

          <button
            id="liveBtn"
            onClick={switchLive}
            className="text-neutral-800 px-4 py-1 rounded-md text-sm"
          >
            Live
          </button>

          <button
            id="resultBtn"
            onClick={switchResult}
            className="text-neutral-800 px-4 py-1 rounded-md text-sm"
          >
            Result
          </button>
        </div>
      </section>

      {/* Fixtures Section */}

      <section id="fixtures" className="">
        <FixtureMarches />
      </section>

      <section id="live" className="hidden">
        <LiveMarches />
      </section>

      <section id="result" className="hidden">
        <MarchesResult />
      </section>
     </main>
    </>
  );
}
