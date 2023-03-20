import React from "react";

const LeagueTable = () => {
  const tableDetails = [
    {
      id: 1,
      Team: "Arsenal",
      TeamLogo: "./assets/ClubBanners/arsenal.webp",
      P: 3,
      w: 5,
      D: -7,
      A: 5,
      GD: 5,
      PTS: 2,
    },

    {
      id: 2,
      Team: "Real Madrid",
      TeamLogo: "./assets/ClubBanners/realMadrid.png",
      P: 3,
      w: 5,
      D: -7,
      A: 5,
      GD: 5,
      PTS: 12,
    },
    {
      id: 3,
      Team: "Real Madrid",
      TeamLogo: "./assets/ClubBanners/realMadrid.png",
      P: 3,
      w: 5,
      D: -7,
      A: 5,
      GD: 5,
      PTS: 12,
    },
    {
      id: 4,
      Team: "Real Madrid",
      TeamLogo: "./assets/ClubBanners/realMadrid.png",
      P: 3,
      w: 5,
      D: -7,
      A: 5,
      GD: 5,
      PTS: 12,
    },
    {
      id: 5,
      Team: "Real Madrid",
      TeamLogo: "./assets/ClubBanners/realMadrid.png",
      P: 3,
      w: 5,
      D: -7,
      A: 5,
      GD: 5,
      PTS: 12,
    },
  ];

  return (
    <div className="overflow-scroll hide-scroll-bar mt-11 pb-24">
      <h2 className="text-sm text-gray-500">Current Table Position</h2>

      <table className="min-w-full text-xs sm:text-sm text-center mt-4">
        <thead>
          <tr className="bg-gray-50 shadow">
            <th className="font-bold text-left pl-4 py-4"># Table</th>
            <th className="text-xs py-4">P</th>
            <th className="text-xs py-4">W</th>
            <th className="text-xs px-2 py-4">D</th>
            <th className="text-xs px-2 py-4">A</th>
            <th className="text-xs px-2 py-4">GD</th>
            <th className="text-xs px-2 py-4">PTS</th>
          </tr>
        </thead>
        <tbody>
          {tableDetails.map((eachTable) => (
            <tr key={eachTable.id} className="border-b border-black">
              <td className="px-4 py-2 whitespace-nowrap flex">
                <h2 className="font-semibold py-4 whitespace-nowrap">
                  {eachTable.id}
                </h2>
                <div className="flex items-center justify-start pl-4">
                  <img
                    src={eachTable.TeamLogo}
                    className="w-6 h-6 object-cover object-center"
                    alt={eachTable.Team}
                  />
                  <h5 className="text-neutral-800 pl-2">{eachTable.Team}</h5>
                </div>
              </td>

              <td className="px-6 py-2">{eachTable.P}</td>
              <td className="px-6 py-2">{eachTable.w}</td>

              <td className="px-6 py-2">{eachTable.D}</td>

              <td className="px-6 py-2">{eachTable.A}</td>

              <td className="px-6 py-2">{eachTable.GD}</td>

              <td className="px-6 py-2">{eachTable.PTS}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeagueTable;
