import { Button } from "../elements/button";
import { Input } from "../elements/input";
import SvgEdit from "../icons/edit";

export const Method = () => {
  return (
    <div className="bg-white dark:bg-darkDetail drop-shadow-xl w-full p-4 rounded-2.5xl gap-5 flex flex-col">
      <div className="flex flex-row justify-between">
        <span className="font-bold text-sm leading-none my-auto text-detailColor dark:text-white">
          Payment Method
        </span>

        <Button className="bg-detailColo rounded-lg bg-detailColor dark:bg-detailBg text-2xs w-32 px-2 py-3 font-bold">
          ADD A NEW CARD
        </Button>
      </div>
      <div className="flex flex-row w-full gap-5">
        <div className="border border-inputBorder dark:border-none w-full relative rounded-lg">
          <img
            src={"./public/icon/mastercard.png"}
            className="absolute mt-6 ml-5"
          />

          <SvgEdit className="absolute right-0 mt-6 fill-detailColor" />
          <Input
            placeholder="7812 2139 0823 XXXX"
            className="indent-14 text-sm leading-6 rounded-lg w-full py-5 pr-10 text-black dark:text-white dark:bg-darkBg"
          />
        </div>
        <div className="border border-inputBorder dark:border-none w-full relative rounded-lg">
          <img src={"./public/icon/visa.png"} className="absolute mt-7 ml-5" />

          <SvgEdit className="absolute right-0 mt-6 fill-detailColor" />
          <Input
            placeholder="7812 2139 0823 XXXX"
            className="indent-14 text-sm leading-6 rounded-lg w-full py-5 pr-10 text-black dark:text-white dark:bg-darkBg"
          />
        </div>
      </div>
    </div>
  );
};
