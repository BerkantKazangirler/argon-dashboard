import { useEffect, useState } from "react";
import { Button } from "@/components";
import { visitDataProps } from "@/components/type";
import { request } from "@/utils/fetch-data";
import { formatBouncerate } from "@/utils/format-bouncerate";

export const VisitTable = () => {
  const [visitData, setVisitData] = useState<Array<visitDataProps>>([]);

  useEffect(() => {
    request<Array<visitDataProps>>("/pagevisits", "GET").then((data) => {
      setVisitData(data);
    });
  }, []);
  return (
    <div className="h-full w-full overflow-y-hidden rounded-2xl bg-white drop-shadow-xl dark:bg-darkDetail">
      <div className="flex flex-col">
        <div className="flex flex-row items-center justify-between">
          <span className="px-5 py-2 text-base font-semibold text-detailColor lg:text-lg dark:text-white">
            Page visits
          </span>
          <Button className="mr-4 h-fit rounded-lg bg-blue-500 px-3 py-1 text-[10px] uppercase">
            see all
          </Button>
        </div>
        <div>
          <table className="w-full justify-between indent-5">
            <thead>
              <tr className="h-8 border-b border-t border-inputBorder bg-tableTd text-xs uppercase text-placeholderColor dark:border-none dark:bg-darkBg">
                <td>page name</td>
                <td>visitors</td>
                <td>unique users</td>
                <td className="my-auto hidden leading-8 2xl:flex">
                  bounce rate
                </td>
              </tr>
            </thead>

            <tbody>
              {visitData.map((data, index) => (
                <tr
                  key={index}
                  className="h-8 border-t border-inputBorder text-xs font-semibold text-tableTr dark:border-darkBorder dark:text-white"
                >
                  <td className="w-1/6">/{data.pagename}</td>
                  <td className="w-1/6">
                    {formatBouncerate(data.visitors, 0, 3)}
                  </td>
                  <td>{data.uniqueusers}</td>
                  <td className="my-auto hidden leading-8 2xl:flex">
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
