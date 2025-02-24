import classNames from "classnames";
import { useEffect, useState } from "react";
import { cardDatasProps } from "@/components/type";
import { request } from "@/utils/fetch-data";
import { formatBouncerate } from "@/utils/format-bouncerate";

export const Card = () => {
  const [cardData, setCardData] = useState<Array<cardDatasProps>>([]);

  useEffect(() => {
    request<Array<cardDatasProps>>("/card-datas", "GET").then((data) => {
      setCardData(data);
    });
  }, []);
  return (
    <>
      {cardData.map((data, index) => (
        <div
          key={index}
          className="flex w-full flex-row justify-between rounded-2xl bg-white p-4 dark:bg-darkDetail"
        >
          <div className="flex flex-col justify-between gap-5">
            <div className="flex flex-col">
              <span className="text-[8px] font-semibold uppercase text-placeholderColor lg:text-2xs xl:text-xs">
                {data.card}
              </span>
              <span className="text-base font-semibold text-detailColor lg:text-sm xl:text-lg dark:text-white">
                ${formatBouncerate(data.data, 0, 3)}
              </span>
            </div>
            <div className="hidden flex-row gap-1 text-xs xl:flex">
              <span
                className={classNames("font-semibold", {
                  "text-detailGreen": data.last > 0,
                  "text-detailRed": data.last < 0,
                })}
              >
                {data.last > 0
                  ? "+" + formatBouncerate(data.last, 0, 2)
                  : formatBouncerate(data.last, 0, 2)}
                %
              </span>
              <span className="text-placeholderColor">Since last month</span>
            </div>
          </div>
          <span className="h-fit rounded-lg bg-detailBg p-2">
            <svg
              width="23"
              height="23"
              viewBox="0 0 23 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.19668 4.56816H18.2592C18.4234 4.56809 18.5875 4.57851 18.7505 4.59937C18.6953 4.21167 18.5621 3.83917 18.359 3.50433C18.1559 3.16949 17.8871 2.87925 17.5688 2.6511C17.2506 2.42294 16.8894 2.26161 16.507 2.17683C16.1247 2.09204 15.7292 2.08556 15.3443 2.15776L3.7792 4.13223H3.76602C3.04007 4.27105 2.39451 4.68178 1.96118 5.28052C2.61403 4.81616 3.39553 4.56713 4.19668 4.56816Z"
                fill="white"
              />
              <path
                d="M18.2593 5.62488H4.19678C3.45111 5.62569 2.73621 5.92227 2.20894 6.44954C1.68167 6.97681 1.38509 7.69171 1.38428 8.43738V16.8749C1.38509 17.6205 1.68167 18.3354 2.20894 18.8627C2.73621 19.39 3.45111 19.6866 4.19678 19.6874H18.2593C19.0049 19.6866 19.7198 19.39 20.2471 18.8627C20.7744 18.3354 21.071 17.6205 21.0718 16.8749V8.43738C21.071 7.69171 20.7744 6.97681 20.2471 6.44954C19.7198 5.92227 19.0049 5.62569 18.2593 5.62488ZM16.1719 14.0624C15.8937 14.0624 15.6219 13.9799 15.3906 13.8254C15.1593 13.6709 14.9791 13.4512 14.8727 13.1943C14.7662 12.9373 14.7384 12.6546 14.7926 12.3818C14.8469 12.109 14.9808 11.8584 15.1775 11.6618C15.3742 11.4651 15.6247 11.3312 15.8975 11.2769C16.1703 11.2226 16.4531 11.2505 16.71 11.3569C16.967 11.4634 17.1866 11.6436 17.3411 11.8749C17.4956 12.1061 17.5781 12.378 17.5781 12.6561C17.5781 13.0291 17.43 13.3868 17.1662 13.6505C16.9025 13.9142 16.5448 14.0624 16.1719 14.0624Z"
                fill="white"
              />
              <path
                d="M1.40625 11.4014V7.02881C1.40625 6.07651 1.93359 4.47998 3.76392 4.13413C5.31738 3.84277 6.85547 3.84277 6.85547 3.84277C6.85547 3.84277 7.86621 4.5459 7.03125 4.5459C6.19629 4.5459 6.21826 5.62256 7.03125 5.62256C7.84424 5.62256 7.03125 6.65527 7.03125 6.65527L3.75732 10.3687L1.40625 11.4014Z"
                fill="white"
              />
            </svg>
          </span>
        </div>
      ))}
    </>
  );
};
