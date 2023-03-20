import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ComingSoon from "./pages/comingSoon";
import NewsPage from "./pages/newsPage";
import Redirect from "./pages/ticketIdPage";
import HomePage from "./components/HomeRevamping/HomePage";
// import HomePage from "./components/homePage/HomePage";
import WatchPageScreen from "./pages/watchPage";
import Profile from "./pages/profile";
import SearchPage from "./pages/searchPage";
import ViewCompetitions from "./pages/viewCompetitions";
import "animate.css";
import GameDetails from "./pages/gameDetails";
import KeepTrackNextScreen from "./components/landingPage/KeepTrackNextScreen";
import SplashScreen from "./components/landingPage/SplashScreen";
import Champions from "./pages/homeCL";
import { TicketContextProvider } from "./hooks/useFetchTicket";
import { MatchContextProvider } from "./context/MatchContext";
import Ads from "./components/Ads/Ads";
import Maintenace from "./pages/maintenance/Maintenace";
import Login from "./pages/sign-in/login";
import SignUp from "./pages/sign-up/signUp";
import ForgotPassword from "./pages/forgotPassword/forgotPassword";
import TicketStatusPage from "./pages/ticketStatus";
function App() {
  return (
    <Router>
      <TicketContextProvider>
        <MatchContextProvider>
          <div className="App">
            <div className="content">
              <Routes>
                <Route exact path="/" element={<SplashScreen />} />

                <Route exact path="/home" element={<HomePage />} />
                <Route exact path="/ticketIdPage" element={<Redirect />} />
                <Route
                  exact
                  path="/ticketStatus"
                  element={<TicketStatusPage />}
                />

                <Route
                  exact
                  path="/home/championsleague"
                  element={<Champions />}
                />
                <Route exact path="/comingSoon" element={<ComingSoon />} />
                <Route exact path="/watchPage" element={<WatchPageScreen />} />
                <Route exact path="/newsPage" element={<NewsPage />} />
                <Route exact path="/gameDetails" element={<GameDetails />} />
                <Route
                  exact
                  path="/keepTrackNextScreen"
                  element={<KeepTrackNextScreen />}
                />
                <Route exact path="/profile" element={<Profile />} />
                <Route exact path="/searchPage" element={<SearchPage />} />
                <Route
                  exact
                  path="/viewCompetitions"
                  element={<ViewCompetitions />}
                />
                <Route path="/ads" element={<Ads />} />
                <Route path="/maintenance" element={<Maintenace />} />
                <Route path="/login" element={<Login />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
              </Routes>
            </div>
          </div>
        </MatchContextProvider>
      </TicketContextProvider>
    </Router>
  );
}

export default App;
