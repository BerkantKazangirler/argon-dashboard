import { useEffect, useState } from "react";
import { Button } from "@/components";
import { visitDataProps } from "@/components/type";
import { request } from "@/utils/fetchdata";
import { formatBouncerate } from "@/utils/formatbouncerate";

export const VisitTable = () => {
  const [visitData, setVisitData] = useState<Array<visitDataProps>>([]);

  useEffect(() => {
    request<Array<visitDataProps>>("/pagevisits", "GET").then((data) => {
      setVisitData(data);
    });
  }, []);
  return (
    <div className="w-full rounded-2xl overflow-y-hidden drop-shadow-xl h-full bg-white dark:bg-darkDetail">
      <div className="flex flex-col">
        <div className="flex flex-row justify-between items-center">
          <span className="lg:text-lg text-base px-5 py-2 text-detailColor dark:text-white font-semibold">
            Page visits
          </span>
          <Button className="uppercase text-[10px] px-3 bg-blue-500 rounded-lg mr-4 h-fit py-1">
            see all
          </Button>
        </div>
        <div>
          <table className="w-full justify-between indent-5">
            <thead>
              <tr className="bg-tableTd dark:bg-darkBg h-8 uppercase border-t border-b dark:border-none text-xs text-placeholderColor">
                <td>page name</td>
                <td>visitors</td>
                <td>unique users</td>
                <td className="2xl:flex my-auto leading-8 hidden">
                  bounce rate
                </td>
              </tr>
            </thead>

            <tbody>
              {visitData.map((data, index) => (
                <tr
                  key={index}
                  className="text-tableTr dark:text-white font-semibold text-xs h-8 border-t dark:border-darkBorder"
                >
                  <td className="w-1/6">/{data.pagename}</td>
                  <td className="w-1/6">
                    {formatBouncerate(data.visitors, 0, 3)}
                  </td>
                  <td>{data.uniqueusers}</td>
                  <td className="2xl:flex my-auto leading-8 hidden">
                    {formatBouncerate(data.bouncerate, 0, 2)}%
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
