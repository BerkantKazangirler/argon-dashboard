import { Link } from "react-router-dom";
import { CloseSvg } from "../icons/close";
import { Button } from "./button";
import { SvgRocket } from "../icons/rocket";
import cn from "classnames";
import { SvgHome } from "../icons/home";
import { SvgTable } from "../icons/table";
import { SvgBilling } from "../icons/billing";
import { SvgPerson } from "../icons/person";
import { SvgDocument } from "../icons/document";

interface hamburgermenuprops {
  setHamburgerMenu: any;
}

export const HamburgerMenu = ({ setHamburgerMenu }: hamburgermenuprops) => {
  return (
    <>
      <div className="flex w-full flex-col">
        <div className="mx-auto flex w-full flex-col">
          <Link to={"/"}>
            <img
              src={"public/logo.png"}
              className="visible mx-auto w-36 py-6 dark:hidden"
            />
            <img
              src={"public/logowhite.png"}
              className="mx-auto hidden w-36 py-6 dark:block"
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
                "mx-auto flex w-fit flex-row justify-center gap-2 py-2 pl-4 pr-7",
                {
                  "rounded-lg dark:bg-darkBottomBg": "/" == location.pathname,
                },
              )}
            >
              <span
                className={cn("p-2", {
                  "rounded-lg bg-detailBg transition-colors":
                    "/" == location.pathname,
                  "rounded-lg dark:bg-darkBottomBg": "/" != location.pathname,
                })}
              >
                <SvgHome
                  className={cn(
                    "/" == location.pathname ? "fill-white" : "fill-detailBg",
                  )}
                />
              </span>
              <Button
                className={cn(
                  "text-xs",
                  "/" == location.pathname
                    ? "font-semibold text-black dark:text-white"
                    : "font-bold text-slate-700 dark:text-white",
                )}
              >
                Dashboard
              </Button>
            </Link>
            <Link
              to={"/table"}
              className={cn(
                "mx-auto flex w-fit flex-row justify-center gap-2 py-2 pl-4 pr-14",
                {
                  "rounded-lg dark:bg-darkBottomBg":
                    "/table" == location.pathname,
                },
              )}
            >
              <span
                className={cn("p-2", {
                  "rounded-lg bg-detailBg transition-colors":
                    "/table" == location.pathname,
                  "rounded-lg dark:bg-darkBottomBg":
                    "/table" != location.pathname,
                })}
              >
                <SvgTable
                  className={cn(
                    "/table" == location.pathname
                      ? "fill-white"
                      : "fill-detailBg",
                  )}
                />
              </span>
              <Button
                className={cn(
                  "text-xs",
                  location.pathname == "/table"
                    ? "font-semibold text-black dark:text-white"
                    : "font-bold text-slate-700 dark:text-white",
                )}
              >
                Tables
              </Button>
            </Link>
            <Link
              to={"/billing"}
              className={cn(
                "mx-auto flex w-fit flex-row justify-center gap-2 py-2 pl-4 pr-14",
                {
                  "rounded-lg dark:bg-darkBottomBg":
                    "/billing" == location.pathname,
                },
              )}
            >
              <span
                className={cn("p-2", {
                  "rounded-lg bg-detailBg transition-colors":
                    "/billing" == location.pathname,
                  "rounded-lg dark:bg-darkBottomBg":
                    "/billing" != location.pathname,
                })}
              >
                <SvgBilling
                  className={cn(
                    "/billing" == location.pathname
                      ? "fill-white"
                      : "fill-detailBg",
                  )}
                />
              </span>
              <Button
                className={cn(
                  "text-xs",
                  "/billing" == location.pathname
                    ? "font-semibold text-black dark:text-white"
                    : "font-bold text-slate-700 dark:text-white",
                )}
              >
                Billing
              </Button>
            </Link>

            <Link
              to={"/profile"}
              className={cn(
                "mx-auto flex w-fit flex-row justify-center gap-2 py-2 pl-4 pr-14",
                {
                  "rounded-lg dark:bg-darkBottomBg":
                    "/profile" == location.pathname,
                },
              )}
            >
              <span
                className={cn("p-2", {
                  "rounded-lg bg-detailBg transition-colors":
                    location.pathname == "/profile",
                })}
              >
                <SvgPerson
                  className={cn(
                    "size-4",
                    "/profile" == location.pathname
                      ? "fill-white"
                      : "fill-detailBg",
                  )}
                />
              </span>
              <Button
                className={cn(
                  "text-xs",
                  "/profile" == location.pathname
                    ? "font-semibold text-black dark:text-white"
                    : "font-bold text-slate-700 dark:text-white",
                )}
              >
                Profile
              </Button>
            </Link>
            <Link
              to={"/auth/sign"}
              className="mx-auto flex flex-row gap-2 py-1 pl-4 pr-14 dark:pl-4 dark:pr-14"
            >
              <span
                className={cn("p-2", {
                  "rounded-lg bg-detailBg transition-colors":
                    location.pathname == "/auth/sign",
                })}
              >
                <SvgDocument
                  className={cn(
                    "/auth/sign" == location.pathname
                      ? "fill-white"
                      : "fill-detailBg",
                  )}
                />
              </span>
              <Button
                className={cn(
                  "text-xs",
                  "/auth/sign" == location.pathname
                    ? "font-semibold text-black dark:text-white"
                    : "font-bold text-slate-700 dark:text-white",
                )}
              >
                Sign In
              </Button>
            </Link>
            <Link
              to={"/auth/register"}
              className="mx-auto flex flex-row gap-2 py-1 pl-4 pr-14 dark:pl-4 dark:pr-14"
            >
              <span
                className={cn("p-2", {
                  "rounded-lg bg-detailBg transition-colors":
                    location.pathname == "/auth/register",
                })}
              >
                <SvgRocket
                  className={cn(
                    "/auth/register" == location.pathname
                      ? "fill-white"
                      : "fill-detailBg",
                  )}
                />
              </span>
              <Button
                className={cn(
                  "text-xs",
                  "/auth/register" == location.pathname
                    ? "font-semibold text-black dark:text-white"
                    : "font-bold text-slate-700 dark:text-white",
                )}
              >
                Sign Up
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <CloseSvg
        onClick={() => setHamburgerMenu(false)}
        className="size-5 text-white hover:cursor-pointer"
      />
    </>
  );
};
