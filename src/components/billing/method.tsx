import { Button, Input, SvgEdit } from "@/components";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export const Method = () => {
  return (
    <div className="bg-white dark:bg-darkDetail drop-shadow-xl xl:w-full w-11/12 p-4 rounded-2.5xl gap-5 flex flex-col">
      <div className="flex flex-row justify-between">
        <span className="font-bold text-sm leading-none my-auto text-detailColor dark:text-white">
          Payment Method
        </span>

        <Dialog>
          <DialogTrigger className="bg-detailColo rounded-lg bg-detailColor dark:bg-detailBg text-2xs w-32 px-2 py-3 font-bold">
            ADD A NEW CARD
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add Card</DialogTitle>
              <DialogDescription>Add new card to the system.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="number" className="text-xs">
                  Card Number
                </label>
                <Input
                  id="number"
                  className="col-span-3 bg-black text-sm indent-2 outline-slate-800"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="validthru" className="text-xs">
                  Valid Thru
                </label>
                <Input
                  id="validthru"
                  className="col-span-3 bg-black text-sm indent-2 outline-slate-800"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="cvv" className="text-xs">
                  CVV
                </label>
                <Input
                  id="validthru"
                  type="password"
                  className="col-span-3 bg-black text-sm indent-2 outline-slate-800"
                />
              </div>
            </div>
            <DialogFooter>
              <Button className="bg-slate-900 px-3 py-1 rounded-lg text-sm">
                Save changes
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <div className="flex flex-row w-full gap-5">
        <div className="border border-inputBorder dark:border-none w-full relative rounded-lg">
          <img
            src={"./public/icon/mastercard.png"}
            className="absolute mt-6 ml-5"
          />

          <SvgEdit className="absolute h-fit -right-[270px] mt-6 fill-detailColor" />
          <Input
            placeholder="7812 2139 0823 XXXX"
            className="indent-14 text-sm leading-6 rounded-lg w-full py-5 pr-10 text-black dark:text-white dark:bg-darkBg"
          />
        </div>
        <div className="border border-inputBorder dark:border-none w-full relative rounded-lg">
          <SvgEdit className="absolute h-fit -right-[270px] mt-6 fill-detailColor" />
          <img src={"./public/icon/visa.png"} className="absolute mt-7 ml-5" />

          <Input
            placeholder="7812 2139 0823 XXXX"
            className="indent-14 text-sm leading-6 rounded-lg w-full py-5 pr-10 text-black dark:text-white dark:bg-darkBg"
          />
        </div>
      </div>
    </div>
  );
};
