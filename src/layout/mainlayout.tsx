import { Outlet } from "react-router-dom";
import { Bg, Sidebar, NavBar } from "@/components";

export const MainLayout = () => {
  return (
    <>
      <Bg />
      <div className="mx-5 pb-5 z-20 pt-5 flex flex-row gap-4 w-full">
        <Sidebar />
        <div className="flex flex-col text-white w-full">
          <NavBar />
          <Outlet />
        </div>
      </div>
    </>
  );
};
