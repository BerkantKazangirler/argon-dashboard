import { Checkbox } from "@/components";

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
            <Checkbox id="check1" text="Email me when someone follows me" />
          </div>
          <div className="flex flex-row mt-3 text-placeholderColor text-xs">
            <Checkbox
              id="check2"
              text="Email me when someone answers on my post"
            />
          </div>
          <div className="flex flex-row mt-3 text-placeholderColor text-xs">
            <Checkbox id="check3" text="Email me when someone mentions me" />
          </div>
        </div>
        <span className="text-placeholderColor py-1 mt-3 text-2xs font-bold">
          APPLICATION
        </span>
        <div className="flex flex-col">
          <div className="flex flex-row mt-3 text-placeholderColor text-xs">
            <Checkbox id="check4" text="New launches and projects" />
          </div>
          <div className="flex flex-row mt-3 text-placeholderColor text-xs">
            <Checkbox id="check5" text="Monthly product updates" />
          </div>
          <div className="flex flex-row mt-3 text-placeholderColor text-xs">
            <Checkbox id="check6" text="Subscribe to newsletter" />
          </div>
        </div>
      </div>
    </div>
  );
};
