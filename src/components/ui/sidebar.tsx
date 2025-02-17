import { Link, useLocation } from "react-router-dom";
import cn from "classnames";

import {
  Button,
  SvgRocket,
  SvgBilling,
  SvgTable,
  SvgDocument,
  SvgHome,
  SvgPerson,
} from "@/components";

export const Sidebar = () => {
  const location = useLocation();
  return (
    <div className="flex flex-col rounded-3xl bg-white dark:bg-darkDetail drop-shadow-xl z-20 w-64 h-[800px]">
      <Link to={"/"}>
        <img
          src={"public/logo.png"}
          className="w-36 mx-auto py-6 visible dark:hidden"
        />
        <img
          src={"public/logowhite.png"}
          className="w-36 mx-auto py-6 hidden dark:block"
        />
      </Link>
      <svg
        width="234"
        height="1"
        viewBox="0 0 234 1"
        fill="none"
        className="px-7"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0.5 0.5H233.75" stroke="url(#paint0_linear_2614_7733)" />
        <defs>
          <linearGradient
            id="paint0_linear_2614_7733"
            x1="0.5"
            y1="0.5"
            x2="231.5"
            y2="0.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#E0E1E2" stop-opacity="0" />
            <stop offset="0.5" stop-color="#E0E1E2" />
            <stop offset="1" stop-color="#E0E1E2" stop-opacity="0.15625" />
          </linearGradient>
        </defs>
      </svg>

      <div className="flex flex-col gap-4 pt-4">
        <Link
          to={"/"}
          className={cn(
            "flex flex-row gap-2 mx-auto justify-center w-fit pl-4 pr-7 py-2",
            {
              "dark:bg-darkBottomBg rounded-lg": "/" == location.pathname,
            }
          )}
        >
          <span
            className={cn("p-2", {
              "bg-detailBg transition-colors rounded-lg":
                "/" == location.pathname,
              "dark:bg-darkBottomBg rounded-lg": "/" != location.pathname,
            })}
          >
            <SvgHome
              className={cn(
                "/" == location.pathname ? "fill-white" : "fill-detailBg"
              )}
            />
          </span>
          <Button
            className={cn(
              "text-xs",
              "/" == location.pathname
                ? "font-semibold text-black dark:text-white"
                : "text-placeholderColor font-bold dark:text-white"
            )}
          >
            Dashboard
          </Button>
        </Link>
        <Link
          to={"/table"}
          className={cn(
            "flex flex-row gap-2 mx-auto justify-center w-fit pl-4 pr-14 py-2",
            {
              "dark:bg-darkBottomBg rounded-lg": "/table" == location.pathname,
            }
          )}
        >
          <span
            className={cn("p-2", {
              "bg-detailBg transition-colors rounded-lg":
                "/table" == location.pathname,
              "dark:bg-darkBottomBg rounded-lg": "/table" != location.pathname,
            })}
          >
            <SvgTable
              className={cn(
                "/table" == location.pathname ? "fill-white" : "fill-detailBg"
              )}
            />
          </span>
          <Button
            className={cn(
              "text-xs",
              location.pathname == "/table"
                ? "font-semibold text-black dark:text-white"
                : "text-placeholderColor font-bold dark:text-white"
            )}
          >
            Tables
          </Button>
        </Link>
        <Link
          to={"/billing"}
          className={cn(
            "flex flex-row gap-2 mx-auto justify-center w-fit pl-4 pr-14 py-2",
            {
              "dark:bg-darkBottomBg rounded-lg":
                "/billing" == location.pathname,
            }
          )}
        >
          <span
            className={cn("p-2", {
              "bg-detailBg transition-colors rounded-lg":
                "/billing" == location.pathname,
              "dark:bg-darkBottomBg rounded-lg":
                "/billing" != location.pathname,
            })}
          >
            <SvgBilling
              className={cn(
                "/billing" == location.pathname ? "fill-white" : "fill-detailBg"
              )}
            />
          </span>
          <Button
            className={cn(
              "text-xs",
              "/billing" == location.pathname
                ? "font-semibold text-black dark:text-white"
                : "text-placeholderColor font-bold dark:text-white"
            )}
          >
            Billing
          </Button>
        </Link>

        <span className="text-detailColor dark:text-white px-12 py-2 font-bold text-xs">
          ACCOUNT PAGES
        </span>
        <Link
          to={"/profile"}
          className={cn(
            "flex flex-row gap-2 mx-auto justify-center w-fit pl-4 pr-14 py-2",
            {
              "dark:bg-darkBottomBg rounded-lg":
                "/profile" == location.pathname,
            }
          )}
        >
          <span
            className={cn("p-2", {
              "bg-detailBg transition-colors rounded-lg":
                location.pathname == "/profile",
            })}
          >
            <SvgPerson
              className={cn(
                "size-4",
                "/profile" == location.pathname ? "fill-white" : "fill-detailBg"
              )}
            />
          </span>
          <Button
            className={cn(
              "text-xs",
              "/profile" == location.pathname
                ? "font-semibold text-black dark:text-white"
                : "text-placeholderColor font-bold dark:text-white"
            )}
          >
            Profile
          </Button>
        </Link>
        <Link
          to={"/auth/sign"}
          className="flex flex-row gap-2 mx-auto pl-4 pr-14 dark:pl-4 dark:pr-14 py-1"
        >
          <span
            className={cn("p-2", {
              "bg-detailBg transition-colors rounded-lg":
                location.pathname == "/auth/sign",
            })}
          >
            <SvgDocument
              className={cn(
                "/auth/sign" == location.pathname
                  ? "fill-white"
                  : "fill-detailBg"
              )}
            />
          </span>
          <Button
            className={cn(
              "text-xs",
              "/auth/sign" == location.pathname
                ? "font-semibold text-black dark:text-white"
                : "text-placeholderColor font-bold dark:text-white"
            )}
          >
            Sign In
          </Button>
        </Link>
        <Link
          to={"/auth/register"}
          className="flex flex-row gap-2 pl-4 pr-14 mx-auto dark:pl-4 dark:pr-14 py-1"
        >
          <span
            className={cn("p-2", {
              "bg-detailBg transition-colors rounded-lg":
                location.pathname == "/auth/register",
            })}
          >
            <SvgRocket
              className={cn(
                "/auth/register" == location.pathname
                  ? "fill-white"
                  : "fill-detailBg"
              )}
            />
          </span>
          <Button
            className={cn(
              "text-xs",
              "/auth/register" == location.pathname
                ? "font-semibold text-black dark:text-white"
                : "text-placeholderColor font-bold dark:text-white"
            )}
          >
            Sign Up
          </Button>
        </Link>
        <div className="mx-auto flex flex-col w-full gap-4 mb-5 items-center absolute bottom-0">
          <div className="flex flex-col">
            <img
              src={"./public/icon/icon-documentation.png"}
              className="w-40 visible dark:hidden"
            />
            <img
              src={"./public/icon/icon-docdark.png"}
              className="w-40 hidden dark:block"
            />
            <span className="text-detailColor dark:text-white font-bold w-fit mx-auto text-sm">
              Need Help?
            </span>
            <span className="text-tableTr w-fit mx-auto text-xs">
              Please check our docs
            </span>
          </div>
          <Button className="font-bold text-2xs rounded-lg text-white bg-detailBg py-3 w-fit px-8">
            DOCUMENTATION
          </Button>
          <Button className="font-bold text-2xs rounded-lg text-white bg-detailColor py-3 w-fit px-8">
            UPDATE TO PRO
          </Button>
        </div>
      </div>
    </div>
  );
};
