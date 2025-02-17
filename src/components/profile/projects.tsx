import { useEffect, useState } from "react";
import { Button } from "@/components";
import { request } from "@/utils/fetchdata";
import { userDataProps } from "../type";

export const Projects = () => {
  const [profileData, setProfileData] = useState<Array<any>>([]);
  useEffect(() => {
    request<Array<any>>("/user-data", "GET").then((data) => {
      setProfileData(data.projects);
    });
  }, []);
  return (
    <div className="bg-white dark:bg-darkDetail px-4 pt-4 w-full rounded-2.5xl drop-shadow-[0_5px_14px_rgba(0,0,0,0.5)]">
      <div className="flex flex-col mb-3">
        <span className="text-detailColor dark:text-white font-bold text-lg">
          Projects
        </span>
        <span className="text-placeholderColor text-sm">
          Architects design houses
        </span>
      </div>
      <div className="flex flex-row w-full gap-4">
        {profileData.map((data: any, index: any) => (
          <div key={index} className="flex flex-col w-fit">
            <div
              className={`h-48 w-98 flex flex-col bg-[url('${data.image}')] rounded-xl`}
            >
              <span className="bg-gradient-to-t from-[#3138602E] to-[#15192888] rounded-xl h-full"></span>
            </div>
            <div className="flex flex-col mt-3">
              <span className="text-placeholderColor text-2xs">
                Projects #{data.id}
              </span>
              <span className="text-detailColor text-lg font-bold dark:text-white">
                {data.title}
              </span>
              <span className="text-placeholderColor text-sm w-64 mt-2 h-12">
                {data.desc}
              </span>
              <div className="flex flex-row justify-between mt-5">
                <Button className="rounded-lg dark:bg-detailBg bg-detailColor text-2xs font-bold text-white px-4 py-2">
                  VIEW ALL
                </Button>
                <img src={"./public/icon/kisi.png"} className="h-fit" />
              </div>
            </div>
          </div>
        ))}

        <div className="flex flex-col w-full">
          <Button className="h-98 items-center w-full border border-inputBorder flex flex-col rounded-xl">
            <div className="flex flex-col dark:text-white text-tableTr text-center my-auto font-bold text-lg gap-2">
              <span>+</span>
              <span>Create a New Project</span>
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};
