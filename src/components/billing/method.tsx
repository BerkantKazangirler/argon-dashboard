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
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const Schema = z.object({
  card: z.string().min(1),
  expiration: z.string().min(1),
  cvv: z.string().min(1),
});

interface Form {
  card?: string;
  expiration?: string;
  cvv?: string;
}

export const Method = () => {
  const { control } = useForm<Form>({
    resolver: zodResolver(Schema),
  });

  return (
    <div className="flex w-full flex-col gap-5 rounded-2.5xl bg-white p-4 drop-shadow-xl xl:w-full dark:bg-darkDetail">
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
            <div className="flex gap-4 py-4">
              <Input
                label="Card Number"
                name="card"
                control={control}
                className="col-span-3 bg-black indent-2 text-sm outline-slate-800"
              />
              <Input
                label="Valid Thru"
                name="expiration"
                control={control}
                className="col-span-3 bg-black indent-2 text-sm outline-slate-800"
              />
              <Input
                label="CVV"
                name="cvv"
                control={control}
                type="password"
                className="col-span-3 bg-black indent-2 text-sm outline-slate-800"
              />
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
        <div className="flex w-full items-center justify-between rounded-lg border border-inputBorder px-4 py-6 dark:border-none dark:bg-darkBg">
          <div className="flex gap-2">
            <img
              src={"./public/icon/mastercard.png"}
              className="my-auto h-fit"
            />
            <p className="w-full text-sm text-black dark:text-white">
              7812 2139 0823 XXXX
            </p>
          </div>
          <SvgEdit className="my-auto size-5 items-center fill-detailColor" />
        </div>
        <div className="flex w-full items-center justify-between rounded-lg border border-inputBorder px-4 py-6 dark:border-none dark:bg-darkBg">
          <div className="flex gap-2">
            <img src={"./public/icon/visa.png"} className="my-auto h-fit" />
            <p className="w-full text-sm text-black dark:text-white">
              7812 2139 0823 XXXX
            </p>
          </div>
          <SvgEdit className="my-auto size-5 items-center fill-detailColor" />
        </div>
      </div>
    </div>
  );
};
