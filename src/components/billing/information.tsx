import { useEffect, useState } from "react";

export const Information = () => {
  const [cardData, setCardData] = useState<Array<any>>([]);
  useEffect(() => {
    fetch("http://localhost:3000/billing-information")
      .then((res) => res.json())
      .then((data) => {
        setCardData(data);
      });
  }, []);
  return (
    <div className="flex flex-col w-full p-6 bg-white dark:bg-darkDetail drop-shadow-xl rounded-2.5xl">
      <span className="text-detailColor dark:text-white text-lg font-bold">
        Billing Information
      </span>
      <div className="flex flex-col gap-4">
        {cardData.map((data, index) => (
          <div
            key={index}
            className="flex flex-col gap-3 bg-informationBg dark:bg-darkBg rounded-lg p-4"
          >
            <div className="flex flex-row justify-between">
              <span className="text-tableTr font-bold text-sm dark:text-white">
                {data.name}
              </span>
              <div className="flex flex-row gap-5">
                <div className="flex flex-row gap-1">
                  <svg
                    width="15"
                    height="16"
                    viewBox="0 0 15 16"
                    fill="none"
                    className="my-auto"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_2611_5608)">
                      <path
                        d="M3.75 12.375C3.75 13.0625 4.3125 13.625 5 13.625H10C10.6875 13.625 11.25 13.0625 11.25 12.375V6.125C11.25 5.4375 10.6875 4.875 10 4.875H5C4.3125 4.875 3.75 5.4375 3.75 6.125V12.375ZM11.25 3H9.6875L9.24375 2.55625C9.13125 2.44375 8.96875 2.375 8.80625 2.375H6.19375C6.03125 2.375 5.86875 2.44375 5.75625 2.55625L5.3125 3H3.75C3.40625 3 3.125 3.28125 3.125 3.625C3.125 3.96875 3.40625 4.25 3.75 4.25H11.25C11.5937 4.25 11.875 3.96875 11.875 3.625C11.875 3.28125 11.5937 3 11.25 3Z"
                        fill="#E53E3E"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2611_5608">
                        <rect
                          width="15"
                          height="15"
                          fill="white"
                          transform="translate(0 0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <span className="text-detailRed font-bold text-2xs my-auto">
                    DELETE
                  </span>
                </div>
                <div className="flex flex-row gap-1">
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 13 13"
                    fill="none"
                    className="my-auto fill-detailColor dark:fill-white"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_2611_5611)">
                      <path d="M1.99963 9.22922V10.7492C1.99963 10.8892 2.10963 10.9992 2.24963 10.9992H3.76963C3.83463 10.9992 3.89963 10.9742 3.94463 10.9242L9.40463 5.46922L7.52963 3.59422L2.07463 9.04922C2.02463 9.09922 1.99963 9.15922 1.99963 9.22922ZM10.8546 4.01922C11.0496 3.82422 11.0496 3.50922 10.8546 3.31422L9.68463 2.14422C9.48963 1.94922 9.17463 1.94922 8.97963 2.14422L8.06463 3.05922L9.93963 4.93422L10.8546 4.01922Z" />
                    </g>
                    <defs>
                      <clipPath id="clip0_2611_5611">
                        <rect
                          width="12"
                          height="12"
                          fill="white"
                          transform="translate(0.499634 0.499222)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <span className="text-detailColor dark:text-white font-bold text-2xs my-auto">
                    EDIT
                  </span>
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-row gap-1 text-xs">
                <span className="text-placeholderColor">Company Name:</span>
                <span className="font-bold text-tableTr dark:text-white">
                  {data.companyname}
                </span>
              </div>
              <div className="flex flex-row gap-1 text-xs">
                <span className="text-placeholderColor">Email Address:</span>
                <span className="font-bold text-tableTr dark:text-white">
                  {data.email}
                </span>
              </div>
              <div className="flex flex-row gap-1 text-xs">
                <span className="text-placeholderColor">VAT Number:</span>
                <span className="font-bold text-tableTr dark:text-white">
                  {data.vatnumber}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
