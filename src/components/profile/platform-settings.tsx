import { Checkbox } from "@/components";

export const PlatformSettings = () => {
  return (
    <div className="flex w-full flex-col rounded-2.5xl bg-white px-4 py-4 drop-shadow-[0_5px_14px_rgba(0,0,0,0.5)] dark:bg-darkDetail">
      <span className="text-lg font-bold text-detailColor dark:text-white">
        Platform Settings
      </span>
      <div className="flex flex-col">
        <span className="py-1 text-2xs font-bold text-placeholderColor">
          ACCOUNT
        </span>
        <div className="flex flex-col">
          <div className="mt-3 flex flex-row text-xs text-placeholderColor">
            <Checkbox id="check1" text="Email me when someone follows me" />
          </div>
          <div className="mt-3 flex flex-row text-xs text-placeholderColor">
            <Checkbox
              id="check2"
              text="Email me when someone answers on my post"
            />
          </div>
          <div className="mt-3 flex flex-row text-xs text-placeholderColor">
            <Checkbox id="check3" text="Email me when someone mentions me" />
          </div>
        </div>
        <span className="mt-3 py-1 text-2xs font-bold text-placeholderColor">
          APPLICATION
        </span>
        <div className="flex flex-col">
          <div className="mt-3 flex flex-row text-xs text-placeholderColor">
            <Checkbox id="check4" text="New launches and projects" />
          </div>
          <div className="mt-3 flex flex-row text-xs text-placeholderColor">
            <Checkbox id="check5" text="Monthly product updates" />
          </div>
          <div className="mt-3 flex flex-row text-xs text-placeholderColor">
            <Checkbox id="check6" text="Subscribe to newsletter" />
          </div>
        </div>
      </div>
    </div>
  );
};
