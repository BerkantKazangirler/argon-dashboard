import { Outlet } from "react-router-dom";
import { SignInBg } from "./sign-bg";
import { SignNav } from "./sign-nav";

export const SignLayout = () => {
  return (
    <div className="flex flex-row w-full h-full font-Poppins">
      <SignInBg />
      <div className="flex flex-col text-white w-full">
        <SignNav />
        <Outlet />
      </div>
    </div>
  );
};
