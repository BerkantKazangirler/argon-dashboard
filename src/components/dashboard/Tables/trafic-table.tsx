import { useEffect, useState } from "react";
import { traficDataProps } from "@/components/type";
import { request } from "@/utils/fetch-data";
import { formatBouncerate } from "@/utils/format-bouncerate";

export const TraficTable = () => {
  const [traficData, setTraficData] = useState<Array<traficDataProps>>([]);

  useEffect(() => {
    request<Array<traficDataProps>>("/socialtraffic", "GET").then((data) => {
      setTraficData(data);
    });
  }, []);
  return (
    <div className="w-full rounded-2xl bg-white drop-shadow-xl md:mx-auto md:w-1/2 md:max-w-[500px] dark:bg-darkDetail">
      <div className="flex flex-col">
        <div className="flex flex-row items-center justify-between">
          <span className="px-5 py-2 text-base font-semibold text-detailColor lg:text-lg dark:text-white">
            Social traffic
          </span>
          <button className="mr-4 h-fit rounded-lg bg-blue-500 px-3 py-1 text-[10px] uppercase">
            see all
          </button>
        </div>
        <div>
          <table className="w-full justify-between indent-5">
            <thead>
              <tr className="h-8 w-full border-b border-t border-inputBorder bg-tableTd text-xs uppercase text-placeholderColor dark:border-none dark:bg-darkBg">
                <td>referral</td>
                <td>visitors</td>
                <td>progress</td>
              </tr>
            </thead>

            <tbody>
              {traficData.map((data, index) => (
                <tr
                  key={index}
                  className="h-8 border-t border-inputBorder text-xs font-semibold text-tableTr dark:border-darkBorder"
                >
                  <td className="capitalize">{data.referral}</td>
                  <td>{formatBouncerate(data.visitors, 0, 3)}</td>
                  <td className="hidden flex-row gap-2 leading-6 2xl:flex">
                    <span>{data.barrate}%</span>
                    <progress
                      value={data.barrate}
                      className="my-auto h-1 [&::-moz-progress-bar]:bg-orange-400 [&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-bar]:bg-slate-300 [&::-webkit-progress-value]:rounded-lg [&::-webkit-progress-value]:bg-orange-400"
                    ></progress>
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
