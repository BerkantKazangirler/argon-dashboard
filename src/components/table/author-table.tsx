import classNames from "classnames";
import { useEffect, useState } from "react";
import { authorsDataProps } from "@/components/type";
import { request } from "@/utils/fetch-data";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const AuthorTable = () => {
  const [tableData, setTableData] = useState<Array<authorsDataProps>>([]);

  useEffect(() => {
    request<Array<authorsDataProps>>("/authors", "GET").then((data) => {
      setTableData(data);
    });
  }, []);

  return (
    <div className="flex w-full flex-col rounded-2xl bg-white px-4 drop-shadow-xl dark:bg-darkDetail">
      <span className="pt-4 text-lg font-semibold text-detailColor dark:text-white">
        Authors Table
      </span>
      <table className="mb-3 w-full">
        <thead>
          <tr className="h-10 text-[10px] uppercase text-placeholderColor">
            <td className="w-1/2">author</td>
            <td>function</td>
            <td>status</td>
            <td>employed</td>
            <td>actions</td>
          </tr>
        </thead>

        <tbody>
          {tableData.map((data, index) => (
            <tr
              key={index}
              className="border-t border-tableTd dark:border-darkBorder"
            >
              <td className="my-2 flex w-full flex-row gap-3">
                <img
                  src={data.photo}
                  className="h-10 w-10 rounded-lg object-cover"
                />
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-detailColor dark:text-white">
                    {data.name}
                  </span>
                  <span className="text-sm text-tableTr">{data.mail}</span>
                </div>
              </td>

              <td>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold capitalize text-tableTr dark:text-white">
                    {data.rank}
                  </span>
                  <span className="text-sm capitalize text-tableTr">
                    {data.unit}
                  </span>
                </div>
              </td>
              <td>
                <span
                  className={classNames(
                    "rounded-md px-2 py-1 text-sm font-semibold text-white",
                    {
                      "bg-red-400": !data.status,
                      "bg-green-400": data.status,
                    },
                  )}
                >
                  {data.status ? "Online" : "Offline"}
                </span>
              </td>
              <td className="text-sm font-semibold text-tableTr dark:text-white">
                {data.employeddate}
              </td>

              <td className="my-auto">
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <span className="text-sm font-semibold text-tableTr dark:text-white">
                      Edit
                    </span>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-8">
                    <DropdownMenuItem>
                      <span>Delete</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <span>Change Status</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <span>Edit</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
