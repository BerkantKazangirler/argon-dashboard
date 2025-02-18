import { CalendarSvg, LowerSvg, UpperSvg, PendingSvg } from "@/components";

export const Transactions = () => {
  return (
    <div className="flex flex-col w-full -mx-2 xl:mx-0 p-6 bg-white dark:bg-darkDetail drop-shadow-xl rounded-2.5xl">
      <div className="flex flex-row justify-between">
        <span className="text-detailColor dark:text-white text-lg font-bold">
          Your Transactions
        </span>
        <div className="flex flex-row gap-1">
          <CalendarSvg className="fill-detailColor size-4 my-auto" />
          <span className="text-placeholderColor leading-none my-auto font-bold text-sm">
            23 - 30 March 2020
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <span className="text-placeholderColor text-2xs font-bold">NEWEST</span>
        <div className="flex flex-col gap-5">
          <div className="flex flex-row gap-2 justify-between">
            <div className="flex flex-row gap-3">
              <LowerSvg className="size-9 stroke-detailRed fill-transparent" />

              <div className="flex flex-col">
                <span className="text-detailColor dark:text-white font-bold text-sm">
                  Netflix
                </span>
                <span className="text-placeholderColor text-xs font-bold">
                  27 March 2020, at 12:30 PM
                </span>
              </div>
            </div>
            <span className="text-detailRed font-bold text-sm">-$2500</span>
          </div>
          <div className="flex flex-row gap-2 justify-between">
            <div className="flex flex-row gap-3">
              <UpperSvg className="size-9 stroke-detailGreen fill-transparent" />

              <div className="flex flex-col">
                <span className="text-detailColor dark:text-white font-bold text-sm">
                  Apple
                </span>
                <span className="text-placeholderColor text-xs font-bold">
                  27 March 2020, at 12:30 PM
                </span>
              </div>
            </div>
            <span className="text-detailGreen font-bold text-sm">+$2500</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <span className="text-placeholderColor text-2xs font-bold mt-3">
          YESTERDAY
        </span>
        <div className="flex flex-col gap-5">
          <div className="flex flex-row gap-2 justify-between">
            <div className="flex flex-row gap-3">
              <UpperSvg className="size-9 stroke-detailGreen fill-transparent" />

              <div className="flex flex-col">
                <span className="text-detailColor dark:text-white font-bold text-sm">
                  Stripe
                </span>
                <span className="text-placeholderColor text-xs font-bold">
                  26 March 2020, at 12:30 PM
                </span>
              </div>
            </div>
            <span className="text-detailGreen font-bold text-sm">+$800</span>
          </div>
          <div className="flex flex-row gap-2 justify-between">
            <div className="flex flex-row gap-3">
              <UpperSvg className="size-9 stroke-detailGreen fill-transparent" />

              <div className="flex flex-col">
                <span className="text-detailColor dark:text-white font-bold text-sm">
                  HubSpot
                </span>
                <span className="text-placeholderColor text-xs font-bold">
                  26 March 2020, at 12:30 PM
                </span>
              </div>
            </div>
            <span className="text-detailGreen font-bold text-sm">+$1700</span>
          </div>
          <div className="flex flex-row gap-2 justify-between">
            <div className="flex flex-row gap-3">
              <PendingSvg />

              <div className="flex flex-col">
                <span className="text-detailColor dark:text-white font-bold text-sm">
                  Webflow
                </span>
                <span className="text-placeholderColor text-xs font-bold">
                  26 March 2020, at 12:30 PM
                </span>
              </div>
            </div>
            <span className="text-detailColor dark:text-white font-bold text-sm">
              Pending
            </span>
          </div>
          <div className="flex flex-row gap-2 justify-between">
            <div className="flex flex-row gap-3">
              <LowerSvg className="size-9 stroke-detailRed fill-transparent" />

              <div className="flex flex-col">
                <span className="text-detailColor dark:text-white font-bold text-sm">
                  Microsoft
                </span>
                <span className="text-placeholderColor text-xs font-bold">
                  26 March 2020, at 12:30 PM
                </span>
              </div>
            </div>
            <span className="text-detailRed font-bold text-sm">-$987</span>
          </div>
        </div>
      </div>
    </div>
  );
};
