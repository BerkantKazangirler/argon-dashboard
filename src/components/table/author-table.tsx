import classNames from "classnames";
import { useEffect, useState } from "react";

export const AuthorTable = () => {
  const [tableData, setTableData] = useState<Array<any>>([]);
  useEffect(() => {
    fetch("http://localhost:3000/authors")
      .then((res) => res.json())
      .then((data) => {
        setTableData(data);
      });
  }, []);
  return (
    <div className="flex flex-col w-full px-4 drop-shadow-xl rounded-2xl bg-white dark:bg-darkDetail">
      <span className="text-detailColor dark:text-white pt-4 font-semibold text-lg">
        Authors Table
      </span>
      <table className="w-full">
        <thead>
          <tr className="text-placeholderColor h-10 uppercase text-[10px]">
            <td className="w-1/2">author</td>
            <td>function</td>
            <td>status</td>
            <td>employed</td>
          </tr>
        </thead>

        <tbody>
          {tableData.map((data, index) => (
            <tr
              key={index}
              className="border-t border-tableTd dark:border-darkBorder"
            >
              <td className="flex flex-row my-2 w-full gap-3">
                <img
                  src={data.photo}
                  className="w-10 h-10 object-cover rounded-lg"
                />
                <div className="flex flex-col">
                  <span className="font-semibold text-sm text-detailColor dark:text-white">
                    {data.name}
                  </span>
                  <span className="text-sm text-tableTr">{data.mail}</span>
                </div>
              </td>

              <td>
                <div className="flex flex-col">
                  <span className="font-semibold capitalize text-tableTr dark:text-white text-sm">
                    {data.rank}
                  </span>
                  <span className="text-sm text-tableTr">{data.unit}</span>
                </div>
              </td>
              <td>
                <span
                  className={classNames(
                    "rounded-md py-1 font-semibold text-sm text-white px-2",
                    {
                      "bg-red-400": !data.status,
                      "bg-green-400": data.status,
                    }
                  )}
                >
                  {data.status ? "Online" : "Offline"}
                </span>
              </td>
              <td className="text-tableTr font-semibold dark:text-white text-sm">
                {data.employeddate}
              </td>
              <td className="text-tableTr font-semibold dark:text-white text-sm">
                Edit
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
