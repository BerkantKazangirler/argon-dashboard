import { useEffect, useState } from "react";
import { formatBouncerate } from "../../../utils/formatter";
import { traficDataProps } from "../../type";
import { request } from "../../../utils/fetchdata";

export const TraficTable = () => {
  const [traficData, setTraficData] = useState<Array<traficDataProps>>([]);

  useEffect(() => {
    request<Array<traficDataProps>>("/socialtraffic", "GET").then((data) => {
      setTraficData(data);
    });
  }, []);
  return (
    <div className="w-1/2 h-[244px] py-2 bg-white dark:bg-darkDetail rounded-2xl drop-shadow-xl">
      <div className="flex flex-col">
        <div className="flex flex-row justify-between items-center">
          <span className="text-lg px-5 py-2 text-detailColor dark:text-white font-semibold">
            Social traffic
          </span>
          <button className="uppercase text-[10px] px-3 bg-blue-500 rounded-lg mr-4 h-fit py-1">
            see all
          </button>
        </div>
        <div>
          <table className="w-full justify-between indent-5">
            <thead>
              <tr className="bg-tableTd dark:bg-darkBg w-full h-8 uppercase border-t border-b dark:border-none text-xs text-placeholderColor">
                <td>referral</td>
                <td>visitors</td>
              </tr>
            </thead>

            <tbody>
              {traficData.map((data, index) => (
                <tr
                  key={index}
                  className="text-tableTr font-semibold text-xs h-8 border-t dark:border-darkBorder"
                >
                  <td className="capitalize">{data.referral}</td>
                  <td>{formatBouncerate(data.visitors, 0, 3)}</td>
                  <td className="flex flex-row gap-2 leading-6">
                    <span>{data.barrate}%</span>
                    <progress
                      value={data.barrate}
                      className="h-1 my-auto [&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg   [&::-webkit-progress-bar]:bg-slate-300 [&::-webkit-progress-value]:bg-orange-400 [&::-moz-progress-bar]:bg-orange-400"
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
