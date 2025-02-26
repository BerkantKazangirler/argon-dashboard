import { useEffect, useState } from "react";
import {
  Input,
  SvgPerson,
  SvgSettings,
  SvgNotifications,
  SvgSearch,
  Button,
  HamburgerLinesSvg,
  HamburgerMenu,
} from "@/components";
import { Link, useLocation } from "react-router-dom";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import cn from "classnames";

export const NavBar = () => {
  const [darkMod, setDarkMod] = useState(true);
  const [hamburgermenu, setHamburgerMenu] = useState(false);

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

  const { control } = useForm<Form>({
    resolver: zodResolver(Schema),
  });

  const location = useLocation();

  useEffect(() => {
    if (darkMod) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMod]);

  return (
    <div className="z-20 mx-5 flex flex-row justify-between xl:mx-2">
      <div className="flex flex-col gap-1">
        <span className="my-auto text-sm font-semibold capitalize">
          {location.pathname == "/" ? "Dashboard" : location.pathname.slice(1)}
        </span>
      </div>
      <div className="flex flex-row gap-2">
        <HamburgerLinesSvg
          onClick={() => setHamburgerMenu(true)}
          className="my-auto flex size-4 lg:hidden"
        />
        <div className="relative my-auto hidden h-9 flex-row items-center lg:flex">
          <Input
            name=""
            control={control}
            placeholder="Type Here..."
            className="h-full w-52 rounded-lg py-2 indent-7 text-xs text-black dark:bg-darkDetail dark:text-white"
          />
          <SvgSearch className="absolute mx-2 size-3 fill-detailColor dark:fill-white" />
        </div>
        <div className="flex flex-row gap-4">
          <Link
            to={"auth/sign"}
            className="hidden flex-row items-center gap-1 hover:cursor-pointer lg:flex"
          >
            <SvgPerson className="size-3" />
            <span className="text-xs font-semibold">Sign In</span>
          </Link>
          <Sheet>
            <SheetTrigger>
              <SvgSettings className="size-3 fill-white" />
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>Settings</SheetTitle>
                <SheetDescription>
                  Make changes to your settings here.
                </SheetDescription>
              </SheetHeader>

              <div className="flex flex-col py-5">
                <Button
                  className="rounded-lg bg-slate-400 py-2 text-sm"
                  onClick={() => setDarkMod((t) => !t)}
                >
                  Toggle {darkMod ? "Dark" : "Light"}
                </Button>
              </div>
            </SheetContent>
          </Sheet>

          <DropdownMenu>
            <DropdownMenuTrigger>
              <SvgNotifications className="size-3" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <div className="flex flex-row gap-2">
                  <img
                    src={"./public/ornek.jpeg"}
                    className="size-12 rounded-xl"
                  />
                  <div className="my-auto flex flex-col">
                    <span className="text-sm">
                      <b>New Message</b> from Alicia
                    </span>
                    <p className="text-xs text-[#728096]">13 minutes ago</p>
                  </div>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <div className="flex flex-row gap-2">
                  <img
                    src={"./public/ornek.jpeg"}
                    className="size-12 rounded-xl"
                  />
                  <div className="my-auto flex flex-col">
                    <span className="text-sm">
                      <b>New Message</b> from Alicia
                    </span>
                    <p className="text-xs text-[#728096]">13 minutes ago</p>
                  </div>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <div className="flex flex-row gap-2">
                  <img
                    src={"./public/ornek.jpeg"}
                    className="size-12 rounded-xl"
                  />
                  <div className="my-auto flex flex-col">
                    <span className="text-sm">
                      <b>New Message</b> from Alicia
                    </span>
                    <p className="text-xs text-[#728096]">13 minutes ago</p>
                  </div>
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div
        className={cn(
          "fixed -mx-10 -mt-5 flex h-full w-full flex-row justify-between bg-slate-200 bg-opacity-50 p-4 backdrop-blur-md transition-all hover:cursor-pointer dark:bg-slate-900",
          {
            "-z-50 opacity-0": !hamburgermenu,
            "z-50 opacity-100": hamburgermenu,
          },
        )}
      >
        <HamburgerMenu setHamburgerMenu={setHamburgerMenu} />
      </div>
    </div>
  );
};
