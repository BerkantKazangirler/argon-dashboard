import { useEffect, useState } from "react";
import { Button } from "@/components";
import { request } from "@/utils/fetchdata";

export const Projects = () => {
  const [profileData, setProfileData] = useState<Array<any>>([]);
  useEffect(() => {
    request<Array<any>>("/user-data", "GET").then((data) => {
      setProfileData(data.projects);
    });
  }, []);
  return (
    <div className="w-full rounded-2.5xl bg-white px-4 pt-4 drop-shadow-[0_5px_14px_rgba(0,0,0,0.5)] dark:bg-darkDetail">
      <div className="mb-3 flex w-fit flex-col">
        <span className="text-lg font-bold text-detailColor dark:text-white">
          Projects
        </span>
        <span className="text-sm text-placeholderColor">
          Architects design houses
        </span>
      </div>
      <div className="mb-4 flex w-full flex-col gap-4 xl:flex-row">
        {profileData.map((data: any, index: any) => (
          <div key={index} className="flex w-full flex-col">
            <div
              className={`flex h-48 w-full flex-col bg-[url('${data.image}')] rounded-xl`}
            >
              <span className="h-full rounded-xl bg-gradient-to-t from-[#3138602E] to-[#15192888]"></span>
            </div>
            <div className="mt-3 flex flex-col">
              <span className="text-2xs text-placeholderColor">
                Projects #{data.id}
              </span>
              <span className="text-lg font-bold text-detailColor dark:text-white">
                {data.title}
              </span>
              <span className="mt-2 h-12 w-40 text-sm text-placeholderColor xl:w-64">
                {data.desc}
              </span>
              <div className="mt-5 flex flex-row justify-between">
                <Button className="rounded-lg bg-detailColor px-4 py-2 text-2xs font-bold text-white dark:bg-detailBg">
                  VIEW ALL
                </Button>
                <img src={"./public/icon/kisi.png"} className="h-fit" />
              </div>
            </div>
          </div>
        ))}

        <div className="flex flex-col">
          <Button className="flex h-full w-full flex-col items-center rounded-xl border border-inputBorder py-5 xl:w-98 xl:py-0">
            <div className="my-auto flex flex-col gap-2 text-center text-lg font-bold text-tableTr dark:text-white">
              <span>+</span>
              <span>Create a New Project</span>
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};
