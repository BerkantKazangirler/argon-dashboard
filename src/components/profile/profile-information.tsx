import classNames from "classnames";
import { useEffect, useState } from "react";
import { userDataProps } from "../type";
import FacebookSvg from "../icons/facebook";
import TwitterSvg from "../icons/twitter";
import InstagramSvg from "../icons/instagram";
import CheckBoxSvg from "../icons/checkbox";
import { request } from "../../utils/fetchdata";

export const ProfileInformation = () => {
  const [informationData, setInformationData] = useState<Array<userDataProps>>(
    []
  );
  const [load, setLoad] = useState(false);

  useEffect(() => {
    request<Array<userDataProps>>("/user-data", "GET")
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
            {informationData?.information}
          </span>
          <CheckBoxSvg className="mt-5 mx-auto fill-checkboxGreen size-4" />
          <div className="flex flex-col mt-5 gap-4">
            <div className="flex flex-row gap-2">
              <span className="text-tableTr font-bold text-xs">Full Name:</span>
              <span className="text-placeholderColor text-xs dark:text-white">
                {informationData?.fullname}
              </span>
            </div>

            <div className="flex flex-row gap-2">
              <span className="text-tableTr font-bold text-xs">Mobile:</span>
              <span className="text-placeholderColor text-xs dark:text-white">
                {informationData?.number}
              </span>
            </div>

            <div className="flex flex-row gap-2">
              <span className="text-tableTr font-bold text-xs">Email:</span>
              <span className="text-placeholderColor text-xs dark:text-white">
                {informationData?.mail}
              </span>
            </div>

            <div className="flex flex-row gap-2">
              <span className="text-tableTr font-bold text-xs">Location:</span>
              <span className="text-placeholderColor text-xs dark:text-white">
                {informationData?.location}
              </span>
            </div>

            <div className="flex flex-row gap-2">
              <span className="text-tableTr font-bold text-xs">
                Social Media:
              </span>
              <div className="flex flex-row gap-3">
                <a
                  href={informationData?.socialmedia.facebook}
                  className={classNames({
                    hidden: informationData?.socialmedia.facebook == "",
                  })}
                >
                  <FacebookSvg className="size-3 my-auto fill-detailBg dark:fill-white" />
                </a>
                <a
                  href={informationData?.socialmedia.twitter}
                  className={classNames({
                    hidden: informationData?.socialmedia.twitter == "",
                  })}
                >
                  <TwitterSvg className="size-3 my-auto fill-detailBg dark:fill-white" />
                </a>
                <a
                  href={informationData?.socialmedia.instagram}
                  className={classNames({
                    hidden: informationData?.socialmedia.instagram == "",
                  })}
                >
                  <InstagramSvg className="size-3 my-auto fill-detailBg dark:fill-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
