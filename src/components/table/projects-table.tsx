import { useEffect, useState } from "react";
import { projectsDataProps } from "@/components/type";
import { CheckBoxSvg, VertSvg } from "@/components";
import { request } from "@/utils/fetch-data";
import { formatBouncerate } from "@/utils/format-bouncerate";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const ProjectsTable = () => {
  const [tableData, setTableData] = useState<Array<projectsDataProps>>([]);

  useEffect(() => {
    request<Array<projectsDataProps>>("/projects", "GET").then((data) => {
      setTableData(data);
    });
  }, []);
  return (
    <div className="flex w-full flex-col rounded-2xl bg-white px-4 py-6 drop-shadow-xl dark:bg-darkDetail">
      <div className="flex flex-col">
        <span className="text-lg font-semibold text-black dark:text-white">
          Projects
        </span>
        <span className="flex flex-row gap-1 text-sm text-placeholderColor">
          <CheckBoxSvg className="my-auto size-4 fill-checkboxGreen" />
          <b>30 done</b> this month
        </span>
      </div>
      <table className="mt-2">
        <thead>
          <tr className="h-10 text-[10px] font-semibold uppercase text-placeholderColor">
            <td>companies</td>
            <td>budget</td>
            <td>status</td>
            <td>completion</td>
            <td>actions</td>
          </tr>
        </thead>

        <tbody>
          {tableData.map((data, index) => (
            <tr
              key={index}
              className="my-2 border-t border-tableTd dark:border-darkBorder"
            >
              <td>
                <div className="flex flex-row gap-3 py-4">
                  <span className="text-sm font-semibold text-detailColor dark:text-white">
                    {data.companies}
                  </span>
                </div>
              </td>
              <td className="text-sm font-semibold text-tableTr dark:text-white">
                {data.budget == null
                  ? "Not set"
                  : "$" + formatBouncerate(data.budget, 0, 3)}
              </td>
              <td className="text-sm font-semibold text-tableTr dark:text-white">
                {data.status == null ? "Canceled" : data.status}
              </td>
              <td>
                <div className="flex flex-col text-sm font-semibold text-blue-500">
                  <span>{data.completion}%</span>
                  <progress
                    value={data.completion}
                    className="my-auto h-1 [&::-moz-progress-bar]:bg-blue-500 [&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-bar]:bg-red-300 [&::-webkit-progress-value]:rounded-lg [&::-webkit-progress-value]:bg-blue-500"
                  ></progress>
                </div>
              </td>
              <td className="my-auto hover:cursor-pointer">
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <VertSvg className="size-5 fill-placeholderColor dark:fill-white" />
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
