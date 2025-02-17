import { useEffect, useState } from "react";
import { userDataProps } from "../type";
import { request } from "../../utils/fetchdata";

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
    <div className="flex flex-col rounded-2.5xl w-full bg-white dark:bg-darkDetail drop-shadow-[0_5px_14px_rgba(0,0,0,0.5)] px-4 py-4">
      <span className="text-detailColor dark:text-white font-bold text-lg">
        Conversations
      </span>
      <div className="flex flex-col pb-2">
        {converstationData.map((data: userDataProps, index: any) => (
          <div key={index} className="flex flex-row pr-4 justify-between mt-4">
            <div className="flex flex-row gap-4">
              <img
                src={
                  data.image
                    ? data.image
                    : "http://localhost:5173/public/ornek.jpeg"
                }
                className="w-12 rounded-xl my-auto"
              />
              <div className="flex flex-col">
                <span className="text-detailColor dark:text-white font-bold text-sm">
                  {data.name}
                </span>
                <span className="text-tableTr text-sm">{data.comment}</span>
              </div>
            </div>
            <span className="text-detailBg dark:text-white font-bold text-2xs my-auto">
              REPLY
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
