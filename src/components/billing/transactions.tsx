import { CalendarSvg, LowerSvg, UpperSvg, PendingSvg } from "@/components";

export const Transactions = () => {
  return (
    <div className="-mx-2 flex w-full flex-col rounded-2.5xl bg-white p-6 drop-shadow-xl xl:mx-0 dark:bg-darkDetail">
      <div className="flex flex-row justify-between">
        <span className="text-lg font-bold text-detailColor dark:text-white">
          Your Transactions
        </span>
        <div className="flex flex-row gap-1">
          <CalendarSvg className="my-auto size-4 fill-detailColor" />
          <span className="my-auto text-sm font-bold leading-none text-placeholderColor">
            23 - 30 March 2020
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <span className="text-2xs font-bold text-placeholderColor">NEWEST</span>
        <div className="flex flex-col gap-5">
          <div className="flex flex-row justify-between gap-2">
            <div className="flex flex-row gap-3">
              <LowerSvg className="size-9 fill-transparent stroke-detailRed" />

              <div className="flex flex-col">
                <span className="text-sm font-bold text-detailColor dark:text-white">
                  Netflix
                </span>
                <span className="text-xs font-bold text-placeholderColor">
                  27 March 2020, at 12:30 PM
                </span>
              </div>
            </div>
            <span className="text-sm font-bold text-detailRed">-$2500</span>
          </div>
          <div className="flex flex-row justify-between gap-2">
            <div className="flex flex-row gap-3">
              <UpperSvg className="size-9 fill-transparent stroke-detailGreen" />

              <div className="flex flex-col">
                <span className="text-sm font-bold text-detailColor dark:text-white">
                  Apple
                </span>
                <span className="text-xs font-bold text-placeholderColor">
                  27 March 2020, at 12:30 PM
                </span>
              </div>
            </div>
            <span className="text-sm font-bold text-detailGreen">+$2500</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <span className="mt-3 text-2xs font-bold text-placeholderColor">
          YESTERDAY
        </span>
        <div className="flex flex-col gap-5">
          <div className="flex flex-row justify-between gap-2">
            <div className="flex flex-row gap-3">
              <UpperSvg className="size-9 fill-transparent stroke-detailGreen" />

              <div className="flex flex-col">
                <span className="text-sm font-bold text-detailColor dark:text-white">
                  Stripe
                </span>
                <span className="text-xs font-bold text-placeholderColor">
                  26 March 2020, at 12:30 PM
                </span>
              </div>
            </div>
            <span className="text-sm font-bold text-detailGreen">+$800</span>
          </div>
          <div className="flex flex-row justify-between gap-2">
            <div className="flex flex-row gap-3">
              <UpperSvg className="size-9 fill-transparent stroke-detailGreen" />

              <div className="flex flex-col">
                <span className="text-sm font-bold text-detailColor dark:text-white">
                  HubSpot
                </span>
                <span className="text-xs font-bold text-placeholderColor">
                  26 March 2020, at 12:30 PM
                </span>
              </div>
            </div>
            <span className="text-sm font-bold text-detailGreen">+$1700</span>
          </div>
          <div className="flex flex-row justify-between gap-2">
            <div className="flex flex-row gap-3">
              <PendingSvg />

              <div className="flex flex-col">
                <span className="text-sm font-bold text-detailColor dark:text-white">
                  Webflow
                </span>
                <span className="text-xs font-bold text-placeholderColor">
                  26 March 2020, at 12:30 PM
                </span>
              </div>
            </div>
            <span className="text-sm font-bold text-detailColor dark:text-white">
              Pending
            </span>
          </div>
          <div className="flex flex-row justify-between gap-2">
            <div className="flex flex-row gap-3">
              <LowerSvg className="size-9 fill-transparent stroke-detailRed" />

              <div className="flex flex-col">
                <span className="text-sm font-bold text-detailColor dark:text-white">
                  Microsoft
                </span>
                <span className="text-xs font-bold text-placeholderColor">
                  26 March 2020, at 12:30 PM
                </span>
              </div>
            </div>
            <span className="text-sm font-bold text-detailRed">-$987</span>
          </div>
        </div>
      </div>
    </div>
  );
};
