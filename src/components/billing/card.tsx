import { useEffect, useState } from "react";

export const BillingCard = () => {
  const [cardData, setCardData] = useState<Array<any>>([]);
  const [load, setLoad] = useState(false);
  useEffect(() => {
    fetch("http://localhost:3000/payment-info-cards")
      .then((res) => res.json())
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
                <svg
                  width="27"
                  height="26"
                  viewBox="0 0 27 26"
                  fill="none"
                  className="mx-auto"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.34948 5.27879H21.5995C21.7893 5.2787 21.9789 5.29075 22.1672 5.31485C22.1034 4.86684 21.9495 4.4364 21.7148 4.04948C21.4802 3.66255 21.1695 3.32716 20.8018 3.06351C20.434 2.79987 20.0166 2.61344 19.5748 2.51547C19.133 2.41749 18.6759 2.41 18.2312 2.49344L4.86705 4.77504H4.85182C4.01295 4.93546 3.26697 5.41008 2.76624 6.10196C3.52064 5.56536 4.4237 5.2776 5.34948 5.27879V5.27879Z"
                    fill="white"
                  />
                  <path
                    d="M21.5996 6.49982H5.34961C4.48794 6.50076 3.66184 6.84347 3.05255 7.45276C2.44326 8.06205 2.10055 8.88815 2.09961 9.74982V19.4998C2.10055 20.3615 2.44326 21.1876 3.05255 21.7969C3.66184 22.4062 4.48794 22.7489 5.34961 22.7498H21.5996C22.4613 22.7489 23.2874 22.4062 23.8967 21.7969C24.5059 21.1876 24.8487 20.3615 24.8496 19.4998V9.74982C24.8487 8.88815 24.5059 8.06205 23.8967 7.45276C23.2874 6.84347 22.4613 6.50076 21.5996 6.49982V6.49982ZM19.1875 16.2498C18.8661 16.2498 18.5519 16.1545 18.2847 15.976C18.0175 15.7974 17.8092 15.5436 17.6862 15.2467C17.5632 14.9497 17.531 14.623 17.5937 14.3078C17.6564 13.9926 17.8112 13.703 18.0384 13.4758C18.2657 13.2485 18.5553 13.0937 18.8705 13.031C19.1857 12.9683 19.5124 13.0005 19.8094 13.1235C20.1063 13.2465 20.3601 13.4548 20.5386 13.722C20.7172 13.9892 20.8125 14.3034 20.8125 14.6248C20.8125 15.0558 20.6413 15.4691 20.3365 15.7739C20.0318 16.0786 19.6185 16.2498 19.1875 16.2498Z"
                    fill="white"
                  />
                  <path
                    d="M2.125 13.1749V8.12219C2.125 7.02176 2.73437 5.17688 4.84941 4.77723C6.64453 4.44055 8.42187 4.44055 8.42187 4.44055C8.42187 4.44055 9.58984 5.25305 8.625 5.25305C7.66015 5.25305 7.68555 6.49719 8.625 6.49719C9.56445 6.49719 8.625 7.69055 8.625 7.69055L4.8418 11.9816L2.125 13.1749Z"
                    fill="white"
                  />
                </svg>
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
                <svg
                  width="19"
                  height="24"
                  viewBox="0 0 19 24"
                  fill="none"
                  className="mx-auto"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.179 2.53224C15.1418 1.35738 13.2648 0.854065 10.8636 0.854065H3.89505C3.40425 0.854065 2.98714 1.20861 2.90928 1.68829L0.00761646 19.9453C-0.0493888 20.3054 0.231466 20.6307 0.598525 20.6307H4.90033L5.98065 13.8318L5.94728 14.0459C6.02375 13.5662 6.43948 13.2117 6.93028 13.2117H8.97412C12.9909 13.2117 16.1345 11.5933 17.0536 6.91191C17.0814 6.77288 17.1245 6.50592 17.1245 6.50592C17.3858 4.77352 17.123 3.59866 16.179 2.53224Z"
                    fill="white"
                  />
                  <path
                    d="M18.2133 7.39301C17.215 12.0021 14.0297 14.4408 8.97432 14.4408H7.14181L5.77368 23.1H8.7463C9.17592 23.1 9.54159 22.79 9.60833 22.3687L9.64309 22.1852L10.3271 17.8875L10.3716 17.6512C10.4384 17.2299 10.804 16.9198 11.2323 16.9198H11.7759C15.2894 16.9198 18.0395 15.5044 18.8432 11.4098C19.1657 9.76637 19.01 8.38851 18.2133 7.39301Z"
                    fill="white"
                  />
                </svg>
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
              <div className="bg-gray-400 p-2 flex items-center rounded-lg w-16 h-16">
                <svg
                  width="19"
                  height="24"
                  viewBox="0 0 19 24"
                  fill="none"
                  className="mx-auto opacity-5"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.179 2.53224C15.1418 1.35738 13.2648 0.854065 10.8636 0.854065H3.89505C3.40425 0.854065 2.98714 1.20861 2.90928 1.68829L0.00761646 19.9453C-0.0493888 20.3054 0.231466 20.6307 0.598525 20.6307H4.90033L5.98065 13.8318L5.94728 14.0459C6.02375 13.5662 6.43948 13.2117 6.93028 13.2117H8.97412C12.9909 13.2117 16.1345 11.5933 17.0536 6.91191C17.0814 6.77288 17.1245 6.50592 17.1245 6.50592C17.3858 4.77352 17.123 3.59866 16.179 2.53224Z"
                    fill="white"
                  />
                  <path
                    d="M18.2133 7.39301C17.215 12.0021 14.0297 14.4408 8.97432 14.4408H7.14181L5.77368 23.1H8.7463C9.17592 23.1 9.54159 22.79 9.60833 22.3687L9.64309 22.1852L10.3271 17.8875L10.3716 17.6512C10.4384 17.2299 10.804 16.9198 11.2323 16.9198H11.7759C15.2894 16.9198 18.0395 15.5044 18.8432 11.4098C19.1657 9.76637 19.01 8.38851 18.2133 7.39301Z"
                    fill="white"
                  />
                </svg>
              </div>
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
              <div className="bg-gray-400 p-2 flex items-center rounded-lg w-16 h-16">
                <svg
                  width="19"
                  height="24"
                  viewBox="0 0 19 24"
                  fill="none"
                  className="mx-auto opacity-5"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.179 2.53224C15.1418 1.35738 13.2648 0.854065 10.8636 0.854065H3.89505C3.40425 0.854065 2.98714 1.20861 2.90928 1.68829L0.00761646 19.9453C-0.0493888 20.3054 0.231466 20.6307 0.598525 20.6307H4.90033L5.98065 13.8318L5.94728 14.0459C6.02375 13.5662 6.43948 13.2117 6.93028 13.2117H8.97412C12.9909 13.2117 16.1345 11.5933 17.0536 6.91191C17.0814 6.77288 17.1245 6.50592 17.1245 6.50592C17.3858 4.77352 17.123 3.59866 16.179 2.53224Z"
                    fill="white"
                  />
                  <path
                    d="M18.2133 7.39301C17.215 12.0021 14.0297 14.4408 8.97432 14.4408H7.14181L5.77368 23.1H8.7463C9.17592 23.1 9.54159 22.79 9.60833 22.3687L9.64309 22.1852L10.3271 17.8875L10.3716 17.6512C10.4384 17.2299 10.804 16.9198 11.2323 16.9198H11.7759C15.2894 16.9198 18.0395 15.5044 18.8432 11.4098C19.1657 9.76637 19.01 8.38851 18.2133 7.39301Z"
                    fill="white"
                  />
                </svg>
              </div>
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
