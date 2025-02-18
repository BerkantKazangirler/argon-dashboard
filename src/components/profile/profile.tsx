import { useEffect, useState } from "react";
import {
  Button,
  BuildSvg,
  SvgEdit,
  OverviewSvg,
  MultiDocumentSvg,
} from "@/components";
import { request } from "@/utils/fetchdata";

export const Profile = () => {
  const [profileData, setProfileData] = useState<Array<any>>([]);

  useEffect(() => {
    request<Array<any>>("/user-data", "GET").then((data) => {
      setProfileData(data);
    });
  }, []);
  return (
    <>
      <div className="mr-5 flex flex-col xl:mr-0">
        <div className="flex h-24 flex-row rounded-2xl border border-white bg-[#FFFFFFCC] p-4 drop-shadow-[0_5px_14px_rgba(0,0,0,0.5)] dark:border-none dark:bg-darkDetail">
          <div className="flex w-full flex-row justify-between">
            <div className="flex flex-row gap-4">
              <div className="relative flex w-fit flex-row">
                <img
                  src={profileData.photo}
                  className="my-auto w-16 rounded-xl"
                />

                <span className="absolute -bottom-1 -right-2 rounded-lg bg-white p-1 dark:bg-darkBg">
                  <SvgEdit className="size-3 fill-detailBg dark:fill-white" />
                </span>
              </div>

              <div className="my-auto flex flex-col">
                <span className="font-bold text-detailColor dark:text-white">
                  {profileData.name}
                </span>
                <span className="text-sm text-tableTr">{profileData.mail}</span>
              </div>
            </div>
            <div className="hidden flex-row gap-5 xl:flex">
              <Button className="my-auto flex flex-row gap-1 rounded-lg bg-white px-6 py-3 drop-shadow-xl dark:bg-darkBg">
                <OverviewSvg className="my-auto size-3 fill-detailColor dark:fill-white" />

                <span className="flex flex-row text-2xs font-bold text-detailColor dark:text-white">
                  OVERVIEW
                </span>
              </Button>

              <Button className="my-auto flex flex-row gap-1 px-6 py-3">
                <MultiDocumentSvg className="my-auto size-3 fill-detailColor dark:fill-white" />

                <span className="flex flex-row text-2xs font-bold text-detailColor dark:text-white">
                  TEAMS
                </span>
              </Button>

              <Button className="my-auto flex flex-row gap-1 px-6 py-3">
                <BuildSvg className="my-auto size-4 fill-detailBg dark:fill-white" />

                <span className="flex flex-row text-2xs font-bold text-detailColor dark:text-white">
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
