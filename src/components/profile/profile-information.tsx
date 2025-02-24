import classNames from "classnames";
import { useEffect, useState } from "react";
import { userDataProps } from "@/components/type";
import {
  FacebookSvg,
  TwitterSvg,
  InstagramSvg,
  CheckBoxSvg,
} from "@/components";

import { request } from "@/utils/fetch-data";

export const ProfileInformation = () => {
  const [informationData, setInformationData] = useState<Array<userDataProps>>(
    [],
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
        <div className="flex w-full flex-col rounded-2.5xl bg-white px-4 py-4 drop-shadow-[0_5px_14px_rgba(0,0,0,0.5)] dark:bg-darkDetail">
          <span className="text-lg font-bold text-detailColor dark:text-white">
            Profile Information
          </span>
          <span className="text-xs text-placeholderColor">
            {informationData?.information}
          </span>
          {/* <CheckBoxSvg className="mt-5 mx-auto fill-checkboxGreen size-4" /> */}
          <div className="mt-5 flex flex-col gap-4">
            <div className="flex flex-row gap-2">
              <span className="text-xs font-bold text-tableTr">Full Name:</span>
              <span className="text-xs text-placeholderColor dark:text-white">
                {informationData?.fullname}
              </span>
            </div>

            <div className="flex flex-row gap-2">
              <span className="text-xs font-bold text-tableTr">Mobile:</span>
              <span className="text-xs text-placeholderColor dark:text-white">
                {informationData?.number}
              </span>
            </div>

            <div className="flex flex-row gap-2">
              <span className="text-xs font-bold text-tableTr">Email:</span>
              <span className="text-xs text-placeholderColor dark:text-white">
                {informationData?.mail}
              </span>
            </div>

            <div className="flex flex-row gap-2">
              <span className="text-xs font-bold text-tableTr">Location:</span>
              <span className="text-xs text-placeholderColor dark:text-white">
                {informationData?.location}
              </span>
            </div>

            <div className="flex flex-row gap-2">
              <span className="text-xs font-bold text-tableTr">
                Social Media:
              </span>
              <div className="flex flex-row gap-3">
                <a
                  href={informationData?.socialmedia.facebook}
                  className={classNames({
                    hidden: informationData?.socialmedia.facebook == "",
                  })}
                >
                  <FacebookSvg className="my-auto size-3 fill-detailBg dark:fill-white" />
                </a>
                <a
                  href={informationData?.socialmedia.twitter}
                  className={classNames({
                    hidden: informationData?.socialmedia.twitter == "",
                  })}
                >
                  <TwitterSvg className="my-auto size-3 fill-detailBg dark:fill-white" />
                </a>
                <a
                  href={informationData?.socialmedia.instagram}
                  className={classNames({
                    hidden: informationData?.socialmedia.instagram == "",
                  })}
                >
                  <InstagramSvg className="my-auto size-3 fill-detailBg dark:fill-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
