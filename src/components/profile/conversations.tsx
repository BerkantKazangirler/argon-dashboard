import { useEffect, useState } from "react";
import { userDataProps } from "@/components/type";
import { request } from "@/utils/fetch-data";
import { Button } from "@/components";

export const Conversations = () => {
  const [converstationData, setConversatitionData] = useState<
    Array<userDataProps>
  >([]);

  useEffect(() => {
    request<Array<userDataProps>>("/user-data", "GET").then((data) => {
      setConversatitionData(data.converstations);
    });
  }, []);
  return (
    <div className="flex w-full flex-col rounded-2.5xl bg-white px-4 py-4 drop-shadow-[0_5px_14px_rgba(0,0,0,0.5)] dark:bg-darkDetail">
      <span className="text-lg font-bold text-detailColor dark:text-white">
        Conversations
      </span>
      <div className="flex flex-col pb-2">
        {converstationData.map((data: userDataProps, index: any) => (
          <div key={index} className="mt-4 flex flex-row justify-between pr-4">
            <div className="flex flex-row gap-4">
              <img
                src={
                  data.image
                    ? data.image
                    : "http://localhost:5173/public/ornek.jpeg"
                }
                className="my-auto w-12 rounded-xl"
              />
              <div className="flex flex-col">
                <span className="text-sm font-bold text-detailColor dark:text-white">
                  {data.name}
                </span>
                <span className="text-sm text-tableTr">{data.comment}</span>
              </div>
            </div>
            <Button className="my-auto text-2xs font-bold text-detailBg dark:text-white">
              REPLY
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};
