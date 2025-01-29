export const ProjectsTable = () => {
  return (
    <div className="flex flex-col w-full bg-white rounded-2xl drop-shadow-[0_5px_14px_rgba(0,0,0,0.5)] px-4 py-6">
      <div className="flex flex-col">
        <span className="text-black font-semibold text-lg">Projects</span>
        <span className="text-placeholderColor text-sm">
          <b>30 done</b> this month
        </span>
      </div>
      <table className="mt-8">
        <tr className="uppercase h-10 text-placeholderColor text-[10px] font-semibold">
          <td>companies</td>
          <td>budget</td>
          <td>status</td>
          <td>completion</td>
        </tr>
        <tr className="my-2 border-t border-tableTd">
          <td>
            <div className="flex flex-row gap-3 py-4">
              <span className="text-detailColor font-semibold text-sm">
                Chakra Soft UI Version
              </span>
            </div>
          </td>
          <td className="text-tableTr text-sm font-semibold">$14,000</td>
          <td className="text-tableTr text-sm font-semibold">Working</td>
          <td>
            <div className="text-blue-500 text-sm font-semibold flex flex-col">
              <span>70%</span>
              <progress
                value={70}
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
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_2611_6038)">
                <path
                  d="M10.5003 6.66671C11.417 6.66671 12.167 5.91671 12.167 5.00004C12.167 4.08337 11.417 3.33337 10.5003 3.33337C9.58368 3.33337 8.83368 4.08337 8.83368 5.00004C8.83368 5.91671 9.58368 6.66671 10.5003 6.66671ZM10.5003 8.33337C9.58368 8.33337 8.83368 9.08337 8.83368 10C8.83368 10.9167 9.58368 11.6667 10.5003 11.6667C11.417 11.6667 12.167 10.9167 12.167 10C12.167 9.08337 11.417 8.33337 10.5003 8.33337ZM10.5003 13.3334C9.58368 13.3334 8.83368 14.0834 8.83368 15C8.83368 15.9167 9.58368 16.6667 10.5003 16.6667C11.417 16.6667 12.167 15.9167 12.167 15C12.167 14.0834 11.417 13.3334 10.5003 13.3334Z"
                  fill="#A0AEC0"
                />
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
        <tr className="my-2 border-t border-tableTd">
          <td>
            <div className="flex flex-row gap-3 py-4">
              <span className="text-detailColor font-semibold text-sm">
                Add Progress Track
              </span>
            </div>
          </td>
          <td className="text-tableTr text-sm font-semibold">$3,000</td>
          <td className="text-tableTr text-sm font-semibold">Canceled</td>
          <td>
            <div className="text-blue-500 text-sm font-semibold flex flex-col">
              <span>10%</span>
              <progress
                value={10}
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
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_2611_6038)">
                <path
                  d="M10.5003 6.66671C11.417 6.66671 12.167 5.91671 12.167 5.00004C12.167 4.08337 11.417 3.33337 10.5003 3.33337C9.58368 3.33337 8.83368 4.08337 8.83368 5.00004C8.83368 5.91671 9.58368 6.66671 10.5003 6.66671ZM10.5003 8.33337C9.58368 8.33337 8.83368 9.08337 8.83368 10C8.83368 10.9167 9.58368 11.6667 10.5003 11.6667C11.417 11.6667 12.167 10.9167 12.167 10C12.167 9.08337 11.417 8.33337 10.5003 8.33337ZM10.5003 13.3334C9.58368 13.3334 8.83368 14.0834 8.83368 15C8.83368 15.9167 9.58368 16.6667 10.5003 16.6667C11.417 16.6667 12.167 15.9167 12.167 15C12.167 14.0834 11.417 13.3334 10.5003 13.3334Z"
                  fill="#A0AEC0"
                />
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
        <tr className="my-2 border-t border-tableTd">
          <td>
            <div className="flex flex-row gap-3 py-4">
              <span className="text-detailColor font-semibold text-sm">
                Fix Platform Errors
              </span>
            </div>
          </td>
          <td className="text-tableTr text-sm font-semibold">Not set</td>
          <td className="text-tableTr text-sm font-semibold">Done</td>
          <td>
            <div className="text-blue-500 text-sm font-semibold flex flex-col">
              <span>100%</span>
              <progress
                value={100}
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
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_2611_6038)">
                <path
                  d="M10.5003 6.66671C11.417 6.66671 12.167 5.91671 12.167 5.00004C12.167 4.08337 11.417 3.33337 10.5003 3.33337C9.58368 3.33337 8.83368 4.08337 8.83368 5.00004C8.83368 5.91671 9.58368 6.66671 10.5003 6.66671ZM10.5003 8.33337C9.58368 8.33337 8.83368 9.08337 8.83368 10C8.83368 10.9167 9.58368 11.6667 10.5003 11.6667C11.417 11.6667 12.167 10.9167 12.167 10C12.167 9.08337 11.417 8.33337 10.5003 8.33337ZM10.5003 13.3334C9.58368 13.3334 8.83368 14.0834 8.83368 15C8.83368 15.9167 9.58368 16.6667 10.5003 16.6667C11.417 16.6667 12.167 15.9167 12.167 15C12.167 14.0834 11.417 13.3334 10.5003 13.3334Z"
                  fill="#A0AEC0"
                />
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
        <tr className="my-2 border-t border-tableTd">
          <td>
            <div className="flex flex-row gap-3 py-4">
              <span className="text-detailColor font-semibold text-sm">
                Launch our Mobile App
              </span>
            </div>
          </td>
          <td className="text-tableTr text-sm font-semibold">$32,000</td>
          <td className="text-tableTr text-sm font-semibold">Done</td>
          <td>
            <div className="text-blue-500 text-sm font-semibold flex flex-col">
              <span>100%</span>
              <progress
                value={100}
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
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_2611_6038)">
                <path
                  d="M10.5003 6.66671C11.417 6.66671 12.167 5.91671 12.167 5.00004C12.167 4.08337 11.417 3.33337 10.5003 3.33337C9.58368 3.33337 8.83368 4.08337 8.83368 5.00004C8.83368 5.91671 9.58368 6.66671 10.5003 6.66671ZM10.5003 8.33337C9.58368 8.33337 8.83368 9.08337 8.83368 10C8.83368 10.9167 9.58368 11.6667 10.5003 11.6667C11.417 11.6667 12.167 10.9167 12.167 10C12.167 9.08337 11.417 8.33337 10.5003 8.33337ZM10.5003 13.3334C9.58368 13.3334 8.83368 14.0834 8.83368 15C8.83368 15.9167 9.58368 16.6667 10.5003 16.6667C11.417 16.6667 12.167 15.9167 12.167 15C12.167 14.0834 11.417 13.3334 10.5003 13.3334Z"
                  fill="#A0AEC0"
                />
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
        <tr className="my-2 border-t border-tableTd">
          <td>
            <div className="flex flex-row gap-3 py-4">
              <span className="text-detailColor font-semibold text-sm">
                Add the New Pricing Page
              </span>
            </div>
          </td>
          <td className="text-tableTr text-sm font-semibold">$400</td>
          <td className="text-tableTr text-sm font-semibold">Working</td>
          <td>
            <div className="text-blue-500 text-sm font-semibold flex flex-col">
              <span>25%</span>
              <progress
                value={25}
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
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_2611_6038)">
                <path
                  d="M10.5003 6.66671C11.417 6.66671 12.167 5.91671 12.167 5.00004C12.167 4.08337 11.417 3.33337 10.5003 3.33337C9.58368 3.33337 8.83368 4.08337 8.83368 5.00004C8.83368 5.91671 9.58368 6.66671 10.5003 6.66671ZM10.5003 8.33337C9.58368 8.33337 8.83368 9.08337 8.83368 10C8.83368 10.9167 9.58368 11.6667 10.5003 11.6667C11.417 11.6667 12.167 10.9167 12.167 10C12.167 9.08337 11.417 8.33337 10.5003 8.33337ZM10.5003 13.3334C9.58368 13.3334 8.83368 14.0834 8.83368 15C8.83368 15.9167 9.58368 16.6667 10.5003 16.6667C11.417 16.6667 12.167 15.9167 12.167 15C12.167 14.0834 11.417 13.3334 10.5003 13.3334Z"
                  fill="#A0AEC0"
                />
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
      </table>
    </div>
  );
};
