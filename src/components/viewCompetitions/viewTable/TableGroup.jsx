export default function TableGroup({Group}) {
  const table = [
    {
      id: 1,
      Team: "Dortmund",
      TeamLogo: "./assets/ClubBanners/dortmund.svg",
      P: 3,
      W: 5,
      D: 7,
      L: 2,
      GF: 38,
      GA: 10,
    },

    {
        id: 2,
        Team: "Man United",
        TeamLogo: "./assets/ClubBanners/manU.png",
        P: 2,
        W: 6,
        D: 3,
        L: 12,
        GF: 18,
        GA: 15,
      },


      {
        id: 3,
        Team: "Liverpool",
        TeamLogo: "./assets/ClubBanners/liverpool.png",
        P: 6,
        W: 4,
        D: 0,
        L: 2,
        GF: 18,
        GA: 10,
      },


  ];
  return (
    <>
      <div className="flex flex-col">
        <div className="">
          <div className="py-2 px-2">
            <div className="overflow-scroll mt-6">

                <table className="min-w-full text-center">
                  <thead className="border-b">
                    <tr>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 py-4"
                      >
                        #
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 py-4 pr-10"
                      >
                    {Group}
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 py-4"
                      >
                        P
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 py-4"
                      >
                        W
                      </th>

                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-2 py-4"
                      >
                        D
                      </th>

                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-2 py-4"
                      >
                        L
                      </th>

                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-2 py-4"
                      >
                        GF
                      </th>

                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-2 py-4"
                      >
                        GA
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                  {table.map((eachTable) => (
                    <tr key={eachTable.id} className="border-b shadow-md hover:shadow-xl">
                      <td className="text-sm text-gray-900 font-medium py-4 whitespace-nowrap">
                        {eachTable.id}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-4 py-4 whitespace-nowrap">
                        <div className="flex items-center justify-start">
                          <img
                            src={eachTable.TeamLogo}
                            className="w-6 h-6 object-cover object-center"
                            alt={eachTable.Team}
                          />
                          <h5 className="text-neutral-800 text-xs pl-2 pr-14">
                            {eachTable.Team}
                          </h5>
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-light  py-4 px-4 whitespace-nowrap">
                        {eachTable.P}
                      </td>

                      <td className="text-sm text-gray-900 font-light  px-4 py-4 whitespace-nowrap">
                        {eachTable.W}
                      </td>

                      <td className="text-sm text-gray-900 font-light px-4 py-4 whitespace-nowrap">
                        {eachTable.D}
                      </td>

                      <td className="text-sm text-gray-900 font-light px-4 py-4 whitespace-nowrap">
                        {eachTable.L}
                      </td>

                      <td className="text-sm text-gray-900 font-light px-4 py-4 whitespace-nowrap">
                        {eachTable.GF}
                      </td>

                      <td className="text-sm text-gray-900 font-light px-4 py-4 whitespace-nowrap">
                        {eachTable.GA}
                      </td>
                    </tr>
              ))}

                  </tbody>
                </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
