import { useEffect, useState } from "react";
import { projectsDataProps } from "@/components/type";
import { CheckBoxSvg, VertSvg } from "@/components";
import { request } from "@/utils/fetchdata";
import { formatBouncerate } from "@/utils/formatbouncerate";
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
    <div className="flex flex-col w-full bg-white dark:bg-darkDetail rounded-2xl drop-shadow-xl px-4 py-6">
      <div className="flex flex-col">
        <span className="text-black dark:text-white font-semibold text-lg">
          Projects
        </span>
        <span className="text-placeholderColor gap-1 flex flex-row text-sm">
          <CheckBoxSvg className="my-auto size-4 fill-checkboxGreen" />
          <b>30 done</b> this month
        </span>
      </div>
      <table className="mt-2">
        <thead>
          <tr className="uppercase h-10 text-placeholderColor text-[10px] font-semibold">
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
                  <span className="text-detailColor dark:text-white font-semibold text-sm">
                    {data.companies}
                  </span>
                </div>
              </td>
              <td className="text-tableTr dark:text-white text-sm font-semibold">
                {data.budget == null
                  ? "Not set"
                  : "$" + formatBouncerate(data.budget, 0, 3)}
              </td>
              <td className="text-tableTr dark:text-white text-sm font-semibold">
                {data.status == null ? "Canceled" : data.status}
              </td>
              <td>
                <div className="text-blue-500 text-sm font-semibold flex flex-col">
                  <span>{data.completion}%</span>
                  <progress
                    value={data.completion}
                    className="h-1 my-auto [&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg   [&::-webkit-progress-bar]:bg-red-300 [&::-webkit-progress-value]:bg-blue-500 [&::-moz-progress-bar]:bg-blue-500 "
                  ></progress>
                </div>
              </td>
              <td className="my-auto hover:cursor-pointer">
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <VertSvg className="fill-placeholderColor dark:fill-white size-5" />
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
