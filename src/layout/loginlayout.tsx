import { Outlet } from "react-router-dom";
import { SignInBg, SignNav } from "@/components";

export const LoginLayout = () => {
  return (
    <div className="flex h-full w-full flex-row font-Poppins">
      <SignInBg />
      <div className="flex w-full flex-col text-white">
        <SignNav />
        <Outlet />
      </div>
    </div>
  );
};
