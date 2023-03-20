// import { BiArrowBack } from "react-icons/bi";
// import { Link } from "react-router-dom";

export default function ComingSoon({ text }) {
  let launchDate = new Date("July 18, 2022 12:00:00").getTime();

  // Setup Timer to tick every 1 second
  // let timer = setInterval(tick, 1000);

  tick();

  function tick() {
    // Get current time
    let now = new Date().getTime();

    // Get the difference in time to get time left until reaches 0
    let t = launchDate - now;

    // Check if time is above 0
    if (t > 0) {
      // setup Days, Hours, Seconds and minutes

      // prefix any number below 10 with a "0" E.g 1 = 01

      let days = Math.floor(t / (1000 * 60 * 60 * 24));

      // Algorithm to calculate Days
      if (days < 10) {
        days = "0" + days;
      }

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
      let time = `${days}
                : ${hours} : ${minutes} : ${seconds}`;

      // Set time on document
      document.getElementById("countdown").innerHTML = time;
    }
  }

  // function sendMail() {
  //   var link =
  //     "mailto:babayejuadesina@gmail.com" +
  //     "?cc=myCCaddress@gmail.com" +
  //     "&subject=" +
  //     encodeURIComponent("Join the wait list") +
  //     "&body=" +
  //     encodeURIComponent(document.getElementById("myText").value);
  //   window.location.href = link;
  // }

  return (
    <div className="h-screen max-w-xl mx-auto bg-black text-white flex items-center justify-center">
      <div className="mx-auto text-center px-6">
        <div className=" logo-font ">
          <h1 className="text-2xl sm:text-3xl mt-2 coming-soon ">{text}</h1>
          <h2 className="coming-soon animate-pulse">Coming Soon!</h2>
        </div>

        <p className="py-4 text-neutral-400 text-sm">
          WhoScore? is a Livescore and Streaming service with a Global Community
          of Sport Enthusiasts.
        </p>

        <div className="text-white text-2xl mt-10  logo-font mb-6">
          {/* <h4 id="countdown">14:40</h4> */}
          <h3 className="text-lg font-semibold tracking-wider text-gray-100">
            Advertise on whoScore?
          </h3>
          <p className="text-xl">Join the waitlist</p>
        </div>

        <div className="relative px-3">
          <form
            className=""
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <input
              id="myText"
              type="text"
              placeholder="Full name"
              className="w-full mb-2 bg-neutral-800 outline-none text-sm text-neutral-200 p-2  rounded-sm"
              required
            />

            <input
              id="myText"
              type="email"
              placeholder="Email address"
              className="w-full mb-2 bg-neutral-800 outline-none text-sm text-neutral-200 p-3 rounded-sm"
              required
            />
            <input
              id="myText"
              type="text"
              placeholder="Phone number"
              className="w-full mb-2 bg-neutral-800 outline-none text-sm text-neutral-200 p-3 rounded-sm"
              required
            />
            <button className="bg-gray-500 rounded-sm px-3 py-2 text-sm transform transition hover:-translate-x-1 tracking-wider">
              Notify Me
            </button>
          </form>

          <span className="block mt-4 text-neutral-500 text-sm">
            -_Notify me when Feature is Launched -_
          </span>
        </div>

        <div>
          {/* <Link to="/home">
            <button className="w-16 h-16 mx-auto animate-bounce mt-20 rounded-full  shadow-3xl border border-gray-400 flex items-center justify-center text-gray-300 text-2xl ">
              <BiArrowBack />
            </button>
          </Link> */}
        </div>
      </div>
    </div>
  );
}
