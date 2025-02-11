import { Button } from "../components/elements/button";
import { Input } from "../components/elements/input";
import AppleSvg from "../components/icons/apple";

export const Register = () => {
  return (
    <>
      <div className="flex gap-14 flex-col my-auto justify-center h-full w-full">
        <div className="flex flex-col gap-5">
          <span className="w-fit text-center mx-auto text-white text-3xl font-bold">
            Welcome!
          </span>
          <span className="text-sm text-white mx-auto text-center w-[330px]">
            Use these awesome forms to login or create new account in your
            project for free.
          </span>
        </div>
        <div className="flex py-2 w-100 mx-auto flex-row items-center justify-center bg-white dark:bg-darkDetail rounded-2.5xl drop-shadow-[0_5px_14px_rgba(0,0,0,0.5)]">
          <div className="flex flex-col gap-5 py-5">
            <span className="text-detailColor dark:text-white text-center font-bold text-lg">
              Register with
            </span>
            <div className="flex flex-row gap-3 mx-auto">
              <Button className="rounded-lg border border-inputBorder dark:bg-darkBottomBg dark:border-none p-5">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  className="fill-detailColor dark:fill-white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_2611_5001)">
                    <path d="M28.9173 16C28.9173 8.86998 23.1307 3.08331 16.0007 3.08331C8.87065 3.08331 3.08398 8.86998 3.08398 16C3.08398 22.2516 7.52732 27.4571 13.4173 28.6583V19.875H10.834V16H13.4173V12.7708C13.4173 10.2779 15.4452 8.24998 17.9382 8.24998H21.1673V12.125H18.584C17.8736 12.125 17.2923 12.7062 17.2923 13.4166V16H21.1673V19.875H17.2923V28.8521C23.8152 28.2062 28.9173 22.7037 28.9173 16Z" />
                  </g>
                  <defs>
                    <clipPath id="clip0_2611_5001">
                      <rect
                        width="31"
                        height="31"
                        fill="white"
                        transform="translate(0.500488 0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </Button>
              <Button className="rounded-lg border border-inputBorder dark:bg-darkBottomBg dark:border-none p-5">
                <AppleSvg className="fill-detailColor dark:fill-white size-8" />
              </Button>
              <Button className="rounded-lg border border-inputBorder dark:bg-darkBottomBg dark:border-none p-5">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  className="fill-detailColor dark:fill-white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M21.1799 9.38175L21.0739 8.93222H11.3033V13.0675H17.1411C16.535 15.9457 13.7225 17.4607 11.4252 17.4607C9.75361 17.4607 7.99158 16.7575 6.82533 15.6274C6.21002 15.0216 5.72023 14.3004 5.38401 13.505C5.0478 12.7097 4.87175 11.8558 4.86596 10.9924C4.86596 9.2505 5.64877 7.50816 6.78783 6.36206C7.92689 5.21597 9.6472 4.57472 11.3577 4.57472C13.3166 4.57472 14.7205 5.61488 15.2455 6.08925L18.1841 3.16613C17.322 2.40863 14.9539 0.499878 11.263 0.499878C8.41533 0.499878 5.68486 1.59066 3.68892 3.58003C1.71924 5.53894 0.699707 8.37159 0.699707 10.9999C0.699707 13.6282 1.66439 16.3192 3.57314 18.2936C5.61267 20.3992 8.50111 21.4999 11.4753 21.4999C14.1814 21.4999 16.7464 20.4396 18.5745 18.5158C20.3717 16.6221 21.3013 14.0017 21.3013 11.2549C21.3013 10.0985 21.185 9.41175 21.1799 9.38175Z" />
                </svg>
              </Button>
            </div>

            <div className="flex flex-col w-80 gap-4">
              <span className="font-bold text-lg text-center text-placeholderColor">
                or
              </span>
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="name"
                  className="text-detailColor dark:text-white text-sm"
                >
                  Name
                </label>
                <Input
                  placeholder="Your full name"
                  className="rounded-lg indent-2 w-full text-sm border py-3 border-inputBorder bg-white dark:bg-darkBottomBg dark:border-none text-black"
                  id="name"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="mail"
                  className="text-detailColor dark:text-white text-sm"
                >
                  Email
                </label>
                <Input
                  placeholder="Your email address"
                  className="rounded-lg indent-2 w-full text-sm border py-3 border-inputBorder bg-white dark:bg-darkBottomBg dark:border-none text-black"
                  id="mail"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="pass"
                  className="text-detailColor dark:text-white text-sm"
                >
                  Password
                </label>
                <Input
                  placeholder="Your email address"
                  type="password"
                  className="rounded-lg indent-2 w-full text-sm border py-3 border-inputBorder bg-white dark:bg-darkBottomBg dark:border-none text-black"
                  id="pass"
                />
              </div>
              <div className="flex flex-row gap-3">
                <label
                  className="inline-flex items-center me-5 cursor-pointer"
                  htmlFor="remember"
                >
                  <input
                    type="checkbox"
                    id="remember"
                    className="sr-only peer"
                  />
                  <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-detailBg peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-detailBg"></div>
                  <span className="text-xs ms-3 text-detailColor dark:text-white">
                    Remember me
                  </span>
                </label>
              </div>
              <Button className="rounded-lg bg-detailColor dark:bg-detailBg font-bold text-2xs text-white w-full py-3">
                SIGN UP
              </Button>
              <span className="text-sm text-center text-placeholderColor">
                Already have an account?{" "}
                <b className="text-detailColor dark:text-white">Sign in</b>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
