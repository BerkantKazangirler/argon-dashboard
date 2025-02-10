import classNames from "classnames";
import { useEffect, useState } from "react";

export const ProfileInformation = () => {
  const [informationData, setInformationData] = useState<Array<any>>([]);
  const [load, setLoad] = useState(false);
  useEffect(() => {
    fetch("http://localhost:3000/user-data")
      .then((res) => res.json())
      .then((data) => {
        setInformationData(data);
      })
      .finally(() => setLoad(true));
  }, []);
  return (
    <>
      {load && (
        <div className="flex flex-col rounded-2.5xl w-full bg-white dark:bg-darkDetail drop-shadow-[0_5px_14px_rgba(0,0,0,0.5)] px-4 py-4">
          <span className="text-detailColor dark:text-white font-bold text-lg">
            Profile Information
          </span>
          <span className="text-placeholderColor text-xs">
            {informationData[0].information}
          </span>
          <svg
            width="234"
            height="1"
            viewBox="0 0 234 1"
            fill="none"
            className="mt-5 mx-auto"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0.5 0.5H233.75" stroke="url(#paint0_linear_2614_7733)" />
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
                <stop offset="1" stop-color="#E0E1E2" stop-opacity="0.15625" />
              </linearGradient>
            </defs>
          </svg>
          <div className="flex flex-col mt-5 gap-4">
            <div className="flex flex-row gap-2">
              <span className="text-tableTr font-bold text-xs">Full Name:</span>
              <span className="text-placeholderColor text-xs dark:text-white">
                {informationData[0].fullname}
              </span>
            </div>

            <div className="flex flex-row gap-2">
              <span className="text-tableTr font-bold text-xs">Mobile:</span>
              <span className="text-placeholderColor text-xs dark:text-white">
                {informationData[0].number}
              </span>
            </div>

            <div className="flex flex-row gap-2">
              <span className="text-tableTr font-bold text-xs">Email:</span>
              <span className="text-placeholderColor text-xs dark:text-white">
                {informationData[0].mail}
              </span>
            </div>

            <div className="flex flex-row gap-2">
              <span className="text-tableTr font-bold text-xs">Location:</span>
              <span className="text-placeholderColor text-xs dark:text-white">
                {informationData[0].location}
              </span>
            </div>

            <div className="flex flex-row gap-2">
              <span className="text-tableTr font-bold text-xs">
                Social Media:
              </span>
              <div className="flex flex-row gap-3">
                <a
                  href={informationData[0].socialmedia.facebook}
                  className={classNames({
                    hidden: informationData[0].socialmedia.facebook == "",
                  })}
                >
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 13 13"
                    fill="none"
                    className="my-auto fill-detailBg dark:fill-white"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_2611_5241)">
                      <path d="M11.4998 6.5C11.4998 3.74 9.25976 1.5 6.49976 1.5C3.73976 1.5 1.49976 3.74 1.49976 6.5C1.49976 8.92 3.21976 10.935 5.49976 11.4V8H4.49976V6.5H5.49976V5.25C5.49976 4.285 6.28476 3.5 7.24976 3.5H8.49975V5H7.49975C7.22476 5 6.99976 5.225 6.99976 5.5V6.5H8.49975V8H6.99976V11.475C9.52475 11.225 11.4998 9.095 11.4998 6.5Z" />
                    </g>
                    <defs>
                      <clipPath id="clip0_2611_5241">
                        <rect
                          width="12"
                          height="12"
                          fill="white"
                          transform="translate(0.499756 0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
                <a
                  href={informationData[0].socialmedia.twitter}
                  className={classNames({
                    hidden: informationData[0].socialmedia.twitter == "",
                  })}
                >
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 13 13"
                    fill="none"
                    className="my-auto fill-detailBg dark:fill-white"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_2611_5242)">
                      <path d="M12.1247 3.06662C11.7027 3.24999 11.2562 3.37079 10.7994 3.42522C11.2795 3.14406 11.6406 2.69738 11.8149 2.16897C11.3609 2.43442 10.8651 2.62067 10.3487 2.71975C10.1312 2.49183 9.86963 2.31051 9.57989 2.18681C9.29016 2.06312 8.9783 1.99964 8.66327 2.00022C7.3878 2.00022 6.35561 3.0174 6.35561 4.27131C6.35471 4.44572 6.37469 4.61962 6.41514 4.78928C5.50054 4.7464 4.60496 4.51309 3.78569 4.10426C2.96642 3.69543 2.24151 3.1201 1.65733 2.41506C1.45239 2.76056 1.34401 3.15476 1.34351 3.55647C1.34351 4.34397 1.75436 5.04006 2.37476 5.44787C2.00719 5.43915 1.64716 5.34186 1.32522 5.16428V5.1924C1.32522 6.29396 2.1221 7.21037 3.17679 7.41896C2.97845 7.47183 2.77408 7.49862 2.56882 7.49865C2.42317 7.4989 2.27786 7.48477 2.13499 7.45646C2.42819 8.35881 3.28155 9.01506 4.29241 9.03381C3.47102 9.66683 2.46256 10.009 1.42554 10.0065C1.24146 10.0062 1.05756 9.99523 0.874756 9.97365C1.92972 10.6473 3.15603 11.0036 4.40772 11.0002C8.65835 11.0002 10.9805 7.53849 10.9805 4.53615C10.9805 4.43772 10.978 4.33928 10.9733 4.24318C11.424 3.92257 11.8139 3.52415 12.1247 3.06662Z" />
                    </g>
                    <defs>
                      <clipPath id="clip0_2611_5242">
                        <rect
                          width="12"
                          height="12"
                          fill="white"
                          transform="translate(0.499756 0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
                <a
                  href={informationData[0].socialmedia.instagram}
                  className={classNames({
                    hidden: informationData[0].socialmedia.instagram == "",
                  })}
                >
                  <svg
                    width="11"
                    height="11"
                    viewBox="0 0 11 11"
                    fill="none"
                    className="my-auto fill-detailBg dark:fill-white"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7.3226 1.85404C7.80566 1.85548 8.26852 2.04802 8.6101 2.38959C8.95167 2.73117 9.14421 3.19403 9.14565 3.67709V7.32279C9.14421 7.80585 8.95167 8.26871 8.6101 8.61028C8.26852 8.95186 7.80566 9.14439 7.3226 9.14583H3.6769C3.19384 9.14439 2.73098 8.95186 2.38941 8.61028C2.04783 8.26871 1.8553 7.80585 1.85386 7.32279V3.67709C1.8553 3.19403 2.04783 2.73117 2.38941 2.38959C2.73098 2.04802 3.19384 1.85548 3.6769 1.85404H7.3226ZM7.3226 1.12494H3.6769C2.27319 1.12494 1.12476 2.27338 1.12476 3.67709V7.32279C1.12476 8.7265 2.27319 9.87494 3.6769 9.87494H7.3226C8.72631 9.87494 9.87475 8.7265 9.87475 7.32279V3.67709C9.87475 2.27338 8.72631 1.12494 7.3226 1.12494Z" />
                    <path d="M7.86938 3.677C7.76122 3.677 7.65549 3.64493 7.56556 3.58484C7.47562 3.52475 7.40553 3.43933 7.36414 3.33941C7.32275 3.23948 7.31192 3.12952 7.33302 3.02344C7.35412 2.91735 7.4062 2.81991 7.48269 2.74343C7.55917 2.66695 7.65661 2.61486 7.76269 2.59376C7.86878 2.57266 7.97874 2.58349 8.07866 2.62488C8.17859 2.66627 8.264 2.73637 8.32409 2.8263C8.38419 2.91623 8.41626 3.02197 8.41626 3.13013C8.41641 3.20199 8.40237 3.27317 8.37495 3.33959C8.34752 3.40601 8.30724 3.46636 8.25643 3.51717C8.20562 3.56798 8.14527 3.60826 8.07885 3.63569C8.01243 3.66312 7.94124 3.67716 7.86938 3.677Z" />
                    <path d="M5.49976 4.0413C5.7882 4.0413 6.07017 4.12683 6.31 4.28708C6.54983 4.44733 6.73676 4.6751 6.84714 4.94159C6.95752 5.20808 6.9864 5.50131 6.93013 5.78421C6.87386 6.06711 6.73496 6.32698 6.531 6.53094C6.32704 6.7349 6.06718 6.8738 5.78428 6.93007C5.50137 6.98634 5.20814 6.95746 4.94165 6.84708C4.67516 6.7367 4.44739 6.54977 4.28714 6.30994C4.12689 6.0701 4.04136 5.78814 4.04136 5.49969C4.04177 5.11303 4.19556 4.74232 4.46897 4.46891C4.74238 4.19549 5.11309 4.04171 5.49976 4.0413ZM5.49976 3.31219C5.06711 3.31219 4.64418 3.44049 4.28445 3.68085C3.92471 3.92122 3.64434 4.26286 3.47877 4.66257C3.3132 5.06229 3.26988 5.50212 3.35429 5.92645C3.43869 6.35079 3.64703 6.74056 3.95296 7.04649C4.25889 7.35242 4.64866 7.56076 5.073 7.64516C5.49733 7.72957 5.93716 7.68625 6.33688 7.52068C6.73659 7.35511 7.07823 7.07474 7.31859 6.715C7.55896 6.35527 7.68725 5.93234 7.68725 5.49969C7.68725 4.91953 7.45679 4.36313 7.04655 3.9529C6.63632 3.54266 6.07992 3.31219 5.49976 3.31219Z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
