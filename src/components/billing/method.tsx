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
    <div className="flex w-11/12 flex-col gap-5 rounded-2.5xl bg-white p-4 drop-shadow-xl xl:w-full dark:bg-darkDetail">
      <div className="flex flex-row justify-between">
        <span className="my-auto text-sm font-bold leading-none text-detailColor dark:text-white">
          Payment Method
        </span>

        <Dialog>
          <DialogTrigger className="bg-detailColo w-32 rounded-lg bg-detailColor px-2 py-3 text-2xs font-bold dark:bg-detailBg">
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
                  className="col-span-3 bg-black indent-2 text-sm outline-slate-800"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="validthru" className="text-xs">
                  Valid Thru
                </label>
                <Input
                  id="validthru"
                  className="col-span-3 bg-black indent-2 text-sm outline-slate-800"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="cvv" className="text-xs">
                  CVV
                </label>
                <Input
                  id="validthru"
                  type="password"
                  className="col-span-3 bg-black indent-2 text-sm outline-slate-800"
                />
              </div>
            </div>
            <DialogFooter>
              <Button className="rounded-lg bg-slate-900 px-3 py-1 text-sm">
                Save changes
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <div className="flex w-full flex-row gap-5">
        <div className="flex w-full rounded-lg border border-inputBorder dark:border-none dark:bg-darkBg">
          <img src={"./public/icon/mastercard.png"} className="h-5 w-5" />

          <SvgEdit className="fill-detailColor" />
          <p className="w-full text-sm text-black dark:text-white">
            7812 2139 0823 XXXX
          </p>
        </div>
        <div className="relative w-full rounded-lg border border-inputBorder dark:border-none">
          <SvgEdit className="absolute -right-[270px] mt-6 h-fit fill-detailColor" />
          <img src={"./public/icon/visa.png"} className="absolute ml-5 mt-7" />

          <Input
            placeholder="7812 2139 0823 XXXX"
            className="w-full rounded-lg py-5 pr-10 indent-14 text-sm leading-6 text-black dark:bg-darkBg dark:text-white"
          />
        </div>
      </div>
    </div>
  );
};
