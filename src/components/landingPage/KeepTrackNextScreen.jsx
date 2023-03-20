import { Link } from "react-router-dom";

export default function KeepTrackNextScreen() {
  setInterval(hideScreen, 10000);

  function hideScreen() {
    document.getElementById("popUp")?.classList?.remove("hidden");
    document.getElementById("goHome")?.classList?.add("hidden");
  }

  // const closePopUp = document.getElementById("closePopUp")

  // function closePopUp() {
  //   document.getElementById("popUp")?.classList?.add("hidden");
  // }

  return (
    <>
      <main className="bg-black w-full h-screen px-4 py-4  animate__animated animate__faster animate__fadeInRightBig">
        <div className="w-full  md:max-w-xl mx-auto md:mt-20">
          <header className="px-4 mt-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-white tracking-wide">
              <em>
                Keep track of your <br />
                favourite games.
              </em>
            </h2>
          </header>

          <div className="flex items-center justify-center mt-5 md:mt-10">
            <img
              src="./assets/images/keepTrack.png"
              className="object-cover object-center w-96 h-full"
              alt=""
            />
          </div>
          <div className="px-4 md:px-10 mt-5  md:mt-10">
            <Link to={"/home"}>
              <div
                id="goHome"
                className="block bg-white font-semibold transform transition hover:-translate-y-1 text-base text-black text-center rounded-md shadow-sm py-4 "
              >
                Go Home
              </div>
            </Link>
          </div>
        </div>
      </main>

      {/* <div id="popUp" className="hidden">
        <div className="absolute top-16 md:top-24 left-0 right-0">
          <section className="md:max-w-2xl mx-auto  mt-24 mb-20 px-6 relative">
            <div className="bg-white animate__animated animate__fast animate__bounceIn shadow-sm border-2 border-black rounded-xl py-16 px-8 relative">
              <div
                id="closePopUp"
                onClick={closePopUp}
                className="absolute right-4 top-4 text-2xl rounded-full flex items-center justify-center"
              >
                <IoIosCloseCircle />
              </div>

              <AddBetSlip />
            </div>
          </section>
        </div>
      </div> */}
    </>
  );
}
