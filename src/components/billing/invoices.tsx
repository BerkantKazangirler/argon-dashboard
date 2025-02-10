import { useEffect, useState } from "react";
import { Button } from "../elements/button";
import { formatDate } from "../../utils/date";

export const Invoices = () => {
  const [cardData, setCardData] = useState<Array<any>>([]);
  useEffect(() => {
    fetch("http://localhost:3000/payment-invoices")
      .then((res) => res.json())
      .then((data) => {
        setCardData(data);
      });
  }, []);

  return (
    <div className="flex flex-col rounded-2.5xl drop-shadow-xl w-full h-[410px] bg-white dark:bg-darkDetail p-4">
      <div className="flex flex-row justify-between px-2 py-3">
        <span className="font-bold leading-none my-auto text-detailColor dark:text-white">
          Invoices
        </span>
        <Button className="text-detailBg font-bold text-2xs border rounded-lg border-detailBg py-2 w-fit px-4 dark:text-white dark:border-white">
          VIEW ALL
        </Button>
      </div>
      <div className="flex flex-col gap-5 px-2">
        {cardData.map((data, index) => (
          <div key={index} className="flex flex-row justify-between">
            <div className="flex flex-col gap-1">
              <span className="text-detailColor dark:text-white font-bold text-sm">
                {formatDate(data.date)}
              </span>
              <span className="text-placeholderColor text-xs font-bold">
                #{data.id}
              </span>
            </div>
            <div className="flex flex-row my-auto gap-3">
              <span className="text-placeholderColor font-bold text-xs">
                ${data.amount}
              </span>
              <span className="text-2xs flex gap-1 text-detailColor dark:text-white font-bold">
                <svg
                  width="16"
                  height="15"
                  viewBox="0 0 16 15"
                  className="fill-detailColor dark:fill-white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_2611_5658)">
                    <path d="M13.0391 6.56262H8.9375C8.56454 6.56262 8.20685 6.41446 7.94313 6.15074C7.67941 5.88702 7.53125 5.52933 7.53125 5.15637V1.05481C7.53125 1.02373 7.5189 0.993922 7.49693 0.971946C7.47495 0.949969 7.44514 0.937622 7.41406 0.937622H4.71875C4.22147 0.937622 3.74456 1.13517 3.39292 1.4868C3.04129 1.83843 2.84375 2.31534 2.84375 2.81262V12.1876C2.84375 12.6849 3.04129 13.1618 3.39292 13.5134C3.74456 13.8651 4.22147 14.0626 4.71875 14.0626H11.2812C11.7785 14.0626 12.2554 13.8651 12.6071 13.5134C12.9587 13.1618 13.1562 12.6849 13.1562 12.1876V6.67981C13.1562 6.64873 13.1439 6.61892 13.1219 6.59694C13.0999 6.57497 13.0701 6.56262 13.0391 6.56262ZM10.3437 11.2501H5.65625C5.53193 11.2501 5.4127 11.2007 5.32479 11.1128C5.23689 11.0249 5.1875 10.9057 5.1875 10.7814C5.1875 10.657 5.23689 10.5378 5.32479 10.4499C5.4127 10.362 5.53193 10.3126 5.65625 10.3126H10.3437C10.4681 10.3126 10.5873 10.362 10.6752 10.4499C10.7631 10.5378 10.8125 10.657 10.8125 10.7814C10.8125 10.9057 10.7631 11.0249 10.6752 11.1128C10.5873 11.2007 10.4681 11.2501 10.3437 11.2501ZM10.3437 8.90637H5.65625C5.53193 8.90637 5.4127 8.85698 5.32479 8.76908C5.23689 8.68117 5.1875 8.56194 5.1875 8.43762C5.1875 8.3133 5.23689 8.19407 5.32479 8.10616C5.4127 8.01826 5.53193 7.96887 5.65625 7.96887H10.3437C10.4681 7.96887 10.5873 8.01826 10.6752 8.10616C10.7631 8.19407 10.8125 8.3133 10.8125 8.43762C10.8125 8.56194 10.7631 8.68117 10.6752 8.76908C10.5873 8.85698 10.4681 8.90637 10.3437 8.90637Z" />
                    <path d="M12.7816 5.526L8.56841 1.31282C8.56021 1.30467 8.5498 1.29913 8.53846 1.29689C8.52713 1.29465 8.51539 1.29581 8.50471 1.30022C8.49403 1.30464 8.4849 1.31211 8.47846 1.3217C8.47202 1.33129 8.46855 1.34257 8.46851 1.35412V5.15715C8.46851 5.28147 8.51789 5.4007 8.6058 5.48861C8.69371 5.57652 8.81294 5.6259 8.93726 5.6259H12.7403C12.7518 5.62585 12.7631 5.62239 12.7727 5.61595C12.7823 5.60951 12.7898 5.60037 12.7942 5.5897C12.7986 5.57902 12.7998 5.56728 12.7975 5.55594C12.7953 5.54461 12.7897 5.53419 12.7816 5.526Z" />
                  </g>
                  <defs>
                    <clipPath id="clip0_2611_5658">
                      <rect
                        width="15"
                        height="15"
                        fill="white"
                        transform="translate(0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                PDF
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
