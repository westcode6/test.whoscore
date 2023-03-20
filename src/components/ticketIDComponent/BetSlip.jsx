export default function BetSlip({
  betSlipCompany,
  betSlipCompanyColor,
  betSlipID,
  numberOfGames,
  betSlipOdd,
  betSlipStake,
  betSlipDate,
  betSlipStatus,
  betSlipStatusColorCode,
}) {
  return (
    <section>
      <div className="text-[#4F4F4F] border-2 border-gray-700 rounded-xl px-4 py-4 relative shadow hover:shadow-2xl transform transition hover:-translate-y-2 mt-12">
        <div className="flex items-start gap-2 justify-between mb-10">
          <div className="font-bold">
            <span>{betSlipID}</span>
            <span className="block my-1 text-xs">Total {betSlipStake}</span>
            <span className="mt-4 inline-block text-white text-xs sm:text-base tracking-wide bg-black px-4 py-2 rounded-full">
              <em className={`pr-3 ${betSlipCompanyColor}`}>
                <strong>{betSlipCompany}</strong>
              </em>
            </span>
          </div>

          <div className="border-2 border-neutral-400 p-2 rounded-xl flex items-center justify-between">
            <em>
              <div className="border-r-2 border-black pr-3 text-sm text-center">
                <h4 className="font-semibold">{numberOfGames}</h4>
                <span className="font-medium">Games</span>
              </div>
            </em>

            <em>
              <div className="pl-3 text-sm text-center">
                <h4 className="font-semibold">{betSlipOdd}</h4>
                <span>Odds</span>
              </div>
            </em>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between text-sm font-semibold">
            <h2 className="uppercase">{betSlipDate}</h2>

            <div className="flex items-center gap-2">
              <span className="">{betSlipStatus}</span>
              <span
                className={`w-5 h-5 rounded-full ${betSlipStatusColorCode} block`}
              ></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
