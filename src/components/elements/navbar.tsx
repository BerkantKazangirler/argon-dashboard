import { useEffect, useState } from "react";
import { Input } from "./input";
import { useLocation } from "react-router-dom";
import SvgSearch from "../icons/search";
import SvgPerson from "../icons/person";
import SvgSettings from "../icons/settings";
import SvgNotifications from "../icons/notifications";

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
    <div className="flex flex-row mx-2 z-20 justify-between">
      <div className="flex flex-col gap-1">
        <span className="text-xs">
          Pages{" "}
          <b>{location.pathname == "/" ? "Dashboard" : location.pathname}</b>
        </span>
        <span className="text-sm font-semibold">
          {location.pathname == "/" ? "Dashboard" : location.pathname}
        </span>
      </div>
      <div className="flex flex-row gap-2">
        <div className="flex flex-row my-auto items-center h-9 relative">
          <Input
            placeholder="Type Here..."
            className="indent-7 text-xs text-black dark:text-white rounded-lg h-full w-52 dark:bg-darkDetail"
          />
          <SvgSearch className="absolute size-3 mx-2 fill-detailColor dark:fill-white" />
        </div>
        <div className="flex flex-row gap-4">
          <div className="flex flex-row hover:cursor-pointer gap-1 items-center">
            <SvgPerson className="size-3" />
            <span className="font-semibold text-xs">Sign In</span>
          </div>
          <button onClick={() => setDarkMod((t) => !t)}>
            <SvgSettings className="fill-white size-3" />
          </button>
          <button>
            <SvgNotifications className="size-3" />
          </button>
        </div>
      </div>
    </div>
  );
};
