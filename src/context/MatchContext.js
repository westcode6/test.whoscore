import { useState, useEffect, createContext } from "react";
import axios from "axios";

export const MatchContext = createContext(null);

export const MatchContextProvider = ({ children }) => (
  <MatchContext.Provider value={useMatchContext()}>
    {children}
  </MatchContext.Provider>
);

const useMatchContext = () => {
  // Accepts the array and key to group an array
  const groupBy = (array, key) => {
    return array?.reduce((result, currentValue) => {
      // If an array already present for key, push it to the array. Else create an array and push the object
      (result[currentValue[key]] = result[currentValue[key]] || []).push(
        currentValue
      );

      return result;
    }, {}); // empty object is the initial value for result object
  };

  // get details from sessionStorage
  const getDetailFromSS = () => {
    const savedDetails = sessionStorage.getItem("matchDetail");
    return savedDetails ? JSON.parse(savedDetails) : {};
  };

  const [searchText, setSearchText] = useState("");
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [gameDetails, setGameDetails] = useState(getDetailFromSS());

  // Save match detail to Session Storage
  useEffect(
    () => sessionStorage.setItem("matchDetail", JSON.stringify(gameDetails)),
    [gameDetails]
  );

  const sort = (array) => {
    //This is to sort leagues so as to render the major ones first
    const mostImportantLeague = (a) => {
      switch (a.competition) {
        case "fifa":
          return 10;
        case "champions-league":
          return 9;
        case "premier-league":
          return 8;
        case "la-liga":
          return 7;
        case "bundesliga":
          return 6;
        case "serie-a":
          return 5;
        case "major-league-soccer":
          return 4;
        default:
          return 0;
      }
    };

    return array?.sort((a, b) => {
      const mostImportant = mostImportantLeague(a);
      const leastImportant = mostImportantLeague(b);

      return leastImportant - mostImportant;
    });
  };

  // Filter matches based on team name or league title
  const handlleSearchResult = async (e, text) => {
    if (searchText !== "") {
      try {
        if (e.key === "Enter") {
          const { data } = await axios.get(
            "https://whoscore-backend.onrender.com/livescores"
          );
          const searchResult = data.filter(
            (item) =>
              item.awayTeam.toLowerCase().includes(text.toLowerCase()) ||
              item.homeTeam.toLowerCase().includes(text.toLowerCase()) ||
              item.competition.split("-").join(" ").includes(text)
          );

          const sorted = sort(searchResult);
          const grouped = groupBy(sorted, "competition"); // Group by competition as key to the person array
          const filteredMatch = Object.entries(grouped);
          if (filteredMatch.length !== 0) {
            setMatches(filteredMatch);
          } else {
            setMessage("No match/competition found!");
            setTimeout(() => setMessage(""), 3000);
            return;
          }
          setLoading(false);
        }
      } catch (err) {
        if (err) {
          setMessage("Ooops!, could not get matches. Reload page");
        }
      }
    } else {
      return;
    }
  };

  // Fetch matches based on chosen date
  const handleFetchMatches = async (date) => {
    try {
      const { data } = await axios.get(
        `https://whoscore-backend.onrender.com/soccer/livescores/${date}`
      );

      if (data !== "No livesores") {
        const todayMatches = data.filter(({ matchDate }) => matchDate === date);

        const sortedMatches = sort(todayMatches);
        const grouped = groupBy(sortedMatches, "competition"); // Group by competition as key to the person array
        const fetchedMatches = Object.entries(grouped);
        setMatches(fetchedMatches); // to turn the result to an array with [key,value] pairs
      } else {
        setMessage("No matches available!");
        setTimeout(() => setMessage(""), 10000);
      }
      setLoading(false);
    } catch (err) {
      if (err) {
        setMessage("Ooops!, could not get matches. Reload page");
      }
    }
  };

  // Fetch live matches only
  const handleLiveMatches = async () => {
    try {
      const { data } = await axios.get(
        "https://whoscore-backend.onrender.com/livescores"
      );

      const todayMatches = data?.filter(
        ({ currentMatchTime }) =>
          currentMatchTime !== "FT" && currentMatchTime.length < 4
      );
      const sortTedMatches = sort(todayMatches);
      const grouped = groupBy(sortTedMatches, "competition"); // Group by competition as key to the person array
      const fetchedMatches = Object.entries(grouped); // to turn the result to an array with [key,value] pairs

      if (fetchedMatches.length !== 0) {
        setMatches(fetchedMatches);
      } else {
        setMessage("No matches ddd!");
      }
      setLoading(false);
    } catch (err) {
      if (err) {
        setTimeout(
          () => setMessage("Ooops!, could not get matches. Reload page"),
          7000
        );
      }
    }
  };

  // update API call every 60secs
  useEffect(() => {
    handleLiveMatches();
    setInterval(() => {
      handleLiveMatches();
    }, 60000);
    // eslint-disable-next-line
  }, []);

  // this is to set a match detail to the state so it can be used on the game details page
  const handleGameDetails = (details) => {
    setGameDetails(details);
    console.log(gameDetails);
  };

  // eslint-disable-next-line
  useEffect(() => handleGameDetails(gameDetails), [gameDetails]);

  return {
    handleFetchMatches,
    handleLiveMatches,
    handlleSearchResult,
    groupBy,
    matches,
    setMatches,
    searchText,
    setSearchText,
    loading,
    setLoading,
    message,
    setMessage,
    gameDetails,
    handleGameDetails,
  };
};
