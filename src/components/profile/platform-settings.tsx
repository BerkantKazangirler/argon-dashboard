export const PlatformSettings = () => {
  return (
    <div className="flex flex-col rounded-2.5xl w-full bg-white dark:bg-darkDetail drop-shadow-[0_5px_14px_rgba(0,0,0,0.5)] px-4 py-4">
      <span className="text-detailColor dark:text-white font-bold text-lg">
        Platform Settings
      </span>
      <div className="flex flex-col">
        <span className="text-placeholderColor py-1 text-2xs font-bold">
          ACCOUNT
        </span>
        <div className="flex flex-col">
          <div className="flex flex-row mt-3 text-placeholderColor text-xs">
            <label
              className="inline-flex items-center me-5 cursor-pointer"
              htmlFor="check1"
            >
              <input type="checkbox" id="check1" className="sr-only peer" />
              <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-detailBg peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-detailBg"></div>
              <span className="text-xs ms-3 text-placeholderColor">
                Email me when someone follows me
              </span>
            </label>
          </div>
          <div className="flex flex-row mt-3 text-placeholderColor text-xs">
            <label
              className="inline-flex items-center me-5 cursor-pointer"
              htmlFor="check2"
            >
              <input type="checkbox" id="check2" className="sr-only peer" />
              <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-detailBg peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-detailBg"></div>
              <span className="text-xs ms-3 text-placeholderColor">
                Email me when someone answers on my post
              </span>
            </label>
          </div>
          <div className="flex flex-row mt-3 text-placeholderColor text-xs">
            <label
              className="inline-flex items-center me-5 cursor-pointer"
              htmlFor="check3"
            >
              <input type="checkbox" id="check3" className="sr-only peer" />
              <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-detailBg peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-detailBg"></div>
              <span className="text-xs ms-3 text-placeholderColor">
                Email me when someone mentions me
              </span>
            </label>
          </div>
        </div>
        <span className="text-placeholderColor py-1 mt-3 text-2xs font-bold">
          APPLICATION
        </span>
        <div className="flex flex-col">
          <div className="flex flex-row mt-3 text-placeholderColor text-xs">
            <label
              className="inline-flex items-center me-5 cursor-pointer"
              htmlFor="check4"
            >
              <input type="checkbox" id="check4" className="sr-only peer" />
              <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-detailBg peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-detailBg"></div>
              <span className="text-xs ms-3 text-placeholderColor">
                New launches and projects
              </span>
            </label>
          </div>
          <div className="flex flex-row mt-3 text-placeholderColor text-xs">
            <label
              className="inline-flex items-center me-5 cursor-pointer"
              htmlFor="check5"
            >
              <input type="checkbox" id="check5" className="sr-only peer" />
              <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-detailBg peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-detailBg"></div>
              <span className="text-xs ms-3 text-placeholderColor">
                Monthly product updates
              </span>
            </label>
          </div>
          <div className="flex flex-row mt-3 text-placeholderColor text-xs">
            <label
              className="inline-flex items-center me-5 cursor-pointer"
              htmlFor="check6"
            >
              <input type="checkbox" id="check6" className="sr-only peer" />
              <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-detailBg peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-detailBg"></div>
              <span className="text-xs ms-3 text-placeholderColor">
                Subscribe to newsletter
              </span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};
