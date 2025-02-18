import { Link } from "react-router-dom";
import { Button, OverviewSvg, SvgPerson, UserSvg, KeySvg } from "@/components";

export const SignNav = () => {
  return (
    <div className="flex flex-row mx-auto my-8 justify-around w-full">
      <img src={"../public/logowhite.png"} className="h-fit my-auto" />
      <div className="md:flex hidden flex-row font-bold text-2xs gap-5 my-auto">
        <Link to={"/"} className="flex flex-row gap-1">
          <OverviewSvg className="size-3 my-auto" />

          <span>DASHBOARD</span>
        </Link>
        <Link to={"/profile"} className="flex flex-row gap-1">
          <SvgPerson className="size-3 my-auto" />

          <span>PROFILE</span>
        </Link>
        <Link to={"/auth/sign"} className="flex flex-row gap-1">
          <UserSvg className="size-3 my-auto" />

          <span>SIGN UP</span>
        </Link>

        <Link to={"/auth/register"} className="flex flex-row gap-1">
          <KeySvg className="size-3 my-auto" />

          <span>SIGN IN</span>
        </Link>
      </div>
      <Button className="text-detailColor dark:text-white font-bold text-2xs rounded-lg bg-white dark:bg-darkBg px-7 py-3">
        FREE DOWNLOAD
      </Button>
    </div>
  );
};
