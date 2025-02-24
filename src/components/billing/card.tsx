import { useEffect, useState } from "react";
import { SvgWallet, SvgPaypal } from "@/components";

import { paymentInfoProps } from "@/components/type";
import { request } from "@/utils/fetch-data";

export const BillingCard = () => {
  const [cardData, setCardData] = useState<Array<paymentInfoProps>>([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    request<Array<paymentInfoProps>>("/payment-info-cards", "GET")
      .then((data) => {
        setCardData(data);
      })
      .finally(() => setLoad(true));
  }, []);
  return (
    <>
      {load ? (
        <>
          <div className="flex w-full flex-col rounded-2.5xl bg-infoBg py-[22px] drop-shadow-[0_2px_14px_rgba(0,0,0,0.5)] dark:bg-darkDetail">
            <div className="my-auto flex flex-col items-center gap-5">
              <div className="flex h-16 w-16 items-center rounded-lg bg-detailBg p-2">
                <SvgWallet className="mx-auto fill-white" />
              </div>
              <div className="mx-auto flex flex-col">
                <span className="text-center text-lg font-bold text-black dark:text-white">
                  Salary
                </span>
                <span className="text-xs font-bold text-placeholderColor">
                  Belong Interactive
                </span>
              </div>
              <svg
                width="234"
                height="1"
                viewBox="0 0 234 1"
                fill="none"
                className="px-7"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.5 0.5H233.75"
                  stroke="url(#paint0_linear_2614_7733)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_2614_7733"
                    x1="0.5"
                    y1="0.5"
                    x2="231.5"
                    y2="0.5"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#E0E1E2" stop-opacity="0" />
                    <stop offset="0.5" stop-color="#E0E1E2" />
                    <stop
                      offset="1"
                      stop-color="#E0E1E2"
                      stop-opacity="0.15625"
                    />
                  </linearGradient>
                </defs>
              </svg>
              {/* <span className="w-44 bg-gradient-to-r to-[rgba(224,225,226,5)] via-[#E0E1E2] from-[rgba(224,225,226,16)] border-t h-[2px]"></span> */}
              <span className="text-lg font-bold text-detailColor dark:text-white">
                +${cardData[0].data}
              </span>
            </div>
          </div>
          <div className="flex w-full flex-col rounded-2.5xl bg-infoBg py-[22px] drop-shadow-[0_2px_14px_rgba(0,0,0,0.5)] dark:bg-darkDetail">
            <div className="my-auto flex flex-col items-center gap-5">
              <div className="flex h-16 w-16 items-center rounded-lg bg-detailBg p-2">
                <SvgPaypal className="mx-auto fill-white" />
              </div>
              <div className="mx-auto flex flex-col">
                <span className="text-center text-lg font-bold text-black dark:text-white">
                  Paypal
                </span>
                <span className="text-xs font-bold text-placeholderColor">
                  Freelance Payment
                </span>
              </div>
              <svg
                width="234"
                height="1"
                viewBox="0 0 234 1"
                fill="none"
                className="px-7"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.5 0.5H233.75"
                  stroke="url(#paint0_linear_2614_7733)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_2614_7733"
                    x1="0.5"
                    y1="0.5"
                    x2="231.5"
                    y2="0.5"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#E0E1E2" stop-opacity="0" />
                    <stop offset="0.5" stop-color="#E0E1E2" />
                    <stop
                      offset="1"
                      stop-color="#E0E1E2"
                      stop-opacity="0.15625"
                    />
                  </linearGradient>
                </defs>
              </svg>
              <span className="text-lg font-bold text-detailColor dark:text-white">
                +${cardData[1].data}
              </span>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="flex animate-pulse flex-col rounded-2.5xl bg-gray-200 drop-shadow-[0_2px_14px_rgba(0,0,0,0.5)] dark:bg-darkDetail dark:bg-opacity-40">
            <div className="my-auto flex flex-col items-center gap-5">
              <div className="flex h-16 w-16 items-center rounded-lg bg-gray-400 p-2"></div>
              <div className="mx-auto flex flex-col">
                <span className="text-center text-lg font-bold text-black opacity-0 dark:text-white">
                  Paypal
                </span>
                <span className="text-xs font-bold text-placeholderColor opacity-0">
                  Freelance Payment
                </span>
              </div>
              <svg
                width="234"
                height="1"
                viewBox="0 0 234 1"
                fill="none"
                className="px-7"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.5 0.5H233.75"
                  stroke="url(#paint0_linear_2614_7733)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_2614_7733"
                    x1="0.5"
                    y1="0.5"
                    x2="231.5"
                    y2="0.5"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#E0E1E2" stop-opacity="0" />
                    <stop offset="0.5" stop-color="#E0E1E2" />
                    <stop
                      offset="1"
                      stop-color="#E0E1E2"
                      stop-opacity="0.15625"
                    />
                  </linearGradient>
                </defs>
              </svg>
              <span className="text-lg font-bold text-detailColor opacity-0 dark:text-white">
                123{" "}
              </span>
            </div>
          </div>
          <div className="flex animate-pulse flex-col rounded-2.5xl bg-gray-200 drop-shadow-[0_2px_14px_rgba(0,0,0,0.5)] dark:bg-darkDetail dark:bg-opacity-40">
            <div className="my-auto flex flex-col items-center gap-5">
              <div className="flex h-16 w-16 items-center rounded-lg bg-gray-400 p-2"></div>
              <div className="mx-auto flex flex-col">
                <span className="text-center text-lg font-bold text-black opacity-0 dark:text-white">
                  Paypal
                </span>
                <span className="text-xs font-bold text-placeholderColor opacity-0">
                  Freelance Payment
                </span>
              </div>
              <svg
                width="234"
                height="1"
                viewBox="0 0 234 1"
                fill="none"
                className="px-7"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.5 0.5H233.75"
                  stroke="url(#paint0_linear_2614_7733)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_2614_7733"
                    x1="0.5"
                    y1="0.5"
                    x2="231.5"
                    y2="0.5"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#E0E1E2" stop-opacity="0" />
                    <stop offset="0.5" stop-color="#E0E1E2" />
                    <stop
                      offset="1"
                      stop-color="#E0E1E2"
                      stop-opacity="0.15625"
                    />
                  </linearGradient>
                </defs>
              </svg>
              <span className="text-lg font-bold text-detailColor opacity-0 dark:text-white">
                123{" "}
              </span>
            </div>
          </div>
        </>
      )}
    </>
  );
};
