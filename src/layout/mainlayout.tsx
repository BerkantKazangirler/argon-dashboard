import { Outlet } from "react-router-dom";
import { Bg, Sidebar, NavBar } from "@/components";

export const MainLayout = () => {
  return (
    <>
      <Bg />
      <div className="z-20 mx-5 flex w-full flex-row gap-4 pb-5 pt-5">
        <Sidebar />
        <div className="flex w-full flex-col text-white">
          <NavBar />
          <Outlet />
        </div>
      </div>
    </>
  );
};
