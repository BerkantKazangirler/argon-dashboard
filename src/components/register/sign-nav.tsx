import { Link } from "react-router-dom";
import { Button, OverviewSvg, SvgPerson, UserSvg, KeySvg } from "@/components";

export const SignNav = () => {
  return (
    <div className="mx-auto my-8 flex w-full flex-row justify-around">
      <img src={"../public/logowhite.png"} className="my-auto h-fit" />
      <div className="my-auto hidden flex-row gap-5 text-2xs font-bold md:flex">
        <Link to={"/"} className="flex flex-row gap-1">
          <OverviewSvg className="my-auto size-3" />

          <span>DASHBOARD</span>
        </Link>
        <Link to={"/profile"} className="flex flex-row gap-1">
          <SvgPerson className="my-auto size-3" />

          <span>PROFILE</span>
        </Link>
        <Link to={"/auth/sign"} className="flex flex-row gap-1">
          <UserSvg className="my-auto size-3" />

          <span>SIGN UP</span>
        </Link>

        <Link to={"/auth/register"} className="flex flex-row gap-1">
          <KeySvg className="my-auto size-3" />

          <span>SIGN IN</span>
        </Link>
      </div>
      <Button className="rounded-lg bg-white px-7 py-3 text-2xs font-bold text-detailColor dark:bg-darkBg dark:text-white">
        FREE DOWNLOAD
      </Button>
    </div>
  );
};
