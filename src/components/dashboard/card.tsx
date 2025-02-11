import classNames from "classnames";
import { useEffect, useState } from "react";
import { formatBouncerate } from "../../utils/formatter";
import { cardDatasProps } from "../type";

export const Card = () => {
  const [cardData, setCardData] = useState<Array<cardDatasProps>>([]);
  useEffect(() => {
    fetch("http://localhost:3000/card-datas")
      .then((res) => res.json())
      .then((data) => {
        setCardData(data);
      });
  }, []);
  return (
    <>
      {cardData.map((data, index) => (
        <div
          key={index}
          className="flex flex-row bg-white dark:bg-darkDetail p-4 justify-between rounded-2xl w-full"
        >
          <div className="flex flex-col justify-between">
            <div className="flex flex-col">
              <span className="uppercase font-semibold text-xs text-placeholderColor">
                {data.card}
              </span>
              <span className="text-detailColor dark:text-white font-semibold text-lg">
                ${formatBouncerate(data.data, 0, 3)}
              </span>
            </div>
            <div className="flex flex-row gap-1 text-sm">
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
          <span className="rounded-lg bg-detailBg p-2 h-fit">
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
      {/* <div className="flex flex-row bg-white dark:bg-darkDetail p-4 justify-between rounded-2xl w-full">
        <div className="flex flex-col justify-between">
          <div className="flex flex-col">
            <span className="uppercase font-semibold text-xs text-placeholderColor">
              Today's users
            </span>
            <span className="text-detailColor dark:text-white font-semibold text-lg">
              {user}
            </span>
          </div>
          <div className="flex flex-row gap-1 text-sm">
            <span className="text-detailGreen font-semibold">
              +{userdetail}%
            </span>
            <span className="text-placeholderColor">Since last month</span>
          </div>
        </div>
        <span className="rounded-lg bg-detailBg p-2 h-fit">
          <svg
            width="23"
            height="23"
            viewBox="0 0 23 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.25 2.10858C6.202 2.10858 2.10938 6.20121 2.10938 11.2492C2.10938 16.2972 6.202 20.3898 11.25 20.3898C16.298 20.3898 20.3906 16.2972 20.3906 11.2492C20.3906 6.20121 16.298 2.10858 11.25 2.10858Z"
              fill="#3182CE"
              stroke="white"
              stroke-width="0.75"
              stroke-miterlimit="10"
            />
            <path
              d="M11.2501 2.10858C8.69824 2.10858 6.29883 6.20121 6.29883 11.2492C6.29883 16.2972 8.69824 20.3898 11.2501 20.3898C13.802 20.3898 16.2015 16.2972 16.2015 11.2492C16.2015 6.20121 13.802 2.10858 11.2501 2.10858Z"
              fill="#3182CE"
              stroke="white"
              stroke-width="0.75"
              stroke-miterlimit="10"
            />
            <path
              d="M5.15625 5.15552C6.83672 6.34863 8.95224 7.06011 11.2501 7.06011C13.548 7.06011 15.6636 6.34863 17.344 5.15552"
              fill="#3182CE"
            />
            <path
              d="M5.15625 5.15552C6.83672 6.34863 8.95224 7.06011 11.2501 7.06011C13.548 7.06011 15.6636 6.34863 17.344 5.15552"
              stroke="white"
              stroke-width="0.75"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M17.344 17.3444C15.6636 16.1513 13.548 15.4398 11.2501 15.4398C8.95224 15.4398 6.83672 16.1513 5.15625 17.3444"
              stroke="white"
              stroke-width="0.75"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M11.25 2.10858V20.3898"
              stroke="white"
              stroke-width="0.75"
              stroke-miterlimit="10"
            />
            <path
              d="M20.3906 11.249H2.10938"
              stroke="white"
              stroke-width="0.75"
              stroke-miterlimit="10"
            />
          </svg>
        </span>
      </div>
      <div className="flex flex-row bg-white dark:bg-darkDetail p-4 justify-between rounded-2xl w-full">
        <div className="flex flex-col justify-between">
          <div className="flex flex-col">
            <span className="uppercase font-semibold text-xs text-placeholderColor">
              new clients
            </span>
            <span className="text-detailColor dark:text-white font-semibold text-lg">
              +{clients}
            </span>
          </div>
          <div className="flex flex-row gap-1 text-sm">
            <span className="text-detailRed font-semibold">
              -{clientdetail}%
            </span>
            <span className="text-placeholderColor">Since last month</span>
          </div>
        </div>
        <span className="rounded-lg bg-detailBg p-2 h-fit">
          <svg
            width="23"
            height="23"
            viewBox="0 0 23 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.6562 9.85571H18.8086C18.8521 9.85571 18.8938 9.873 18.9246 9.90376C18.9554 9.93453 18.9727 9.97626 18.9727 10.0198V18.2815C18.9727 19.0243 18.6776 19.7367 18.1523 20.2619C17.6271 20.7872 16.9147 21.0823 16.1719 21.0823H6.32812C5.58531 21.0823 4.87292 20.7872 4.34767 20.2619C3.82243 19.7367 3.52734 19.0243 3.52734 18.2815V4.21899C3.52734 3.47618 3.82243 2.76379 4.34767 2.23854C4.87292 1.71329 5.58531 1.41821 6.32812 1.41821H10.3711C10.4146 1.41821 10.4563 1.4355 10.4871 1.46627C10.5179 1.49703 10.5352 1.53876 10.5352 1.58228V7.73462C10.5352 8.29717 10.7586 8.83668 11.1564 9.23446C11.5542 9.63224 12.0937 9.85571 12.6562 9.85571ZM7.73437 16.887H14.7656C14.9552 16.887 15.137 16.8116 15.2711 16.6776C15.4052 16.5435 15.4805 16.3617 15.4805 16.1721C15.4805 15.9825 15.4052 15.8007 15.2711 15.6666C15.137 15.5326 14.9552 15.4573 14.7656 15.4573H7.73437C7.54479 15.4573 7.36296 15.5326 7.2289 15.6666C7.09484 15.8007 7.01953 15.9825 7.01953 16.1721C7.01953 16.3617 7.09484 16.5435 7.2289 16.6776C7.36296 16.8116 7.54479 16.887 7.73437 16.887ZM7.73437 13.3713H14.7656C14.9552 13.3713 15.137 13.296 15.2711 13.162C15.4052 13.0279 15.4805 12.8461 15.4805 12.6565C15.4805 12.4669 15.4052 12.2851 15.2711 12.151C15.137 12.017 14.9552 11.9416 14.7656 11.9416H7.73437C7.54479 11.9416 7.36296 12.017 7.2289 12.151C7.09484 12.2851 7.01953 12.4669 7.01953 12.6565C7.01953 12.8461 7.09484 13.0279 7.2289 13.162C7.36296 13.296 7.54479 13.3713 7.73437 13.3713Z"
              fill="white"
              stroke="#3182CE"
              stroke-width="0.0234375"
            />
            <path
              d="M12.0946 1.97753L18.4143 8.29726L12.0946 1.97753ZM12.0946 1.97753C12.0946 1.97753 12.0946 1.97753 12.0946 1.97752M12.0946 1.97753L12.0946 1.97752M12.0946 1.97752C12.0839 1.96694 12.0704 1.95974 12.0557 1.95683C12.0409 1.95392 12.0257 1.95542 12.0118 1.96116C11.9979 1.9669 11.986 1.97662 11.9777 1.98908C11.9693 2.00155 11.9648 2.0162 11.9647 2.03121V7.73573C11.9647 7.9191 12.0376 8.09496 12.1672 8.22462C12.2969 8.35429 12.4728 8.42713 12.6561 8.42713H18.3606C18.3756 8.42707 18.3903 8.42257 18.4028 8.41419C18.4152 8.40582 18.425 8.39395 18.4307 8.38007C18.4364 8.36619 18.4379 8.35092 18.435 8.33619C18.4321 8.32147 18.4249 8.30793 18.4143 8.29728L12.0946 1.97752Z"
              fill="white"
              stroke="#3182CE"
              stroke-width="0.0234375"
            />
          </svg>
        </span>
      </div>
      <div className="flex flex-row bg-white dark:bg-darkDetail p-4 justify-between rounded-2xl w-full">
        <div className="flex flex-col justify-between">
          <div className="flex flex-col">
            <span className="uppercase font-semibold text-xs text-placeholderColor">
              Total sales
            </span>
            <span className="text-detailColor dark:text-white font-semibold text-lg">
              ${sales}
            </span>
          </div>
          <div className="flex flex-row gap-1 text-sm">
            <span className="text-detailGreen font-semibold">
              +{saledetail}%
            </span>
            <span className="text-placeholderColor">Since last month</span>
          </div>
        </div>
        <span className="rounded-lg bg-detailBg p-2 h-fit">
          <svg
            width="23"
            height="23"
            viewBox="0 0 23 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.73425 19.6874C8.5109 19.6874 9.1405 19.0578 9.1405 18.2811C9.1405 17.5045 8.5109 16.8749 7.73425 16.8749C6.9576 16.8749 6.328 17.5045 6.328 18.2811C6.328 19.0578 6.9576 19.6874 7.73425 19.6874Z"
              fill="white"
            />
            <path
              d="M17.5781 19.6874C18.3548 19.6874 18.9844 19.0578 18.9844 18.2811C18.9844 17.5045 18.3548 16.8749 17.5781 16.8749C16.8015 16.8749 16.1719 17.5045 16.1719 18.2811C16.1719 19.0578 16.8015 19.6874 17.5781 19.6874Z"
              fill="white"
            />
            <path
              d="M20.0742 5.30796C19.9754 5.18713 19.851 5.08981 19.7099 5.02308C19.5688 4.95634 19.4147 4.92185 19.2586 4.92212H5.88384L5.61445 3.3937C5.58573 3.2309 5.50056 3.08342 5.3739 2.97717C5.24724 2.87093 5.08719 2.81271 4.92187 2.81274H2.10937C1.92289 2.81274 1.74405 2.88682 1.61219 3.01868C1.48033 3.15055 1.40625 3.32939 1.40625 3.51587C1.40625 3.70235 1.48033 3.88119 1.61219 4.01305C1.74405 4.14491 1.92289 4.21899 2.10937 4.21899H4.33213L6.33867 15.5912C6.36739 15.754 6.45257 15.9014 6.57923 16.0077C6.70588 16.1139 6.86593 16.1721 7.03125 16.1721H18.2812C18.4677 16.1721 18.6466 16.098 18.7784 15.9662C18.9103 15.8343 18.9844 15.6555 18.9844 15.469C18.9844 15.2825 18.9103 15.1037 18.7784 14.9718C18.6466 14.8399 18.4677 14.7659 18.2812 14.7659H7.62099L7.37314 13.3596H17.993C18.2368 13.3593 18.4731 13.2748 18.6617 13.1203C18.8504 12.9658 18.9799 12.7509 19.0283 12.5119L20.2939 6.18379C20.3244 6.03064 20.3205 5.87263 20.2825 5.72117C20.2445 5.56971 20.1734 5.42857 20.0742 5.30796Z"
              fill="white"
            />
          </svg>
        </span>
      </div> */}
    </>
  );
};
