import { Outlet } from "react-router-dom";
import { SignInBg, SignNav } from "@/components";

export const LoginLayout = () => {
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
