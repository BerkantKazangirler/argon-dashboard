import { Input, Button, Checkbox } from "@/components";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import { z } from "zod";

const Schema = z.object({
  name: z.string({
    required_error: "Boş Bırakma",
  }),
  password: z
    .string({
      required_error: "Şifre gir",
    })
    .min(3, { message: "Şifren 3 rakamdan fazla olsun" })
    .max(20, { message: "Şifren 20 rakamdan az olsun" }),
});

interface Form {
  name?: string;
  password?: string;
}

export const SignIn = () => {
  const { control, handleSubmit } = useForm<Form>({
    resolver: zodResolver(Schema),
  });

  const onSubmit = handleSubmit((data) => toastify(JSON.stringify(data)));

  function toastify(text: string) {
    toast(text);
  }

  return (
    <>
      <div className="my-auto flex h-full w-full flex-col justify-center">
        <div className="mx-auto flex w-100 items-center justify-center rounded-2.5xl bg-white py-2 drop-shadow-[0_5px_14px_rgba(0,0,0,0.5)] dark:bg-darkDetail">
          <div className="flex flex-col gap-5 py-5">
            <span className="text-center text-lg font-bold text-detailColor dark:text-white">
              Sign In with
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
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  className="fill-detailColor dark:fill-white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M21.6389 8.78461C19.1976 8.78461 18.1659 9.94953 16.4658 9.94953C14.7226 9.94953 13.393 8.79308 11.2775 8.79308C9.20681 8.79308 6.99866 10.0573 5.5964 12.211C3.62741 15.248 3.96163 20.9678 7.15064 25.8407C8.29134 27.585 9.8147 29.5413 11.8127 29.5625H11.8491C13.5856 29.5625 14.1014 28.4254 16.4912 28.4121H16.5275C18.8816 28.4121 19.3539 29.5558 21.0831 29.5558H21.1194C23.1174 29.5346 24.7225 27.367 25.8633 25.6294C26.6843 24.3797 26.9894 23.7524 27.6191 22.3386C23.006 20.5876 22.265 14.0479 26.8272 11.5407C25.4346 9.79695 23.4777 8.78703 21.6328 8.78703L21.6389 8.78461Z" />
                  <path d="M21.1018 2.43903C19.6487 2.53772 17.9534 3.46287 16.9604 4.67078C16.0595 5.76547 15.3184 7.38934 15.609 8.96416H15.7253C17.2728 8.96416 18.8567 8.03234 19.7819 6.83836C20.6731 5.7019 21.3488 4.09135 21.1018 2.43903Z" />
                </svg>
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
                <Input
                  label="Name"
                  control={control}
                  placeholder="User name"
                  className="w-full rounded-lg border border-inputBorder bg-white py-3 indent-2 text-sm text-black dark:border-none dark:bg-darkBottomBg dark:text-white"
                  name="name"
                />
                <Input
                  control={control}
                  label="Password"
                  placeholder="Your password"
                  type="password"
                  className="w-full rounded-lg border border-inputBorder bg-white py-3 indent-2 text-sm text-black dark:border-none dark:bg-darkBottomBg dark:text-white"
                  name="password"
                />
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
                Don't have an account?{" "}
                <Link
                  className="font-bold text-detailColor dark:text-white"
                  to={"/auth/register"}
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
