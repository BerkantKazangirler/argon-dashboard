import { useEffect, useState } from "react";

export const Transactions = () => {
  const [cardData, setCardData] = useState<Array<any>>([]);
  useEffect(() => {
    fetch("http://localhost:3000/payment-invoices")
      .then((res) => res.json())
      .then((data) => {
        setCardData(data);
      });
  }, []);

  return (
    <div className="flex flex-col w-full p-6 bg-white dark:bg-darkDetail drop-shadow-xl rounded-2.5xl">
      <div className="flex flex-row justify-between">
        <span className="text-detailColor dark:text-white text-lg font-bold">
          Your Transactions
        </span>
        <div className="flex flex-row gap-1">
          <svg
            width="16"
            height="15"
            viewBox="0 0 16 15"
            fill="none"
            className="my-auto"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.6875 2.34317H3.3125C2.53585 2.34317 1.90625 2.97277 1.90625 3.74942V12.1869C1.90625 12.9636 2.53585 13.5932 3.3125 13.5932H12.6875C13.4641 13.5932 14.0937 12.9636 14.0937 12.1869V3.74942C14.0937 2.97277 13.4641 2.34317 12.6875 2.34317Z"
              fill="white"
              stroke="#2D3748"
              stroke-width="0.75"
              stroke-linejoin="round"
            />
            <path
              d="M12.1549 2.34317H3.84512C2.77607 2.34317 1.90625 3.22647 1.90625 4.31192V6.09317H2.375C2.375 5.62442 2.84375 5.15567 3.3125 5.15567H12.6875C13.1562 5.15567 13.625 5.62442 13.625 6.09317H14.0937V4.31192C14.0937 3.22647 13.2239 2.34317 12.1549 2.34317Z"
              fill="#2D3748"
            />
            <path
              d="M9.17163 7.49939C9.55996 7.49939 9.87476 7.18459 9.87476 6.79626C9.87476 6.40794 9.55996 6.09314 9.17163 6.09314C8.78331 6.09314 8.46851 6.40794 8.46851 6.79626C8.46851 7.18459 8.78331 7.49939 9.17163 7.49939Z"
              fill="#2D3748"
            />
            <path
              d="M11.5156 7.49939C11.904 7.49939 12.2187 7.18459 12.2187 6.79626C12.2187 6.40794 11.904 6.09314 11.5156 6.09314C11.1273 6.09314 10.8125 6.40794 10.8125 6.79626C10.8125 7.18459 11.1273 7.49939 11.5156 7.49939Z"
              fill="#2D3748"
            />
            <path
              d="M9.17163 9.84271C9.55996 9.84271 9.87476 9.52791 9.87476 9.13959C9.87476 8.75126 9.55996 8.43646 9.17163 8.43646C8.78331 8.43646 8.46851 8.75126 8.46851 9.13959C8.46851 9.52791 8.78331 9.84271 9.17163 9.84271Z"
              fill="#2D3748"
            />
            <path
              d="M11.5156 9.84271C11.904 9.84271 12.2187 9.52791 12.2187 9.13959C12.2187 8.75126 11.904 8.43646 11.5156 8.43646C11.1273 8.43646 10.8125 8.75126 10.8125 9.13959C10.8125 9.52791 11.1273 9.84271 11.5156 9.84271Z"
              fill="#2D3748"
            />
            <path
              d="M4.48437 9.84271C4.8727 9.84271 5.1875 9.52791 5.1875 9.13959C5.1875 8.75126 4.8727 8.43646 4.48437 8.43646C4.09605 8.43646 3.78125 8.75126 3.78125 9.13959C3.78125 9.52791 4.09605 9.84271 4.48437 9.84271Z"
              fill="#2D3748"
            />
            <path
              d="M6.82812 9.84271C7.21645 9.84271 7.53125 9.52791 7.53125 9.13959C7.53125 8.75126 7.21645 8.43646 6.82812 8.43646C6.4398 8.43646 6.125 8.75126 6.125 9.13959C6.125 9.52791 6.4398 9.84271 6.82812 9.84271Z"
              fill="#2D3748"
            />
            <path
              d="M4.48437 12.1869C4.8727 12.1869 5.1875 11.8721 5.1875 11.4838C5.1875 11.0955 4.8727 10.7807 4.48437 10.7807C4.09605 10.7807 3.78125 11.0955 3.78125 11.4838C3.78125 11.8721 4.09605 12.1869 4.48437 12.1869Z"
              fill="#2D3748"
            />
            <path
              d="M6.82812 12.1869C7.21645 12.1869 7.53125 11.8721 7.53125 11.4838C7.53125 11.0955 7.21645 10.7807 6.82812 10.7807C6.4398 10.7807 6.125 11.0955 6.125 11.4838C6.125 11.8721 6.4398 12.1869 6.82812 12.1869Z"
              fill="#2D3748"
            />
            <path
              d="M9.17163 12.1869C9.55996 12.1869 9.87476 11.8721 9.87476 11.4838C9.87476 11.0955 9.55996 10.7807 9.17163 10.7807C8.78331 10.7807 8.46851 11.0955 8.46851 11.4838C8.46851 11.8721 8.78331 12.1869 9.17163 12.1869Z"
              fill="#2D3748"
            />
            <path
              d="M4.24976 1.40558V2.34308"
              stroke="#2D3748"
              stroke-width="0.75"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M11.75 1.40558V2.34308"
              stroke="#2D3748"
              stroke-width="0.75"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
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
              <svg
                width="35"
                height="36"
                viewBox="0 0 35 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="17.5" cy="18" r="17" stroke="#E53E3E" />
                <path
                  d="M20.875 18.2813L17.5 21.6563L14.125 18.2813"
                  stroke="#E53E3E"
                  stroke-width="1.125"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M17.4998 21.1875L17.4998 14.3437"
                  stroke="#E53E3E"
                  stroke-width="1.125"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

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
              <svg
                width="35"
                height="36"
                viewBox="0 0 35 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="17.5" cy="18" r="17" stroke="#48BB78" />
                <path
                  d="M14.125 17.7187L17.5 14.3437L20.875 17.7187"
                  stroke="#48BB78"
                  stroke-width="1.125"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M17.5002 14.8125L17.5002 21.6563"
                  stroke="#48BB78"
                  stroke-width="1.125"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

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
              <svg
                width="35"
                height="36"
                viewBox="0 0 35 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="17.5" cy="18" r="17" stroke="#48BB78" />
                <path
                  d="M14.125 17.7187L17.5 14.3437L20.875 17.7187"
                  stroke="#48BB78"
                  stroke-width="1.125"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M17.5002 14.8125L17.5002 21.6563"
                  stroke="#48BB78"
                  stroke-width="1.125"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

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
              <svg
                width="35"
                height="36"
                viewBox="0 0 35 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="17.5" cy="18" r="17" stroke="#48BB78" />
                <path
                  d="M14.125 17.7187L17.5 14.3437L20.875 17.7187"
                  stroke="#48BB78"
                  stroke-width="1.125"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M17.5002 14.8125L17.5002 21.6563"
                  stroke="#48BB78"
                  stroke-width="1.125"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

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
              <svg
                width="35"
                height="35"
                viewBox="0 0 35 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="17.5" cy="17.5001" r="17" stroke="#A0AEC0" />
                <g clip-path="url(#clip0_2611_5524)">
                  <path
                    d="M17.4999 22.75C18.1443 22.75 18.6666 22.2277 18.6666 21.5834C18.6666 20.939 18.1443 20.4167 17.4999 20.4167C16.8556 20.4167 16.3333 20.939 16.3333 21.5834C16.3333 22.2277 16.8556 22.75 17.4999 22.75Z"
                    fill="#A0AEC0"
                  />
                  <path
                    d="M17.4999 12.25C16.8583 12.25 16.3333 12.775 16.3333 13.4167V18.0834C16.3333 18.725 16.8583 19.25 17.4999 19.25C18.1416 19.25 18.6666 18.725 18.6666 18.0834V13.4167C18.6666 12.775 18.1416 12.25 17.4999 12.25Z"
                    fill="#A0AEC0"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2611_5524">
                    <rect
                      width="14"
                      height="14"
                      fill="white"
                      transform="translate(10.5 10.5)"
                    />
                  </clipPath>
                </defs>
              </svg>

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
              <svg
                width="35"
                height="36"
                viewBox="0 0 35 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="17.5" cy="18" r="17" stroke="#E53E3E" />
                <path
                  d="M20.875 18.2813L17.5 21.6563L14.125 18.2813"
                  stroke="#E53E3E"
                  stroke-width="1.125"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M17.4998 21.1875L17.4998 14.3437"
                  stroke="#E53E3E"
                  stroke-width="1.125"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

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
