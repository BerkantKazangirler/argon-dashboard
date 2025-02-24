import { Button, AppleSvg, Checkbox, Input } from "@/components";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

export type FormValues = {
  name?: string;
  email?: string;
  password?: string;
};

const Schema = z.object({
  name: z.string({
    required_error: "Boş Bırakma",
  }),
  email: z
    .string({
      required_error: "Mail gir",
    })
    .email({
      message: "Mail gir",
    }),
  password: z
    .string({
      required_error: "Şifre gir",
    })
    .min(3, { message: "Şifren 3 rakamdan fazla olsun" })
    .max(20, { message: "Şifren 20 rakamdan az olsun" }),
});

export const Register = () => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(Schema),
  });
  const onSubmit = handleSubmit((data) => toastify(JSON.stringify(data)));

  function toastify(text: string) {
    toast(text);
  }

  return (
    <>
      <div className="my-auto flex h-full w-full flex-col justify-center gap-14">
        <div className="flex flex-col gap-5">
          <span className="mx-auto w-fit text-center text-3xl font-bold text-white">
            Welcome!
          </span>
          <span className="mx-auto w-[330px] text-center text-sm text-white">
            Use these awesome forms to login or create new account in your
            project for free.
          </span>
        </div>
        <div className="mx-auto flex w-100 flex-row items-center justify-center rounded-2.5xl bg-white py-2 drop-shadow-[0_5px_14px_rgba(0,0,0,0.5)] dark:bg-darkDetail">
          <div className="flex flex-col gap-5 py-5">
            <span className="text-center text-lg font-bold text-detailColor dark:text-white">
              Register with
            </span>
            <div className="mx-auto flex flex-row gap-3">
              <Button
                onClick={() => toastify("facebook")}
                className="rounded-lg border border-inputBorder p-5 dark:border-none dark:bg-darkBottomBg"
              >
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
              <Button
                onClick={() => toastify("apple")}
                className="rounded-lg border border-inputBorder p-5 dark:border-none dark:bg-darkBottomBg"
              >
                <AppleSvg className="size-8 fill-detailColor dark:fill-white" />
              </Button>
              <Button
                onClick={() => toastify("google")}
                className="rounded-lg border border-inputBorder p-6 dark:border-none dark:bg-darkBottomBg"
              >
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

            <div className="flex w-80 flex-col gap-4">
              <span className="text-center text-lg font-bold text-placeholderColor">
                or
              </span>
              <form onSubmit={onSubmit}>
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="name"
                    className="text-sm text-detailColor dark:text-white"
                  >
                    Name
                  </label>
                  <Input
                    name="name"
                    control={control}
                    placeholder="User name"
                    className="w-full rounded-lg border border-inputBorder bg-white py-3 indent-2 text-sm text-black dark:border-none dark:bg-darkBottomBg dark:text-white"
                    id="name"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="mail"
                    className="text-sm text-detailColor dark:text-white"
                  >
                    Email
                  </label>
                  <input
                    name="email"
                    control={control}
                    placeholder="Your email address"
                    className="w-full rounded-lg border border-inputBorder bg-white py-3 indent-2 text-sm text-black dark:border-none dark:bg-darkBottomBg dark:text-white"
                    id="mail"
                    type="email"
                  />
                </div>
                </div>
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="pass"
                    className="text-sm text-detailColor dark:text-white"
                  >
                    Password
                  </label>
                  <Input
                    name="password"
                    control={control}
                    placeholder="Your password"
                    type="password"
                    className="w-full rounded-lg border border-inputBorder bg-white py-3 indent-2 text-sm text-black dark:border-none dark:bg-darkBottomBg dark:text-white"
                    id="pass"
                  />
                </div>
                </div>
                <div className="flex flex-col gap-2 pt-3">
                  <div className="flex flex-row gap-3">
                    <Checkbox id="remember" text="Remember me" />
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-lg bg-detailColor py-3 text-2xs font-bold text-white dark:bg-detailBg"
                  >
                    SIGN UP
                  </button>
                </div>
              </form>

              <span className="text-center text-sm text-placeholderColor">
                Already have an account?{" "}
                <Link
                  className="font-bold text-detailColor dark:text-white"
                  to={"/auth/sign"}
                >
                  Sign in
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
      <Toaster />
    </>
  );
};
