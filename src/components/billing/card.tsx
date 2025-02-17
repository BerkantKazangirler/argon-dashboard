import { useEffect, useState } from "react";
import { paymentInfoProps } from "../type";
import SvgWallet from "../icons/wallet";
import SvgPaypal from "../icons/paypal";
import { request } from "../../utils/fetchdata";

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
          <div className="bg-infoBg dark:bg-darkDetail rounded-2.5xl w-60 drop-shadow-[0_2px_14px_rgba(0,0,0,0.5)] flex flex-col">
            <div className="my-auto flex flex-col items-center gap-5">
              <div className="bg-detailBg flex items-center p-2 rounded-lg w-16 h-16">
                <SvgWallet className="mx-auto fill-white" />
              </div>
              <div className="flex flex-col mx-auto">
                <span className="font-bold text-lg text-black dark:text-white text-center">
                  Salary
                </span>
                <span className="font-bold text-xs text-placeholderColor">
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
              <span className="font-bold text-detailColor dark:text-white text-lg">
                +${cardData[0].data}
              </span>
            </div>
          </div>
          <div className="bg-infoBg dark:bg-darkDetail rounded-2.5xl w-60 drop-shadow-[0_2px_14px_rgba(0,0,0,0.5)] flex flex-col">
            <div className="my-auto flex flex-col items-center gap-5">
              <div className="bg-detailBg p-2 flex items-center rounded-lg w-16 h-16">
                <SvgPaypal className="mx-auto fill-white" />
              </div>
              <div className="flex flex-col mx-auto">
                <span className="font-bold text-lg text-black dark:text-white text-center">
                  Paypal
                </span>
                <span className="font-bold text-xs text-placeholderColor">
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
              <span className="font-bold text-detailColor text-lg dark:text-white">
                +${cardData[1].data}
              </span>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="bg-gray-200 animate-pulse dark:bg-darkDetail dark:bg-opacity-40 rounded-2.5xl w-60 drop-shadow-[0_2px_14px_rgba(0,0,0,0.5)] flex flex-col">
            <div className="my-auto flex flex-col items-center gap-5">
              <div className="bg-gray-400 p-2 flex items-center rounded-lg w-16 h-16"></div>
              <div className="flex flex-col mx-auto">
                <span className="font-bold opacity-0 text-lg text-black dark:text-white text-center">
                  Paypal
                </span>
                <span className="font-bold opacity-0 text-xs text-placeholderColor">
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
              <span className="font-bold opacity-0 text-detailColor text-lg dark:text-white">
                123{" "}
              </span>
            </div>
          </div>
          <div className="bg-gray-200 animate-pulse dark:bg-darkDetail dark:bg-opacity-40 rounded-2.5xl w-60 drop-shadow-[0_2px_14px_rgba(0,0,0,0.5)] flex flex-col">
            <div className="my-auto flex flex-col items-center gap-5">
              <div className="bg-gray-400 p-2 flex items-center rounded-lg w-16 h-16"></div>
              <div className="flex flex-col mx-auto">
                <span className="font-bold opacity-0 text-lg text-black dark:text-white text-center">
                  Paypal
                </span>
                <span className="font-bold opacity-0 text-xs text-placeholderColor">
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
              <span className="font-bold opacity-0 text-detailColor text-lg dark:text-white">
                123{" "}
              </span>
            </div>
          </div>
        </>
      )}
    </>
  );
};
