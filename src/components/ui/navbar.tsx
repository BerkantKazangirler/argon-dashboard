import { useEffect, useState } from "react";
import {
  Input,
  SvgPerson,
  SvgSettings,
  SvgNotifications,
  SvgSearch,
  Button,
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

export const NavBar = () => {
  const [darkMod, setDarkMod] = useState(true);

  const location = useLocation();

  useEffect(() => {
    if (darkMod) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMod]);

  return (
    <div className="flex flex-row mx-5 xl:mx-2 z-20 justify-between">
      <div className="flex flex-col gap-1">
        <span className="text-sm font-semibold capitalize my-auto">
          {location.pathname == "/" ? "Dashboard" : location.pathname.slice(1)}
        </span>
      </div>
      <div className="flex flex-row gap-2">
        <div className="hidden lg:flex flex-row my-auto items-center h-9 relative">
          <Input
            placeholder="Type Here..."
            className="indent-7 text-xs text-black dark:text-white rounded-lg h-full w-52 dark:bg-darkDetail"
          />
          <SvgSearch className="absolute size-3 mx-2 fill-detailColor dark:fill-white" />
        </div>
        <div className="flex flex-row gap-4">
          <Link
            to={"auth/sign"}
            className="flex flex-row hover:cursor-pointer gap-1 items-center"
          >
            <SvgPerson className="size-3" />
            <span className="font-semibold text-xs">Sign In</span>
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
                  className="bg-slate-400 py-2 text-sm rounded-lg"
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
                  <div className="flex my-auto flex-col">
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
                  <div className="flex my-auto flex-col">
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
                  <div className="flex my-auto flex-col">
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
    </div>
  );
};
