import { useEffect, useState } from "react";
import { formatBouncerate } from "../../utils/formatter";

export const ProjectsTable = () => {
  const [tableData, setTableData] = useState<Array<any>>([]);
  useEffect(() => {
    fetch("http://localhost:3000/projects")
      .then((res) => res.json())
      .then((data) => {
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
          <svg
            width="13"
            height="14"
            viewBox="0 0 13 14"
            fill="none"
            className="my-auto"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.50024 0.906006C3.14019 0.906006 0.406494 3.6397 0.406494 6.99976C0.406494 10.3598 3.14019 13.0935 6.50024 13.0935C9.8603 13.0935 12.594 10.3598 12.594 6.99976C12.594 3.6397 9.8603 0.906006 6.50024 0.906006ZM9.67163 4.95747L5.73413 9.64497C5.69094 9.69642 5.63719 9.73798 5.57654 9.76684C5.51588 9.7957 5.44973 9.81119 5.38257 9.81225H5.37466C5.30896 9.81223 5.24399 9.7984 5.18398 9.77165C5.12397 9.7449 5.07026 9.70583 5.02632 9.65698L3.33882 7.78198C3.29596 7.73653 3.26262 7.68296 3.24076 7.62444C3.2189 7.56592 3.20896 7.50361 3.21152 7.44119C3.21409 7.37877 3.2291 7.3175 3.25568 7.26096C3.28227 7.20443 3.31988 7.15377 3.36632 7.11198C3.41276 7.07019 3.46708 7.03811 3.52609 7.01761C3.58511 6.99712 3.64763 6.98862 3.70997 6.99263C3.77231 6.99664 3.83323 7.01308 3.88913 7.04096C3.94503 7.06885 3.9948 7.10763 4.0355 7.15503L5.36235 8.62925L8.95386 4.35454C9.03442 4.2614 9.1484 4.2037 9.27115 4.19392C9.39391 4.18414 9.51559 4.22306 9.60989 4.30226C9.70418 4.38147 9.76352 4.49461 9.77507 4.61721C9.78662 4.73981 9.74947 4.86204 9.67163 4.95747V4.95747Z"
              fill="#68D391"
            />
          </svg>
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
          </tr>
        </thead>

        <tbody>
          {tableData.map((data, index) => (
            <tr key={index} className="my-2 border-t border-tableTd">
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
                    className="h-1 my-auto [&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg   [&::-webkit-progress-bar]:bg-red-300 [&::-webkit-progress-value]:bg-blue-500 [&::-moz-progress-bar]:bg-blue-500"
                  ></progress>
                </div>
              </td>
              <td className="hover:cursor-pointer">
                <svg
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                  className="fill-placeholderColor dark:fill-white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_2611_6038)">
                    <path d="M10.5003 6.66671C11.417 6.66671 12.167 5.91671 12.167 5.00004C12.167 4.08337 11.417 3.33337 10.5003 3.33337C9.58368 3.33337 8.83368 4.08337 8.83368 5.00004C8.83368 5.91671 9.58368 6.66671 10.5003 6.66671ZM10.5003 8.33337C9.58368 8.33337 8.83368 9.08337 8.83368 10C8.83368 10.9167 9.58368 11.6667 10.5003 11.6667C11.417 11.6667 12.167 10.9167 12.167 10C12.167 9.08337 11.417 8.33337 10.5003 8.33337ZM10.5003 13.3334C9.58368 13.3334 8.83368 14.0834 8.83368 15C8.83368 15.9167 9.58368 16.6667 10.5003 16.6667C11.417 16.6667 12.167 15.9167 12.167 15C12.167 14.0834 11.417 13.3334 10.5003 13.3334Z" />
                  </g>
                  <defs>
                    <clipPath id="clip0_2611_6038">
                      <rect
                        width="20"
                        height="20"
                        fill="white"
                        transform="translate(0.500366 4.57764e-05)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
