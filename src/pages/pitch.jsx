import SplashScreen from "../components/SplashScreen";

export default function Pitch() {

    setInterval(showSplash, 40000)

    function showSplash() {
        const $ = (el) => document.getElementById(el)

        $("pitch").classList.add("hidden");
        $("SplashScreen").classList.remove("hidden");
    }

  return (
    <>
      <section id="pitch" className="bg-zinc-900 p-4 ">
        <header className="text-center">
          <h1 className="text-xl text-yellow-500 font-semibold">
            Viral Inc. Pitch Deck
          </h1>
          <h5 className="text-zinc-400">Executive Summary</h5>
        </header>

        <div
          className="py-10 text-zinc-300 overflow-y-scroll max-w-xl mx-auto"
          style={{
            height: "900px",
          }}
        >
          <h2 className="mt-4 leading-7 text-xl font-semibold">Viral Inc</h2>
          <p>Its time to Go Viral</p>

          <p className="mt-4 leading-7">
            Viral Inc is an Advertising technology startup focused on
            Programmatic Ad distribution, Audience Acquisition, and Targeting.
            We are dedicated to a lifelong mission of helping businesses better
            connect with their potential Audience/Users
          </p>

          <p className="mt-4 leading-7">
            Facebook, Google, and Amazon happen to be the 3 most extensive
            platform-based Advertising Exchange Networks in the world, with
            Tiktok quickly catching up, but, they all left one market untapped.
            The Sports market.
          </p>

          <p className="mt-4 leading-7">
            With a Fanbase of over 1 billion and a global market worth more than
            $614 billion, Sports is a well-established niche Market filled with
            so much passion, emotions, and Pure Love for the Games and We (Viral
            Inc) intend to acquire and distribute Ads to the majority of this
            Market.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">How? You would ask,</h3>

          <p>With WhoScore</p>

          <h4 className="mt-4 leading-7">
            Whoscore! is a Livescore and Streaming service with a Global
            Community of Sports Enthusiast
          </h4>
          <p className="mt-4 leading-7">
            We are sure eSport is an extension of WhoScore because our audiences
            are Sports enthusiasts and this would birth a twitch-like platform.
          </p>

          <h3 className="text-xl font-semibold mt-6">Our Business Model</h3>
          <p className="mt-2">How we intend to make money</p>

          <p className="mt-4 leading-7">
            We are building Africa’s Biggest Audience Network and Auction
            Center, allowing both small and large Businesses to Auction for Ad
            Spaces on various platforms.
          </p>

          <p className="mt-4 leading-7">
            We are building a Programmatic Backend Ads Distribution network
            called “Auction Center”, that allows for Display Ads Auctioning on
            the web and Mobile across WhoScore, Viral, and Third-party
            Platforms.
          </p>

          <p className="mt-4 leading-7">
            using “ Audience network”, to acquire access to third-party platform
            ads inventories.
          </p>

          <div className="mt-6">
            <h2 className="text-xl font-semibold">Our Financial Projections</h2>

            <p className="mt-2">How much and How Soon?</p>

            <div className="mt-4 leading-7 border-l-2 border-zinc-400 bg-zinc-800 px-4 py-4">
              <h2>It all begins with a Million Monthly Unique Traffic.</h2>

              <p className="mt-4 leading-7">
                In other to start earning revenue, we project that we first need
                to get to a Million Monthly Unique Traffic.
              </p>

              <h3>So What Happens At A Million Monthly Unique Traffic.</h3>

              <p className="mt-4 leading-7">
                calculating at a unit cost, a single user visits the website an
                average of 3 times a week, giving us a total monthly website
                visit of 12
              </p>

              <p className="mt-2">
                ( 3 weekly visits * the total amount of weeks in a month, 4 )
              </p>

              <p className="mt-4 leading-7">
                Ad impression at every visit is on an average of 10 at a 5min
                duration.
              </p>
            </div>

            <img
              src="./assets/images/pitch.png"
              className="mt-4 leading-7 object-cover"
              alt=""
            />

            <div className="border-l-2 border-zinc-400 px-4 py-2 bg-zinc-800 mt-6">
              <h3 className="text-xl font-semibold">
                Starting at a Cost Per Thousand Impressions of $5.
              </h3>

              <p className="mt-4 leading-7">
                Our monthly revenue should Look like this on an average
              </p>

              <p className="mt-4 leading-7">
                12 monthly Visits * 10 Ad impression=120 impressions
              </p>

              <p className="mt-4 leading-7">
                120 impressions * 1, 000,000 Unique Users=120,000,000
              </p>

              <p className="mt-4 leading-7">
                120,000,000 monthly impressions / 1000 ( standard CPM )
              </p>

              <p className="mt-4 leading-7">
                120,000 CPM* $5 (the cost per each CPM)=$600,000 Monthly Revenue
              </p>

              <h3 className="mt-4 leading-7 text-xl font-semibold">
                Average Revenue Per User/Unit = $600,000 / 1,000,000 = $0.6
                monthly.
              </h3>

              <p className="mt-4 leading-7">
                Costs an average of $150,000 to $300,000 For the First Three to
                Six months
              </p>
            </div>

            <h2 className="mt-4 leading-7 text-xl font-semibold">
              Accelerating Traction, No time to Waste Time
            </h2>

            <p className="mt-4 leading-7">
              We are currently offering an early-stage sign-up to Businesses and
              advertising partners, Giving out free $10,000 in Ad credit to
              Businesses and $1000 to individual Advertisers
            </p>

            <h3 className="mt-4 leading-7 text-xl font-semibold">Official Ad Partner.</h3>

            <p className="mt-4 leading-7 text-xl">Official Advertising</p>
            <p className="mt-4 leading-7">Notes</p>

            <p className="mt-4 leading-7">
              We strongly understand the value of data and targeting, for these
              reasons we have built our core products to collect as much data as
              it takes to facilitate conversions and better ROI for Businesses
              and Advertising partners on our platforms without breaking the
              trust and privacy of the users at large.
            </p>
          </div>
        </div>
      </section>


      <section id="SplashScreen" className="hidden">
        <SplashScreen />
      </section>
    </>
  );
}
