import ModalDialog from "./Modal";
// import Input from "./utilities/Input";
import { useState } from "react";
export default function LiveMatch() {
  const [openModal, setOpenModal] = useState(false);

  let launchDate = new Date("May 28, 2022 20:00:00").getTime();

  // Setup Timer to tick every 1 second
  let timer = setInterval(tick, 1000);
  console.log(timer)

  function tick() {
    // Get current time
    let now = new Date().getTime();

    // Get the difference in time to get time left until reaches 0
    let t = launchDate - now;

    // Check if time is above 0
    if (t > 0) {
      // setup Days, Hours, Seconds and minutes

      // prefix any number below 10 with a "0" E.g 1 = 01

      // Algorithm to calculate hours

      let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

      if (hours < 10) {
        hours = "0" + hours;
      }

      // Algorithm to calculate Minutes;

      let minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));

      if (minutes < 10) {
        minutes = "0" + minutes;
      }

      // Algorithm to calculate Seconds;

      let seconds = Math.floor((t % (1000 * 60)) / 1000);

      if (seconds < 10) {
        seconds = "0" + seconds;
      }

      //  Create Time String
      let time = `
                ${hours} : ${minutes} : ${seconds}`;

      // Set time on document
      document.getElementById("countdown").innerHTML = time;
    }
  }

  return (
    <div className="px-4 pt-5 bg-gray-100">
      <header>
        <h2 className="text-sm text-neutral-700 font-semibold tracking-wide">
          Live Match
        </h2>
        {/*
        <video mute="true" loop autoPlay className="mt-2 rounded-t-md">
          <source src="./assets/images/stadium.mp4" type="video/mp4" />
        </video> */}
      </header>

      {/* <section className="bg-black rounded-b-md px-4 py-3 flex items-center justify-between">
        <div className="flex flex-col items-center justify-center">
          <img
            src="./assets/ClubBanners/liverpool.png"
            alt="liverpool logo"
            className="w-10 h-10"
          />
          <h3 className="text-sm text-neutral-50 font-semibold tracking-wider mt-2">
            Liverpool
          </h3>
        </div>

        <div className="flex flex-col items-center justify-center">
          <h3 className="text-lg text-white font-bold">20:00</h3>
          <span className="text-sm text-neutral-400 font-semibold tracking-wide mt-2">
            Today
          </span>
        </div>

        <div className="flex flex-col items-center justify-center">
          <img
            src="./assets/ClubBanners/realMadrid.png"
            alt="realMadrid logo"
            className="w-10 h-10"
          />
          <h3 className="text-sm text-neutral-50 font-semibold tracking-wider mt-2">
            Real Madrid
          </h3>
        </div>
      </section> */}

      <section className="bg-white border border-gray-50 shadow-sm p-4 rounded-xl mt-4 mb-24">
        <video
          mute="true"
          loop
          autoPlay
          controls
          className="mt-2 rounded-t-md mb-4"
        >
          <source src="./assets/images/stadium.mp4" type="video/mp4" />
        </video>

        <section className="bg-black rounded-md px-4 py-3 flex items-center justify-between">
          <div className="flex flex-col items-center justify-center">
            <img
              src="./assets/ClubBanners/liverpool.png"
              alt="liverpool logo"
              className="w-10 h-10"
            />
            <h3 className="text-sm text-neutral-50 font-semibold tracking-wider mt-2">
              Liverpool
            </h3>
          </div>

          <div className="flex flex-col items-center justify-center">
            <h3 className="text-lg text-white font-bold">20:00</h3>
            <span className="text-sm text-neutral-400 font-semibold tracking-wide mt-2">
              Today
            </span>
          </div>

          <div className="flex flex-col items-center justify-center">
            <img
              src="./assets/ClubBanners/realMadrid.png"
              alt="realMadrid logo"
              className="w-10 h-10"
            />
            <h3 className="text-sm text-neutral-50 font-semibold tracking-wider mt-2">
              Real Madrid
            </h3>
          </div>
        </section>

        <section className="mt-4  text-center text-neutral-800">
          <h3 className="text-lg  tracking-wide font-semibold">
            Welcome To Whoscore's Test Launch
          </h3>

          <h3 className="mt-4">We Go Live In</h3>
          <span  className="text-black text-xl font-bold">

          </span>
        </section>

        <section className="border-t-2 border-neutral-400 py-2 mt-4">
          <p>
            Predict The Exact Scoreline for the above Match and get{" "}
            <strong> &#8358;10,000</strong> if your Prediction is correct
          </p>

          <div className="form" >
            <h4>Enter your Prediction</h4>

            <section className="bg-black rounded-t-md mt-2 px-4 py-3 flex items-center justify-between">
              <div className="flex flex-col items-center justify-center">
                <img
                  src="./assets/ClubBanners/liverpool.png"
                  alt="liverpool logo"
                  className="w-10 h-10"
                />
                <h3 className="text-sm text-neutral-50 font-semibold tracking-wider mt-2">
                  Liverpool
                </h3>
              </div>

              <div className="flex flex-col items-center justify-center">
                <h3 className="text-lg text-white font-bold">20:00</h3>
                <span className="text-sm text-neutral-400 font-semibold tracking-wide mt-2">
                  Today
                </span>
              </div>

              <div className="flex flex-col items-center justify-center">
                <img
                  src="./assets/ClubBanners/realMadrid.png"
                  alt="realMadrid logo"
                  className="w-10 h-10"
                />
                <h3 className="text-sm text-neutral-50 font-semibold tracking-wider mt-2">
                  Real Madrid
                </h3>
              </div>
            </section>



            <div className="flex items-center justify-between bg-black px-4 py-5">
            <select name="" id="">
                    <option value="">0</option>
                    <option value="">1</option>
                    <option value="">2</option>
                    <option value="">3</option>
                    <option value="">4</option>
                    <option value="">5</option>
                    <option value="">6</option>
                    <option value="">7</option>
                    <option value="">8</option>
                    <option value="">9</option>
                </select>

                <select name="" id="">
                    <option value="">0</option>
                    <option value="">1</option>
                    <option value="">2</option>
                    <option value="">3</option>
                    <option value="">4</option>
                    <option value="">5</option>
                    <option value="">6</option>
                    <option value="">7</option>
                    <option value="">8</option>
                    <option value="">9</option>
                </select>
            </div>



            <button
               onClick={() => setOpenModal(true)}
            className="bg-black rounded-md px-4 py-2 text-white transform transition hover:-translate-y-0.5 mt-4">
              Submit
            </button>
          </div>
        </section>

      </section>
      <ModalDialog openModal={openModal} setOpenModal={setOpenModal} />
    </div>
  );
}
