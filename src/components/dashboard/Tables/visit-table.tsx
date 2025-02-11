import { useEffect, useState } from "react";
import { Button } from "../../elements/button";
import { formatBouncerate } from "../../../utils/formatter";
import { visitDataProps } from "../../type";

export const VisitTable = () => {
  const [visitData, setVisitData] = useState<Array<visitDataProps>>([]);
  useEffect(() => {
    fetch("http://localhost:3000/pagevisits")
      .then((res) => res.json())
      .then((data) => {
        setVisitData(data);
      });
  }, []);
  return (
    <div className="w-full rounded-2xl overflow-y-hidden py-2 drop-shadow-xl h-full bg-white dark:bg-darkDetail">
      <div className="flex flex-col">
        <div className="flex flex-row justify-between items-center">
          <span className="text-lg px-5 py-2 text-detailColor dark:text-white font-semibold">
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
                <td>bounce rate</td>
              </tr>
            </thead>

            <tbody>
              {visitData.map((data, index) => (
                <tr
                  key={index}
                  className="text-tableTr dark:text-white font-semibold text-xs h-8 border-b dark:border-darkBorder"
                >
                  <td>/{data.pagename}</td>
                  <td>{formatBouncerate(data.visitors, 0, 3)}</td>
                  <td>{data.uniqueusers}</td>
                  <td>{formatBouncerate(data.bouncerate, 0, 2)}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
