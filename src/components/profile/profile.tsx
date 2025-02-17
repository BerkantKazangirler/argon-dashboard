import { useEffect, useState } from "react";
import { Button } from "../elements/button";
import SvgEdit from "../icons/edit";
import OverviewSvg from "../icons/overview";
import MultiDocumentSvg from "../icons/multidocument";
import BuildSvg from "../icons/build";
import { request } from "../../utils/fetchdata";

export const Profile = () => {
  const [profileData, setProfileData] = useState<Array<any>>([]);

  useEffect(() => {
    request<Array<any>>("/user-data", "GET").then((data) => {
      setProfileData(data);
    });
  }, []);
  return (
    <>
      <div className="flex flex-col">
        <div className="flex p-4 flex-row bg-[#FFFFFFCC] dark:bg-darkDetail drop-shadow-[0_5px_14px_rgba(0,0,0,0.5)] rounded-2xl h-24 border border-white dark:border-none">
          <div className="flex flex-row justify-between w-full">
            <div className="flex flex-row gap-4">
              <div className="flex flex-row w-fit relative">
                <img
                  src={profileData.photo}
                  className="w-16 rounded-xl my-auto"
                />

                <span className="absolute -bottom-1 -right-2 rounded-lg bg-white dark:bg-darkBg p-1">
                  <SvgEdit className="fill-detailBg dark:fill-white size-3" />
                </span>
              </div>

              <div className="flex flex-col my-auto">
                <span className="text-detailColor dark:text-white font-bold">
                  {profileData.name}
                </span>
                <span className="text-sm text-tableTr">{profileData.mail}</span>
              </div>
            </div>
            <div className="flex flex-row gap-5">
              <Button className="flex flex-row my-auto gap-1 bg-white dark:bg-darkBg rounded-lg drop-shadow-xl py-3 px-6">
                <OverviewSvg className="my-auto fill-detailColor dark:fill-white size-3" />

                <span className="flex flex-row text-detailColor dark:text-white font-bold text-2xs">
                  OVERVIEW
                </span>
              </Button>

              <Button className="flex flex-row my-auto gap-1 py-3 px-6">
                <MultiDocumentSvg className="my-auto fill-detailColor dark:fill-white size-3" />

                <span className="flex flex-row text-detailColor dark:text-white font-bold text-2xs">
                  TEAMS
                </span>
              </Button>

              <Button className="flex flex-row my-auto gap-1 py-3 px-6">
                <BuildSvg className="my-auto fill-detailBg dark:fill-white size-4" />

                <span className="flex flex-row text-detailColor dark:text-white font-bold text-2xs">
                  PROJECTS
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
